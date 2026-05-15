// In-memory store — replace with DB in production
let saved = [];

const getSaved  = (_req, res) => res.json({ success:true, count:saved.length, data:saved });

const savePlace = (req, res) => {
  try {
    const { id, name, type, emoji } = req.body;
    if (!id || !name) return res.status(400).json({ success:false, message:'id and name required' });
    if (saved.find(p => p.id === id)) return res.status(409).json({ success:false, message:'Already saved' });
    const place = { id, name, type, emoji, savedAt: new Date().toISOString() };
    saved.push(place);
    res.status(201).json({ success:true, data:place });
  } catch(err) { res.status(500).json({ success:false, message:err.message }); }
};

const deletePlace = (req, res) => {
  try {
    const before = saved.length;
    saved = saved.filter(p => p.id !== req.params.id);
    if (saved.length === before) return res.status(404).json({ success:false, message:'Not found' });
    res.json({ success:true, message:'Removed' });
  } catch(err) { res.status(500).json({ success:false, message:err.message }); }
};

module.exports = { getSaved, savePlace, deletePlace };
