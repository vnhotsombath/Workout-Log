const Exercise = require('../models/exercise');
// const Routine = require('../models/routine');

module.exports = {
    new: newExercise,
    create,
}

function newExercise(req,res){
    Exercise.find({}, function (err, exercises){
        res.render('exercises/new', {
            title: 'Add Exercise',
            exercises: exercises
        });
    });
};

function create(req,res) {
    Exercise.create(req.body, function (err, exercise) {
        res.redirect('/exercises/new');
    });
}