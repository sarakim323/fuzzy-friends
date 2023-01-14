import { useState } from 'react';
import { Navbar, Sidebar } from './components/';

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Sidebar />
    </>
  );
}

export default App;
