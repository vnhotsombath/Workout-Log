const User = require('../models/user');


module.exports = {
    index,
    new: newUser,
    create
}

function index(req,res){
     User.find({}, function (err, allOfTheUsersInTheDatabase){
         console.log(allOfTheUsersInTheDatabase, '<--All the users');
         if (err) {
             res.send('You have an error, check the terminal');
         }
         res.render('users/new.ejs', {
             users: allOfTheUsersInTheDatabase,
        });
     });
 }

// async function index(req, res) {
//     try {
//         const userDoc = away. User.find({})
//         res.render('user/new.ejs', {
//             users: userDoc
//         });
//     } catch(err){
//         res.send(err)
//     };
// }

function newUser(req, res){
    res.render('users/new.ejs')
}

function create(req, res){
    //log out what the function needs
    console.log(req.body)
    
    res.send('Response from the create function')
}