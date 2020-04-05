import React from 'react'
import { connect } from 'react-redux'
import SQLDataInfo from './SQLDataInfo'

class SQLData extends React.Component {

    render() {
    return (
        <div>
            <h1>SQL Database</h1>
            <div className='sql-outside'>
            <h3>Table Name: 'titles'</h3>
            {this.props.allSQLData.map(data => {
                return (
                    <p className='sql-divider'>Title: {data.title} <br /> Duration: {data.duration}</p>
                )
            })}
            </div>
            <div className='sql-outside2'>
            <h3>Table Name: 'artists'</h3>
            {this.props.allSQLData.map(data => {
                return (
                    <p className='sql-divider'>Artist: {data.artist} <br />Debut Year: {data.debutYear}</p>
                )
            })}
            </div>
            <div className='sql-outside3'>
            <h3>Table Name: 'albums'</h3>
            {this.props.allSQLData.map(data => {
                return (
                    <p className='sql-divider'>Album: {data.album} <br /> Year: {data.year}</p>
                )
            })}
            </div>
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