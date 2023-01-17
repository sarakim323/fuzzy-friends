import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from '@trendyol-js/react-carousel';

interface User {
  id: number;
  friends: [];
}
interface Profile {
  id: number;
  UserId: number;
  photos: string[];
  name: string;
  city: string;
}
interface CurrentUser {
  user: Profile;
  index: number;
}
const Discovery = (user: User) => {
  const buttonClassNames =
    'fa-solid rounded-full p-3 text-md hover:cursor-pointer bg-[#E3DCD9]';
  const barkSniffClasses =
    'rounded-2xl text-md hover:cursor-pointer text-center bg-[#E3DCD9] px-5 py-2 text-lg';
  // const imageArray: string[] = [
  //   'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&w=1000&q=80',
  //   'https://thumbs.dreamstime.com/b/beautiful-happy-reddish-havanese-puppy-dog-sitting-frontal-looking-camera-isolated-white-background-46868560.jpg',
  //   'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&w=1000&q=80',
  //   'https://thumbs.dreamstime.com/b/beautiful-happy-reddish-havanese-puppy-dog-sitting-frontal-looking-camera-isolated-white-background-46868560.jpg',
  // ];
  const [ranApiCall, setRanApiCall] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<CurrentUser>({
    user: { id: 0, UserId: 0, photos: [], name: '', city: '' },
    index: 0,
  });
  const [profileArray, setProfileArray] = useState<Profile[]>([]);

  const handleBark = () => {
    setCurrentUser({
      user: profileArray[currentUser.index + 1],
      index: (currentUser.index += 1),
    });
  };

  const handleSniff = () => {
    axios
      .put(
        `http://54.144.2.231:3000/users/${user.id}/friends/${currentUser.user.id}`
      )
      .then(() => {
        setCurrentUser({
          user: profileArray[currentUser.index + 1],
          index: (currentUser.index += 1),
        });
      });
  };

  useEffect(() => {
    setRanApiCall(false);
    axios
      .get(`http://54.144.2.231:3000/users/3/discover`)
      .then((data) => {
        setRanApiCall(true);
        setCurrentUser({ user: data.data[0], index: 0 });
        setProfileArray(data.data);
      })
      .catch((err) => {
        console.log(err);
        setRanApiCall(true);
      });
  }, []);

  return (
    <div className="">
      {ranApiCall && currentUser.user.id !== 0 ? (
        <>
          {/* Navbar example */}
          <div className="flex flex-row text-lg bg-white border-2 border-black justify-center">
            <div>Navbar</div>
          </div>

          {/* Title */}
          <div className="flex flex-row justify-center text-6xl">
            <div>Discover Mode</div>
          </div>

          {/* <div className="flex items-center gap-2 overflow-x-auto">

          </div> */}

          {/* Carousel */}
          <div className="flex flex-col h-[90vh] justify-center items-center m-auto w-[100%]">
            <Carousel
              leftArrow={
                <i className={buttonClassNames + ' fa-arrow-left'}></i>
              }
              rightArrow={
                <i className={buttonClassNames + ' fa-arrow-right'}></i>
              }
              show={2}
              slide={1}
              swiping={true}
              className="flex flex-row justify-evenly items-center max-w-[60%]"
              transition={0.5}
            >
              {/* Images */}
              {currentUser.user.photos.map((image, index) => (
                <div
                  className="flex-row justify-center items-center"
                  key={index}
                >
                  {/* Main Image */}
                  <img
                    src={image}
                    className="max-h-[50vh] max-w-[500px] object-center rounded-3xl"
                    alt=""
                  />
                </div>
              ))}
            </Carousel>

            {/* Yes/No buttons */}
            <div className="flex flex-row justify-between w-[50%] mt-[-5vh] mb-[8vh] z-[10]">
              <div>
                <button onClick={handleBark} className={barkSniffClasses}>
                  Bark
                </button>
              </div>
              <div>
                <button onClick={handleSniff} className={barkSniffClasses}>
                  Sniff
                </button>
              </div>
            </div>

            {/* Profile info */}
            <div className="flex flex-row justify-evenly text-5xl">
              <div>{currentUser.user.name}</div>
            </div>
            <div className="flex flex-row justify-evenly text-2xl">
              <div>{currentUser.user.city}</div>
            </div>
          </div>
        </>
      ) : ranApiCall === true ? (
        <>
          Please login <a href="/callback">here</a>
        </>
      ) : null}
    </div>
  );
};
// ) : ranApiCall === false ? (
//   <>Loading Discover Mode</>

export default Discovery;
