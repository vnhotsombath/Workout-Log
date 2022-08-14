const exercise = require('../models/exercise');
const Routine = require('../models/routine');
const User = require('../models/user');

module.exports = {
    create,
    new: newRoutine,
}

function create(req, res){
    Routine.findById(req.params.id).then(routine => { //then method returns a promise, it takes up to 2 arguments: callback func for the success and failure cases of the promise
        const { name, reps, sets, weight } = req.body;
        const newExercise = new exercise({routineId: routine, name, reps, sets, weight})
        newExercise.save()
        .then((newRoutine) => {
            res.redirect(`/routine/${req.params.id}/`)
        }) .catch(err => {
            console.log(err)
        })
    })
}

function newRoutine(req,res){
    Routine.find({}, function (err, routines){
        res.render('routines/new', {
            title: 'Add Routine',
            routines: routines
        });
    })
}