import React from 'react';
import { db } from './firebase';

export const ChanelInputBox = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const value = event.target.elements[0].value;
        db.collection('channels').doc('general').collection('messages').add({
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
