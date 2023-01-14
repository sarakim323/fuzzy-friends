import { Routes, Route } from 'react-router-dom';

import { Main } from './templates/Main';
import { Home, NotFound } from './pages';
import Discovery from './components/Discovery';

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Main section={<Home />} />} />
      <Route path="/discovery" element={<Discovery />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
