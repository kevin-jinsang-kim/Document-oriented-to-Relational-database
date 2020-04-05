
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('albums').del()
    .then(function () {
      // Inserts seed entries
      return knex('albums').insert([
        {id: 1, album: '2020', year: 2020},
        {id: 2, album: 'Straight Outta Stockton', year: 2019},
        {id: 3, album: 'Makin Paper', year: 2021}
      ]);
    });
};
