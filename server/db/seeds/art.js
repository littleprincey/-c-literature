
exports.seed = function(knex) {
  return knex('art').del()
    .then(function () {
      return knex('art').insert([
        {
          id: 1, 
          art_id: 1, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 2, 
          art_id: 2, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 3, 
          art_id: 3, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 4, 
          art_id: 4, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 5, 
          art_id: 5, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 6, 
          art_id: 6, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 7, 
          art_id: 7, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 8, 
          art_id: 8, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 9, 
          art_id: 9, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 10,
          art_id: 10, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 11,
          art_id: 11, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 12,
          art_id: 12, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 13,
          art_id: 13, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 14,
          art_id: 14, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 15,
          art_id: 15, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 16,
          art_id: 16, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 17,
          art_id: 17, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 18,
          art_id: 18, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 19,
          art_id: 19, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 20,
          art_id: 20, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 21,
          art_id: 21, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 22,
          art_id: 22, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 23,
          art_id: 23, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 24,
          art_id: 24, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 25,
          art_id: 25, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 26,
          art_id: 26, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 27,
          art_id: 27, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 28,
          art_id: 28, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 29,
          art_id: 29, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 30,
          art_id: 30, artist: '',
          country: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
      ]);
    });
};
