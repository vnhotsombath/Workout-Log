const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: String,
    avatar: String,
    routines: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Routines'}
    }, {
        timestamps: true
    });

    module.exports = mongoose.model('Profile', profileSchema);