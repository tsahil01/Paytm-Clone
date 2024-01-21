const mongoose = require('mongoose');

mongoose.connect("url")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: [3, 'Username must be at least 6']
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})


const User = mongoose.model("User", userSchema)

module.exports = User