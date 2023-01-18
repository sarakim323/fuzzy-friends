import React from 'react';

interface ChatBoxProps {
  matches: Match[];
  mate: Mate[];
  user: User[];
  chat: Chat[];
}

const ChatBox: React.FC<ChatBoxProps> = ({ mate, user }) => {
  // const [messages, setMessages] = useState([]);
  // const scrollRef = useRef();
  // const [arrivalMessage, setArrivalMessage] = useState(null);
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
      <div className="flex items-center mb-4 p-5">
        <div className="flex-none flex flex-col items-center space-y-1 mr-4">
          <img className="rounded-full w-10 h-10" src={user.profilePic} />
          <a href="#" className="block text-xs hover:underline">
            {user.name}
          </a>
        </div>
        <div className="flex-1 bg-indigo-100 text-gray-800 p-2 rounded-lg mb-2 relative">
          <div>Hey! Wassup?</div>
          <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-100"></div>
        </div>
      </div>
      <div className="flex items-center flex-row-reverse mb-4 p-5">
        <div className="flex-none flex flex-col items-center space-y-1 ml-4">
          <img className="rounded-full w-10 h-10" src={mate.profilePic} />
          <a href="#" className="block text-xs hover:underline">
            {mate.name}
          </a>
        </div>
        <div className="flex-1 bg-indigo-400 text-white p-2 rounded-lg mb-2 relative">
          <div>That&apos;s for me to know and you to find out :D</div>
          <div className="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-400"></div>
        </div>
      </div>
      <div className="flex items-center mb-4 p-4">
        <input
          className="w-full rounded-full border border-gray-200 px-4"
          type="text"
          value=""
          placeholder="Aa"
          autoFocus
        />
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
