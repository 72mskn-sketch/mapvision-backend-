// ─── MapVision Express Server ───────────────────────────────────────────────
require('dotenv').config();
const express    = require('express');
const cors       = require('cors');
const markersRt  = require('./src/routes/markers');
const savedRt    = require('./src/routes/saved');
const searchRt   = require('./src/routes/search');

const app  = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ──
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['GET','POST','DELETE','PATCH'],
  allowedHeaders: ['Content-Type','Authorization'],
}));
app.use(express.json());

// ── Health check ──
app.get('/api/health', (_req, res) => res.json({ status: 'ok', ts: new Date().toISOString() }));

// ── Routes ──
app.use('/api/markers',  markersRt);   // GET /api/markers, GET /api/markers/:id
app.use('/api/saved',    savedRt);     // GET / POST / DELETE /api/saved
app.use('/api',          searchRt);    // GET /api/search, GET /api/directions

// ── 404 ──
app.use((_req, res) => res.status(404).json({ success:false, message:'Route not found' }));

// ── Error handler ──
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ success:false, message:'Internal server error' });
});

app.listen(PORT, () => console.log(`🗺  MapVision API  →  http://localhost:${PORT}`));
