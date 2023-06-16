const express = require("express");
const logger = require("morgan");
const app = express();

const routes = require("./routes/index");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); //I authorize to receive requests from this domain http://localhost/5173
  res.header("Access-Control-Allow-Credentials", true); //I authorize to receive requests that include the header with credentials
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); //I authorize to recive requests with these headers
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE"); //i authorize requests: GET POST PUT DELETE OPTIONS
  next();
});

app.use(express.json());
app.use(logger("dev"));

//Middleware for forms-data
app.use(express.urlencoded({ extended: false }))

app.use("/", routes);

module.exports = app;
