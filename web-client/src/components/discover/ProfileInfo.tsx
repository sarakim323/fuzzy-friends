import { CurrentUser } from '../../pages/Discover';

interface ProfileProps {
  currentUser: CurrentUser;
}

const ProfileInfo = ({ currentUser }: ProfileProps) => {
  return (
    <>
      <div className="flex flex-row justify-evenly text-5xl">
        <div>{currentUser.user.name}</div>
      </div>
      <div className="flex flex-row justify-evenly text-2xl">
        <div>{currentUser.user.city}</div>
      </div>
    </>
  );
};

export default ProfileInfo;
