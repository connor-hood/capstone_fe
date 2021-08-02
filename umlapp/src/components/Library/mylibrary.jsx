import React from 'react';
import Playlist from '../Playlist/playlist';
import '../app.css'

const Library = (props) => { 

    return (
        <div className="headwrap">
            <h3>My Library:</h3>
            <Playlist />
        </div>
    )
}

export default Library;