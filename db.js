const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile').development
const database = require('knex')(config)

function getSongs (db = database) {
    return db('titles')
    .join('artists', 'titles.artistId', 'artists.id')
    .join('albums', 'titles.albumId', 'albums.id')
    .select()
    .then(songs => {
        return songs
    })
}

function migrateSong (song, db = database) {
    if (song.artist == 'Pandemic') song.artistId = 1
    if (song.artist == 'Panic Purchase') song.artistId = 2
    if (song.album == '2020') song.albumId = 1
    if (song.album == 'Straight Outta Stockton') song.albumId = 2
    if (song.album == 'Makin Paper') song.albumId = 3

    return db('titles')
    .insert({ title: song.title, duration: song.duration, artistId: song.artistId, albumId: song.albumId })
    .then(album => {
        console.log('this is album: ', album)
        return db('albums')
        .insert({ album: song.album, year: song.year,  })
        .then(artist => {
            console.log('this is artist: ', artist)
            return db('artists')
            .insert({ artist: song.artist, debutYear: song.debutYear })
        })
    })
}

module.exports = {
    getSongs,
    migrateSong
}