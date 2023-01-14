import { Navbar, Sidebar } from './components/';
import { useState } from 'react';

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
