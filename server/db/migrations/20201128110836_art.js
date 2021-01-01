
exports.up = (knex, Promise) => {
  return knex.schema.createTable('art', (table) => {
    table.increments('id').primary()
    table.integer('art_id')
    table.string('artist')
    table.string('country')
    table.string('description')
    table.string('img')
    table.string('tag_id')
    table.string('forecast_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('art')
}