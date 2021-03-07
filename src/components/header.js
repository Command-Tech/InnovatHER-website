import React from 'react'
import { Link } from 'gatsby'
import { ChakraProvider, HStack, Box, Center } from '@chakra-ui/react'

const Header = () => (
  <ChakraProvider>
    <Box bg="#FBFBFB" p="5" mx="auto" textAlign="center" boxShadow="base">
        <Center>
          <HStack spacing="25px">
            <Link to="/">Home</Link>
            <Link to="/guidelines">Guidelines</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to ="/">Contact</Link>
          </HStack>
        </Center>
    </Box>
  </ChakraProvider>
)

export default Header