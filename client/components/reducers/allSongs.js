import { RECEIVE_SONGS, MIGRATE_SONG } from '../actions/allSongs.js'

const allSongs = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SONGS:
      return action.songs
    case MIGRATE_SONG:
      return [...state, action.song]
    default:
      return state
  }
}

export default allSongs