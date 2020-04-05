import React from 'react'
import MusicForm from './MusicForm'
import MusicList from './MusicList'
import SQLData from './SQLData'
import { connect } from 'react-redux'
import { fetchSongs } from './actions/allSongs'


class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchSongs())
  }
  render () {
  return (
    <>
    <h1>Document-oriented Database to Relational Database</h1>
    <div className='main-div'>
    <div className='json-left'>
    <MusicList></MusicList>
    </div>
    {/* <MusicForm></MusicForm> */}
    <div className='sql-right'>
    <SQLData></SQLData>
    </div>
    </div>
    </>
  )
  }
}

const mapStateToProps = state => {
  return {
    allSongs: state.allSongs
  }
}

export default connect(mapStateToProps)(App)
