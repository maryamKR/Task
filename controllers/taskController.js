const db = require("../db");

// CREATE TASK
exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const [result] = await db.query(
      "INSERT INTO tasks (title, description) VALUES (?, ?)",
      [title, description]
    );

    res.status(201).json({
      message: "Task created",
      id: result.insertId,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ALL TASKS
exports.getAllTasks = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM tasks");
    res.json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET TASK BY ID
exports.getTaskById = async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await db.query(
      "SELECT * FROM tasks WHERE id = ?",
      [id]
    );

    res.json(rows[0]);
  } catch (err) {
    res.status(500).json(err);
  }
};

// UPDATE TASK
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;

    await db.query(
      "UPDATE tasks SET title=?, description=?, status=? WHERE id=?",
      [title, description, status, id]
    );

    res.json({ message: "Task updated" });
  } catch (err) {
    res.status(500).json(err);
  }
};

// DELETE TASK
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    await db.query("DELETE FROM tasks WHERE id=?", [id]);

    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};