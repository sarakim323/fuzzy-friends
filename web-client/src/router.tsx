import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { ProtectedRoute } from './components/authentication/ProtectedRoute';
import PageLoader from './components/authentication/PageLoader';
import { useState } from 'react';

import { Main } from './templates/Main';
import {
  Home,
  NotFound,
  Chat,
  Profile,
  Callback,
  CalendarPage,
  Discover,
} from './pages';

export const Router = () => {
  const { isLoading } = useAuth0();
  const [user, setUser] = useState<object>({});

  if (isLoading) {
    return (
      <div>
        <PageLoader />
      </div>
    );
  }

  return (
    <Routes>
      <Route index element={<Main section={<Home user={user} />} />} />
      <Route path="/chat" element={<Main section={<Chat user={user} />} />} />
      <Route
        path="/discover"
        element={<Main section={<Discover user={user} />} />}
      />
      <Route
        path="/profile"
        element={<Main section={<Profile user={user} setUser={setUser} />} />}
      />
      <Route
        path="/calendar"
        element={<Main section={<CalendarPage user={user} />} />}
      />

      {/* Add Protected Route here */}
      {/* <Route
        path="/chat"
        element={<ProtectedRoute component={<Chat user={user} />} />}
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute component={<Profile user={user} setUser={setUser} />} />
        }
      />
      <Route
        path="/discover"
        element={<ProtectedRoute component={<Discover user={user} />} />}
      />
      <Route
        path="/calendar"
        element={<ProtectedRoute component={<CalendarPage user={user} />} />}
      /> */}

      <Route path="/callback" element={<Main section={<Callback />} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
