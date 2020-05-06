import React, { useEffect, useRef } from 'react';
import isSameDay from 'date-fns/isSameDay';
import { useCollection } from './useCollection';
import { FirstMessageFromUser } from './FirstMessageFromUser';

const useChatScrollManager = ref => {
  useEffect(() => {
    const node = ref.current;
    node.scrollTop = node.scrollHeight;
  });
};

export const Messages = ({ channelId }) => {
  const messages = useCollection(`channels/${channelId}/messages`, 'createdAt');

  const scrollerRef = useRef();

  useChatScrollManager(scrollerRef);

  return (
    <div className="Messages" ref={scrollerRef}>
      <div className="EndOfMessages">That's every message!</div>
      {messages.map((message, index) => {
        const previous = messages[index - 1];
        const showAvatar = shouldShowAvatar(previous, message);
        const showDay = shouldShowDay(previous, message);
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

function shouldShowDay(previous, message) {
  const isFirst = !previous;

  if (isFirst) {
    return true;
  }

  const isNewDay = !isSameDay(
    previous.createdAt * 1000,
    message.createdAt * 1000
  );

  return isNewDay;
}

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
