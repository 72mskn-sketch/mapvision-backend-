const router = require('express').Router();
const { searchPlaces, getDirections } = require('../controllers/searchController');
router.get('/search',     searchPlaces);
router.get('/directions', getDirections);
module.exports = router;
