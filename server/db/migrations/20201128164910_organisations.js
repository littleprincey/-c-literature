
exports.up = (knex, Promise) => {
  return knex.schema.createTable('organisations', (table) => {
    table.increments('id').primary()
    table.integer('organ_id')
    table.string('name')
    table.string('url')
    table.string('description', 50000)
    table.string('img')
    table.string('tag_id', 5000)
    table.string('forecast_id', 5000)

  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('organisations')
}