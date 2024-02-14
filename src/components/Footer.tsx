import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.700" py={4}>
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
