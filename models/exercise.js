const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema ({
    nameOfExercise: {type: String},
    set: {type: String},
    rep: {type: String},
    weight: {type: String},
    routineId: { type: mongoose.Schema.Types.ObjectId, ref: 'Routine'}
}, {
    timestamps: true
});

module.exports = mongoose.model('Exercise', ExerciseSchema)