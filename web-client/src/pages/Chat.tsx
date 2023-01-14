import { useState } from 'react';
import { Navbar } from '../components';

import MatchList from '../components/chat/MatchList';
import ChatBox from '../components/chat/ChatBox';
import ProfileBox from '../components/chat/ProfileBox';

function ChatPage() {
  return (
    <div>
      <div className="flex">
        <div className="flex-1 w-10">
          <MatchList />
        </div>
        <div className="flex-1 w-20">
          <ChatBox />
        </div>
        <div>
          <ProfileBox />
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
