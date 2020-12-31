\
const { generateHash } = require('authenticare/server')

exports.seed = (knex) => {
  return knex('users').del()
    .then(() => Promise.all([
      generateHash('Iamthegay007')
    ]))
    .then(([orlandoHash]) =>
      knex('users').insert([
        {
          id: 1, 
          user_id: 1,
          name: 'orlando', 
          username: 'oslo', 
          hash: orlandoHash, 
          email: 'orlando.thebright@gmail.com'
        }
       ])
    )
}
