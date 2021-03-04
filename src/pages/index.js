import React from "react"
import Hero from '../components/hero'
import Header from '../components/header'
import Footer from '../components/footer'
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      <Hero />
      <Footer />
    </ChakraProvider>
  )
}
