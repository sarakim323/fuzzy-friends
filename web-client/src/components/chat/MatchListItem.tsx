import React, { useEffect, useState } from 'react';

function MatchListItem({ matches, changeChat }) {
  return (
    <div>
      <div className="m-10 p-20 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-warmGray-700 dark:border-gray- h-auto gap-2 content-center">
        <div className="searchForm">
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

        <ul className="overflow-auto h-[32rem]">
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
        </ul>
      </div>
    </div>
  );
}

export default MatchList;
