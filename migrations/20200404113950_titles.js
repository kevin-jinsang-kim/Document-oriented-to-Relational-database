exports.up = (knex, Promise) => {
    return knex.schema.createTable('titles', (table) => {
        table.increments('id').primary()
        table.string('title')
        table.string('duration')
        table.integer('artistId').references('artists.id')
        table.integer('albumId').references('albums.id')
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('titles')
};
