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
                <h2 style={{textAlign: 'right' }}>Artwork</h2>   
            </div>
            <br />
            <div className="vtwrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <span>
                            <h4>Video:</h4>
                            <YouTube />
                        </span>
                        </div>
                        <div className="col-6">
                        <span>
                            <h4>Tab:</h4>
                            <Tab />
                        </span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default SongInfo;