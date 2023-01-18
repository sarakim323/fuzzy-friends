import { useState } from 'react';
// import { Navbar } from '../';

function ProfileBox({ matches }) {
  console.log(matches[0].profile_pic, '12');
  const pic = matches[0].profile_pic;
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentUserSelected, setCurrentUserSelected] = useState(undefined);

  return (
    <div>
      <div className="m-10 p-20 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-warmGray-700 dark:border-gray- h-110 gap-2 content-center">
        <div className="flex items-center justify-between">
          <img
            className="mt-6 w-fit rounded-full border border-gray-300 shadow=sm"
            src={pic}
            alt="profile photo"
          />
        </div>
        <div className="matchList"></div>
      </div>
    </div>
  );
}

export default ProfileBox;
