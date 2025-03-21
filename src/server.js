require("dotenv").config();
const cors = require("cors");
const express = require("express");
const userRouter = require("./user/routes");
const User = require("./user/model");

const app = express();

const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use(userRouter);

const SyncTables = async () => {
  User.ha;
  User.sync();
};

app.listen(port, () => {
  SyncTables();
  console.log(`Server listen on ${port}`);
});

app.get("/health", (req, res) => {
  res.status(200).json({ message: "API healthy" });
});
