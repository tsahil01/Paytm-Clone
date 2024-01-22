const express = require('express');
const UserRoute = require('./user');
const accountRoute = require('./account');

const router = express.Router();

// Tesing Routes ==>
router.get("/", (req, res)=>{
    res.json("On /api/v1")
})

router.use('/user', UserRoute)
router.use('/account', accountRoute)

module.exports = router