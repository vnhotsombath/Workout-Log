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

// function deleteExercise(req, res){
//     Routine.findOne({'exercises._id': req.params.id, 'exercises.user': req.user._id}).then(function(routineDoc){
//         if (!routineDoc) return res.redirect('/routines');
//         routineDoc.exercises.remove(req.params.id);
//         routineDoc.save().then(function (){
//             res.redirect(`/routines/${routineDoc._id}`);
//         }) .catch(function (err){
//             return next(err);
//         });
//     });
// }

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
//         const routineDocument = await RoutinefindOne({
//             'completedExercise._id': req.params.id,
//             'completedExercise._user': req.user._id
//         });

//         if (!routineDocument) return res.redirect('/routines');

//         routineDocument.completedExercise.remove(req.params.id);

//         await routineDocument.save();
//         res.redirect(`/routines/${routineDocument._id}`)

//     } catch (err) {
//         res.send(err)
//     }
// }
