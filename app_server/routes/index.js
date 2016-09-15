var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/others');

/* GET home page. */
router.get('/', ctrlMain.about);

module.exports = router;
