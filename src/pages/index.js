import React from "react"
import Hero from '../components/hero'
import Header from '../components/header'
import Footer from '../components/footer'
import About from '../components/about'
import Card from '../components/card'
import Head from '../components/head'
import { ChakraProvider, extendTheme, Box } from '@chakra-ui/react'
import Questions from "../components/questions"
import './pages.css'

export default function Home() {

  const theme = extendTheme({
    fonts: {
      heading: 'Montserrat',
      body: 'Montserrat',
    }
  })

  return (
    <ChakraProvider theme={theme}>
      <Head />
      <Header />
      <Hero />
      <About />
      <Card />
      <Questions />
      <Box bg="#DEE1F7" h={100}> </Box>
      <Footer />
    </ChakraProvider>
  )
}
