const db = require("../db");

// CREATE TASK
exports.createTask = (req, res) => {
  const { title, description } = req.body;

  const sql = "INSERT INTO tasks (title, description) VALUES (?, ?)";
  db.query(sql, [title, description], (err, result) => {
    if (err) return res.status(500).json(err);

    res.status(201).json({
      message: "Task created",
      id: result.insertId,
    });
  });
};//

// GET ALL TASKS
exports.getAllTasks = (req, res) => {
  db.query("SELECT * FROM tasks", (err, results) => {
    if (err) return res.status(500).json(err);

    res.json(results);
  });
};

// GET ONE TASK
exports.getTaskById = (req, res) => {
  const id = req.params.id;

  db.query("SELECT * FROM tasks WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json(err);

    res.json(results[0]);
  });
};

// UPDATE TASK
exports.updateTask = (req, res) => {
  const id = req.params.id;
  const { title, description, status } = req.body;

  const sql =
    "UPDATE tasks SET title=?, description=?, status=? WHERE id=?";

  db.query(sql, [title, description, status, id], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Task updated" });
  });
};

// DELETE TASK
exports.deleteTask = (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM tasks WHERE id=?", [id], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Task deleted" });
  });
};