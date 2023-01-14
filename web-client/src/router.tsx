import { Routes, Route } from 'react-router-dom';

import { Main } from './templates/Main';
import { Home, NotFound } from './pages';

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Main section={<Home />} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
