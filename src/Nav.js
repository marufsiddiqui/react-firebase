import React from 'react';
import { useCollection } from './useCollection';
import { firebase } from './firebase';
import { Link } from '@reach/router';

export const Nav = ({ user }) => {
  const channels = useCollection('channels');

  return (
    <div className="Nav">
      <div className="User">
        <img className="UserImage" alt="whatever" src={user.photoUrl} />
        <div>
          <div>{user.displayName}</div>
          <div>
            <button
              className="text-button"
              onClick={() => {
                firebase.auth().signOut();
              }}
            >
              log out
            </button>
          </div>
        </div>
      </div>
      <nav className="ChannelNav">
        {channels.map(channel => (
          <Link to={`/channel/${channel.id}`} key={channel.id}>
            # {channel.id}
          </Link>
        ))}
      </nav>
    </div>
  );
};
