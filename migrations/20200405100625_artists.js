exports.up = (knex, Promise) => {
    return knex.schema.createTable('artists', (table) => {
        table.increments('id').primary()
        table.string('artist')
        table.integer('debutYear')
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('artists')
};
  