import { Container, Flex, VStack, Heading, Link, Button, Divider } from "@chakra-ui/react";
import Countdown from "react-countdown";

const IndexPage = () => {
	return (
		<>
			<Container maxWidth="container.xl" padding="0">
				<Flex h="100vh" py={20}>
					<VStack w="full" h="full" alignItems="center" paddingTop="25%" paddingBottom="25%">
						<Heading alignSelf="center" size="4xl">
							<Countdown date={'2021-10-25T23:23:59'} />
						</Heading>
					</VStack>
				</Flex>
			</Container>
		</>
	)
}

export default IndexPage;
