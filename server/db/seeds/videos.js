
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('videos').del()
    .then(function () {
      // Inserts seed entries
      return knex('videos').insert([
        {
          id: 1, 
          video_id: 1, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 2, 
          video_id: 2, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 3, 
          video_id: 3, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 4, 
          video_id: 4, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 5, 
          video_id: 5, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 6, 
          video_id: 6, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 7, 
          video_id: 7, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 8, 
          video_id: 8, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 9, 
          video_id: 9, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 10, 
          video_id: 10, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 11, 
          video_id: 11, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 12, 
          video_id: 12, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 13, 
          video_id: 13, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 14, 
          video_id: 14, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 15, 
          video_id: 15, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 16, 
          video_id: 16, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 17, 
          video_id: 17, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 18, 
          video_id: 18, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 19, 
          video_id: 19, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 20, 
          video_id: 20, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 21, 
          video_id: 21, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 22, 
          video_id: 22, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 23, 
          video_id: 23, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 24, 
          video_id: 24, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 25, 
          video_id: 25, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 26, 
          video_id: 26, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 27, 
          video_id: 27, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 28, 
          video_id: 28, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 29, 
          video_id: 29, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 30, 
          video_id: 30, 
          title: '', 
          author: '', 
          pub_date: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
      ]);
    });
};
