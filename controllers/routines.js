const Routine = require('../models/routine');


module.exports = {
    index,
    new: newRoutine,
    create,
    show
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

function index(req,res){
    Routine.find({}, function(err, routineDocument){
        if (err) {
            res.send('you have an error trying to find the routine, check the terminal');
        }
        res.render('routines/index', {
            title: 'Your Routines',
            routines: routineDocument,
        });
    });
}

function create(req, res){
   Routine.create(req.body, function (err, routineDoc){
   // if(err){
    //    console.log(err, '<--err in the routines create controller');
    //    return res.render('routines/new')
   // }
    // console.log(routineDoc, '<--routine created in db');
     res.redirect('/routines');
   })
   
    // Routine.create(req.body, function(err, routineDocument){
    //     if(err) {
    //         console.log(err, '<--err in the routines create controller');
    //         return res.render('routines/new.ejs')
    //     }
    // })
    // console.log(routineDocument, '<--routine created in the database')
    // res.redirect(`/routines/${routineDocument._id}`);
    // //res.send('Response from the create function for routines')
}

function newRoutine(req, res){
    const newRoutine = new Routine();
    const defaultDate = newRoutine.dateCreated;
    const offset = defaultDate.getTimezoneOffset() * 60000;
    // this takes the default date, subtracts the offset and converts to ISO string
    // set value = 'localDate', and use slice(0,16) to get proper format
    const localDate = new Date(defaultDate - offset).toISOString();
    //render the date
    res.render('routines/new', { localDate });
};

function show(req, res){
    const newRoutine = new Routine();
    const defaultDate = newRoutine.dateCreated;
    const offset = defaultDate.getTimezoneOffset() * 60000;
    const localDate = new Date(defaultDate - offset).toISOString();
    res.render('routines/show', {
        title: 'Routines',
        localDate,
        routine
    });
    }