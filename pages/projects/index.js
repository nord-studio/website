import { useState } from 'react'
import { Stack, Heading, Text, SimpleGrid, Divider } from '@chakra-ui/react'
import { theme } from "@chakra-ui/react"

import Cards from '../../components/Card'
import Container from '../../components/Container'
import Head from 'next/head'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { FaSearch } from 'react-icons/fa'

export default function Projects({ projects }) {
  const [query, setQuery] = useState('')
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <>
      <Container>
        <Head>
          <title>Projects</title>
          <meta name="title" content="Projects" />
          <meta
            name="description"
            content="An archive of all our products. Our work is serious, we are not."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://nordstud.io/projects" />
          <meta
            property="og:title"
            content="Projects"
          />
          <meta
            property="og:description"
            content="An archive of all our products. Our work is serious, we are not."
          />
          <meta property="og:image" content="https://i.imgur.com/097Oi61.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://nordstud.io/projects"
          />
          <meta
            property="twitter:title"
            content="Projects"
          />
          <meta
            property="twitter:description"
            content="An archive of all our products. Our work is serious, we are not."
          />
          <meta
            property="twitter:image"
            content="https://i.imgur.com/097Oi61.png"
          />
        </Head>
        <Stack
          spacing={10}
          justifyContent="center"
          px={['5vw', '10vw']}
          my={['15vh', '15vh', '22.5vh', '22.5vh']}
        >
          <Stack spacing={5}>
            {' '}
            <Heading color="displayColor" fontSize={{ base: '4xl', md: '6xl' }}>
              Projects
            </Heading>
            <Text color="textPrimary" fontSize={{ base: '14px', md: '16px' }}>
              An archive of all our products. Our work is serious, we are not.
            </Text>
            <InputGroup maxW="400px">
              <InputRightElement pointerEvents="none" children={<FaSearch color="#000000" />} />
              <Input
                type="text"
                color='black'
                placeholder="Search projects"
                value={query}
                onChange={handleChange}
                borderColor='borderColor'
                textColor='textPrimary'
                _hover={{ borderColor: 'borderColor' }}
                _placeholder={{ color: 'textPrimary' }}
              />
            </InputGroup>
            <Divider />
          </Stack>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
            {projects.filter((e) =>
                e.fields.title.toLowerCase().includes(query.toLowerCase()),
              )
              .map((project) => (
                <Cards
                  key={project.fields.title}
                  imageURL={project.fields.imageUrl}
                  title={project.fields.title}
                  desc={project.fields.description}
                  githubLink={project.fields.githubLink}
                  deployLink={project.fields.deployLink}
                  tag={project.fields.tags}
                />
              ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  )
}

let client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'projects',
    order: 'sys.updatedAt',
  })
  return {
    props: {
      projects: data.items.reverse(),
    },
  }
}