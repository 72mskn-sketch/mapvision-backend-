// ── MapVision Express Backend ──
// Entry point. Mounts all routes and starts the server.
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const markersRoutes = require("./routes/markers");
const savedRoutes = require("./routes/saved");
const searchRoutes = require("./routes/search");

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ──
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

// ── Health Check ──
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ── Routes ──
app.use("/api/markers", markersRoutes);   // Marker CRUD
app.use("/api/saved", savedRoutes);        // Saved places
app.use("/api", searchRoutes);             // Search + Directions

// ── 404 Handler ──
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// ── Global Error Handler ──
app.use((err, req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal server error" });
});

// ── Start Server ──
app.listen(PORT, () => {
  console.log(`🗺  MapVision API running → http://localhost:${PORT}`);
});
