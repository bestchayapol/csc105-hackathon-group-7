const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
const port = 3306;

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

const db = mysql.createConnection({
  user: "group07",
  host: "db.cshack.site",
  password: "210237265",
  port: "3306",
});

app.listen(port, () => {
    console.log("Running Server on Port ", port);
});