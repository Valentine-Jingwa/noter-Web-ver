import React from 'react';
import Logo from './logo';
import NavBar from './UserPages/NavBar';
const NavElements = () => {
  // Adjust the background image URL as necessary

  return (
    <header
      className="flex justify-between py-8 border-solid border-b-2 border-yellow-900 text-black"
    >
      <Logo />
      <NavBar />

    </header>
  );
};

export default NavElements;
