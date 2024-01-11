import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      borderTop="1px solid"
      borderColor="gray.500"
      bg="gray.800"
      py={4}
    >
      <Flex justifyContent="center">
        <Text fontSize="sm" color="gray.500">
          &copy; {new Date().getFullYear()} RoadMaster Insurance. All Rights
          Reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
