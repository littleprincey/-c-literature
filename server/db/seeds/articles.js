
exports.seed = function(knex) {
  return knex('articles').del()
    .then(function () {
      return knex('articles').insert([
        {
          id: 1, 
          article_id: 1, 
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
          article_id: 2, 
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
          article_id: 3, 
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
          article_id: 4, 
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
          article_id: 5, 
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
          article_id: 6, 
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
          article_id: 7, 
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
          article_id: 8, 
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
          article_id: 9, 
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
          article_id: 10, 
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
          article_id: 11, 
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
          article_id: 12, 
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
          article_id: 13, 
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
          article_id: 14, 
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
          article_id: 15, 
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
          article_id: 16, 
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
          article_id: 17, 
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
          article_id: 18, 
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
          article_id: 19, 
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
          article_id: 20, 
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
          article_id: 21, 
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
          article_id: 22, 
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
          article_id: 23, 
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
          article_id: 24, 
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
          article_id: 25, 
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
          article_id: 26, 
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
          article_id: 27, 
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
          article_id: 28, 
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
          article_id: 29, 
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
          article_id: 30, 
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
