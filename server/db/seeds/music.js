
exports.seed = function(knex) {
  return knex('music').del()
    .then(function () {
      return knex('music').insert([
        {
          id: 1, 
          music_id: 1, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 2, 
          music_id: 2, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 3, 
          music_id: 3, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 4, 
          music_id: 4, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 5, 
          music_id: 5, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 6, 
          music_id: 6, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 7, 
          music_id: 7, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 8, 
          music_id: 8, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 9, 
          music_id: 9, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 10, 
          music_id: 10, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 11, 
          music_id: 11, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 12, 
          music_id: 12, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 13, 
          music_id: 13, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 14, 
          music_id: 14, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 15, 
          music_id: 15, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 16, 
          music_id: 16, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 17, 
          music_id: 17, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 18, 
          music_id: 18, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 19, 
          music_id: 19, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 20, 
          music_id: 20, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 21, 
          music_id: 21, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 22, 
          music_id: 22, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 23, 
          music_id: 23, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 24, 
          music_id: 24, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 25, 
          music_id: 25, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 26, 
          music_id: 26, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 27, 
          music_id: 27, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 28, 
          music_id: 28, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 29, 
          music_id: 29, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 30, 
          music_id: 30, 
          name: '', 
          type: '', 
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
      ]);
    });
};
