
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('artists').del()
    .then(function () {
      // Inserts seed entries
      return knex('artists').insert([
        {id: 1, artist: 'Pandemic', debutYear: '2019'},
        {id: 2, artist: 'Straight Outta Stockton', debutYear: '2020'}
      ]);
    });
};
