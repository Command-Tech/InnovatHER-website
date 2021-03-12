import { ChakraProvider, Text, Box, Image, HStack, VStack } from '@chakra-ui/react'
import React from 'react'

const TeamCard = ({ pic, name, role, bio, pronouns }) => (
    <ChakraProvider>
              <Box w="30rem" m={5}>
                <HStack>
                    <Image src={pic} borderRadius="50%" alt="Heashot" w="8rem" />
                    <VStack alignItems="left">
                      <Text fontSize="lg">{name}, <strong>{pronouns}</strong></Text>
                      <Text>{role}</Text>
                      <Text>{bio}</Text>
                    </VStack>
                </HStack>
              </Box>
    </ChakraProvider>
)

export default TeamCard