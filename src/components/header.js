import React from 'react'
import { Link } from 'gatsby'
import { ChakraProvider, HStack, Box, Center } from '@chakra-ui/react'

const Header = () => (
  <ChakraProvider>
    <Box bg="gray.100" p="5" mx="auto" textAlign="center">
        <Center>
          <HStack spacing="25px">
            <Link to="/">Home</Link>
            <Link to="/">Gallery</Link>
            <Link to="/">Guidelines</Link>
            <Link to ="/">Contact</Link>
          </HStack>
        </Center>
    </Box>
  </ChakraProvider>
)

export default Header