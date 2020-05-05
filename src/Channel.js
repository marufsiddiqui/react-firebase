import React from 'react';
import { ChannelInfo } from './ChannelInfo';
import { Messages } from './Messages';
import { ChanelInputBox } from './ChatInputBox';
import { Members } from './Members';

export const Channel = ({ user }) => {
  return (
    <div className="Channel">
      <div className="ChannelMain">
        <ChannelInfo />
        <Messages />
        <ChanelInputBox user={user} />
      </div>
      <Members />
    </div>
  );
};
