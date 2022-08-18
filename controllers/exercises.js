const Exercise = require('../models/exercise');
const Routine = require('../models/routine');
// const Routine = require('../models/routine');

module.exports = {
    new: newExercise,
    create,
    addToRoutine
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

function addToRoutine(req,res){
    Routine.findById(req.params.id, function(err, routineDocument){
        routineDocument.routine.push(req.body.exerciseId);
        routineDocument.save(function(err){
            res.redirect(`/routines/${routineDocument._id}`)
        })
    })
}