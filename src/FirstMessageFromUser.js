import { useDoc } from './useDoc';
import React from 'react';
import formatDate from 'date-fns/format';

export const FirstMessageFromUser = ({ message, showDay }) => {
  const author = useDoc(message.user.path);

  return (
    <div>
      {showDay && (
        <div className="Day">
          <div className="DayLine" />
          <div className="DayText">12/04/2020</div>
          <div className="DayLine" />
        </div>
      )}
      <div className="Message with-avatar">
        <div
          className="Avatar"
          style={{ backgroundImage: author ? `url(${author.photoUrl})` : '' }}
        />
        <div className="Author">
          <div>
            <span className="UserName">{author && author.displayName} </span>
            <span className="TimeStamp">
              {formatDate(message.createdAt.seconds * 1000, 'h:mm a')}
            </span>
          </div>
          <div className="MessageContent">{message.text}</div>
        </div>
      </div>
    </div>
  );
};
