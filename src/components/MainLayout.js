import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import FloatingNavbar from './FloatingNavbar';

const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>
        {children}
      </main>
      <FloatingNavbar></FloatingNavbar>
      <Footer />
    </>
  );
};

export default MainLayout;
