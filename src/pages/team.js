import { ChakraProvider, Box, Flex, Text } from "@chakra-ui/react"
import Header from '../components/header'
import Footer from '../components/footer'
import TeamCard from '../components/teamcard'
import React from "react"
import Head from '../components/head'
import './pages.css'

export default function Submit() {
    return (
        <ChakraProvider>
            <Header />
            <Head />
            <Box p={10}>
                <Text fontSize="5xl" fontWeight="bold" textAlign="center">Our Team</Text>
            </Box>

            <Box mx={15} backgroundImage="url('https://cdn.discordapp.com/attachments/796166093450379304/819811753608609792/Group_6.png')">
                <Flex display="flex" flexDirection="row" flexWrap='wrap' justifyContent="center">
                    <TeamCard pic="https://girlgeniusmag.tech/headshots/Shivali%20Gulati.jpg" name="Shivali" role="Co-Lead Director at Girl Genius" pronouns="pronouns" />
                    <TeamCard pic="https://girlgeniusmag.tech/headshots/Chloe%20Yan.jpeg" name="Chloe" role="Co-Lead Director at Girl Genius" pronouns="pronouns" />
                    <TeamCard pic="https://firebasestorage.googleapis.com/v0/b/give-me-files-21eaa.appspot.com/o/Files%2F1231615610140319?alt=media&token=0ebcd9c8-5fbb-4ce8-8d85-0fd68bfbd196" name="Belle" role="Lead Director at Command Tech" pronouns="she/her" />
                    <TeamCard name="Ella" role="Web Developer" pronouns="she/her" />
                </Flex>
            </Box>
            <Footer />
        </ChakraProvider>
    )
}