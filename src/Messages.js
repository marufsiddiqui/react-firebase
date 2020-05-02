import React, { useEffect, useState } from 'react';
import { db } from './firebase';

export const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    return db
      .collection('channels/general/messages')
      .orderBy('createdAT')
      .limit(6)
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((d) => ({
            ...d.data(),
            id: d.id,
          }))
        );
      });
  }, []);

  return (
    <div className="Messages">
      <div className="EndOfMessages">That's every message!</div>
      {messages.map((message, index) =>
        index === 0 ? (
          <div key={message.id}>
            <div className="Day">
              <div className="DayLine" />
              <div className="DayText">12/04/2020</div>
              <div className="DayLine" />
            </div>
            <div className="Message with-avatar">
              <div className="Avatar" />
              <div className="Author">
                <div>
                  <span className="UserName">James Ryan </span>
                  <span className="TimeStamp">3:36 PM</span>
                </div>
                <div className="MessageContent">{message.text}</div>
              </div>
            </div>
          </div>
        ) : (
          <div key={message.id}>
            <div className="Message no-avatar">
              <div className="MessageContent">{message.text}</div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
