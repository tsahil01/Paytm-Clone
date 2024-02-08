const express = require('express');
const router = require('./routes/index');
const cors = require('cors')

require('dotenv').config()
const PORT = 3000;

const app = express();

app.use(express.json())
app.use(cors())
app.use('/api/v1', router)

app.get('/', (req,res)=>{
    res.json({
        msg:"Server is now Running"
    })
})

app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`)
})