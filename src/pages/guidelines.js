import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Head from "../components/head"
import { Link } from "gatsby"
import {
  ChakraProvider,
  Box,
  Text,
  UnorderedList,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react"

export default function Rules() {
  return (
    <ChakraProvider>
      <Head />
      <Header />
      <Box bg="#DEE1F7" p={10}>
        <Text fontSize="5xl" fontWeight="bold" textAlign="center">
          Guidelines
        </Text>
        <Text textAlign="center">
          Interested in participating? Get started here by reading the
          guidelines below. You can submit a project{" "}
          <strong>
            <Link to="/submit">here</Link>
          </strong>{" "}
          afterwards!
        </Text>
      </Box>
      <Box px={[6, 20, 100]} py={10}>
        <Text fontSize="xl" fontWeight="bold">
          👋🏼 Hey There!
        </Text>
        <Text>
          We're super excited that you're interested in participating in
          InnovatHER! Now, there will be prizes, but the focus of this event is
          to celebrate YOUR accomplishments—no matter how big or how small! We
          are confident that anyone can pursue careers in STEAM and challenge
          conventional gender standards.
        </Text>
        <br />
        <Text fontSize="xl" fontWeight="bold">
          🤔 Wait...but why?
        </Text>
        <Text>
          Sometimes, all the big accomplishments are celebrated so much that the
          little ones are overlooked. Since it's Women's History month, we need
          to recognize the current women who are contributing to history,
          starting with all of you. Even if it's the start of your STEAM
          journey, Girl Genius and Command Tech want to recognize the steps you
          are taking to build your dream projects with InnovatHER.
        </Text>
        <br />
        <Text fontSize="xl" fontWeight="bold">
          👩🏽‍💻 InnovatHER Eligibility
        </Text>
        <UnorderedList>
          <ListItem>Identify as female or nonbinary (trans-inclusive)</ListItem>
          <ListItem>Be a high school or college student</ListItem>
          <ListItem>
            Created a project (either group or solo) that falls into one of
            these categories: Science, Technology, Engineering, Art, Math,
            Interdisciplinary. The project can be in-progress or completed!{" "}
            <strong>
              <em>
                All projects must be your own original work otherwise you will
                be disqualified.
              </em>
            </strong>
          </ListItem>
          <ListItem>
            Follow Girl Genius{" "}
            <a href="https://instagram.com/girlgeniusmag">(@girlgeniusmag)</a>{" "}
            and Command Tech{" "}
            <a href="https://instagram.com/commandtech">(@commandtech)</a> on
            Instagram (we will be checking!)
          </ListItem>
        </UnorderedList>
      </Box>
      {/* FAQs */}
      <Box p={10} bg="#DEE1F7">
        <Text fontSize="5xl" fontWeight="bold" textAlign="center">
          Frequently Asked Questions
        </Text>
        <Text textAlign="center">
          Have a question? It might be answered below! If not, feel free to ask
          via email, Slack, or Discord.
        </Text>
      </Box>
      <br />
      {/* Begin accordion */}

      <Box px={[6, 20, 100]}>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  I'm not sure what to submit. Do you have any suggestions?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Check out our notion page for project tutorials, ideas, and other
              resources you can use to create your project.{" "}
              <strong>
                <a href="https://www.notion.so/InnovatHER-resources-b144a6070e0f46f4ac0409c963cf4ad5">
                  <Text decoration="underline">Notion page here.</Text>
                </a>
              </strong>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Can I submit multiple projects?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes, you can submit multiple projects, but are focusing on the
              quality of your submissions, rather than the quantity.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Is this opportunity open internationally?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes! International students can submit projects. There are no
              geographical limits.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  How will submissions be judged?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>To be announced soon!</AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  How can I view everyone else's projects?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              View the gallery{" "}
              <a href="https://airtable.com/shrMBfy9t74j8PAxc">
                <strong>here!</strong>
              </a>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  I have a question that isn't answered here.
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              DM Shivali [Director] or Belle on the Girl Genius Community Slack
              for any other questions you may have.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>

      <Footer />
    </ChakraProvider>
  )
}
