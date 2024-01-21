const express = require('express')
const zod = require('zod')
const User = require('../db')
const jwt = require('jsonwebtoken')
const JWT_SECRET = require('../config')

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
            lastname: req.body.lastname
        })
        const username = newUser.username
        const token = jwt.sign({
            username: username
        }, JWT_SECRET)
        res.status(200).json({
            msg: "New User created",
            token:token
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

module.exports = UserRoute