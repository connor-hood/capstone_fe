import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import '../app.css'

const Playlist = () => {
    const songs = [
        {title: "", artist: "", album: "", rating: ""},
        {title: "", artist: "", album: "", rating: ""},
        {title: "", artist: "", album: "", rating: ""}
    ]

    const renderSong = (song, index) => {
        return(
            <tr key={index}>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.rating}</td>
            </tr>
        )
    }
    return (
        <div>
            <ReactBootstrap.Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {songs.map(renderSong)}
            </tbody>
            </ReactBootstrap.Table>
        </div>
    )
}

export default Playlist;