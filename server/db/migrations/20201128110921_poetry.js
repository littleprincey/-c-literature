
exports.up = (knex, Promise) => {
  return knex.schema.createTable('poetry', (table) => {
    table.increments('id').primary()
    table.integer('poetry_id')
    table.string('title')
    table.string('author')
    table.string('pub_date')
    table.string('description', 50000)
    table.string('img')
    table.string('tag_id', 5000)
    table.string('forecast_id', 5000)
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('poetry')
}