const mongoose = require('mongoose');

 //Create your User Model
 const userSchema = new mongoose.Schema({
     name: String,
     googleId: {
         type: String,
         required: true
     },
     email: String,
     avatar: String
 }, {
     timestamps: true
 });

// const userSchema = new mongoose.Schema({
//     displayName: {type: String, required: true},
//     userName: {type: String, required: true},
//     password: {type: String, required: true},
//     location: {type: String},
//     goal: {type: String},
//     bio: {type: String}

// }, {
//     timestamps: true
// });
      
module.exports = mongoose.model('User', userSchema);