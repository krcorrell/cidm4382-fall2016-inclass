var express = require('express');
var router = express.Router();
//var ctrlMain = require('../controllers/others');
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* GET home page. */
//router.get('/', ctrlMain.about);

/* Locations Pages*/
router.get('/', ctrlLocations.homeist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages*/
router.et('/about', ctrlOthers.about);


module.exports = router;
