import React from 'react';
import { db } from './firebase';

export const ChatInputBox = ({ user, channelId }) => {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        const value = event.target.elements[0].value;
        db.collection('channels')
          .doc(channelId)
          .collection('messages')
          .add({
            user: db.collection('users').doc(user.uid),
            text: value,
            createdAt: new Date(),
          });
        event.target.reset();
      }}
      className="ChatInputBox"
    >
      <input className="ChatInput" placeholder="Message #general" />
    </form>
  );
};
