
exports.up = (knex, Promise) => {
  return knex.schema.createTable('media_types', (table) => {
    table.increments('id').primary()
    table.integer('type_id')
    table.string('type')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('media_types')
}