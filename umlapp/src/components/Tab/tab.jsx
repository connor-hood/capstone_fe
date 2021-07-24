import React from 'react';

const Tab = ({ video }) => {
  
  

  const url = 'https://www.911tabs.com/'

  return (
    <div className="tab">
      <iframe src={url} height="400" width="425" allowFullScreen title="tab_player" />
    </div>
  )
}

export default Tab 