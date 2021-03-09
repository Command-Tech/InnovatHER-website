import { ChakraProvider, Text, Box } from '@chakra-ui/react'
import React from 'react'

const Footer = () => (
    <ChakraProvider>
        <Box p={5}>
            <br />
            <Text textAlign="center">Command Tech x Girl Genius, 2021.</Text>
            <Text textAlign="center">Made with 💖 and 👩‍💻.</Text>
        </Box>
    </ChakraProvider>
)

export default Footer