
exports.up = (knex, Promise) => {
  return knex.schema.createTable('films', (table) => {
    table.increments('id').primary()
    table.integer('film_id')
    table.string('title')
    table.string('director')
    table.string('pub_date')
    table.string('country')
    table.string('description', 50000)
    table.string('img')
    table.string('tag_id', 5000)
    table.string('forecast_id', 5000)
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('films')
}