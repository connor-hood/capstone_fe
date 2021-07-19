import React from 'react';
import useTab from '../useTab';

const Tab = ({ video }) => {
  
  

  const url = 'http://www.ultimate-guitar.com/'

  return (
    <div className="tab">
      <iframe src={url} height="400" width="400" allowFullScreen title="tab_player" />
    </div>
  )
}

export default Tab 