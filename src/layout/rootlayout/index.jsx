import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../globalComponents/comonLayout/header';
import Footer from '../../globalComponents/comonLayout/footer';

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
