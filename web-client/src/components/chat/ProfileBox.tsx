import React from 'react';

interface ProfileBoxProps {
  matches: Match[];
}

const ProfileBox: React.FC<ProfileBoxProps> = ({ matches }) => {
  console.log(matches[0].profilePic, '12');
  const pic = matches[0].profilePic;

  return (
    <div className="flex bg-warmGray-200">
      <div className="m-10 p-20 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-warmGray-700 dark:border-gray- h-110 gap-2 content-center">
        <div className="relative w-48 h-48 ml-16">
          <img
            className="absolute rounded-full border border-gray-300 shadow=sm"
            src={pic}
            alt="profile photo"
          />
        </div>
        <div className="matchList"></div>
      </div>
    </div>
  );
};

export default ProfileBox;
