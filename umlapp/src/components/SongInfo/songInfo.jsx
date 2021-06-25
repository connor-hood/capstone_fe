import React from 'react';
import YouTube from '../YouTube/youtube';
import Tab from '../Tab/tab';


const SongInfo = () => {
    return(
        <div>
            <div className="songInfo">
                <h2>Title</h2>
                <h2>Artist</h2>
                <h2>Album</h2>
                <h2 style={{float: 'right' }}>Artwork</h2>   
            </div>
        </div>
    )
}

export default SongInfo;