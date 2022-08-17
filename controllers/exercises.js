const Exercise = require('../models/excerise');
// const Routine = require('../models/routine');

module.exports = {
    new: newExercise
}

function newExercise(req,res){
    Exercise.find({}, function (err, exercises){
        res.render('exercises/new');
    });
}