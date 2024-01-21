const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sahiltiwaskar2003:vjmpyv14QpVfSQhC@cluster0.9iwfpwi.mongodb.net/")

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