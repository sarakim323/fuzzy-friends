import React, { useState, FormEvent } from 'react';
// import { BsEmojiSmileFill } from 'react-icons/bs';
// import { IoMdSend } from 'react-icons/io';
// import Picker, { EmojiClickData } from 'emoji-picker-react';

interface ChatInputProps {
  // handleSendMsg: (msg: string) => void;
  mate: Mate;
  user: User;
  message: Chat;
}

const ChatInput: React.FC<ChatInputProps> = ({ message, mate, user }) => {
  // const [msg, setMsg] = useState('');
  // const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  // const handleEmojiPickerhideShow = () => {
  //   setShowEmojiPicker(!showEmojiPicker);
  // };

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const handleEmojiClick = (emoji: EmojiClickData, event: MouseEvent) => {
  //   let message = msg;
  //   message += emoji.emoji;
  //   setMsg(message);
  // };

  // const sendChat = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   if (msg.length > 0) {
  //     handleSendMsg(msg);
  //     setMsg('');
  //   }
  // };
  if (user._id === message.userId) {
    return (
      <div className="flex items-center flex-row-reverse mb-4 p-5">
        <div className="flex-none flex flex-col items-center space-y-1 ml-4">
          <img className="rounded-full w-10 h-10" src={user.profilePic} />
          <a href="#" className="block text-xs hover:underline">
            {user.name}
          </a>
        </div>
        <div className="flex-1 bg-indigo-400 text-white p-2 rounded-lg mb-2 relative">
          <div>{message.message}</div>
          <div className="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-400"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center mb-4 p-5">
        <div className="flex-none flex flex-col items-center space-y-1 mr-4">
          <img className="rounded-full w-10 h-10" src={mate.profilePic} />
          <a href="#" className="block text-xs hover:underline">
            {mate.name}
          </a>
        </div>
        <div className="flex-1 bg-indigo-100 text-gray-800 p-2 rounded-lg mb-2 relative">
          <div>{message.message}</div>
          <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-100"></div>
        </div>
      </div>
    );
  }
};

export default ChatInput;

// return (
//   <div>
//     <div className="button-container">
//       <div className="emoji">
//         <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />
//         {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
//       </div>
//     </div>
//     <form className="input-container" onSubmit={(event) => sendChat(event)}>
//       <input
//         type="text"
//         placeholder="Aa"
//         onChange={(e) => setMsg(e.target.value)}
//         value={msg}
//       />
//       <button type="submit">
//         <IoMdSend />
//       </button>
//     </form>
//   </div>
// );
