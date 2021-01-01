
exports.up = (knex, Promise) => {
  return knex.schema.createTable('content_forecasts', (table) => {
    table.increments('id').primary()
    table.integer('forecast_id')
    table.string('type')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('content_forecasts')
}
