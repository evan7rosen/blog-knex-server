const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8000;
const knex = require("./db/knex");
const app = express();

app.get("/users", (req, res) => {
  knex.raw("SELECT * FROM users").then(result => {
    res.json(result.rows);
  });
});
app.get("/users/:id", (req, res) => {
  knex.raw(`SELECT * FROM users WHERE id = ${req.params.id}`).then(result => {
    if (!result.rows.length) {
      res.status(400).json({
        status: 400,
        message: "can't find the user you are looking for"
      });
    } else {
      res.json(result.rows);
    }
  });
});

app.post("/users", function(req, res) {
  knex
    .raw(
      `insert into users(name, email, website) values('${req.body.name}', ${req.body.email}, '${req.body.website}')`
    )
    .then(function() {
      knex.raw(`select * from users`).then(function(users) {
        res.send(users.rows);
      });
    });
});

app.patch("/users/:id", function(req, res) {
  console.log(req.body);
  knex
    .raw(
      `UPDATE users
        SET name = ${req.body.name}, email = ${req.body.email}, website = ${req.body.website}
        WHERE id = ${req.params.id}
       `
    )
    .then(function() {
      knex.raw(`select * from users`).then(function(users) {
        res.send(users.rows);
      });
    });
});

app.use(cors());
app.use(bodyParser.json());
app.listen(port);
