const router = require('express').Router();
const db = require('../../models');

router.post('/', (req, res) => {
    db.User.create({})
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;