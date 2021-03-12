import { ChakraProvider, Text, Image, Flex, Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'gatsby'

const About = () => (
    <ChakraProvider>
        <Image src="https://cloud-2ct6duudl-hack-club-bot.vercel.app/0bottomwave.png" alt="wave" w="100%" />

        <Flex display="flex" flexDirection="row" flexWrap="wrap">
            <Box margin="auto" w="40rem" px={5} py={10}>
                <Text fontSize="4xl" fontWeight="bold">About</Text>
                <Text fontSize="lg">
                Command Tech x Girl Genius InnovatHER 2021 aims to celebrate YOUR accomplishments, no matter how big or how small! We want to create an online community to support each other so we can all build our own confidence and become a future LEADER! A bonus, there are prizes!
                </Text>
                <br/><Text fontSize="lg">
                    Interested in participating? Check out the guidelines <Link to="/guidelines"><strong>here!</strong></Link>
                </Text> 
            </Box>
            <Box margin="auto">
                <Image src="https://cloud-5ydsuceme-hack-club-bot.vercel.app/0img_0325.png" alt="Woman with brain" w="20vw" />
            </Box>
        </Flex>

        

    </ChakraProvider>
)

export default About