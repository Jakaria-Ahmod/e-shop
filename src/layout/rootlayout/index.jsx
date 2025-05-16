import React from 'react';
import Header from '../../globalComponents/header';
import { Outlet } from 'react-router';
import Footer from '../../globalComponents/footer';

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
