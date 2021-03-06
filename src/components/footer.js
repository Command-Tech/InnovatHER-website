import { ChakraProvider, Text, Box } from '@chakra-ui/react'
import React from 'react'

const Footer = () => (
    <ChakraProvider>
        <Box p={5}>
            <hr /><br />
            <Text textAlign="center">Command Tech x Girl Genius, 2021. No rights reserved.</Text>
        </Box>
    </ChakraProvider>
)

export default Footer