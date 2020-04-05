import request from 'superagent'

export const RECEIVE_SONGS = 'RECEIVE_SONGS'
export const MIGRATE_SONG = 'MIGRATE_SONG'

export const receiveSongs = (songs) => {
  return {
    type: RECEIVE_SONGS,
    songs
  }
}

export const migrateSong = (song) => {
  return {
    type: MIGRATE_SONG,
    song
  }
}

export function fetchSongs () {
    return (dispatch) => {
      return request
        .get('/api/v1/songs')
        .then(res => {
          dispatch(receiveSongs(res.body))
        })
    }
}

export function migrateData (data) {
    return (dispatch) => {
        return request
        .post('/api/v1/songs')
        .send(data)
        .then(res => {
            if (res.message) {
                console.log('res from action: ', res)
            } else {
                dispatch(migrateSong(data))
                dispatch(fetchSongs())
            }
        })
    }
}