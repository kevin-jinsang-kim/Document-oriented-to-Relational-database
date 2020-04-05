import React from 'react'
import { connect } from 'react-redux'
import { fetchSongs } from './actions/allSongs'

import SongInfo from './SongInfo'
const musicData = require('./music.json')

class MusicList extends React.Component {
    state = {
        music: musicData
    }


    render() {
        return (
            <div>
                <h1>JSON Music List</h1>
                {this.state.music.map(song => {
                    return (
                        <SongInfo key={song.title} title={song.title} duration={song.duration} artist={song.artist} debutYear={song.debutYear} album={song.album} year={song.year} />
                    )
                })}
                <br />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        allSongs: state.allSongs
    }
}

export default connect(mapStateToProps)(MusicList)
