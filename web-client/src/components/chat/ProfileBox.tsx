import { useState } from 'react';
// import { Navbar } from '../';

function ProfileBox({ matches }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentUserSelected, setCurrentUserSelected] = useState(undefined);

  return (
    <>
      <div className="m-10 p-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md h-[27rem] grid grid-cols-1 gap-2 content-center">
        <div className="relative w-48 h-48 ml-16">
          <img
            className="absolute rounded-full border border-gray-300 shadow=sm"
            src={matches[0].profile_pic}
            alt="profile photo"
          />
          <div className="w-48 h-48 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
            <img
              className="hidden group-hover:block w-12"
              src="https://www.svgrepo.com/show/33565/upload.svg"
              alt=""
            />
            <input className="opacity-0 absolute" type="file" id="formFile" />
          </div>
        </div>
        <div className="absolute top-0 right-0 h-10 w-10 my-1 border-4 border-white rounded-full bg-green-400 z-2"></div>
      </div>
      <div className="p-5">
        <h5 className="mb-2 ml-28 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Name
        </h5>
      </div>
      <div className="mb-5 font-normal text-gray-700 dark:text-gray-400 text-center"></div>
    </>
  );
}

export default ProfileBox;
