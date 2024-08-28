const router = require('express').Router();
const teste = require('./users');

router.use("/", teste);

module.exports = router;