import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import PageLoader from './components/authentication/PageLoader';

import { Main } from './templates/Main';
import { Home, NotFound, Chat } from './pages';

export const Router = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div>
        <PageLoader />
      </div>
    );
  }

  return (
    <Routes>
      <Route index element={<Main section={<Home />} />} />
      <Route path="/chat" element={<Main section={<Chat />} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
