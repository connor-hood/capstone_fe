import React from 'react';
import VideoDetail from '../VideoDetail/videoDetail';

const VideoList = ({videos, handleVideoSelect}) => {
    const renderedVideos = videos.map((video) => {
        return (
            <VideoDetail
            key={video.id.videoId}
            video={video}
            handleVideoSelect={handleVideoSelect}
            />
        )
    });
    return (
        <div className='ui_relaxed_divided_list'>{renderedVideos}</div>
    )
};
export default VideoList;