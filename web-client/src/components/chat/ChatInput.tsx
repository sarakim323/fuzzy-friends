// import React, { useState, FormEvent } from 'react';
// import { BsEmojiSmileFill } from 'react-icons/bs';
// import { IoMdSend } from 'react-icons/io';
// import Picker, { EmojiClickData } from 'emoji-picker-react';

// interface ChatInputProps {
//   handleSendMsg: (msg: string) => void;
// }

// const ChatInput: React.FC<ChatInputProps> = ({ handleSendMsg }) => {
//   const [msg, setMsg] = useState('');
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);

//   const handleEmojiPickerhideShow = () => {
//     setShowEmojiPicker(!showEmojiPicker);
//   };

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const handleEmojiClick = (emoji: EmojiClickData, event: MouseEvent) => {
//     let message = msg;
//     message += emoji.emoji;
//     setMsg(message);
//   };

//   const sendChat = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (msg.length > 0) {
//       handleSendMsg(msg);
//       setMsg('');
//     }
//   };

//   return (
//     <div>
//       <div className="button-container">
//         <div className="emoji">
//           <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />
//           {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
//         </div>
//       </div>
//       <form className="input-container" onSubmit={(event) => sendChat(event)}>
//         <input
//           type="text"
//           placeholder="Aa"
//           onChange={(e) => setMsg(e.target.value)}
//           value={msg}
//         />
//         <button type="submit">
//           <IoMdSend />
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ChatInput;
