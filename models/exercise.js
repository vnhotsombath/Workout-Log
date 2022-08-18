const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema ({
    exerciseName: {type: String},
    set: {type: String},
    rep: {type: String},
    weight: {type: String},
    routineId: { type: mongoose.Schema.Types.ObjectId, ref: 'Routine', required: true}
}, {
    timestamps: true
});

module.exports = mongoose.model('Exercise', ExerciseSchema)