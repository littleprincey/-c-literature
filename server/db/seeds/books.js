
exports.seed = function(knex) {
  return knex('books').del()
    .then(function () {
      return knex('books').insert([
        {
          id: 1, 
          book_id: 1, 
          title: 'The Dispossessed', 
          author: 'Ursula Le Guin', 
          pub_date: '', 
          description: 'best book ever', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 2, 
          book_id: 2, 
          title: 'My Year Of Meats', 
          author: 'Ruth Ozeki', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 3, 
          book_id: 3, 
          title: 'The Deep', 
          author: 'Rivers Solomon', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 4, 
          book_id: 4, 
          title: 'Parable Of The Sower', 
          author: 'Octavia Butler', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 5, 
          book_id: 5, 
          title: 'Fingersmith', 
          author: 'Sarah Waters', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 6, 
          book_id: 6, 
          title: 'Black Tides Of Heaven', 
          author: 'Jy Yang', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 7, 
          book_id: 7, 
          title: 'Binti', 
          author: 'Nnedi Okorafor', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 8, 
          book_id: 8, 
          title: 'Under The Udala Trees', 
          author: 'Chinelo Okparanta', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 9, 
          book_id: 9, 
          title: 'How Long Until Black Future History Month', 
          author: 'N K Jemisin', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 10, 
          book_id: 10, 
          title: 'Capitalism, A Ghost Story', 
          author: 'Arundhati Roy', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 11, 
          book_id: 11, 
          title: '10 Minutes 38 Seconds In This Strange World', 
          author: 'Elif Shafak', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 12, 
          book_id: 12, 
          title: 'Children Of Blood And Bone', 
          author: 'Tomi Adeyemi', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 13, 
          book_id: 13, 
          title: 'orlando', 
          author: 'Virginia Woolf', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 14, 
          book_id: 14, 
          title: 'Priory Of The Orange Tree', 
          author: 'Samantha Shannon', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 15, 
          book_id: 15, 
          title: 'A Long Way To A Small Angry Planet', 
          author: 'Becky Chambers', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 16, 
          book_id: 16, 
          title: 'Frankissstein', 
          author: 'Jeanette Winterson', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 17, 
          book_id: 17, 
          title: 'Native Tongue', 
          author: 'Suzette H. Elgin', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 18, 
          book_id: 18, 
          title: 'The Word For World Is Forest', 
          author: 'Ursula Le Guin', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 19, 
          book_id: 19, 
          title: 'A Little Life', 
          author: 'Hanya Yanagihara', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 20, 
          book_id: 20, 
          title: 'Rage Becomes Her', 
          author: 'Soraya Chemaly', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 21, 
          book_id: 21, 
          title: 'Letter To My Daughter', 
          author: 'Maya Angelou', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 22, 
          book_id: 22, 
          title: 'Tentacle', 
          author: 'Rita Indiana', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 23, 
          book_id: 23, 
          title: 'Your Silence Will Not Protect You', 
          author: 'Audre Lorde', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 24, 
          book_id: 24, 
          title: 'Why Women Have Better Sex Under Socialism', 
          author: 'Kristen Ghodsee', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 25, 
          book_id: 25, 
          title: 'Men Explain Things To Me', 
          author: 'Rebecca Solnit', 
          pub_date: '', 
          description: '', 
          img: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 26, 
          book_id: 26, 
          title: 'Artificial Unintelligence', 
          author: 'Meredith Broussard', 
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
