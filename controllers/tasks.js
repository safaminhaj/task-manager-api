const getAllTasks = (req, res) => {
  res.send("List of all tasks");
};

const createTask = (req, res) => {
  res.json(req.body);
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
