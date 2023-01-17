import React, { useEffect, useState } from 'react';

function MatchList({ matchedUsers }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentUserSelected, setCurrentUserSelected] = useState(undefined);

  // useEffect(() => {}, []);

  return (
    <div className="flex bg-warmGray-200">
      <div>
        <h3>snappy</h3>
      </div>
      <div className="matchList"></div>
    </div>
  );
}

export default MatchList;
