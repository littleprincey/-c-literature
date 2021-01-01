
exports.seed = function(knex) {
  return knex('organisations').del()
    .then(function () {
      return knex('organisations').insert([
        {
          id: 1, 
          organ_id: 1, 
          name: 'Anarchist Press', 
          url: '', 
          description: 'https://www.akpress.org/', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 2, 
          organ_id: 2, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 3, 
          organ_id: 3, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 4, 
          organ_id: 4, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 5, 
          organ_id: 5, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 6, 
          organ_id: 6, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 7, 
          organ_id: 7, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 8, 
          organ_id: 8, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 9, 
          organ_id: 9, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 10, 
          organ_id: 10, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 11, 
          organ_id: 11, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 12, 
          organ_id: 12, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 13, 
          organ_id: 13, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 14, 
          organ_id: 14, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 15, 
          organ_id: 15, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 16, 
          organ_id: 16, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 17, 
          organ_id: 17, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 18, 
          organ_id: 18, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 19, 
          organ_id: 19, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 20, 
          organ_id: 20, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 21, 
          organ_id: 21, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 22, 
          organ_id: 22, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 23, 
          organ_id: 23, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 24, 
          organ_id: 24, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 25, 
          organ_id: 25, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 26, 
          organ_id: 26, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 27, 
          organ_id: 27, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 28, 
          organ_id: 28, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 29, 
          organ_id: 29, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 30, 
          organ_id: 30, 
          name: '', 
          url: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
      ]);
    });
};
