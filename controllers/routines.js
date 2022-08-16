const exercise = require('../models/exercise');
const Routine = require('../models/routine');
const User = require('../models/user');

module.exports = {
    new: newRoutine,
}
   

// function create(req, res){
//     Routine.findById(req.params.id).then(routine => { //then method returns a promise, it takes up to 2 arguments: callback func for the success and failure cases of the promise
//         const { name, reps, sets, weight } = req.body;
//         const newRoutine = new Routine({routineId: routine, name, reps, sets, weight})
//         newRoutine.save()
//         .then((newRoutine) => {
//             res.redirect(`/routines/`)
//         }) .catch(err => {
//             console.log(err)
//         })
//     })
// }

function newRoutine(req, res){
    res.render('routines/new.ejs')
}

// function show(req, res){
//     Routine.findById( {userId: user})
//     .then(routines => {
//         res.render('routine/index', { routines, user});
//     }).catch(err => {
//         console.log(err)
//     })
//         console.log(routineDocument, '<--show page');
            
// }