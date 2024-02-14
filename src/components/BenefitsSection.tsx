import { VStack, Text, Flex, Box } from "@chakra-ui/react";

const BenefitsSection = () => {
  return (
    <VStack color="white" align="center">
      <Text
        textAlign="center"
        fontSize={{ base: "3xl", xl: "5xl" }}
        fontWeight="bold"
      >
        See Why People Switch to RoadMaster
      </Text>
      <Flex
        direction={{ base: "column", md: "row" }}
        w="full"
        h={{ base: "auto", md: "150px" }}
        justify="center"
        align="center"
        mt={8}
      >
        <VStack>
          <Text fontSize="3xl" fontWeight="bold">
            20
          </Text>
          <Text fontSize="xl" color="gray.300">
            Years of Experience
          </Text>
        </VStack>

        <Box
          h={{ base: "1px", md: "full" }}
          w={{ base: "60%", md: "1px" }}
          bg="gray.300"
          m={4}
        />

        <VStack>
          <Text fontSize="3xl" fontWeight="bold">
            $500+
          </Text>
          <Text fontSize="xl" color="gray.300">
            Average Annual Savings
          </Text>
        </VStack>

        <Box
          h={{ base: "1px", md: "full" }}
          w={{ base: "60%", md: "1px" }}
          bg="gray.300"
          m={4}
        />

        <VStack>
          <Text fontSize="3xl" fontWeight="bold">
            97%
          </Text>
          <Text fontSize="xl" color="gray.300">
            Customer Satisfaction Rating
          </Text>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default BenefitsSection;
