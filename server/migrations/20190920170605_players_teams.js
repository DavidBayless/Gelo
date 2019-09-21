exports.up = function(knex) {
    return knex.schema
      .createTable('players_teams', function (table) {
         table.increments('id');
         table.integer('player_id').unsigned()
         table.foreign('player_id').references('id').inTable('players')
         table.integer('team_id').unsigned()
         table.foreign('team_id').references('id').inTable('teams')
         table.integer('wins').default(0)
         table.integer('losses').default(0)
      })

  };
  
  exports.down = function(knex) {
    return knex.schema
        .dropTable("players_teams")
  };