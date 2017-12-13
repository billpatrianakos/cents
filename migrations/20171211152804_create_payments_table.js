
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('payments', (table) => {
      table.increments();
      //
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  
};
