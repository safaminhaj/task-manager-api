const express = require("express");
const app = express();

const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");

//middleware
app.use(express.json());

app.use("/api/v1/tasks", tasks);

app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

const port = 3000;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();