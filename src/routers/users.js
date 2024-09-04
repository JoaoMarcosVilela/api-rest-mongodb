const router = require('express').Router();
const userConttroler = require('../controllers/userConttroler');

router.route("/users").post((req,res) => {
    userConttroler.create(req,res);
});

router.route("/users").get((req,res) => {
    userConttroler.read(req,res);
});

router.route("/users/:id").delete((req,res) => {
    userConttroler.delete(req,res);
});

module.exports = router;