import { ChakraProvider, Text, Image, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'gatsby'

const About = () => (
    <ChakraProvider>
        {/* <Image src="https://cloud-ec6220g5o-hack-club-bot.vercel.app/1top_wave.png" alt="wave" /> */}
        <Grid templateColumns="repeat(5, 1fr)" gap={4} mx={20}>
            <GridItem colSpan={3} ml={20} my="auto" py={10}>
                <Text fontSize="4xl" fontWeight="bold">About</Text>
                <Text fontSize="lg">
                Command Tech x Girl Genius InnovatHER 2021 aims to celebrate YOUR accomplishments, no matter how big or how small! We want to create an online community to support each other so we can all build our own confidence and become a future LEADER! A bonus, there are prizes!
                </Text>
                <br/><Text fontSize="lg">
                    Interested in participating? Check out the guidelines <Link to="/guidelines"><strong>here!</strong></Link>
                </Text>
            </GridItem>
            <GridItem colStart={4} colEnd={6}>
                <Image src="https://cloud-5ydsuceme-hack-club-bot.vercel.app/0img_0325.png" alt="Woman with brain" />
            </GridItem>
        </Grid>
        {/* <Image src="https://cloud-ec6220g5o-hack-club-bot.vercel.app/0bottom_wave.png" alt="wave"/> */}

    </ChakraProvider>
)

export default About