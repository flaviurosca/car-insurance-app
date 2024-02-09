import { Link as ReactRouterLink } from "react-router-dom";
import {
  Box,
  Link as ChakraLink,
  Divider,
  Flex,
  HStack,
  IconButton,
  Text,
  useOutsideClick,
} from "@chakra-ui/react";
import { FaPlus, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { BiSolidCarMechanic } from "react-icons/bi";
import { useAuth } from "../context/AuthContext";
import React, { useRef, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { MdDashboard } from "react-icons/md";

type NavbarProps = {
  children: React.ReactNode;
};

const Navbar = () => {
  const { loggedIn, handleLogout } = useAuth();
  const ref = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useOutsideClick({
    ref: ref,
    handler: () => setIsMenuOpen(false),
  });

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const Logo = () => {
    return (
      <Box>
        <ChakraLink
          as={ReactRouterLink}
          to="/"
          _hover={{ textDecoration: "none" }}
        >
          <HStack spacing={0} color="#51ACEC" _hover={{ color: "white" }}>
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
    );
  };

  const MenuToggle = () => {
    return (
      <Box
        display={{ base: "block", md: "none" }}
        onClick={toggleMenu}
        fontSize={30}
        _hover={{ color: "#51ACEC" }}
        cursor="pointer"
      >
        {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
      </Box>
    );
  };

  const RenderActionLink = () => {
    if (loggedIn) {
      return (
        <HStack spacing={0} mt={{ base: 4, md: 0 }}>
          <ChakraLink
            as={ReactRouterLink}
            to="/dashboard"
            _hover={{ textDecoration: "none" }}
          >
            <Flex alignItems="center" _hover={{ color: "#51ACEC" }}>
              <IconButton
                aria-label="Dashboard"
                icon={<MdDashboard />}
                variant="unst"
              />
              <Text as="b">Dashboard</Text>
            </Flex>
          </ChakraLink>
        </HStack>
      );
    } else {
      return (
        <HStack spacing={0} mt={{ base: 4, md: 0 }}>
          <ChakraLink
            as={ReactRouterLink}
            to="/login"
            _hover={{ textDecoration: "none" }}
          >
            <Flex alignItems="center" _hover={{ color: "#51ACEC" }}>
              <IconButton
                aria-label="Login"
                icon={<FaSignInAlt />}
                variant="unst"
              />
              <Text as="b">Login</Text>
            </Flex>
          </ChakraLink>
        </HStack>
      );
    }
  };

  const MenuLinks = () => {
    return (
      <Box
        display={{ base: isMenuOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        justifyContent="flex-end"
        flexGrow={1}
      >
        <RenderActionLink />

        <Divider
          orientation="vertical"
          ml={4}
          h="30px"
          display={{ base: "none", md: "block" }}
        />
        <HStack spacing={0} mt={{ base: 4, md: 0 }}>
          <ChakraLink
            as={ReactRouterLink}
            to="/offer"
            _hover={{ textDecoration: "none" }}
          >
            <Flex alignItems="center" _hover={{ color: "#51ACEC" }}>
              <IconButton
                aria-label="Create Offer"
                icon={<FaPlus />}
                variant="unst"
              />
              <Text as="b">Create Offer</Text>
            </Flex>
          </ChakraLink>
        </HStack>

        {loggedIn && (
          <>
            <Divider
              orientation="vertical"
              ml={4}
              h="30px"
              display={{ base: "none", md: "block" }}
            />
            <HStack spacing={0} mt={{ base: 4, md: 0 }}>
              <ChakraLink
                as={ReactRouterLink}
                to="/"
                onClick={handleLogout}
                _hover={{ textDecoration: "none" }}
              >
                <Flex alignItems="center" _hover={{ color: "#51ACEC" }}>
                  <IconButton
                    aria-label="Logout"
                    icon={<FaSignOutAlt />}
                    variant="unst"
                  />
                  <Text as="b">Logout</Text>
                </Flex>
              </ChakraLink>
            </HStack>
          </>
        )}
      </Box>
    );
  };

  const NavbarContainer = ({ children }: NavbarProps) => {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        px={8}
        bg="gray.700"
        color="white"
        boxShadow="md"
        position="sticky"
        top="0"
        zIndex={10}
        ref={ref}
      >
        {children}
      </Flex>
    );
  };

  return (
    <NavbarContainer>
      <Logo />
      <MenuToggle />
      <MenuLinks />
    </NavbarContainer>
  );
};

export default Navbar;
