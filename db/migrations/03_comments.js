exports.up = function(knex) {
  return knex.schema.createTable("users", function(table) {
    table.increments();
    table.string("body").notNullable();
    table
      .integer("post_id")
      .references("id")
      .inTable("posts");
    table
      .integer("user_id")
      .references("id")
      .inTable("users");
  });
};

exports.down = function(knex, Promise) {};
