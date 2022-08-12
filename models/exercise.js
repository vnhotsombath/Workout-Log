const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema ({
    name: {type: String},
    description: {type: String},
    sets: {type: Number},
    reps: {type: Number},
    weight: {type: Number},
    routineId: {type: mongoose.Schema.Types.ObjectId, ref: 'Routine'},
}, {
    timestamps: true
});

module.exports = mongoose.model('Exercise', ExerciseSchema);