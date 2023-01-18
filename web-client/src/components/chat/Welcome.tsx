import { useEffect, useState } from 'react';
import { Navbar } from '../';

function Welcome() {
  const [userName, setUserName] = useState('');

  // useEffect(async () => {
  //   setUserName(
  //     await JSON.parse(
  //       localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
  //     ).username
  //   );
  // }, []);

  return (
    <div>
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a mate to Start mesasging.</h3>
    </div>
  );
}

export default Welcome;
