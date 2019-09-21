exports.up = function(knex) {
    return knex.schema
      .createTable('players_leagues_stats', function (table) {
         table.increments('id');
         table.integer('player_id').unsigned()
         table.foreign('player_id').references('id').inTable('players');
         table.integer('league_id').unsigned()
         table.foreign('league_id').references('id').inTable('leagues');
         table.integer('wins').default(0)
         table.integer('losses').default(0)
         table.integer('elo').default(0)
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
        .dropTable("players_leagues_stats")
  };