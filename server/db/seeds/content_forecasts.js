
exports.seed = function(knex) {
  return knex('content_forecasts').del()
    .then(function () {
      // change trigger to content so can add things like homelessness and grief etc that might not necassarily be triggering but gives the reader some warning/ content forecast
      return knex('content_forecasts').insert([
        {
          id: 1, 
          forecast_id: 1, 
          type: 'sexual violence'
        },
        {
          id: 2, 
          forecast_id: 2, 
          type: 'eating disorder'
        },
        {
          id: 3, 
          forecast_id: 3, 
          type: 'racial violence'
        },
        {
          id: 4, 
          forecast_id: 4, 
          type: 'chlid abuse'
        },
        {
          id: 5, 
          forecast_id: 5, 
          type: 'colonialism'
        },
        {
          id: 6, 
          forecast_id: 6, 
          type: 'death'
        },
        {
          id: 7, 
          forecast_id: 7, 
          type: 'war'
        },
        {
          id: 8, 
          forecast_id: 8, 
          type: 'psychological abuse'
        },
        {
          id: 9, 
          forecast_id: 9, 
          type: 'addiction'
        },
        {
          id: 10, 
          forecast_id: 10, 
          type: 'body dysmorphia'
        },
        {
          id: 11, 
          forecast_id: 11, 
          type: 'gender dysmorphia'
        },
        {
          id: 12, 
          forecast_id: 12, 
          type: 'suicide'
        },
        {
          id: 13, 
          forecast_id: 13, 
          type: 'murder'
        },
        {
          id: 14, 
          forecast_id: 14, 
          type: 'physical violence'
        },
        {
          id: 15, 
          forecast_id: 15, 
          type: 'trauma'
        },
        {
          id: 16, 
          forecast_id: 16, 
          type: 'religious violence'
        },
        {
          id: 17, 
          forecast_id: 17, 
          type: 'animal cruelty'
        },
        {
          id: 18, 
          forecast_id: 18, 
          type: 'abduction'
        },
        {
          id: 19, 
          forecast_id: 19, 
          type: 'torture'
        },
        {
          id: 20, 
          forecast_id: 20, 
          type: 'miscarriage'
        },
        {
          id: 21, 
          forecast_id: 21, 
          type: 'transphobia'
        },
        {
          id: 22, 
          forecast_id: 22, 
          type: 'homophobia'
        },
        {
          id: 23, 
          forecast_id: 23, 
          type: 'misogyny'
        },
        {
          id: 24, 
          forecast_id: 24, 
          type: 'classism'
        },
        {
          id: 25, 
          forecast_id: 25, 
          type: 'poverty'
        },
        {
          id: 26, 
          forecast_id: 26, 
          type: 'self harm'
        },
        {
          id: 27, 
          forecast_id: 27, 
          type: 'bullying'
        },
        {
          id: 28, 
          forecast_id: 28, 
          type: 'mental illness'
        },
        {
          id: 29, 
          forecast_id: 29, 
          type: 'slavery'
        },
        {
          id: 30, 
          forecast_id: 30, 
          type: 'terminal illness'
        },
        {
          id: 31, 
          forecast_id: 31, 
          type: 'ableism'
        },
      ]);
    });
};
