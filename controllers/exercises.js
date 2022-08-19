const Routine = require('../models/routine');


module.exports = {
    create
}

function create(req, res){
    console.log(req.params.id, '<---params routine id');
    console.log(req.body, '<-- contents of the form');
    // find the routine
    Routine.findById(req.params.id, function(err, routineDocument){
    // add the review (req.body) to the routine exercise array
        console.log(routineDocument, '<--routineDocument')
        routineDocument.completedExercise.push(req.body);
        routineDocument.save(function(err){
            res.redirect(`/routines/${req.params.id}`)
        });
    });
}