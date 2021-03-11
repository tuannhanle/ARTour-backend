'use strict'
var express = require('express');
var router = express.Router();
const controller = require('../controllers/project');


// router.get('/',controller.getData);
router.post('/',controller.postData);
// router.post('/many',controller.postManyData);
module.exports = router;
  