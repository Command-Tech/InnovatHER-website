import React from "react"
import Header from '../components/header'
import Footer from '../components/footer'
import { Link } from "gatsby"
import { ChakraProvider, Box, Text, UnorderedList, ListItem } from '@chakra-ui/react'


export default function Rules() {
  return (
    <ChakraProvider>
      <Header />
        <Box bg="#DEE1F7" p={10}>
            <Text fontSize="5xl" fontWeight="bold" textAlign="center">Guidelines</Text>
            <Text textAlign="center">Interested in participating? Get started here by reading the guidelines below. You can submit a project <strong><Link to="/submit">here</Link></strong> afterwards!</Text>
        </Box>
        <Box px={30} py={10} bg="#DEE1F7">
            <Text fontSize="xl" fontWeight="bold">👋🏼 Hey There!</Text>
            <Text>We're super excited that you're interested in participating in InnovatHER! Now, there will be prizes, but the focus of this event is to celebrate YOUR accomplishments—no matter how big or how small! We are confident that anyone can pursue careers in STEAM and challenge conventional gender standards.</Text>
            <br/>
            <Text fontSize="xl" fontWeight="bold">🤔  Wait...but why?</Text>
            <Text>
                Sometimes, all the big accomplishments are celebrated so much that the little ones are overlooked. Since it's Women's History month, we need to recognize the current women who are contributing to history, starting with all of you. Even if it's the start of your STEAM journey, Girl Genius and Command Tech want to recognize the steps you are taking to build your dream projects with InnovatHER.
            </Text>
            <br/>
            <Text fontSize="xl" fontWeight="bold">👩🏽‍💻  InnovatHER Eligibility</Text>
            <UnorderedList>
                <ListItem>Identify as female or nonbinary (trans-inclusive)</ListItem>
                <ListItem>Be 14-19 years old by March 31st, 2021</ListItem>
                <ListItem>Created a project (either group or solo) that falls into one of these categories: Science, Technology, Engineering, Art, Math, Interdisciplinary. The project can be in-progress or completed! <strong><em>All projects must be your own original work otherwise you will be disqualified.</em></strong></ListItem>
                <ListItem>Follow Girl Genius <a href="https://instagram.com/girlgeniusmag">(@girlgeniusmag)</a> and Command Tech <a href="https://instagram.com/commandtech">(@commandtech)</a> on Instagram (we will be checking!)</ListItem>
            </UnorderedList>
        </Box>
      <Footer />
    </ChakraProvider>
  )
}