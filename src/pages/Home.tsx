import { Box, Flex, Text, Image, VStack } from "@chakra-ui/react";
import ReviewsSection from "../components/ReviewsSection";
import FeaturesSection from "../components/FeaturesSection";
import CreateOfferButton from "../components/buttons/CreateOfferButton";
import BenefitsSection from "../components/BenefitsSection";
import FeedbackDrawer from "../components/FeedbackDrawer";

const Home = () => {
  return (
    <VStack h="full" spacing={16} bg="gray.900">
      <Flex
        direction={{ base: "column", lg: "row" }}
        w="full"
        justify="center"
        align="center"
        color="white"
        mt={{ base: 20, md: 30 }}
      >
        <VStack mx={8}>
          <Box>
            <Text fontSize={{ base: "4xl", lg: "6xl" }} fontWeight="bold">
              Car insurance
            </Text>
            <Text fontSize={{ base: "4xl", lg: "6xl" }} fontWeight="bold">
              made simple
            </Text>
          </Box>

          <Box
            p={4}
            boxShadow="md"
            color="gray.300"
            borderRadius="lg"
            maxW="800px"
          >
            <Text fontSize="xl">
              Your road to secure journeys! Experience peace of mind with our
              comprehensive car insurance solutions. Tailored for every driver,
              our app ensures hassle-free claims, personalized coverage, and
              expert support. Drive confidently with RoadMaster - where
              protection meets simplicity.
            </Text>
          </Box>
        </VStack>

        <Box m={4}>
          <Image src="/img/car.png" alt="Car image" borderRadius="lg" />
        </Box>
      </Flex>

      <FeedbackDrawer />

      <CreateOfferButton />

      <BenefitsSection />

      <ReviewsSection />

      <FeaturesSection />

      <CreateOfferButton />

      <Text color="white" fontSize="3xl" fontWeight="bold" pb={8}>
        RoadMaster
      </Text>
    </VStack>
  );
};

export default Home;
