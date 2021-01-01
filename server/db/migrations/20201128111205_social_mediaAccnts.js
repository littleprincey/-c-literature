
exports.up = (knex, Promise) => {
  return knex.schema.createTable('social_mediaAccnts', (table) => {
    table.increments('id').primary()
    table.integer('acct_id')
    table.string('platform')
    table.string('author')
    table.string('username')
    table.string('description')
    table.string('url')
    table.string('tag_id')
    table.string('forecast_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('social_mediaAccnts')
}