import { Link as ReactRouterLink } from "react-router-dom";
import {
  Box,
  Link as ChakraLink,
  Divider,
  Flex,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { FaPlus, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { BiSolidCarMechanic } from "react-icons/bi";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { loggedIn, handleLogout } = useAuth();

  const renderUserLink = () => {
    if (loggedIn) {
      return (
        <ChakraLink as={ReactRouterLink} to="/dashboard">
          <HStack>
            <Text as="b">{loggedIn}</Text>
          </HStack>
        </ChakraLink>
      );
    } else {
      return (
        <ChakraLink as={ReactRouterLink} to="/login">
          <HStack>
            <IconButton
              aria-label="Login"
              icon={<FaSignInAlt />}
              size="lg"
              variant="unst"
            />
            <Text as="b">Login</Text>
          </HStack>
        </ChakraLink>
      );
    }
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      px={8}
      bg="white"
      boxShadow="md"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
    >
      <Box mx={4}>
        <ChakraLink as={ReactRouterLink} to="/">
          <HStack>
            <IconButton
              aria-label="Home"
              icon={<BiSolidCarMechanic />}
              size="lg"
              variant="unst"
            />
            <Text as="b">RoadMaster Insurance</Text>
          </HStack>
        </ChakraLink>
      </Box>

      <HStack>
        {renderUserLink()}

        <Divider orientation="vertical" ml={4} h="30px" />
        <ChakraLink as={ReactRouterLink} to="/offer">
          <HStack>
            <IconButton
              aria-label="Create Offer"
              icon={<FaPlus />}
              size="lg"
              variant="unst"
            />
            <Text as="b">Create Offer</Text>
          </HStack>
        </ChakraLink>

        {loggedIn && (
          <>
            <Divider orientation="vertical" ml={4} h="30px" />
            <ChakraLink as={ReactRouterLink} to="/">
              <HStack onClick={handleLogout}>
                <IconButton
                  aria-label="Logout"
                  icon={<FaSignOutAlt />}
                  size="lg"
                  variant="unst"
                />
                <Text as="b">Logout</Text>
              </HStack>
            </ChakraLink>
          </>
        )}
      </HStack>
    </Flex>
  );
};

export default Navbar;
