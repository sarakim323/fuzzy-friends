import React, { FC } from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import PageLoader from './PageLoader';

interface PropType {
  component: React.FC;
}

export const ProtectedRoute: FC<PropType> = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div>
        <PageLoader />
      </div>
    ),
  });
  return <Component />;
};
