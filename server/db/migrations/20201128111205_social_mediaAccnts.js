
exports.up = (knex, Promise) => {
  return knex.schema.createTable('social_mediaAccnts', (table) => {
    table.increments('id').primary()
    table.integer('acc_id')
    table.string('platform')
    table.string('author')
    table.string('username')
    table.string('description')
    table.string('url')
    table.array('tag_id')
    table.array('forecast_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('social_mediaAccnts')
}