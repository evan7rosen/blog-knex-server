const knex = require("../db/knex");

exports.getAllPosts = function(req, res) {
  knex("posts").then(posts => res.json(posts));
};

exports.getOnePost = function(req, res) {
  knex("posts")
    .where("id", req.params.id)
    .then(posts => res.json(posts));
};

exports.addOnePost = function(req, res) {
  knex("posts")
    .insert(req.body)
    .returning("*")
    .then(newPost => res.json(newPost));
};

exports.updateOnePost = function(req, res) {
  knex("posts")
    .update({
      ...req.body,
      updated_at: new Date()
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedPost => res.json(updatedPost));
};

exports.removeOnePost = function(req, res) {
  knex("posts")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newPost => res.json(newPost));
};
