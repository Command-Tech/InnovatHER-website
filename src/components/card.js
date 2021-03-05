import { ChakraProvider, Text, Box, Image, VStack, Flex } from '@chakra-ui/react'
import React from 'react'

const Card = () => (
    <ChakraProvider>
     <Box m={20} bg="white" borderRadius={20} color="black">
        <Text fontWeight="bold" fontSize="4xl" textAlign="center">Get Started</Text>
        <Flex>
          <Box borderRadius={20} bg="pink.100" p={5} mr={5}>
              <VStack alignItems="start">
                  <Image src="https://cloud-9qzt9qmx7-hack-club-bot.vercel.app/0vector-1.png" />
                  <Text fontSize="2xl">Read the guidelines →</Text>
              </VStack>
          </Box>
          <Box borderRadius={20} bg="blue.100" p={5} mr={5}>
              <VStack alignItems="start">
                  <Image src="https://cloud-9qzt9qmx7-hack-club-bot.vercel.app/1vector-2.png" />
                  <Text fontSize="2xl">Submit a project →</Text>
              </VStack>
          </Box> 
          <Box borderRadius={20} bg="purple.100" p={5}>
              <VStack alignItems="start">
                  <Image src="https://cloud-9qzt9qmx7-hack-club-bot.vercel.app/2vector.png" />
                  <Text fontSize="2xl">View the gallery →</Text>
              </VStack>
          </Box>  
        </Flex>
      </Box>
    </ChakraProvider>
)

export default Card