import React, {  } from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>
       
       <h3>Video viewer</h3>
       
    </div>;
  }

 
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className=".bg-secondary">
      <div className="ui segment">
        <h4 className="ui header"> </h4>
      <div className="ui embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;