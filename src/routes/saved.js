const router = require('express').Router();
const { getSaved, savePlace, deletePlace } = require('../controllers/savedController');
router.get('/',     getSaved);
router.post('/',    savePlace);
router.delete('/:id', deletePlace);
module.exports = router;
