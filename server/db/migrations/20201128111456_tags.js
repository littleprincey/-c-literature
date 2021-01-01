
exports.up = (knex, Promise) => {
  return knex.schema.createTable('tags', (table) => {
    table.increments('id').primary()
    table.integer('tag_id')
    table.string('tag')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('tags')
}