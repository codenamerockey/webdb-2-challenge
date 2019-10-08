exports.up = function(knex) {
  knex.schema.table('cars', table => {
    table.increments();
    table.integer('vin', 17).notNullable();

    table.string('make', 128).notNullable();

    table.string('model', 128).notNollable();
    table.integer('miles', 6);
    table.string('transmission', 128).nullable();

    table.string('title status', 128).nullable();
  });
};

exports.down = function(knex) {};
