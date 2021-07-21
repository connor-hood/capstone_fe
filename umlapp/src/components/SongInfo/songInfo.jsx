import React from 'react';
import VideoDetail from '../VideoDetail/videoDetail';
import Tab from '../Tab/tab';
import './songInfo.css'

const SongInfo = (props) => {
    return(
        <div>            
            <div className="vtwrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <span>
                            <h4>Video:</h4>
                            <div className="video">
                            <VideoDetail video={props.video}/>
                            </div>
                        </span>
                        </div>
                        <div className="col-6">
                        <span >
                            <h4>Tab:</h4>
                            <div className="tab">
                            <Tab tab={props.tab}/>
                            </div>
                        </span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )

}
export default SongInfo;