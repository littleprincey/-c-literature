
exports.up = (knex, Promise) => {
  return knex.schema.createTable('articles', (table) => {
    table.increments('id').primary()
    table.integer('article_id')
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
  return knex.schema.dropTable('articles')
}