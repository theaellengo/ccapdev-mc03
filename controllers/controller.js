const db = require('../models/db.js');
const User = require('../models/UserModel.js');

const controller = {

    getFavicon: function (req, res) {
        res.status(204);
    },

    /*
    DONE:   This function is executed when the client sends an HTTP GET
            request to path `/`. This displays `home.hbs` with all contacts
            current stored in the database.
    */
    getIndex: function(req, res) {
        db.findMany(User, {}, null, function(result){
            if (result != null) {
                res.render('home', { contacts: result });
            } else {
                res.render('home');
            }
        });
    },

    /*
    DONE:   This function is executed when the client sends an HTTP GET
            request to path `/getCheckNumber`. This function checks if a
            specific number is stored in the database. If the number is
            stored in the database, it returns an object containing the
            number, otherwise, it returns an empty string.
    */
    getCheckNumber: function(req, res) {
        var number =  req.query.number;

        db.findOne(User, { number : number }, null, function(result){
            res.send(result);
        });
    },

    /*
    DONE:   This function is executed when the client sends an HTTP GET
            request to path `/getAdd`. This function adds the contact sent
            by the client to the database, then appends the new contact to the
            list of contacts in `home.hbs`.
    */
    getAdd: function(req, res) {
        var name = req.query.name;
        var number = req.query.number;

        db.insertOne(User, { name : name, number : number }, function(result){
            res.render('partials/card', { name : name, number : number }, function (err, html) {
                if (!err) res.send(html);
            });
        });
    },

    /*
    DONE:   This function is executed when the client sends an HTTP GET
            request to path `/getDelete`. This function deletes the contact
            from the database, then removes the contact to the list of
            contacts in `home.hbs`.
    */
    getDelete: function (req, res) {
        var number = req.query.number;
        
        db.deleteOne(User, { number : number }, function(result){
            if (result) res.send(result);
        });
    }

}

module.exports = controller;
