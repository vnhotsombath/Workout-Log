const User = require('../models/user');

module.exports = {
    index
}

function index(req,res){
    User.find({}, function (err, allOfTheUsersInTheDatabase){
        console.log(allOfTheUsersInTheDatabase, '<--All the users');
        if (err) {
            res.send('You have an error, check the terminal');
        }
        res.render('user/index.ejs', {
            users: allOfTheUsersInTheDatabase,
        });
    });
}