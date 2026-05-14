const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const taskRoutes = require("./routes/taskRoutes");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 
