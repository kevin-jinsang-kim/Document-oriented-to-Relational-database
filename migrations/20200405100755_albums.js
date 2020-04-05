exports.up = (knex, Promise) => {
    return knex.schema.createTable('albums', (table) => {
        table.increments('id').primary()
        table.string('album')
        table.integer('year')
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('artists')
};
  