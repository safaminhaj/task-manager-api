const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://safaminhaj:safa3008@nodeexpressprojects.cm2byqv.mongodb.net/task-manager?retryWrites=true&w=majority&appName=NodeExpressProjects";

const connectDB = (url) => {
  return mongoose.connect(connectionString);
};

module.exports = connectDB;
