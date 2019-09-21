exports.up = function(knex) {
    return knex.schema
      .createTable('teams', function (table) {
         table.increments('id');
         table.integer('league_id').unsigned()
         table.foreign('league_id').references('id').inTable('leagues');
         table.string('name', 50).notNullable();
         table.integer('wins').default(0)
         table.integer('losses').default(0)
         table.integer('elo').default(1000)
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
        .dropTable("teams");
  };