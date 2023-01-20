import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LogoutButton = () => {
  const { logout } = useAuth0();
  const handleLogout = async () => {
    logout({
      returnTo: window.location.origin,
    });
  };
  return (
    <button
      className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={handleLogout}
    >
      Log Out
    </button>
  );
};
