const express = require('express');
const router = require('./routes/index');
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = 3000;

const app = express();

app.use(express.json())
app.use(cors())
app.use('/api/v1', router)

app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`)
})