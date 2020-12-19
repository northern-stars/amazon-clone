const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const { connectDB } = require("./helpers/connectDB");
const morgan = require("morgan");
const path = require("path");

const app = express();
// Middlewares
//Express Body Parser midd.
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev")); // GET / 404 6.489 ms - 139

app.use(express.urlencoded({ extended: true }));
const port = process.env.port || process.env.PORT;

// Route
const router = require("./routes/router");
app.use("/api", router); // respond only "/api" endpoint

// Connect DB
connectDB();

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
