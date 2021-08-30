const Auth = (req, res, next) => !req.session.logged_in ? res.redirect('/login') : next();
// exported
module.exports = Auth;