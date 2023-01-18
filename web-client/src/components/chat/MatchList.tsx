import React, { useEffect, useState } from 'react';
// import MatchListItem from 'MatchListItem.js';

function MatchList({ matches, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentUserSelected, setCurrentUserSelected] = useState(undefined);

  const [searchQuery, setSearchQuery] = useState('');

  //useEffect to retrieve data via GET (users/:id/friends)
  //below dummydata
  const data = {};
  const doSearch = (event) => {
    event.preventDefault();
    // handleSubmit(searchQuery);
    setSearchQuery('');
  };

  const whileSearching = (event) => {
    setSearchQuery(event.target.value);
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
          {matches.map((match, index) => {
            return (
              <div
                key={match._id}
                className={`contact ${
                  index === currentUserSelected ? 'selected' : ''
                }`}
                onClick={() => changeCurrentChat(index, contact)}
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
                        <h3>{'50min'}</h3>
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
}

export default MatchList;
