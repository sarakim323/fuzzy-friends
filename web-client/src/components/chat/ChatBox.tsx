import { useState, useRef } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import axios from 'axios';
// import { sendMessageRoute, receiveMessageRoute } from '../utils/APIRoutes';
// import ChatInput from './ChatBox';

function ChatBox({ matches }) {
  // const [messages, setMessages] = useState([]);
  // const scrollRef = useRef();
  // const [arrivalMessage, setArrivalMessage] = useState(null);
  const pic = matches[0].profile_pic;
  const pic2 = matches[1].profile_pic;
  return (
    <div className="my-10 w-90 h-96 flex flex-col border shadow-md bg-white rounded">
      <div className="flex items-center justify-between border-b p-5">
        <div className="flex items-center">
          <img className="rounded-full w-10 h-10" src={pic} />
          <div className="pl-2">
            <div className="font-semibold">
              <a className="hover:underline" href="#">
                {matches[0].name}
              </a>
            </div>
            <div className="text-xs text-gray-600">Online</div>
          </div>
        </div>
        <div>
          <a
            className="inline-flex hover:bg-indigo-50 rounded-full p-2"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
          </a>
          <button
            className="inline-flex hover:bg-indigo-50 rounded-full p-2"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center mb-4 p-5">
        <div className="flex-none flex flex-col items-center space-y-1 mr-4">
          <img className="rounded-full w-10 h-10" src={pic} />
          <a href="#" className="block text-xs hover:underline">
            {matches[0].name}
          </a>
        </div>
        <div className="flex-1 bg-indigo-400 text-white p-2 rounded-lg mb-2 relative">
          <div>Hey! Wassup?</div>
          <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-400"></div>
        </div>
      </div>
      <div className="flex items-center flex-row-reverse mb-4 p-5">
        <div className="flex-none flex flex-col items-center space-y-1 mr-4">
          <img className="rounded-full w-10 h-10" src={pic2} />
          <a href="#" className="block text-xs hover:underline">
            {matches[1].name}
          </a>
        </div>
        <div className="flex-1 bg-indigo-400 text-white p-2 rounded-lg mb-2 relative">
          <div>Nm - wbu?</div>
          <div className="absolute right-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-400"></div>
        </div>
      </div>
      {/* <div className="flex items-center border-t p-2"></div> */}
      <div className="w-11/12">
        <input
          className="w-full rounded-full border border-gray-200 px-4"
          type="text"
          value=""
          placeholder="Aa"
          autoFocus
        />
      </div>
      <div>
        <button
          className="inline-flex hover:big-indigo-50 rounded-full p-2"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
