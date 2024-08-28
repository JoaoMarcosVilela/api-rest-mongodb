const router = require('express').Router();
const userConttroler = require('../controllers/userConttroler');

router.route("/users").post((req,res) => {
    userConttroler.create(req,res);
});

module.exports = router;