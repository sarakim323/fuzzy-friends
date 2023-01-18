import React, { useState } from 'react';

interface MatchListProps {
  matches: Match[];
  changeChat: (chat: string) => void;
}

const MatchList: React.FC<MatchListProps> = ({ matches, changeChat }) => {
  const [currentUserSelected, setCurrentUserSelected] = useState(undefined);

  const [searchQuery, setSearchQuery] = useState('');

  //useEffect to retrieve data via GET (users/:id/friends)
  //below dummydata
  // console.log(matches[0].profilePic, '12');
  // const pic = matches[0].profilePic;

  const data = [
    {
      2: [
        { 2: ['User would like to match with you', '1 Day Ago'] },
        { 1: ['Hey! Wassup?', '1hr'] },
        { 2: ['Nm - wbu?', '49min'] },
      ],
    },
    {
      3: [
        { 3: ['User would like to match with you', '1 Day Ago'] },
        { 1: ['How do you do?', '4hr'] },
        { 3: ['Hiii', '25min'] },
      ],
    },
    {
      4: [
        { 1: ['You sent a match request to User', '10hrs'] },
        { 4: ['What do you like to do', '2hr'] },
        { 2: ['Dont talk to me', '12min'] },
      ],
    },
    {
      5: [{ 5: ['User would like to match with you', '30min'] }],
    },
  ];

  const doSearch = (event: React.FormEvent) => {
    event.preventDefault();
    // handleSubmit(searchQuery);
    setSearchQuery('');
  };

  const whileSearching = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const changeCurrentChat = (index, match) => {
    setCurrentUserSelected(index);
    changeChat(match);
  };

  return (
    // <div>
    <div className="m-10 max-w-sm min-h-fit flex flex-col border shadow-md bg-white rounded-lg bg-white border border-gray-200 shadow-md dark:bg-warmGray-700 dark:border-gray- gap-2 content-center">
      <div className="flex items-center justify-between border-b p-5">
        <div className="flex items-center">
          <form onSubmit={doSearch}>
            <input
              type="search"
              id="default-search"
              className="block w-full p-2 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100"
              placeholder="Search for name..."
              value={searchQuery}
              onChange={whileSearching}
            />
          </form>
        </div>
      </div>

      <ul className="w-full overflow-auto h-[32rem]">
        <h2 className="my-2 mb-2 ml-2 text-lg text-gray-600">Chats</h2>
        <div className="matchList">
          {/* matches instead of data? */}
          {matches.map((match, index) => {
            return (
              <div
                key={match._id}
                className={`contact ${
                  index === currentUserSelected ? 'selected' : ''
                }`}
                // onClick={() => changeCurrentChat(index, contact)}
              >
                <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src={match.profile_pic}
                    alt=""
                  />
                  <div className="w-full pb-2">
                    <div className="flex justify-between">
                      <span className="block ml-2 font-semibold text-gray-600">
                        <h3>{match.name}</h3>
                      </span>
                      <span className="block ml-2 text-sm text-gray-600">
                        {/* <MatchListItem recentTime={data[match.id][1]} /> */}
                        {/* {console.log(data[match.id], '123')} */}
                      </span>
                    </div>
                    <span className="block ml-2 text-sm text-gray-600">
                      <h3>{'Nm - wbu?'}</h3>
                    </span>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </ul>
    </div>
    // </div>
  );
};

export default MatchList;
