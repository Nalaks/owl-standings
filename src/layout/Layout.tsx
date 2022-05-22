import React, { FC } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
