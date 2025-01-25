import React, { useState } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


interface LayoutContext {
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}
const Layout: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const contextValue: LayoutContext = { setUsername };

  return (
    <>
      <Navbar username={username} />
      <Outlet context={contextValue} />
      <Footer />
    </>
  );
};

export default Layout;