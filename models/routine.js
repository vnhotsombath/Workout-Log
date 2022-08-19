const mongoose = require('mongoose');

//one routine has many exercises, exercise belongs to a routine
const exerciseSchema = new mongoose.Schema ({
    name: {type: String},
    set: {type: String},
    rep: {type: String},
    weight: {type: String},
}, {
    timestamps: true
});

const routineSchema = new mongoose.Schema({
    name: {type: String},
    exercises: {type: String},
    sets: {type: String},
    reps: {type: String},
    weight: {type: String},
    dateCreated: {type: Date, default: function(){
        return new Date(new Date().setFullYear(new Date().getFullYear () +1));
    }},
    completed: {type: Boolean, default: false},
    completedExercise: [exerciseSchema]
}, {
    timestamps: true
});

module.exports= mongoose.model('Routine', routineSchema);

