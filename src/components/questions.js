import React from 'react'
import { ChakraProvider, HStack, Box, Center, Button, VStack, Text, Image } from '@chakra-ui/react'

const Questions = () => (
  <ChakraProvider>
      <Box w="100%" m={0} p={10}>
          <VStack p={3} mx={20}>
              <Text textAlign="center" fontSize="4xl" fontWeight='bold'>Questions?</Text>
              <Text textAlign="center">
                 We are happy to answer any questions you may have. Ask in the Girl Genius Slack or Command Tech Discord Community, and we will get back to you shortly!
              </Text>
              <Center>
                <HStack spacing="20px">
                    <a href="https://girlgeniuscommunity.slack.com/"><Button color="white" bg="#72A1FF" borderRadius="20px" _hover={{ transform: "scale(1.1)", boxShadow: "0px 0px 5px 0px gray", }}><Image src="https://cloud-rkeobd9xn-hack-club-bot.vercel.app/0carbon_logo-slack.png" h={7}/>Join Slack</Button></a>
                    <a href="https://discord.gg/HzwNzfDVet"><Button color="white" bg="#72A1FF" borderRadius="20px" _hover={{ transform: "scale(1.1)", boxShadow: "0px 0px 5px 0px gray", }}><Image src="https://cloud-rkeobd9xn-hack-club-bot.vercel.app/1ri_discord-fill.png" h={7} />Join Discord</Button></a>
                </HStack>
              </Center>
          </VStack>
      </Box>
  </ChakraProvider>
)

export default Questions