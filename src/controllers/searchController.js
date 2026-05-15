const { markers } = require('../data/markers');

// GET /api/search?q=...
const searchPlaces = (req, res) => {
  try {
    const q = (req.query.q || '').toLowerCase().trim();
    if (!q) return res.status(400).json({ success:false, message:"Query 'q' required" });
    const results = markers.filter(m =>
      m.name.toLowerCase().includes(q) || m.type.toLowerCase().includes(q) || m.category.includes(q)
    );
    if (!results.length) {
      return res.json({ success:true, count:1, data:[{
        id:'sr-1', lat:23.033+(Math.random()*.05-.025), lng:72.585+(Math.random()*.05-.025),
        name:q, type:'Search Result', emoji:'📍', simulated:true,
      }]});
    }
    res.json({ success:true, count:results.length, data:results });
  } catch(err) { res.status(500).json({ success:false, message:err.message }); }
};

// GET /api/directions?from=...&to=...&mode=drive|walk|bike|transit
const getDirections = (req, res) => {
  try {
    const { from, to, mode='drive' } = req.query;
    if (!from || !to) return res.status(400).json({ success:false, message:"'from' and 'to' required" });
    const speeds = { drive:.8, bike:.3, walk:.1, transit:.5 };
    const dist   = +(Math.random()*18+2).toFixed(1);
    const mins   = Math.round(dist / (speeds[mode]||.8));
    const eta    = new Date(Date.now()+mins*60000).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
    res.json({ success:true, data:{
      from, to, mode,
      distanceKm:dist, durationMins:mins, eta,
      steps:['Head north on main road','Turn right at junction',`Continue ${(dist*.4).toFixed(1)} km`,'Merge left at flyover','Destination on your left'],
    }});
  } catch(err) { res.status(500).json({ success:false, message:err.message }); }
};

module.exports = { searchPlaces, getDirections };
