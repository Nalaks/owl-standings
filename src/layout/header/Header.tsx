import React, { FC } from 'react'
import {
  Stack,
  Icon,
  Image,
  Link,
  Switch,
  useColorMode,
  Box,
  Divider
} from '@chakra-ui/react'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { Link as RouterLink } from 'react-router-dom'
import owlLogo from '../../assets/images/owl_logo.png'

const Header: FC = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <>
      <Stack
        direction={['column', 'column', 'column', 'row']}
        align='center'
        justify='space-between'
        spacing={8}>
        <Box>
          <Link as={RouterLink} to='/'>
            <Image boxSize='100px' src={owlLogo} alt='Overwatch League Logo' />
          </Link>
        </Box>
        <Stack spacing={8} direction={['column', 'column', 'column', 'row']}>
          <Box>
            <Link
              as={RouterLink}
              to='/'
              _hover={{ textDecoration: 'none' }}
              fontSize='xl'>
              Regular Season
            </Link>
          </Box>
          <Box>
            <Link
              as={RouterLink}
              to='/kickoff-clash'
              _hover={{ textDecoration: 'none' }}
              fontSize='xl'>
              Kickoff Clash
            </Link>
          </Box>
          <Box>
            <Link
              as={RouterLink}
              to='/midseason-madness'
              _hover={{ textDecoration: 'none' }}
              fontSize='xl'>
              Midseason Madness
            </Link>
          </Box>
          <Box>
            <Link
              as={RouterLink}
              to='/summer-showdown'
              _hover={{ textDecoration: 'none' }}
              fontSize='xl'>
              Summer Showdown
            </Link>
          </Box>
          <Box>
            <Link
              as={RouterLink}
              to='/countdown-cup'
              _hover={{ textDecoration: 'none' }}
              fontSize='xl'>
              Countdown Cup
            </Link>
          </Box>
        </Stack>
        <Stack spacing={2} direction='row' paddingRight={4}>
          <Box>
            <Icon as={BsFillSunFill} w={6} h={6} />
          </Box>
          <Box>
            <Switch onChange={toggleColorMode} />
          </Box>
          <Box>
            <Icon as={BsFillMoonFill} w={6} h={6} />
          </Box>
        </Stack>
      </Stack>
      <Divider orientation='horizontal' />
    </>
  )
}

export default Header
