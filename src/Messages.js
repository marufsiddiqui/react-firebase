import React from 'react';
import { useCollection } from './useCollection';
import { FirstMessageFromUser } from './FirstMessageFromUser';

export const Messages = ({ channelId }) => {
  const messages = useCollection(`channels/${channelId}/messages`, 'createdAt');

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
