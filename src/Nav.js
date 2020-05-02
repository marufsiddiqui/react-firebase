import React, { useEffect, useState } from 'react';
import { db } from './firebase';

export const Nav = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    return db.collection('channels').onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((d) => ({
          ...d.data(),
          id: d.id,
        }))
      );
    });
  }, []);

  return (
    <div className="Nav">
      <div className="User">
        <img
          className="UserImage"
          alt="whatever"
          src="https://placekitten.com/64/64"
        />
        <div>
          <div>J Walker</div>
          <div>
            <button className="text-button">log out</button>
          </div>
        </div>
      </div>
      <nav className="ChannelNav">
        {channels.map((channel) => (
          <a href={`/channel/${channel.id}`} key={channel.id}>
            # {channel.id}
          </a>
        ))}
      </nav>
    </div>
  );
};
