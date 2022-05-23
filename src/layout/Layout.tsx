import { Stack } from '@chakra-ui/react';
import React, { FC } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <Stack boxSize='full'>
      <Header />
      {children}
      <Footer />
    </Stack>
  );
};

export default Layout;
