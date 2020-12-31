
exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
    table.string('name')
    table.string('username')
    table.string('hash')
    table.string('email')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}