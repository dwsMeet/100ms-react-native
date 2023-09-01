import * as React from 'react';
import { View } from 'react-native';

import { ChatIcon } from '../Icons';
import { PressableIcon } from './PressableIcon';
import { useShowChat } from '../hooks-util';

export const HMSChat = () => {
  const [chatVisibleType, setChatVisible] = useShowChat();

  const toggleChatWindow = () => setChatVisible(chatVisibleType === 'none');

  return (
    <View>
      <PressableIcon
        onPress={toggleChatWindow}
        active={chatVisibleType === 'inset'}
      >
        <ChatIcon />
      </PressableIcon>
    </View>
  );
};
