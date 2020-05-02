import React from 'react';
import { useCollection } from './useCollection';

export const Messages = () => {
  const messages = useCollection('channels/general/messages', 'createdAt');

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
