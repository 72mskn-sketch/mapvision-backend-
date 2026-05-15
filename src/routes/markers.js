const router = require('express').Router();
const { getAllMarkers, getMarkerById } = require('../controllers/markersController');
router.get('/',    getAllMarkers);
router.get('/:id', getMarkerById);
module.exports = router;
