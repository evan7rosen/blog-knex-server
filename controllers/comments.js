const knex = require("../db/knex");

exports.getAllComments = function(req, res) {
  knex("comments").then(comments => res.json(comments));
};

exports.getOneComment = function(req, res) {
  knex("comments")
    .where("id", req.params.id)
    .then(comments => res.json(comments));
};

exports.addOneComment = function(req, res) {
  knex("comments")
    .insert(req.body)
    .returning("*")
    .then(newComment => res.json(newComment));
};

exports.updateOneComment = function(req, res) {
  knex("comments")
    .update({
      ...req.body,
      updated_at: new Date()
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedComment => res.json(updatedComment));
};

exports.removeOneComment = function(req, res) {
  knex("comments")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newComment => res.json(newComment));
};
