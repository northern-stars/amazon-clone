const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const { connectDB } = require("./helpers/connectDB");
const morgan = require("morgan");

const app = express();
const port = process.env.port || process.env.PORT;

// Connect DB
connectDB();

// Middlewares

app.use(cookieParser());
app.use(morgan("dev"));  // GET / 404 6.489 ms - 139
app.use(express.json()); // it provides to use data send by body
app.use(express.urlencoded({ extended: true }));

// // Production
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

const server = app.listen(port, () => {
  console.log(`I'm listening on ${port}`);
});