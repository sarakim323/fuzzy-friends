import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

interface Auth0ProviderOptions {
  children?: React.ReactElement;
}

const Auth0ProviderWithNavigate = ({ children }: Auth0ProviderOptions) => {
  const navigate = useNavigate();
  const domain = 'dev-51foabpqhdzjgzgs.us.auth0.com';
  const clientId = 'eqEKTfuMrC8sO8AweXSWTDSKbAB1MdDb';
  const redirectUri = 'http://localhost:5173/callback';

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
