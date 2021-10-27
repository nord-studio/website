import React, { useRef } from "react";
import {
  Button,
  Flex,
  Box,
  Text,
  Slide,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Icon,
  Image
} from "@chakra-ui/react";
import NextLink from "next/link";
import useMediaQuery from "../hook/useMediaQuery";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar({ enableTransition }) {
  const isLargerThan768 = useMediaQuery(768);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();

  const NavbarDrawer = () => (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="background">
          <DrawerCloseButton color="displayColor" />
          <DrawerHeader borderBottomWidth="1px" borderColor="borderColor" backgroundColor="secondary" color="textPrimary">
            Nord.
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing="24px">
              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" fontSize="16px" textColor="displayColor" _hover={{ bg: "#2E3440" }}>
                  Home
                </Button>
              </NextLink>
              <NextLink href="/projects" passHref>
                <Button as="a" variant="ghost" fontSize="16px" textColor="displayColor" _hover={{ bg: "#2E3440" }}>
                  Projects
                </Button>
              </NextLink>
              <NextLink href="/blog" passHref>
                <Button as="a" variant="ghost" fontSize="16px" textColor="displayColor" _hover={{ bg: "#2E3440" }}>
                  Blog
                </Button>
              </NextLink>
              {/* <NextLink href="/account" passHref>
                <Button as="a" variant="solid" bgColor='complement' fontSize="16px" _hover={{ bg: "#2E3440"}}>
                  Account
                </Button>
              </NextLink> */}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );

  return (
    <Box zIndex="99">
      <Slide
        direction="top"
        reverse
        in={true}
        transition={
          enableTransition
            ? { enter: { duration: 0.5, delay: 0.01 } }
            : { enter: { duration: 0, delay: 0 } }
        }
        background="button2"
      >
        <Flex
          as="nav"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          px="3vw"
          py="3"
          borderBottom="0.5px solid borderColor"
          background="secondary"
        >
          <NextLink href="/">
            <a>
              <Image src="https://i.imgur.com/ZtPlXnI.png" width="40px" />
            </a>
          </NextLink>
          {isLargerThan768 ? (
            <Box color="textPrimary">
              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px" _hover={{ bg: "#2E3440"}}>
                  Home
                </Button>
              </NextLink>
              <NextLink href="/projects" passHref>
                <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px" _hover={{ bg: "#2E3440" }}>
                  Projects
                </Button>
              </NextLink>
              <NextLink href="/blog" passHref>
                <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px" _hover={{ bg: "#2E3440" }}>
                  Blog
                </Button>
              </NextLink>
              {/* <NextLink href="/account" passHref>
                <Button as="a" variant="solid" colorScheme="blue" p="4" ml="3vw" fontSize="16px"_hover={{ bg: "#2E3440"}}>
                  Account
                </Button>
              </NextLink>{" "} */}
            </Box>
          ) : (
              <Icon as={AiOutlineMenu} w={7} h={7} onClick={onOpen} color="displayColor" />
          )}
        </Flex>
      </Slide>
      <NavbarDrawer />
    </Box>
  );
}
