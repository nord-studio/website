import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/Introduction'
import About from '../components/About'
import Contact from '../components/Contact'
import FeaturedProjects from '../components/FeaturedProjects'

export default function Index({ projects }) {
  return (
    <>
      <Container enableTransition={true}>
        <Head>
          <title>Nord Studio</title>
          <meta name="title" content="Nord Studio" />
          <meta name="keywords" content="nord, nordstudio, nord studio, Nord, NordStudio, Nord Studio" />
          <meta
            name="description"
            content="Changing the future. One project at a time."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://nordstud.io" />
          <meta
            property="og:title"
            content="Nord Studio"
          />
          <meta
            property="og:description"
            content="Changing the future. One project at a time."
          />
          <meta property="og:image" content="https://i.imgur.com/097Oi61.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://nordstud.io/" />
          <meta
            property="twitter:title"
            content="Nord Studios"
          />
          <meta
            property="twitter:description"
            content="Changing the future. One project at a time."
          />
          <meta
            property="twitter:image"
            content="https://i.imgur.com/097Oi61.png"
          />
          
        </Head>
        <Stack
          as="main"
          spacing="144px"
          justifyContent="center"
          alignItems="flex-start"
          px={{ base: '5vw', md: '10vw' }}
          mt={{ base: '15vh', md: '22.5vh' }}
        >
          <Introduction />
          <About />
          <FeaturedProjects projects={projects} />
          <Contact />
        </Stack>
      </Container>
    </>
  )
}

let client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: "featuredProjects",
    order: "fields.order"
  });

  return {
    props: {
      projects: data.items,
    }
  };
}