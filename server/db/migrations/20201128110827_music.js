
exports.up = (knex, Promise) => {
  return knex.schema.createTable('music', (table) => {
    table.increments('id').primary()
    table.integer('music_id')
    table.string('name')
    table.string('type')
    table.string('country')
    table.string('description', 50000)
    table.string('img')
    table.string('tag_id', 5000)
    table.string('forecast_id', 5000)
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('music')
}