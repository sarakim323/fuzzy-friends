import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import PageLoader from './PageLoader';

interface Props {
  component: React.FC;
}

export const ProtectedRoute: React.FC<Props> = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div>
        <PageLoader />
      </div>
    ),
  });
  return <Component />;
};
