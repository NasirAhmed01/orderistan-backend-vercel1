// Vercel serverless entry: every /api/* request is rewritten here (see vercel.json).
let app;
try { app = require("../app").app; }
catch (e) {
  console.error("Startup crash:", e);
  app = (_req, res) => res.status(500).json({ status: "error", stage: "module load", message: String(e.message).slice(0, 300) });
}
module.exports = (req, res) => app(req, res);
