import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

export interface Props{
  channelName: string
  selected?: boolean

}

const ChannelButton: React.FC<Props> = ({
  channelName,
  selected
}) => {
  return (
      <Container className={selected ? 'active': '' }>
        <div id="hashtag">
          <HashtagIcon/>
          <span>{channelName}</span>
        </div>

        <div id="invite-and-settings" >
          <InviteIcon/>
          <SettingsIcon/>
        </div>
      </Container>
  );
}

export default ChannelButton;