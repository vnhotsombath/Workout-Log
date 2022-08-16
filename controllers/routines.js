const exercise = require('../models/exercise');
const Routine = require('../models/routine');
const User = require('../models/user');

module.exports = {
    index,
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

function index(req, res) {
    Routine.fing({}, function(err, routineDocument) {
        console.log(routineDocuments, '<--this is all of the routines');
        res.render('routines/index', {
            title: 'All Routines',
            routines: routineDocument,
        });
    });
};


function newRoutine(req, res){
    const newRoutine = new Routine();
    const dt = newRoutine.date;
    let offset = dt.getTimezoneOffset() * 60000;
    let localDate = new Date(dt-offset).toISOString();
    res.render('routines/new', { localDate});
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