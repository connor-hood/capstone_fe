import React from 'react';
import './videoItem.css'

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div className = 'video-objects'>
            
        <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
            
            <div className='content'>
                <div className='header'>{video.snippet.title}</div>
            </div>
        </div>
        </div>
    )
};
export default VideoItem;