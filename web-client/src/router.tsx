import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { ProtectedRoute } from './components/authentication/ProtectedRoute';
import PageLoader from './components/authentication/PageLoader';

import { Main } from './templates/Main';
import { Home, NotFound, Chat, Profile, Callback, CalendarPage } from './pages';

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
      <Route path="/profile" element={<Main section={<Profile />} />} />
      <Route path="/calendar" element={<Main section={<CalendarPage />} />} />

      {/* Add Protected Route here */}
      {/* <Route path="/chat" element={<ProtectedRoute section={<Chat />} />} />
      <Route
        path="/profile"
        element={<ProtectedRoute section={<Profile />} />}
      />
      <Route
        path="/calendar"
        element={<ProtectedRoute section={<CalendarPage />} />}
      /> */}

      <Route path="/callback" element={<Main section={<Callback />} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
