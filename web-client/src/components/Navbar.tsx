import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (newValue: boolean) => void;
}
const Navbar: React.FC<NavbarProps> = ({ menuOpen, setMenuOpen }) => {
  console.log(menuOpen);
  return (
    <nav className="bg-gray-800 p-4 mt-0 fixed w-full z-10 top-0">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="flex space-x-4 w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {' '}
            <MenuIcon />
          </button>
          <a
            className="text-white no-underline hover:text-white hover:no-underline"
            href="#"
          >
            <span className="text-2xl pl-2">
              <i className="em em-grinning"></i> Logo
            </span>
          </a>
        </div>
        <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end"></div>
      </div>
    </nav>
  );
};

export default Navbar;
