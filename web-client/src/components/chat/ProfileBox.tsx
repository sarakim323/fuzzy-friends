import React from 'react';

// function ProfileBox({ matches }) {
// const [currentUserName, setCurrentUserName] = useState(undefined);
// const [currentUserImage, setCurrentUserImage] = useState(undefined);
// const [currentUserSelected, setCurrentUserSelected] = useState(undefined);
interface ProfileBoxProps {
  matches: Match[];
}

const ProfileBox: React.FC<ProfileBoxProps> = ({ matches }) => {
  console.log(matches[0].profilePic, '12');
  const pic = matches[0].profilePic;

  //mockdata of currentUser below

  const data = {
    id: 1,
    name: 'Sophie',
    age: 4,
    breed: 'Siberian Husky',
    gender: 'female',
    profile_pic:
      'https://canineowners.com/wp-content/uploads/2016/06/Corgi-Husky.png',
    pictures: [
      'https://animalso.com/wp-content/uploads/2016/10/husky-corgi-mix-2-150x150.jpg',
      'https://animalso.com/wp-content/uploads/2016/10/husky-corgi-mix-1.jpg',
      'https://i.pinimg.com/236x/56/e8/ba/56e8ba281d0cce55c4db6e3ee10f0ea4--happy-puppy-puppy-love.jpg',
    ],
    messages: [{ 2: ['Hi, Kuma', 'Hi Sophie', 'How are you?'] }],
    calendar_invite: [],
    description: 'Hi, my name is Sophie, and I like huskies',
  };

  return (
    <>
      <div className="m-10 p-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md h-[38rem] grid grid-cols-1 gap-2 content-center">
        <div className="relative w-48 h-48 ml-16">
          <img
            className="absolute rounded-full border border-gray-300 shadow=sm"
            src={data.profile_pic}
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
          <div className="absolute top-0 right-0 h-10 w-10 my-1 border-4 border-white rounded-full bg-green-400 z-2"></div>
        </div>
        <div className="p-5">
          <h5 className="mb-2 ml-28 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
            {data.name}
          </h5>
        </div>
        <div className="mb-5 font-normal text-gray-700 dark:text-gray-400 text-center">
          <div className="content-center card card-width bg-dark">
            <section className="flex-row justify-center space-x-20">
              <h3 className="mb-5 text-l font-bold tracking-tight text-gray-700 dark:text-gray">
                Age: {data.age}
              </h3>
              <h3 className="mb-5 text-l font-bold tracking-tight text-gray-700 dark:text-gray">
                Breed: {data.breed}
              </h3>
              <h3 className="mb-5 text-l font-bold tracking-tight text-gray-700 dark:text-gray">
                Gender: {data.gender}
              </h3>
            </section>
            <h2>{data.description}</h2>
            <hr className="w-48 h-1 mx-auto my-1 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
            {/* <p>{content}</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileBox;
