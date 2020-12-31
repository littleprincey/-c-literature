
exports.seed = function(knex) {
  return knex('books').del()
    .then(function () {
      return knex('books').insert([
        {
          id: 1, 
          book_id: 1, 
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
          book_id: 2, 
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
          book_id: 3, 
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
          book_id: 4, 
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
          book_id: 5, 
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
          book_id: 6, 
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
          book_id: 7, 
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
          book_id: 8, 
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
          book_id: 9, 
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
          book_id: 10, 
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
          book_id: 11, 
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
          book_id: 12, 
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
          book_id: 13, 
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
          book_id: 14, 
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
          book_id: 15, 
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
          book_id: 16, 
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
          book_id: 17, 
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
          book_id: 18, 
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
          book_id: 19, 
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
          book_id: 20, 
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
          book_id: 21, 
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
          book_id: 22, 
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
          book_id: 23, 
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
          book_id: 24, 
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
          book_id: 25, 
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
          book_id: 26, 
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
          book_id: 27, 
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
          book_id: 28, 
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
          book_id: 29, 
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
          book_id: 30, 
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
