
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('social_mediaAccnts').del()
    .then(function () {
      // Inserts seed entries
      return knex('social_mediaAccnts').insert([
        {
          id: 1, 
          acct_id: 1, 
          platform: 'instagram', 
          author: 'erika hart', 
          username: 'iharterika', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 2, 
          acct_id: 2, 
          platform: '', 
          author: 'ruby allegra', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 3, 
          acct_id: 3, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 4, 
          acct_id: 4, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 5, 
          acct_id: 5, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 6, 
          acct_id: 6, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 7, 
          acct_id: 7, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 8, 
          acct_id: 8, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 9, 
          acct_id: 9, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 10, 
          acct_id: 10, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 11, 
          acct_id: 11, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 12, 
          acct_id: 12, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 13, 
          acct_id: 13, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 14, 
          acct_id: 14, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 15, 
          acct_id: 15, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 16, 
          acct_id: 16, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 17, 
          acct_id: 17, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 18, 
          acct_id: 18, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 19, 
          acct_id: 19, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 20, 
          acct_id: 20, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 21, 
          acct_id: 21, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 22, 
          acct_id: 22, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 23, 
          acct_id: 23, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 24, 
          acct_id: 24, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 25, 
          acct_id: 25, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 26, 
          acct_id: 26, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 27, 
          acct_id: 27, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 28, 
          acct_id: 28, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 29, 
          acct_id: 29, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
        {
          id: 30, 
          acct_id: 30, 
          platform: '', 
          author: '', 
          username: '', 
          description: '', 
          url: '', 
          tag_id: [], 
          forecast_id: []
        },
      ]);
    });
};
