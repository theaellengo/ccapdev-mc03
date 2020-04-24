
var mongoose = require('mongoose');

/*
    DONE:   Complete the UserSchema which will contain the name and the
            number of contacts in the database.
*/
var UserSchema = new mongoose.Schema({
    name:   { type: String, required: true },
    number: { type: Number, required: true, unique: true }
});

module.exports = mongoose.model('User', UserSchema);
