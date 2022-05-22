import { Button, useColorMode } from '@chakra-ui/react';
import React, { FC } from 'react';

export const Home: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <h1>Home</h1>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </div>
  );
};
