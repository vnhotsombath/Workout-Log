const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoutineSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    name: {type: String},
    description: {type: String},
    exercise: {type: String},
    sets: {type: Number, required: true, min:2, max: 900},
    reps: {type: Number, required: true, min:2, max: 900},
    weight: {type: Number, required: true, min:2, max: 900},
    dateCreated: {type: Date, default: function(){
        return new Date(new Date().setFullYear(new Date().getFullYear () +1));
    }}
}, {
    timestamps: true
});

module.exports= mongoose.model('Routine', RoutineSchema);