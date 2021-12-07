import { Link, Button, chakra, Heading, Stack, Text } from '@chakra-ui/react'
import useMediaQuery from '../hook/useMediaQuery'
import { FaDiscord, FaGithub, FaInstagram, FaTwitch, FaTwitter, FaYoutube, FaWindowMaximize } from 'react-icons/fa'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'

export default function ContactMe() {
  const isLargerThan800 = useMediaQuery(800)
  return (
    <>
      <Stack
        spacing={5}
        h="70vh"
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <SlideUpWhenVisible>
          <Heading color="textPrimary" fontSize={{ base: '4xl', md: '5xl' }} textAlign="center">
            Places to find us.
          </Heading>
        </SlideUpWhenVisible>

        <SlideUpWhenVisible>
          <Text fontSize="md" color="textPrimary" textAlign="center">
            Here are a few places you can find us, Come say hi! 👋
          </Text>
        </SlideUpWhenVisible>
      <Stack />
        
      <Stack
        spacing={5}
        w="100%"
        alignItems="center"
        >
          <SlideUpWhenVisible>
            <Stack isInline spacing={4}>
              <Link
                href="https://github.com/Nord-Studio"
                isExternal
              >
                <Button
                  leftIcon={<FaGithub fill="#5F85DB" />}
                  position="static"
                  size={isLargerThan800 ? 'md' : 'sm'}
                  color="textPrimary"
                  backgroundColor="secondary"
                  _hover={{ backgroundColor: 'buttonHover' }}
                >
                  GitHub
                </Button>
              </Link>
              <Link
                href="https://dsc.gg/nord"
                isExternal
              >
                <Button
                  leftIcon={<FaDiscord fill="#5F85DB" />}
                  position="static"
                  size={isLargerThan800 ? 'md' : 'sm'}
                  color="textPrimary"
                  backgroundColor="secondary"
                  _hover={{ backgroundColor: 'buttonHover' }}
                >
                  Discord
                </Button>
              </Link>
              <Link
                href="https://www.instagram.com/wearenordstudio"
                isExternal
              >
                <Button
                  leftIcon={<FaInstagram fill="#5F85DB" />}
                  position="static"
                  size={isLargerThan800 ? 'md' : 'sm'}
                  color="textPrimary"
                  backgroundColor="secondary"
                  _hover={{ backgroundColor: 'buttonHover' }}
                >
                  Instagram
                </Button>
              </Link>
            </Stack>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible>
            <Stack isInline spacing={4}>
              <Link
                href="https://www.twitter.com/wearenordstudio"
                isExternal
              >
                <Button
                  leftIcon={<FaTwitter fill="#5F85DB" />}
                  position="static"
                  size={isLargerThan800 ? 'md' : 'sm'}
                  color="textPrimary"
                  backgroundColor="secondary"
                  _hover={{ backgroundColor: 'buttonHover' }}
                >
                  Twitter
                </Button>
              </Link>
              <Link
                href="https://www.youtube.com/channel/UC62FrhOwcYmOPvsq3vt1F8A"
                isExternal
              >
                <Button
                  leftIcon={<FaYoutube fill="#5F85DB" />}
                  position="static"
                  size={isLargerThan800 ? 'md' : 'sm'}
                  color="textPrimary"
                  backgroundColor="secondary"
                  _hover={{ backgroundColor: 'buttonHover' }}
                >
                  YouTube
                </Button>
              </Link>
              <Link
                href="https://www.twitch.tv/wearenord"
                isExternal
              >
                <Button
                  leftIcon={<FaTwitch fill="#5F85DB" />}
                  position="static"
                  size={isLargerThan800 ? 'md' : 'sm'}
                  color="textPrimary"
                  backgroundColor="secondary"
                  _hover={{ backgroundColor: 'buttonHover' }}
                >
                  Twitch
                </Button>
              </Link>
            </Stack>
          </SlideUpWhenVisible>
        </Stack>
      </Stack>
    </>
  )
}
