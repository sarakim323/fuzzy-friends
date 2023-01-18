import React, { useEffect, useState } from 'react';

function MatchList({ matches, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentUserSelected, setCurrentUserSelected] = useState(undefined);

  const [searchQuery, setSearchQuery] = useState('');

  console.log(matches[0].profile_pic, '12');
  const pic = matches[0].profile_pic;

  // useEffect(() => {}, []);
  {
    /* <div className="relative w-48 h-48 ml-16">
          <img
            className="absolute rounded-full border border-gray-300 shadow=sm"
            src={pic}
            alt="profile photo"
          />
        </div> */
  }

  const doSearch = (event) => {
    event.preventDefault();
    // handleSubmit(searchQuery);
    setSearchQuery('');
  };

  const whileSearching = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div>
      <div className="m-10 p-20 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-warmGray-700 dark:border-gray- h-auto gap-2 content-center">
        <div>Chats</div>
        <div className="searchForm">
          <form onSubmit={doSearch}>
            <input
              type="search"
              id="default-search"
              className="block w-full p-2 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for name..."
              value={searchQuery}
              onChange={whileSearching}
            />
          </form>
        </div>
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
                <div className="avatar">
                  {/* <img
                    src={}
                    alt=""
                  /> */}
                </div>
                <div className="username">
                  <h3>{match.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MatchList;
