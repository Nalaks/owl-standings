import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Stack,
  Heading,
  Center,
  Divider,
  Grid,
  GridItem,
  PinInput,
  PinInputField,
  FormLabel,
  HStack
} from '@chakra-ui/react'
import React, { FC, useState, useEffect } from 'react'
import { easternTeams, westernTeams } from '../../data/data'
import Layout from '../../layout/Layout'
import { ITeam } from '../../types/types'

export const KickoffClash: FC = () => {
  const [westernData, setWesternData] = useState<ITeam[] | []>([])
  const [easternData, setEasternData] = useState<ITeam[] | []>([])

  useEffect(() => {
    setWesternData(
      westernTeams.sort((a, b) => b.points - a.points || b.diff - a.diff)
    )
    setEasternData(
      easternTeams.sort((a, b) => b.points - a.points || b.diff - a.diff)
    )
  }, [])
  return (
    <>
      <Layout>
        <Center p={8}>
          <Heading>Kickoff Clash</Heading>
        </Center>
        <Stack
          direction={['column', 'column', 'column', 'row']}
          align='flex-start'
          justify='center'
          spacing={8}>
          <TableContainer>
            <Table variant='simple'>
              <TableCaption placement='top'>
                Overwatch League Region West
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>Rank</Th>
                  <Th>Team</Th>
                  <Th>Pts</Th>
                  <Th>W</Th>
                  <Th>L</Th>
                  <Th>W-L-T</Th>
                  <Th>Diff</Th>
                </Tr>
              </Thead>
              <Tbody>
                {westernData
                  ? westernData.map((team, index) => (
                      <Tr key={team.id}>
                        <Td>{index + 1}</Td>
                        <Td>{team.name}</Td>
                        <Td>{team.points}</Td>
                        <Td>{team.wins}</Td>
                        <Td>{team.losses}</Td>
                        <Td>
                          {team.mapWins}-{team.mapLosses}-{team.mapTies}
                        </Td>
                        <Td>{team.diff > 0 ? `+${team.diff}` : team.diff}</Td>
                      </Tr>
                    ))
                  : null}
              </Tbody>
            </Table>
          </TableContainer>
          <TableContainer>
            <Table variant='simple'>
              <TableCaption placement='top'>
                Overwatch League Region East
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>Rank</Th>
                  <Th>Team</Th>
                  <Th>Pts</Th>
                  <Th>W</Th>
                  <Th>L</Th>
                  <Th>W-L-T</Th>
                  <Th>Diff</Th>
                </Tr>
              </Thead>
              <Tbody>
                {easternData
                  ? easternData.map((team, index) => (
                      <Tr key={team.id}>
                        <Td>{index + 1}</Td>
                        <Td>{team.name}</Td>
                        <Td>{team.points}</Td>
                        <Td>{team.wins}</Td>
                        <Td>{team.losses}</Td>
                        <Td>
                          {team.mapWins}-{team.mapLosses}-{team.mapTies}
                        </Td>
                        <Td>{team.diff > 0 ? `+${team.diff}` : team.diff}</Td>
                      </Tr>
                    ))
                  : null}
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>
        <Stack
          direction={['column', 'column', 'column', 'column']}
          align='flex-start'
          justify='center'
          spacing={8}>
          <Heading>26.05</Heading>
          <Divider orientation='horizontal' />
          <Grid templateColumns='repeat(3, 1fr)' gap={6}>
            <GridItem w='100%' h='10'>
              <HStack>
                <PinInput placeholder=''>
                  <FormLabel htmlFor='opponentDragons'>
                    Shanghai Dragons
                  </FormLabel>
                  <PinInputField id='opponentDragons' />
                  <PinInputField id='opponentHunters' />
                  <FormLabel htmlFor='opponentHunters'>
                    Chengdu Hunters
                  </FormLabel>
                </PinInput>
              </HStack>
            </GridItem>
            <GridItem w='100%' h='10' />
            <GridItem w='100%' h='10' />
          </Grid>
        </Stack>
      </Layout>
    </>
  )
}
