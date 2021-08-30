const db = require('../models');

module.exports = {
    signUp: function(req, res) {
        const newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        }

        db.User.create(newUser).then((res) => res.json(res));

    }
}