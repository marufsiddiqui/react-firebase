import React from 'react';
import { ChannelInfo } from './ChannelInfo';
import { Messages } from './Messages';
import { ChatInputBox } from './ChatInputBox';
import { Members } from './Members';

export const Channel = ({ user, channelId }) => {
  return (
    <div className="Channel">
      <div className="ChannelMain">
        <ChannelInfo />
        <Messages channelId={channelId} />
        <ChatInputBox user={user} channelId={channelId} />
      </div>
      <Members />
    </div>
  );
};
