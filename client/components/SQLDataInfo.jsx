import React from 'react'

const divStyle = {
    border: 'solid',
    width: '300px'
}

export default function SQLDataInfo(props) {
    return (
        <>
        <div style={divStyle}>
            <p>Title: {props.title}</p>
            <p>Duration: {props.duration}</p>
            <p>Artist: {props.artist}</p>
            <p>Debut Year: {props.debutYear}</p>
            <p>Album: {props.album}</p>
            <p>Album Year: {props.year}</p>

            <br />
        </div>
        </>
    )
}
