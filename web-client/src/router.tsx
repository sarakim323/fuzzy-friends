import { Routes, Route } from 'react-router-dom';

import { Main } from './templates/Main';
import { Home, NotFound, Chat, CalendarPage } from './pages';

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Main section={<Home />} />} />
      <Route path="/chat" element={<Main section={<Chat />} />} />
      <Route path="/calendar" element={<Main section={<CalendarPage />} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
