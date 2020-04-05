import React from 'react'
import { connect } from 'react-redux'
import { migrateData } from './actions/allSongs'

const divStyle = {
    margin: 'none',
    border: 'solid',
    width: '300px'
}

class SongInfo extends React.Component {


    handleSubmit = e => {
        e.preventDefault()
        console.log(this.props)
        this.props.migrateData(
            {   
                title: this.props.title,
                duration: this.props.duration,
                artist: this.props.artist,
                debutYear: this.props.debutYear,
                album: this.props.album,
                year: this.props.year
            }
        )
        .then(data => console.log(data))
        .catch(err => console.log("Error from handle submit: ", err))
    }
    render () {
    return (
        <>
        <div style={divStyle}>
            <p>Title: {this.props.title}</p>
            <p>Duration: {this.props.duration}</p>
            <p>Artist: {this.props.artist}</p>
            <p>Debut Year: {this.props.debutYear}</p>
            <p>Album: {this.props.album}</p>
            <p>Album Year: {this.props.year}</p>
            
            <form onSubmit={this.handleSubmit}>
            {/* <input type='hidden' name='title' value={this.props.title} />
            <input type='hidden' name='duration' value={this.props.duration} />
            <input type='hidden' name='artist' value={this.props.artist} />
            <input type='hidden' name='debutYear' value={this.props.debutYear} />
            <input type='hidden' name='album' value={this.props.album} />
            <input type='hidden' name='year' value={this.props.year} /> */}
            <button name='migrate' type='submit'>Migrate to SQLite3 data</button>
            </form>
            <br />
        </div>
        </>
    )
}
}

const mapDispatchToProps = dispatch => ({
    migrateData: data => dispatch(migrateData(data))
})

// const mapStateToProps = state => {
//     return{
//         allSongs: state.allSongs
//     }
// }

export default connect(null, mapDispatchToProps)(SongInfo)