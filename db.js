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

        return db('albums')
        .select('album')
        .where('album', song.album)
        .then((row) => {
            if (row.length === 0) {
                return db('albums')
                .insert({ album: song.album, year: song.year })
            } else {
                console.log('This album already exists')
            }
        })
        .then(() => {
            return db('artists')
            .select('artist')
            .where('artist', song.artist)
            .then((row) => {
                if (row.length === 0) {
                    return db('artists')
                    .insert({ artist: song.artist, debutYear: song.debutYear })
                } else {
                    console.log('This artist already exists')
                }
            })
        })
        .then(() => {
        return db('titles')
        .select('title')
        .where('title', song.title)
        .then((row) => {
            if (row.length === 0) {
                return db('titles')
                .insert({ title: song.title, duration: song.duration, albumId: db('albums').where('album', song.album).select('id'), artistId: db('artists').where('artist', song.artist).select('id') })  
            } else {
                console.log('Title already exists!')
            }
        })
    })
}

module.exports = {
    getSongs,
    migrateSong
}