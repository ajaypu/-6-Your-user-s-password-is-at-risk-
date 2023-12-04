const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const errRouter = require("./routes/error");
const userRouter = require("./routes/user");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRouter);
app.use(errRouter);

//Databse
const sequelize = require("./util/database");

sequelize
  .sync()
  .then(() => {
    console.log("Database Connected Succesfully");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
