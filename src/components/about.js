import { ChakraProvider, Text, Image, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

const About = () => (
    <ChakraProvider>
        {/* <Image src="https://cloud-ec6220g5o-hack-club-bot.vercel.app/1top_wave.png" alt="wave" /> */}
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
            <GridItem colSpan={3} ml={20} my="auto">
                <Text fontSize="4xl" fontWeight="bold">About</Text>
                <Text>
                Command Tech x Girl Genius InnovatHER 2021 aims to celebrate YOUR accomplishments, no matter how big or how small! We want to create an online community to support each other so we can all build our own confidence and become a future LEADER! A bonus, there are prizes!
                </Text>
            </GridItem>
            <GridItem colStart={4} colEnd={6}>
                <Image src="https://cloud-emjkczki5-hack-club-bot.vercel.app/0technology.png" alt="hii" />
            </GridItem>
        </Grid>
        {/* <Image src="https://cloud-ec6220g5o-hack-club-bot.vercel.app/0bottom_wave.png" alt="wave"/> */}

    </ChakraProvider>
)

export default About