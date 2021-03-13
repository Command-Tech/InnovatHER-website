import React from 'react'
import { Box, Text, Button, Flex, Image, Spacer, Center } from '@chakra-ui/react'
import { Link } from 'gatsby'

const Hero = () => (
  <div>
    <Box bg="#DEE1F7" px="20">
      <Flex display="flex" flexDirection='row' flexWrap="wrap">
      <Box margin="auto" h={200} mb="-.1" pt={[ 10, 1 ]}> 
          <Box margin="auto" pt={[ 10, 1 ]}>
            <Text fontSize={[ 'sm', 'md', 'lg']} textAlign="left">girl genius x command tech</Text>
            <Text fontSize={['3xl', '4xl', '6xl']} fontWeight="extrabold">InnovatHer</Text>
            <Text fontSize={[ 'lg', 'xl', '2xl']} fontWeight="extrabold">community highlights</Text>
          </Box><br />
          <Box>
            <Link to="/guidelines"><Button mr={5} color="white" bg="#72A1FF" borderRadius="20px" _hover={{ transform: "scale(1.1)", boxShadow: "0px 0px 5px 0px gray", }}>Get Started</Button></Link>
            {/* <Button color="#5991FF" borderColor="#72A1FF" bg="white" borderWidth="2px" borderRadius="20px" _hover={{ transform: "scale(1.1)", boxShadow: "0px 0px 5px 0px gray", }}>Get Started</Button> */}
          </Box>
      </Box>
      <Spacer />
        <Box margin="auto">
          <Image className="hero-image" src="https://cloud-qq4sqiw87-hack-club-bot.vercel.app/0crop_wis_history.png" alt="Women in Stem History" m="auto" w="20vw" justifyContent="flex-end" display={[ 'none', 'block']} />
        </Box>
        </Flex>
    </Box>
  </div>
)

export default Hero