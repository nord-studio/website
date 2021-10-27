import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Box
} from '@chakra-ui/react'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'

export default function About() {
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 1 }} spacing={16}>
        <SlideUpWhenVisible>
          <Stack spacing={4}>
            <Stack spacing={0}>
              <Heading fontFamily="Ubuntu" color="textPrimary" fontSize={{ base: '3xl', md: '4xl'}}>
                Our Philosophy.
              </Heading>
              <Text
                color="textPrimary"
                fontSize={{ base: '12px', md: '14px' }}
              >
                (based on stuff we’ve always believed in)
              </Text>
            </Stack>
            <Text
              color="textPrimary"
              fontSize={{ base: '18px', md: '22px'}}
              whiteSpace="pre-line"
              fontWeight="medium"
            >
              We know how many nights you've spent rehearsing your speech, or fighting with a tiny detail that probably no one is going to notice. We've been there, we know the struggle. <br /><br />
              We build projects close to our hearts, and put everything we’ve got into them, so the final products we deliver speak for themselves. <br /><br />
            </Text>
          </Stack>
        </SlideUpWhenVisible>
        <SlideUpWhenVisible>
          <Box>
            <Stack spacing={4}>
              <Stack spacing={0}>
                <Heading fontFamily="Ubuntu" color="textPrimary" fontSize={{ base: '3xl', md: '4xl' }}>
                  What We Do.
                </Heading>
                </Stack>
              <Text
                color="textPrimary"
                fontSize={{ base: '18px', md: '22px' }}
                whiteSpace="pre-line"
                fontWeight="medium"
              >
                We make software, games, websites and everything in between. Our projects are carefully crafted and tested to ensure that we provide the best service we can. We are starting to work on something big, so stay tuned for that!
              </Text>
            </Stack>
          </Box>
        </SlideUpWhenVisible>
      </SimpleGrid>
    </>
  )
}
