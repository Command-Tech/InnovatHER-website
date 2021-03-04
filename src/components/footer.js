import { ChakraProvider, Text, Box } from '@chakra-ui/react'
import React from 'react'

const Footer = () => (
    <ChakraProvider>
        <Box p={5}>
            <hr /><br />
            <Text textAlign="center">All Rights Reserved.</Text>
        </Box>
    </ChakraProvider>
)

export default Footer