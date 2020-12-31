
exports.up = (knex, Promise) => {
  return knex.schema.createTable('poetry', (table) => {
    table.increments('id').primary()
    table.integer('poetry_id')
    table.string('title')
    table.string('author')
    table.string('pub_date')
    table.string('description')
    table.string('img')
    table.array('tag_id')
    table.array('forecast_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('poetry')
}