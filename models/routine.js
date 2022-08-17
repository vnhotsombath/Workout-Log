const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoutineSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    name: {
        type: String,
        required: true},
    description: {type: String},
    exercise: {type: Schema.Types.ObjectId, ref: 'Exercise'},
    date: {type: Date, default: function(){
        return new Date(new Date().setFullYear(new Date().getFullYear () +1));
    }}
}, {
    timestamps: true
});

module.exports= mongoose.model('Routine', RoutineSchema);