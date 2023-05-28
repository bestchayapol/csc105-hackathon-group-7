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
    origin: ["http://localhost:5173", "http://127.0.0.1:5173","http://localhost:5174"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "very secret string",
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
  database: "group07",
});

db.connect((err) => {
  if (err === null) console.log("Database is Connect");
  else console.error(err);
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    db.query(
      "INSERT INTO User (Email, Password, Username) VALUES (?, ?, ?)",
      [email, username, hash],
      (err, result) => {
        console.log(err);
        console.log(result);
        res.json({ email, username, password });
      }
    );
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  try {
    db.query("SELECT * FROM User WHERE Email=?", [email], (err, result) => {
      if (err) {
        return res.send({ err: err });
      }
      if (result.length > 0) {
        bcrypt.compare(password, result[0].Password, function (error, response) {
          if (response) {
            req.session.user = result;      
            // res.cookie('sessionId', req.session.id, {
            //   maxAge: 900000, // Cookie expiration time in milliseconds
            //   httpOnly: true, // Cookie cannot be accessed via client-side JavaScript
            // });
            return res.send({success : true});
          } else {
            return res.send({ success: false, message: "Wrong username or password combination" });
          }
        });
      } else {
        return res.send({ message: "User doesn't exist" });
      }
    });
  } catch(e) {
    console.log(e)
  }

 
});

app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error logging out:", err);
      res.sendStatus(500); // Return a server error status code
    } else {
      res.clearCookie("userId"); // Clear the userId cookie
      res.sendStatus(200); // Return a success status code
    }
  });
});

app.post("/addPost", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  db.query(
    "INSERT INTO PostCard (title, description) VALUES (?, ?)",
    [title, description],
    (err, result) => {
      console.log(err);
      console.log(result);
      res.json({ title, description });
    }
  );
});

app.get("/getPosts", (req, res) => {
  db.query("SELECT * FROM PostCard", (error, result) => {
    if (error) {
      res.send({ err: error });
    }
    res.send(result);
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.patch("/editPost/:id", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const id = req.params.id;
  console.log(id);
  db.query(
    "UPDATE PostCard SET title=?, description=? WHERE id=?",
    [title, description, id],
    (error, result) => {
      if (error) {
        res.send({ err: error });
      }
      res.send(result);
    }
  );
});

app.delete("/deletePost/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM PostCard WHERE id = ?", id, (err, result) => {
    if (err) {
      console.error("Error deleting Post", err);
      res.sendStatus(500); // Return a server error status code
      return;
    }
  });
});

app.listen(port, () => {
  console.log("Running Server on Port ", port);
});
