import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  const handleSignup = async () => {
    await loginWithRedirect({
      screen_hint: 'signup',
      appState: {
        returnTo: '/profile',
      },
    });
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={handleSignup}
    >
      Sign Up
    </button>
  );
};

export default SignupButton;
