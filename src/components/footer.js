import { ChakraProvider, Text, Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from "gatsby"

const Footer = () => (
    <ChakraProvider>
        <Box p={5}>
            <br />
            <Text textAlign="center">Command Tech x Girl Genius, 2021.</Text>
            <Text textAlign="center">Made with 💖 and 👩‍💻 by the <Link to="/team"><u>team</u></Link>.</Text>
        </Box>
    </ChakraProvider>
)

export default Footer