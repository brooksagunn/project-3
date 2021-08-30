const router = require('express').Router();
const db = require('../../models');

router.post('/', (req, res) => {
    db.User.create(req.body)
        .then(response => {
            res.status(200).json(response);
            console.log('success');
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.post('/login', async (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    db.User.findOne({username: username, password: password}, (err, user) => 
    err 
    ? res.status(500).send()
    : !user 
    ? res.status(404).send()
    : res.status(200).send()
    );
});



module.exports = router;