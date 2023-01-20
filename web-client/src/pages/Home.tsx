import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from '../components/authentication/LoginButton';
import { SignupButton } from '../components/authentication/SignupButton';

export const Home = () => {
  const { isAuthenticated } = useAuth0();
  const logo =
    'https://www.freepnglogos.com/uploads/bone-png/clipartist-clip-art-cartoon-bone-skull-bones-clipartist-svg-5.png';

  return (
    <div className="container mx-auto items-center text-center bg-accent-dark bg-cover bg-hero h-screen bg-[length:800px_90%]">
      <h1 className="ml-[5%] pt-4 text-4xl font-bold tracking-tight text-orange-900 dark:text-orange">
        Welcome to Fuzzy Friends Home Page
      </h1>
      <img
        className="m-10 ml-[48%] max-w-[10.5rem] justify-center"
        src={logo}
        alt="Fuzzy Friends Logo"
        width="120"
      />
      <p className="ml-[4%] pt-4 text-xl font-bold tracking-tight text-orange-900 dark:text-orange">
        A social network to grow your pup's pack
      </p>
      <div className="container mx-auto flex flex-wrap items-center">
        {!isAuthenticated && (
          <>
            <h5 className="ml-28 pt-4 text-m font-bold tracking-tight text-orange-900 dark:text-orange">
              To start using the app, please sign in.
            </h5>
            <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end"></div>
            <SignupButton />
            <LoginButton />
          </>
        )}
      </div>
    </div>
  );
};
