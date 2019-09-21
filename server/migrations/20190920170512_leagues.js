exports.up = function(knex) {
    return knex.schema
      .createTable('leagues', function (table) {
         table.increments('id');
         table.string('name', 50).notNullable();
         table.string('password', 50).notNullable();
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
        .dropTable("leagues")
  };