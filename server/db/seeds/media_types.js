
exports.seed = function(knex) {
  return knex('media_types').del()
    .then(function () {
      return knex('media_types').insert([
        {
          id: 1, 
          type_id: null, 
          type: ''
        },
        {
          id: 2, 
          type_id: null, 
          type: ''
        },
        {
          id: 3, 
          type_id: null, 
          type: ''
        }
      ]);
    });
};
