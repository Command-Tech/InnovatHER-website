import React from "react"
import Hero from '../components/hero'
import Header from '../components/header'
import Footer from '../components/footer'
import About from '../components/about'
import Card from '../components/card'
import '../components/main.css'
import { ChakraProvider, VStack, Box, Text, Image, Flex } from '@chakra-ui/react'
import Questions from "../components/questions"

export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      <Hero />
      <About />
      {/* <Card /> */}
      {/* cards */}
      <Card />
      <Questions />
      <Footer />
    </ChakraProvider>
  )
}
