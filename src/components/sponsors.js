import { ChakraProvider, SimpleGrid, Box, Image } from "@chakra-ui/react"
import React from "react"
import { Link } from "gatsby"

const Sponsors = () => (
  <ChakraProvider>
    <SimpleGrid minChildWidth="120px" justifyContent="center" mx={5}>
          <Image h="120px" src="https://static.wixstatic.com/media/03c756_20f50deab67a4fc5a466bb41d3c4ea2e~mv2.png/v1/fill/w_344,h_306,al_c,q_95/03c756_20f50deab67a4fc5a466bb41d3c4ea2e~mv2.webp" alt="silicon valley coding school logo" />
          <Image h="120px" src="https://girlgeniusmag.tech/home/Logo.png" alt="girl genius" />
          <Image h="120px" src="https://d1fdloi71mui9q.cloudfront.net/07mih74Sc6F7ZCfwa4ow_d342669e16a5edd9e2a378cf34c976f4" alt="command tech" />
    </SimpleGrid>
  </ChakraProvider>
)

export default Sponsors
