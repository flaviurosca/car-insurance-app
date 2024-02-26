import {
  Box,
  Button,
  Center,
  Heading,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Center h="100vh" bg="gray.900" color="white">
      <Box textAlign="center" mx={4}>
        <Heading size="2xl" mb={4}>
          404 - Page Not Found
        </Heading>
        <Text fontSize="xl" mb={8} color="gray.400">
          Oops! Looks like you've stumbled upon a page that doesn't exist.
        </Text>
        <ChakraLink as={ReactRouterLink} to="/">
          <Button variant="ghost" colorScheme="gray" bg="customBlue">
            Go back to Home
          </Button>
        </ChakraLink>
      </Box>
    </Center>
  );
};

export default PageNotFound;
