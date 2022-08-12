const mongoose = require('mongoose');

// Create your User Model
const userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    location: String,
    goal: String,
    bio: String,
}, {
    timestamps: true
});
      
module.exports = User;