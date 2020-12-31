
exports.up = (knex, Promise) => {
  return knex.schema.createTable('organisations', (table) => {
    table.increments('id').primary()
    table.integer('organ_id')
    table.string('name')
    table.string('url')
    table.string('description')
    table.string('img')
    table.array('tag_id')
    table.array('forecast_id')

  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('organisations')
}