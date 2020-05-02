import React from 'react';

export const ChannelInfo = () => {
  return (
    <div className="ChannelInfo">
      <div className="Topic">
        Topic: <input className="TopicInput" placeholder="Talk about work stuff." />
      </div>
      <div className="ChannelName">#general</div>
    </div>
  );
}
