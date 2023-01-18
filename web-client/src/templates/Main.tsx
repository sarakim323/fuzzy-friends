import React, { useState } from 'react';
import { Navbar, Sidebar } from '../pages';
import '../index.css';
interface IProps {
  section: React.ReactNode;
}

export const Main: React.FC<IProps> = ({ section }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="relative pt-16">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        {menuOpen && <Sidebar />}
      </div>
      {section}
    </div>
  );
};
