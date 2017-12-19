
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('debts', (table) => {
      table.increments();
      table.string('vendor');
      table.decimal('amount_due');
      table.decimal('balance');
      table.date('due_date');
      table.string('period');
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('debts')
  ]);
};
