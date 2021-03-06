import React from "react"
import Header from '../components/header'
import Footer from '../components/footer'
import { Link } from "gatsby"
import { ChakraProvider, Box, Text } from '@chakra-ui/react'


export default function Gallery() {
  return (
    <ChakraProvider>
      <Header />
        <Box>
            <Text fontSize="5xl" fontWeight="bold" textAlign="center">Gallery</Text>
            <Text textAlign="center">We would love to feature <strong>YOUR</strong> work here! Submit a project <strong><Link to="/submit">here.</Link></strong></Text>
        </Box>
        <Box>
            <iframe title="Airtable Project Submissions Gallery" src="https://airtable.com/embed/shrMBfy9t74j8PAxc?backgroundColor=cyan&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="1000vh"></iframe>
        </Box>
      <Footer />
    </ChakraProvider>
  )
}