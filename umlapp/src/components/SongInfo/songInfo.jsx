import React from 'react';
import YouTube from '../YouTube/youtube';
import Tab from '../Tab/tab';
import './songInfo.css'


const SongInfo = () => {
    return(
        <div>
            <div className="songInfo">
                <h2>Title</h2>
                <h2>Artist</h2>
                <h2>Album</h2>
                <h2 style={{float: 'right' }}>Artwork</h2>   
            </div>
            <br />
            <div className="vtwrapper">
                <span>
                    <h4>Video:</h4>
                    <YouTube />
                </span>
                <span>
                    <h4>Tab:</h4>
                    <Tab />
                </span>
            </div>
        </div>
    )
}

export default SongInfo;