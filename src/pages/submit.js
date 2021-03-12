import { ChakraProvider, Box } from "@chakra-ui/react"
import Header from '../components/header'
import Footer from '../components/footer'
import React from "react"
import Head from '../components/head'

export default function Submit() {
    return (
        <ChakraProvider>
            <Head />
            <Header />
            <Box>
            <iframe title="Submit a project" src="https://airtable.com/embed/shrxwr2YZHePwD5wz?backgroundColor=cyan" width="100%" height="1000px"></iframe>
            </Box>
            <Footer />
        </ChakraProvider>
    )
}