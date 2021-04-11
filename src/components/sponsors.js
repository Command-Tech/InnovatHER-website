import { ChakraProvider, SimpleGrid, Image, Box } from "@chakra-ui/react"
import React from "react"

const Sponsors = () => (
  <ChakraProvider>
    <Box
      borderRadius="lg"
      mx={20}
      bg="white"
      borderWidth="1px"
      borderColor="gray.200"
      p={5}
    >
      <SimpleGrid mx={5} columns={[1, null, 3]}>
        <Image
          h="120px"
          src="https://static.wixstatic.com/media/03c756_20f50deab67a4fc5a466bb41d3c4ea2e~mv2.png/v1/fill/w_344,h_306,al_c,q_95/03c756_20f50deab67a4fc5a466bb41d3c4ea2e~mv2.webp"
          alt="silicon valley coding school logo"
        />
        <Image
          h="120px"
          src="https://girlgeniusmag.tech/home/Logo.png"
          alt="girl genius"
        />
        <Image
          h="120px"
          src="https://cdn.discordapp.com/attachments/820189023384633344/830668235338285057/logo.png"
          alt="command tech"
        />
      </SimpleGrid>
    </Box>
  </ChakraProvider>
)

export default Sponsors
