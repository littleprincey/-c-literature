
exports.seed = function(knex) {
  return knex('tags').del()
    .then(function () {
      return knex('tags').insert([
        {
          id: 1, 
          tag_id: 1, 
          tag: 'fiction'
        },
        {
          id: 2, 
          tag_id: 2, 
          tag: 'non-fiction'
        },
        {
          id: 3, 
          tag_id: 3, 
          tag: 'academic'
        },
        {
          id: 4, 
          tag_id: 4, 
          tag: 'fantasy'
        },
        {
          id: 5, 
          tag_id: 5, 
          tag: 'sci-fi'
        },
        {
          id: 6, 
          tag_id: 6, 
          tag: 'romance'
        },
        {
          id: 7, 
          tag_id: 7, 
          tag: 'adventure'
        },
        {
          id: 8, 
          tag_id: 8, 
          tag: 'afro-futurism'
        },
        {
          id: 9, 
          tag_id: 9, 
          tag: 'mystery'},
        {
          id: 10,
          tag_id: 10, 
          tag: 'thriller'
        },
        {
          id: 11,
          tag_id: 11, 
          tag: 'contemporary'
        },
        {
          id: 12,
          tag_id: 12, 
          tag: 'historical'
        },
        {
          id: 13,
          tag_id: 13, 
          tag: 'humor'
        },
        {
          id: 14,
          tag_id: 14, 
          tag: 'queer'
        },
        {
          id: 15,
          tag_id: 15, 
          tag: 'queer author'
        },
        {
          id: 16,
          tag_id: 16, 
          tag: 'queer characters'
        },
        {
          id: 17,
          tag_id: 17, 
          tag: 'non-binary author'
        },
        {
          id: 18,
          tag_id: 18, 
          tag: 'non-binary characters'
        },
        {
          id: 19,
          tag_id: 19, 
          tag: 'trans author'
        },
        {
          id: 20,
          tag_id: 20, 
          tag: 'trans characters'
        },
        {
          id: 21,
          tag_id: 21, 
          tag: 'wlw'
        },
        {
          id: 22,
          tag_id: 22, 
          tag: 'mlm'
        },
        {
          id: 23,
          tag_id: 23, 
          tag: 'bisexuality'
        }, 
        {
          id: 24,
          tag_id: 24, 
          tag: 'veganism'
        },
        {
          id: 25,
          tag_id: 25, 
          tag: 'BLM'
        },
        {
          id: 26,
          tag_id: 26, 
          tag: 'indigenous author'
        },
        {
          id: 27,
          tag_id: 27, 
          tag: 'colonialism'
        },
        {
          id: 28,
          tag_id: 28, 
          tag: 'feminism'
        },
        {
          id: 29,
          tag_id: 29, 
          tag: 'racism'
        },
        {
          id: 30,
          tag_id: 30, 
          tag: 'fatphobia'
        },
        {
          id: 31,
          tag_id: 31, 
          tag: 'transphobia'
        },
        {
          id: 32,
          tag_id: 32, 
          tag: 'ableism'
        },
        {
          id: 33,
          tag_id: 33, 
          tag: 'homophobia'
        },
        {
          id: 34,
          tag_id: 34, 
          tag: 'xenophobia'
        },
        {
          id: 35,
          tag_id: 35, 
          tag: 'unconscious bias'
        },
        {
          id: 36,
          tag_id: 36, 
          tag: 'capitalism'
        },
        {
          id: 37,
          tag_id: 37, 
          tag: 'socialism'
        },
        {
          id: 38,
          tag_id: 38, 
          tag: 'economics'
        },
        {
          id: 39,
          tag_id: 39, 
          tag: 'gender'
        },
        {
          id: 40,
          tag_id: 40, 
          tag: 'sexuality'
        },
        {
          id: 41,
          tag_id: 41, 
          tag: 'race'
        },
        {
          id: 42,
          tag_id: 42, 
          tag: 'class'
        },
        {
          id: 43,
          tag_id: 43, 
          tag: 'carnism'
        },
        {
          id: 44,
          tag_id: 44, 
          tag: 'children'
        },
        {
          id: 45,
          tag_id: 45, 
          tag: 'youth'
        },
        {
          id: 46,
          tag_id: 46, 
          tag: 'climate change'
        },
        {
          id: 47,
          tag_id: 47, 
          tag: 'war'
        },
        {
          id: 48,
          tag_id: 48, 
          tag: 'politics'
        },
        {
          id: 49,
          tag_id: 49, 
          tag: 'political economy'
        },
        {
          id: 50,
          tag_id: 50, 
          tag: 'architecture'
        },
        {
          id: 51,
          tag_id: 51, 
          tag: 'art'
        },
        {
          id: 52,
          tag_id: 52, 
          tag: 'anarchism'
        },
        {
          id: 53,
          tag_id: 53, 
          tag: 'WoC author'
        },
        {
          id: 54,
          tag_id: 54, 
          tag: 'WoC characters'
        },
        {
          id: 55,
          tag_id: 55, 
          tag: 'PoC author'
        },
        {
          id: 56,
          tag_id: 56, 
          tag: 'PoC characters'
        },
        {
          id: 57,
          tag_id: 57, 
          tag: 'disabled author'
        },
        {
          id: 58,
          tag_id: 58, 
          tag: 'disabled characters'
        },
        {
          id: 59,
          tag_id: 59, 
          tag: 'sex work'
        },
        {
          id: 60,
          tag_id: 60, 
          tag: 'ecology'
        },
        {
          id: 61,
          tag_id: 61, 
          tag: 'consumerism'
        },
        {
          id: 62,
          tag_id: 62, 
          tag: 'data'
        },
        {
          id: 63,
          tag_id: 63, 
          tag: 'tech'
        },
        {
          id: 64,
          tag_id: 64, 
          tag: 'AI'
        },
        {
          id: 65,
          tag_id: 65, 
          tag: 'law'
        },
        {
          id: 66,
          tag_id: 66, 
          tag: 'prisons'
        },
        {
          id: 67,
          tag_id: 67, 
          tag: 'justice'
        },
        {
          id: 68,
          tag_id: 68, 
          tag: 'civil rights'
        },
        {
          id: 69,
          tag_id: 69, 
          tag: 'cooking'
        },
        {
          id: 70,
          tag_id: 70, 
          tag: 'food security'
        },
      ]);
    });
};
//peace, peace and conflict, ecofeminism