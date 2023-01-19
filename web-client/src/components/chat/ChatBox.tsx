import React from 'react';
import ChatInput from './ChatInput';

interface ChatBoxProps {
  mate: Mate;
  user: User;
  currentChat: Chat[];
}

const ChatBox: React.FC<ChatBoxProps> = ({ currentChat, mate, user }) => {
  // const [messages, setMessages] = useState([]);
  // const scrollRef = useRef();
  // const [arrivalMessage, setArrivalMessage] = useState(null);
  // console.log('currentChat: ', currentChat); // passing
  return (
    <div className="m-10 max-w-sm min-h-fit flex flex-col border shadow-md bg-white rounded-lg bg-white border border-gray-200 shadow-md dark:bg-warmGray-700 dark:border-gray- gap-2 content-center">
      <div className="flex items-center justify-between border-b p-5">
        <div className="flex items-center">
          <img className="rounded-full w-10 h-10" src={mate.profilePic} />
          <div className="pl-2">
            <div className="font-semibold">
              <a className="hover:underline" href="#">
                {mate.name}
              </a>
            </div>
            <div className="text-xs text-gray-600">{mate.breed}</div>
          </div>
        </div>
        <div>
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
      {currentChat.map((message) => {
        return (
          <ChatInput
            key={message.userId}
            message={message}
            mate={mate}
            user={user}
          />
        );
      })}
      <div className="flex items-center mb-4 p-4">
        <form className="w-full rounded-full border border-gray-200 px-4">
          <input type="text" value="" placeholder="Aa" autoFocus />
        </form>
        <button
          className="inline-flex hover:bg-indigo-50 rounded-full ml-1 p-2"
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
