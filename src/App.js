import React, { useState, useEffect } from 'react';
import { db } from './firebase'

function App() {
  const [channels, setChannels] = useState([
    {topic: 'Something', id: 'general'}
  ]);

  useEffect(() => {
    return db.collection('channels').onSnapshot((snapshot) => {
      setChannels(snapshot.docs.map(d => ({
        ...d.data(),
        id: d.id
      })));
    })
  }, [])

  return (
    <div className="App">
      <div className="Nav">
        <div className="User">
          <img className="UserImage" alt="whatever"
               src="https://placekitten.com/64/64" />
          <div>
            <div>J Walker</div>
            <div>
              <button className="text-button">log out</button>
            </div>
          </div>
        </div>
        <nav className="ChannelNav">
          {channels.map(channel => <a href={`/channel/${channel.id}`} key={channel.id}># {channel.id}</a>)}
        </nav>
      </div>
      <div className="Channel">
        <div className="ChannelMain">
          <div className="ChannelInfo">
            <div className="Topic">Topic: <input className="TopicInput" placeholder="Talk about work stuff." /></div>
            <div className="ChannelName">#general</div>
          </div>
          <div className="Messages">
            <div className="EndOfMessages">That's every message!</div>
          </div>
          <form className="ChatInputBox"><input className="ChatInput" placeholder="Message #general" /></form>
        </div>
        <div className="Members">
          <div>
            <div className="Member">
              <div className="MemberStatus offline"></div>
              J Walker
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
