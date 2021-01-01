
exports.up = (knex, Promise) => {
  return knex.schema.createTable('art', (table) => {
    table.increments('id').primary()
    table.integer('art_id')
    table.string('artist')
    table.string('country')
    table.string('description', 50000)
    table.string('img')
    table.string('tag_id', 5000)
    table.string('forecast_id', 5000)
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('art')
}