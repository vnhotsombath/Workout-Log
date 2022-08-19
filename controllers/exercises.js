const routine = require('../models/routine');
const Routine = require('../models/routine');


module.exports = {
    create,
    delete: deleteExercise
}

function create(req, res){
    console.log(req.params.id, '<---params routine id');
    console.log(req.body, '<-- contents of the form');
    // find the routine
    Routine.findById(req.params.id, function(err, routineDocument){
    // add the review (req.body) to the routine exercise array
        //console.log(routineDocument, '<--routineDocument')
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        
        routineDocument.completedExercise.push(req.body);
        routineDocument.save(function(err){
            res.redirect(`/routines/${req.params.id}`)
        });
    });
}

function deleteExercise(req, res){
    Routine.findOne({'routines._id': req.params.id},
    function(err, routine) {
        routine.completedExercise.remove(req.params.id);
        routine.save(function(err){
            res.redirect(`/routines/${routine._id}`);
        })
    }
    );
}

// async function deleteExercise(req, res){
//     try {
//         const routineDocument = await Routine.findByIdAndRemove(req.params.id);
//         res.redirect(`/routines/${routine._id}`);
//     } catch(err){
//         res.send(err)
//     }
// }