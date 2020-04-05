
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('titles').del()
    .then(function () {
      // Inserts seed entries
      return knex('titles').insert([
        {id: 1, title: 'The Vaccine', duration: '3m12s', artistId: 1, albumId: 1},
        {id: 2, title: 'Cute Cat, Cool Cat', duration: '2m59s', artistId: 1, albumId: 3},
        {id: 3, title: 'Flour, the Self Rising One', duration: '4m2s', artistId: 2, albumId: 2}
      ]);
    });
};
