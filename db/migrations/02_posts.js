exports.up = function(knex) {
  return knex.schema.createTable("posts", function(table) {
    table.increments();
    table.string("title").notNullable();
    table.string("body").notNullable();
    table
      .integer("user_id")
      .references("id")
      .inTable("users");
  });
};

exports.down = function(knex, Promise) {};
