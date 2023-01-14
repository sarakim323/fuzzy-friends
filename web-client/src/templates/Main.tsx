import React, { useState } from 'react';
import { Navbar, Sidebar } from '../pages';

interface IProps {
  section: React.ReactNode;
}

export const Main: React.FC<IProps> = ({ section }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Sidebar />
      {section}
    </div>
  );
};
