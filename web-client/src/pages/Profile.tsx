import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Description from '../components/profile/Description';
import EditForm from '../components/profile/EditForm';
import CarouselCard from '../components/profile/Carousel';

const Profile = ({ setUser, user }) => {
  const Auth0User = useAuth0().user;

  // if (!user) {
  //   return 'Not a VALID user!';
  // }

  // return (
  //   <div>
  //     <h1>My Profile</h1>
  //     <div>
  //       <img src={user.picture} alt="profile" />
  //       <div>
  //         <h2>{user.name}</h2>
  //       </div>
  //     </div>
  //   </div>
  // );
  useEffect(() => {
    // setUser(user);
    if (user._id === undefined && Auth0User && Auth0User.sub) {
      axios
        .get(`http://54.144.2.231:3000/users/${Auth0User.sub}`)
        .then((data) => {
          if (data.data._id === undefined) {
            return axios.post(
              `http://54.144.2.231:3000/users/${Auth0User.sub}`
            );
          } else {
            setUser(data.data);
            console.log('SET USER TO:', data.data);
          }
        })
        .then((data) => {
          if (data !== undefined) {
            setUser(data.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [Auth0User]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [all, setAll] = useState([
    {
      id: '1',
      title: 'About',
      content:
        'I am a very friendly and playful dog who loves strings very much!',
    },
  ]);

  const [edit, setEdit] = useState(false);
  const [editID, setEditID] = useState('');
  const [isCreateNewDescription, setIsCreateNewDescription] = useState(false);

  const saveDescriptionContentToState = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.currentTarget.value);
  };

  const toggleCreateNewDescription = () => {
    setIsCreateNewDescription(!isCreateNewDescription);
  };

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const editDescription = (id: string) => {
    setEditID(id);
    toggleEdit();
  };

  const updateDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
    const updatedDescription = all.map((each) => {
      if (each.id === editID) {
        return {
          ...each,
          title: title || each.title,
          content: content || each.content,
        };
      }
      return each;
    });
    setAll(updatedDescription);
    toggleEdit();
  };

  if (edit) {
    const description = all.find((description) => {
      return description.id === editID;
    });
    console.log('description is ', description);
    return (
      <>
        {description && (
          <EditForm
            content={description.content}
            updateDescription={updateDescription}
            saveDescriptionContentToState={saveDescriptionContentToState}
            toggleCreateNewDescription={toggleCreateNewDescription}
            toggleEdit={toggleEdit}
          />
        )}
      </>
    );
  }

  return (
    <div className="flex justify-evenly">
      <div className="float-left m-10 p-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 h-110 grid grid-cols-1 gap-2 content-center">
        {/* Profile Pic */}
        <div className="relative w-48 h-48 ml-16">
          <img
            className="absolute rounded-full border border-gray-300 shadow=sm"
            src="https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-8.jpg"
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
        {/* Profile Name */}
        <div className="p-5">
          <h5 className="ml-28 pt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {user ? `${user.name}` : null}
          </h5>
        </div>
        {/* Profile Breed */}
        <div className="p-5">
          <h5 className="mb-4 pb-5 ml-32 text-m font-bold tracking-tight text-gray-900 dark:text-white">
            Corgi
          </h5>
        </div>
        {/* Description */}
        <div className="mb-4 font-normal text-gray-700 dark:text-gray-400 text-center">
          {!all.length ? (
            <div>
              <li>There is no description yet.</li>
            </div>
          ) : (
            all.map((each) => (
              <Description
                id={each.id}
                key={each.id}
                content={each.content}
                editDescription={editDescription}
              />
            ))
          )}
        </div>
      </div>
      <div>
        <CarouselCard />
      </div>
    </div>
  );
};

export default Profile;
