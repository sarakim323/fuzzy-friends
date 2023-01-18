import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { io } from 'socket.io-client';
// import { allUsersRoute, host } from '../utils/APIRoutes';

import MatchList from '../components/chat/MatchList';
import ChatBox from '../components/chat/ChatBox';
import ProfileBox from '../components/chat/ProfileBox';

const ChatPage: React.FC = () => {
  const [currentChat, setCurrentChat] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [matches, setMatches] = useState<Match[]>([
    {
      _id: '1',
      name: 'Sophie',
      age: 4,
      breed: 'Siberian Husky',
      gender: 'female',
      profilePic:
        'https://canineowners.com/wp-content/uploads/2016/06/Corgi-Husky.png',
      pictures: [
        'https://animalso.com/wp-content/uploads/2016/10/husky-corgi-mix-2-150x150.jpg',
        'https://animalso.com/wp-content/uploads/2016/10/husky-corgi-mix-1.jpg',
        'https://i.pinimg.com/236x/56/e8/ba/56e8ba281d0cce55c4db6e3ee10f0ea4--happy-puppy-puppy-love.jpg',
      ],
      calendarInvite: [],
    },
    {
      _id: '2',
      name: 'Kuma',
      age: 3,
      breed: 'Goldendoodle',
      gender: 'male',
      profilePic:
        'https://www.rainfieldgoldendoodles.com/wp-content/uploads/2019/11/20191118_162055-1-200x300.jpg',
      pictures: [
        'https://www.happygodoodle.com/wp-content/uploads/2022/04/apricot-colored-miniature-goldendoodle-720x720.jpg.webp',
        'https://a-z-animals.com/media/2021/06/Petite-Goldendoodle-puppy-1024x535.jpg',
      ],
      calendarInvite: [],
    },
    {
      _id: '3',
      name: 'dog',
      age: 2,
      breed: 'shih tzu',
      gender: 'male',
      profilePic:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F07%2F21%2Fdogo-argentino-lying-on-cement-1309087955-2000.jpg',
      pictures: [
        'https://www.akc.org/wp-content/uploads/2017/11/Dogo-Argentino.jpg',
        'https://i.pinimg.com/originals/8b/ee/0b/8bee0bf219b91167f191f5268febae96.jpg',
        'http://3.bp.blogspot.com/-7pNCBrtPl_A/TaeOAW-3_xI/AAAAAAAA8_s/F4oAN5WLAug/s1600/Dogo.jpg',
      ],
      calendarInvite: [],
    },
    {
      _id: '4',
      name: 'cat',
      age: 4,
      breed: 'maltese',
      gender: 'female',
      profilePic:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F12%2Fpomeranian-white-puppy-921029690-2000.jpg',
      pictures: [
        'https://cdn.britannica.com/41/233841-050-4FFECCF1/Pomeranian-dog.jpg',
        'https://www.omlet.us/images/cache/1024/693/Dog-Pomeranian-Three_lovely_Pomeranians,_each_with_big,_bushy_tails_and_beautiful_pointed_ears.jpg',
        'https://www.allthingsdogs.com/wp-content/uploads/2020/01/White-Pomeranian-Feature-678x381.jpg',
      ],
      calendarInvite: [],
    },
  ]);

  const handleChatChange = (chat: string) => {
    setCurrentChat(chat);
  };

  return (
    <div>
      <div className="flex">
        <div className="flex-1 w-20">
          <MatchList matches={matches} changeChat={handleChatChange} />
        </div>
        <div className="flex-1 w-20">
          <ChatBox matches={matches} />
        </div>
        <div className="flex-1 w-20">
          <ProfileBox matches={matches} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
