import { ChakraProvider, Box, Flex, Text } from "@chakra-ui/react"
import Header from '../components/header'
import Footer from '../components/footer'
import TeamCard from '../components/teamcard'
import React from "react"
import Head from '../components/head'

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
                    <TeamCard pic="https://www.computerhope.com/jargon/r/random-dice.jpg" name="Ella" role="Web dev" bio="This is a short one sentence bio about somthing whatever lkjkajdsf." pronouns="she/her" />
                    <TeamCard pic="https://www.computerhope.com/jargon/r/random-dice.jpg" name="Ella" role="Web dev" bio="This is a short one sentence bio about somthing whatever lkjkajdsf." pronouns="she/her" />
                    <TeamCard pic="https://www.computerhope.com/jargon/r/random-dice.jpg" name="Ella" role="Web dev" bio="This is a short one sentence bio about somthing whatever lkjkajdsf." pronouns="she/her" />
                    <TeamCard pic="https://www.computerhope.com/jargon/r/random-dice.jpg" name="Ella" role="Web dev" bio="This is a short one sentence bio about somthing whatever lkjkajdsf." pronouns="she/her" />
                    <TeamCard pic="https://www.computerhope.com/jargon/r/random-dice.jpg" name="Ella" role="Web dev" bio="This is a short one sentence bio about somthing whatever lkjkajdsf." pronouns="she/her" />
                </Flex>
            </Box>
            <Footer />
        </ChakraProvider>
    )
}