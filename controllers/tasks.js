const Task = require("../models/task");

const getAllTasks = (req, res) => {
  res.send("List of all tasks");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};
const getSingleTask = (req, res) => {
  res.json({ id: req.params.id });
};
const editTask = (req, res) => {
  res.send("Edit Task");
};
const deleteTask = (req, res) => {
  res.send("Delete Task");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  editTask,
  deleteTask,
};
