import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>
       
       <h3>Video viewer</h3>
       
    </div>;
  }

 
  return (
    <div className=".bg-secondary">
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
      <div className="ui embed">
        <iframe allowFullScreen title="Video player" />
      </div>
        <p>{video.snippet.description}</p>
      </div>
      <div className="comments">
      </div>
    </div>
  );
};

export default VideoDetail;