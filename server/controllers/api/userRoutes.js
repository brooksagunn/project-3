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
    var email = req.body.email;
    var password = req.body.password;

    const userData = await db.User.findOne({
        email: email
    }, 

        (err, user) => {

            if(err) {
                res.status(500).send();
            }

            if(!user) {
                res.status(404).send('Not Found');
            }
            
            // req.session.user = user;
            res.status(200).send();
        }

    );
});

module.exports = router;