import React from 'react'

export default class MusicForm extends React.Component {
    render() {
        return (
            <div>
                <h3>Add to SQLite3 Database</h3>
                <form>
                <label>
                    Title:
                    <input type="text" name="title" />
                </label>
                <br />
                <label>
                    Artist:
                    <input type="text" name="artist" />
                </label>
                <br />
                <label>
                    Album:
                    <input type="text" name="album" />
                </label>
                <br />
                <button type="submit" value="submit">Add to SQLite3 Database</button>
                </form>
            </div>
        )
    }
}
