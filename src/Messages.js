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
        const showAvatar = shouldShowAvatar(previous, message);
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

const shouldShowAvatar = (previous, message) => {
  const isFirst = !previous;

  if (isFirst) {
    return true;
  }

  const differentUser = message.user.id !== previous.user.id;

  if (differentUser) {
    return true;
  }

  const hasBeenAWhile =
    message.createdAt.seconds - previous.createdAt.seconds > 60 * 3;

  return hasBeenAWhile;
};
