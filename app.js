const express = require("express");
const cors = require('cors');
//connect to DB WITH db.js
const connectDB = require("./config/db.js");
require("dotenv").config();

const usersRoutes = require("./routes/users.js");

const app = express();
const PORT = 3000;
connectDB();
//השרת יכול לפרסר מידע ב jison
app.use(express.json());
app.use(cors({
  //מאשר גישה רק לכתובות שרשמתי פו
  origin: "http://127.0.0.1:5500"
}));
app.get("/", (req, res) => {
  res.send(`Welcome to our user managment app. 🧑‍🦰`);
});

app.use("/api/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`App is running All Port  ${PORT}`);
});
