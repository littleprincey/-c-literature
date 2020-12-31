
exports.up = (knex, Promise) => {
  return knex.schema.createTable('theses', (table) => {
    table.increments('id').primary()
    table.integer('thesis_id')
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
  return knex.schema.dropTable('theses')
}