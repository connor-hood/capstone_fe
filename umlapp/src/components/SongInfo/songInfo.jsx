import React, {Component} from 'react';
import VideoDetail from '../VideoDetail/videoDetail';
import Tab from '../Tab/tab';
import './songInfo.css'


class SongInfo extends Component{
    state = {
        rating: 0,
    }

    render() {
    return(
        <div>
            <div className="songInfo">
                <h2>Title</h2>
                <h2>Artist</h2>
            </div>
            <div className="playlib">
                <p style={{float: 'left'}}>Add to Library</p>
                <p stlye={{float: 'right'}}>Add to Playlist</p>
            </div>
            
            <div className="vtwrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <span>
                            <h4>Video:</h4>
                            <div className="video">
                            <VideoDetail />
                            </div>
                        </span>
                        </div>
                        <div className="col-6">
                        <span >
                            <h4>Tab:</h4>
                            <div className="tab">
                            <Tab />
                            </div>
                        </span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
}
export default SongInfo;