import { useEffect, useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { sendMessageRoute, receiveMessageRoute } from '../utils/APIRoutes';
import ChatInput from './ChatBox';

function ChatBox({ currentChat, socket }) {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const handleSendMsg = async (msg) => {
    // post message
  };

  // useEffect(() => {
  //   if (socket.current) {
  //     socket.current.on('msg-receive', (msg) => {
  //       setArrivalMessage({ fromSelf: false, message: msg });
  //     });
  //   }
  // }, []);

  // useEffect(() => {
  //   arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  // }, [arrivalMessage]);

  // useEffect(() => {
  //   scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  // }, [messages]);

  return (
    <div>
      <div className="chat-header">
        <div className="user-details">
          <div className="username">
            <h3>{currentChat.user}</h3>
          </div>
        </div>
      </div>
      <div className="chat-messages">
        {messages.map((message) => {
          return (
            <div ref={scrollRef} key={uuidv4()}>
              <div
                className={`message ${message.fromSelf ? 'sent' : 'received'}`}
              >
                <div className="content ">
                  <p>{message.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ChatInput handleSendMsg={handleSendMsg} />
    </div>
  );
}

export default ChatBox;
