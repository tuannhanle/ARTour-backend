'use strict'
var express = require('express');
var router = express.Router();
const controller = require('../controllers/signin.js');


// router.get('/',controller.getData);
router.post('/',controller.signin);
// router.post('/many',controller.postManyData);
module.exports = router;