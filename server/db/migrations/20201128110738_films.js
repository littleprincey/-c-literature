
exports.up = (knex, Promise) => {
  return knex.schema.createTable('films', (table) => {
    table.increments('id').primary()
    table.integer('film_id')
    table.string('title')
    table.string('director')
    table.string('pub_date')
    table.string('country')
    table.string('description')
    table.string('img')
    table.array('tag_id')
    table.array('forecast_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('films')
}