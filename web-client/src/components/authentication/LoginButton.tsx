import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/profile',
      },
    });
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={handleLogin}
    >
      Log In
    </button>
  );
};

export default LoginButton;
