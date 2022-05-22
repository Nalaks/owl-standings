import React, { FC } from 'react';
import {
  Container,
  HStack,
  Icon,
  Link,
  Switch,
  useColorMode,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { Link as RouterLink } from 'react-router-dom';

const Header: FC = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <Wrap spacing='10px' align='center' justify='center'>
        <WrapItem>
          <Link as={RouterLink} to='/'>
            Home
          </Link>
        </WrapItem>
        <WrapItem>
          <Link as={RouterLink} to='/regular-season'>
            Regular Season
          </Link>
        </WrapItem>
        <WrapItem>
          <Link as={RouterLink} to='/kickoff-clash'>
            Kickoff Clash
          </Link>
        </WrapItem>
        <WrapItem>
          <Icon as={BsFillSunFill} w={4} h={4} />
          <Switch onChange={toggleColorMode} />
          <Icon as={BsFillMoonFill} w={4} h={4} />
        </WrapItem>
      </Wrap>
    </>
  );
};

export default Header;
