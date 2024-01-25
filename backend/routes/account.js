const express = require('express')
const authMiddlewar = require('../middleware')
const { User, Account } = require('../db')
const mongoose = require('mongoose')

const accountRoute = express.Router()

accountRoute.get('/balance',authMiddlewar, async(req, res)=>{
    try{

        const user = await User.findOne({
            username: req.username
        })
        const userId = user._id
        
        const account = await Account.findOne({
            userId: userId
        })
        const balance = account.balance;
        
        res.json({
            balance: balance,
            firstname: user.firstname
        })
    } catch(err){
        res.status(411).json({
        msg:"Some error occured while getting balance",
        err: err
        })
    }
});

accountRoute.post('/transfer', authMiddlewar, async (req, res)=>{
    const session = await mongoose.startSession();

    session.startTransaction();
    const reciversUserId = req.body.to;
    const amount = req.body.amount;

    const user = await User.findOne({
        username: req.username
    }).session(session)
    
    const userId = user._id
    
    const senderAccount = await Account.findOne({
        userId: userId
    }).session(session);
    const senderBalance = senderAccount.balance;

    if(senderBalance<amount){
        await session.abortTransaction();
        res.status(400).json({
            msg: "Insufficient balance"
        })
        return;
    }
    
    const toAccount = await Account.findOne({
        userId: reciversUserId
    }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            msg: "Invalid account"
        })
    }

    
    await Account.findOneAndUpdate({
        userId: userId
    }, { $inc: { balance: -amount } 
    }).session(session);
    
    await Account.findOneAndUpdate({
        userId: reciversUserId
    }, { $inc: { balance: +amount } }
    ).session(session);


    await session.commitTransaction();
    res.json({
        msg: "Transfer successful"
    })

    
})


module.exports = accountRoute