const Routine = require('../models/routine');


module.exports = {
    create
}

function create(req, res){
    console.log(req.params.id, '<---params routine id');
    console.log(req.body, '<-- contents of the form');

    res.redirect(`/routines/${req.params.id}`)
}