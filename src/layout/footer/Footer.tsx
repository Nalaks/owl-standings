import { Stack, Text, Link, Icon } from '@chakra-ui/react';
import React, { FC } from 'react';
import { BsSuitHeartFill } from 'react-icons/bs';

const Footer: FC = () => {
  return (
    <>
      <Stack
        direction={['column', 'row']}
        align='center'
        justify='center'
        bottom='0'
        pos='fixed'
        width='100%'
        paddingTop={8}
        paddingBottom={8}>
        <Text>Made with </Text>
        <Icon as={BsSuitHeartFill} />
        <Text> by </Text>
        <Link
          href='https://www.reddit.com/user/steka_'
          isExternal
          color='blue.300'
          _hover={{ textDecoration: 'none' }}>
          steka_
        </Link>
        <Text> | </Text>
        <Link
          href='https://github.com/Nalaks'
          isExternal
          color='blue.300'
          _hover={{ textDecoration: 'none' }}>
          @Nalaks
        </Link>
      </Stack>
    </>
  );
};

export default Footer;
