import React from 'react';
import { useCollection } from './useCollection';

const FirstMessageFromUser = ({ message, showDay }) => (
  <div>
    {showDay && (
      <div className="Day">
        <div className="DayLine" />
        <div className="DayText">12/04/2020</div>
        <div className="DayLine" />
      </div>
    )}
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
);
export const Messages = () => {
  const messages = useCollection('channels/general/messages', 'createdAt');

  return (
    <div className="Messages">
      <div className="EndOfMessages">That's every message!</div>
      {messages.map((message, index) => {
        const previous = messages[index - 1];
        const showAvatar = !previous || message.user.id !== previous.user.id;
        const showDay = false;
        return showAvatar ? (
          <FirstMessageFromUser
            key={message.id}
            message={message}
            showDay={showDay}
          />
        ) : (
          <div key={message.id}>
            <div className="Message no-avatar">
              <div className="MessageContent">{message.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
