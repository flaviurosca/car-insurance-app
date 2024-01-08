import { Box, Flex, Text, Image, VStack } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex justify="center" align="center" h="100vh">
      <VStack>
        <Box>
          <Text fontSize="6xl" fontWeight="bold">
            Car insurance
          </Text>
          <Text fontSize="6xl" fontWeight="bold">
            made simple
          </Text>
        </Box>

        <Box
          maxW="600px"
          mx="4"
          p="4"
          boxShadow="md"
          bg="white"
          borderRadius="lg"
          flex="1"
        >
          <Text fontSize="xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            commodi nesciunt sed doloremque at veniam nam exercitationem
            dolorum! Tempore facilis at, sequi perferendis nam nobis veniam
            eveniet beatae reiciendis nisi, eos ea fuga quibusdam, delectus
            culpa! Consequatur aliquam nulla ea!
          </Text>
        </Box>
      </VStack>

      <Box maxW="400px" mx="4">
        <Image src="/img/cars.png" alt="Cars image" borderRadius="lg" />
      </Box>
    </Flex>
  );
};

export default Home;
