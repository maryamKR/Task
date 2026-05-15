const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();

const taskRoutes = require("./routes/taskRoutes");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// serve frontend
app.use(express.static(path.join(__dirname, "frontend")));

const BASE_API_URL = process.env.BASE_API_URL || "";
app.get("/config.js", (req, res) => {
  res.type("application/javascript");
  const safeUrl = BASE_API_URL.replace(/'/g, "\\'");
  res.send(`window.__BASE_API_URL__ = '${safeUrl}';`);
});

// routes
app.use("/api/tasks", taskRoutes);

// fallback to frontend for client-side routes
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 
