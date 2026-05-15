const { markers } = require('../data/markers');

// GET /api/markers  (optional ?category=food|hotel|park|shop|landmark)
const getAllMarkers = (req, res) => {
  try {
    const { category } = req.query;
    const data = category ? markers.filter(m => m.category === category) : markers;
    res.json({ success:true, count:data.length, data });
  } catch(err) { res.status(500).json({ success:false, message:err.message }); }
};

// GET /api/markers/:id
const getMarkerById = (req, res) => {
  try {
    const m = markers.find(m => m.id === req.params.id);
    if (!m) return res.status(404).json({ success:false, message:'Not found' });
    res.json({ success:true, data:m });
  } catch(err) { res.status(500).json({ success:false, message:err.message }); }
};

module.exports = { getAllMarkers, getMarkerById };
