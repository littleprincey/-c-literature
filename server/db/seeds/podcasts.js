
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('podcasts').del()
    .then(function () {
      // Inserts seed entries
      return knex('podcasts').insert([
        {
          id: 1, 
          podcast_id: 1, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 2, 
          podcast_id: 2, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 3, 
          podcast_id: 3, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 4, 
          podcast_id: 4, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 5, 
          podcast_id: 5, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 6, 
          podcast_id: 6, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 7, 
          podcast_id: 7, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 8, 
          podcast_id: 8, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 9, 
          podcast_id: 9, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 10, 
          podcast_id: 10, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 11, 
          podcast_id: 11, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 12, 
          podcast_id: 12, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 13, 
          podcast_id: 13, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 14, 
          podcast_id: 14, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 15, 
          podcast_id: 15, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 16, 
          podcast_id: 16, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 17, 
          podcast_id: 17, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 18, 
          podcast_id: 18, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 19, 
          podcast_id: 19, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 20, 
          podcast_id: 20, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 21, 
          podcast_id: 21, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 22, 
          podcast_id: 22, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 23, 
          podcast_id: 23, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 24, 
          podcast_id: 24, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 25, 
          podcast_id: 25, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 26, 
          podcast_id: 26, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 27, 
          podcast_id: 27, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 28, 
          podcast_id: 28, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 29, 
          podcast_id: 29, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 30, 
          podcast_id: 30, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
      ]);
    });
};
