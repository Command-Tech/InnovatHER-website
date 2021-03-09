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
            <a href="https://airtable.com/shrMBfy9t74j8PAxc">Gallery</a>
            <a href="mailto:info@commandtech.codes">Contact</a>
          </HStack>
        </Center>
    </Box>
  </ChakraProvider>
)

export default Header