const router = require('express').Router();

const {
    signUp,
    login
} = require('../controllers/authController');

router.route("/login").post(signUp);

module.exports = router;
