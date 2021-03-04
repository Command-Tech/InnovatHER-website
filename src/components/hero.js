import React from 'react'
import { Box, Text, Button } from '@chakra-ui/react'

const Hero = () => (
  <div>
    <Box bg="blue.100" p="10">
        <Text fontSize="lg" textAlign="left">girl genius x command tech</Text>
        <Text fontSize="4xl" fontWeight="extrabold">community</Text>
        <Text fontSize="4xl" fontWeight="extrabold">highlights</Text><br />
        <Button borderRadius="20" color="white" _hover={{ bg: "red.500" }} bgGradient="linear(rgba(0,178,255,1) 0%, rgba(22,217,255,1))" className="primary-btn">Learn more</Button>
    </Box>
  </div>
)

export default Hero