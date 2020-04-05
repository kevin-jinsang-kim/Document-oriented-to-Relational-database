import React from 'react'
import { connect } from 'react-redux'
import SQLDataInfo from './SQLDataInfo'

class SQLData extends React.Component {

    render() {
    return (
        <div>
            <h1>SQL Database</h1>
            {this.props.allSQLData.map(data => {
                return (
                    <SQLDataInfo key={data.title} title={data.title} duration={data.duration} 
                    artist={data.artist} debutYear={data.debutYear} album={data.album} year={data.year}/>
                )
            })}
        </div>
    )}
}

const mapStateToProps = state => {
    return {
        allSQLData: state.allSongs
    }
}

export default connect(mapStateToProps)(SQLData)