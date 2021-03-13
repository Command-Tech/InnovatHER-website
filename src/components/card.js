import { ChakraProvider, Text, Box, Image, VStack, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'gatsby'

const Card = () => (
    <ChakraProvider>
        {/* <Image src="https://cloud-bp07vwmru-hack-club-bot.vercel.app/0bottom_wave.png" alt="wave" width="100%" /> */}
        <Box bg="#DEE1F7" p={10}>
     <Box mx={[ 2, 10, 20]} borderRadius={20} color="black" p={7} border="2px" borderColor="gray.100" bg="white">
        <Text fontWeight="bold" fontSize="4xl" textAlign="center">Get Started</Text><br/>
        <Flex justifyContent="center" mx="auto" flexDirection="row" flexWrap="wrap">
          <Box borderRadius={20} bg="pink.100" h={60} p={5} mr={10} mb={5} _hover={{ transform: "scale(1.1)" }}>
              <VStack alignItems="start">
                  <Image src="https://cloud-9qzt9qmx7-hack-club-bot.vercel.app/0vector-1.png" /><br/>
                  <Link to="/guidelines"> 
                  <br/><br/><Text fontSize="2xl">Read the guidelines →</Text>
                  </Link>
              </VStack>
          </Box>
          <Box borderRadius={20} bg="blue.100" h={60} p={5} mr={10} mb={5} _hover={{ transform: "scale(1.1)" }}>
              <VStack alignItems="start">
                  <Image src="https://cloud-9qzt9qmx7-hack-club-bot.vercel.app/1vector-2.png" /><br/>
                  <Link to="/submit">
                  <br/><br/><Text fontSize="2xl">Submit a project →</Text>
                  </Link>
              </VStack>
          </Box> 
          <Box borderRadius={20} bg="purple.100" p={5} h={60} mb={5} _hover={{ transform: "scale(1.1)" }}>
              <VStack alignItems="start">
                  <Image src="https://cloud-9qzt9qmx7-hack-club-bot.vercel.app/2vector.png" /><br/>
                  <a href="https://airtable.com/shrMBfy9t74j8PAxc">
                      <br/><br/><Text fontSize="2xl">View the gallery →</Text>
                  </a>
              </VStack>
          </Box>  
        </Flex>
      </Box>
      </Box>
    </ChakraProvider>
)

export default Card