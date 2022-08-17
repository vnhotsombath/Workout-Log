const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema ({
    name: {type: String},
    set: {type: String},
    rep: {type: String},
    weight: {type: String},
}, {
    timestamps: true
});

module.exports = mongoose.model('Exercise', ExerciseSchema);