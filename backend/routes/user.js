const express = require('express')
const zod = require('zod')
const {User} = require('../db')
const {Account} = require('../db')
const jwt = require('jsonwebtoken')
const authMiddlewar = require('../middleware')

require('dotenv').config()
const JWT_SECRET = process.env.JSON_WEB_TOKEN_SECRET

const UserRoute = express.Router();

// Tesing Routes ==>
UserRoute.get("/", (req, res)=>{
    res.json("On /api/v1/user")
})

const userZodVerify = zod.object({
    username: zod.string(),
    password: zod.string().min(3),
    firstname:zod.string(),
    lastname: zod.string()
})

UserRoute.post("/signup", async (req, res)=>{
    const verifyZod = userZodVerify.safeParse(req.body)
    if(!verifyZod.success){
        res.status(404).json({
            msg:"Zod cannot verify the data"
        })
        return;
    }
    const findUser = await User.findOne({
        username: req.body.username
    })
    if(findUser != null){
        res.status(411).json({
            msg: "User already exist"
        })
        return;
    }

    try{
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
        })
        const username = newUser.username
        const token = jwt.sign({
            username: username
        }, JWT_SECRET)
        
        const userId = newUser._id
        const newAccount = await Account.create({
            userId,
            balance: (1 + Math.random() * 10000)
        })
        res.status(200).json({
            msg: "New User created",
            token:token,
            balance: newAccount.balance
        })
    } catch(err){
        res.status(411).json({
            msg:err.message
        })
        return;
    }
    
})

const signinZod = zod.object({
    username: zod.string(),
    password : zod.string().min(3)
})

UserRoute.post("/signin", async (req,res)=>{
    const zodSignin = signinZod.safeParse(req.body)
    if(!zodSignin.success){
        res.status(411).json({
            msg: "Error whie Login (Zod error)"
        })
        return;
    }
    const FindUser =  await User.findOne({
        username: req.body.username,
        password: req.body.password
    })
    if(FindUser != null){
        const username = FindUser.username
        const token = jwt.sign({username: username}, JWT_SECRET)
        res.json({
            msg: "Succesfully logged in",
            token: token
        })
        return;
    }
    res.status(411).json({
        msg: "Error whie Login"
    })
    return;
})


UserRoute.put('/update', authMiddlewar, async (req, res)=>{
    try{
        const updateUser = await User.findOneAndUpdate({
            username: req.username
        }, req.body)
        res.json({
            message: "Updated successfully"
        })
        return;
    } catch(err){
        res.status(411).json({
            msg:"Error while updating information",
            error: err
        })
    }
})

UserRoute.get('/all-users', authMiddlewar, async (req, res)=>{
    const findAll = await User.find();
    const users = []
    try{

        findAll.forEach((e)=>{
            users.push({
                firstname: e.firstname,
                lastname: e.lastname,
                _id: e._id
            })
        })
        res.json({
            users: users
        })
    }catch(err){
        console.log(err)
    }
})

UserRoute.get('/bulk', authMiddlewar, async (req, res)=>{
    const filter = req.query.filter
    const users = []
    try{
        const find =  await User.find({ $or: [{ firstname: filter }, { lastname: filter }, {username: filter}] });
        find.forEach((e)=>{
            users.push({
                firstname: e.firstname,
                lastname: e.lastname,
                _id: e._id
            })
        })
        res.json({
            users: users
        })
        
    } catch(err){
        console.log(err)
    }
    
})
module.exports = UserRoute