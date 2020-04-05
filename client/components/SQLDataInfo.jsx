import React from 'react'

const divStyle = {
    margin: 'none',
    border: 'solid',
    width: '250px',
    height: 'auto',
    lineHeight: '0.5rem'
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
