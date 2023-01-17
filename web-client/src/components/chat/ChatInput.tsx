import { useEffect, useState, useRef, FormEvent } from 'react';
import { BsEmojiSmileFill } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';
import Picker from 'emoji-picker-react';

function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEmojiClick = (event: any, emojiObj: { emoji: string }) => {
    let message = msg;
    message += emojiObj.emoji;
    setMsg(message);
  };

  const sendChat = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg('');
    }
  };

  return (
    <div>
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />
          {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
        </div>
      </div>
      <form className="input-container" onSubmit={(event) => sendChat(event)}>
        <input
          type="text"
          placeholder="Aa"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
