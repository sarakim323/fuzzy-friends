import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import PageLoader from './PageLoader';

interface Props {
  section: React.ReactNode;
}

export const ProtectedRoute: React.FC<Props> = ({ section }) => {
  const Section = withAuthenticationRequired(section, {
    onRedirecting: () => (
      <div>
        <PageLoader />
      </div>
    ),
  });
  return <Section />;
};
