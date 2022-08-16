const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoutineSchema = new mongoose.Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    name: {
        type: String,
        required: true},
    description: {type: String},
    exerciseId: {type: Schema.Types.ObjectId, ref: 'Exercise'},
    date: {type: Date, default: Date.now}
}, {
    timestamps: true
});

module.exports= mongoose.model('Routine', RoutineSchema);