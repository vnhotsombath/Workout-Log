const Exercise = require('../models/excerise');
const routine = require('../models/routine');

module.exports = {
    show
}

function show (req, res){
    Routine.findById(req.params.id).then((routine)) => {
        Exercise.find({ routineId: routine})
        .then(exercise => {
            res.render(`exercise/show`, { exercise, routine, user})
        })
        .catch(err) => {
            next(err)
        }
    }
}