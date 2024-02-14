import { Flex, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { GiCarKey, GiPulleyHook } from "react-icons/gi";
import {
  MdOutlineAppShortcut,
  MdOutlineCampaign,
  MdOutlineCarCrash,
} from "react-icons/md";

type FeatureCardProps = {
  icon: React.ReactNode;
  description: string;
};

const FeatureCard = ({ icon, description }: FeatureCardProps) => {
  return (
    <VStack
      justifyContent="center"
      textAlign="center"
      color="white"
      mt={4}
      boxShadow={"2px 16px 16px 8px rgba(0,0,0,0.2)"}
      p={4}
    >
      <Flex fontSize={70}>{icon}</Flex>
      <Text fontSize="lg" color="gray.300" mt={2}>
        {description}
      </Text>
    </VStack>
  );
};

const FeaturesSection = () => {
  return (
    <VStack spacing={8} align="center">
      <Text
        fontSize={{ base: "3xl", xl: "5xl" }}
        fontWeight="bold"
        color="white"
      >
        Everything you get
      </Text>
      <Text fontSize="2xl" color="gray.500">
        Car insurance with all the perks.
      </Text>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={8}
      >
        {featuresList.map((feature, index) => (
          <GridItem key={index}>
            <FeatureCard {...feature} />
          </GridItem>
        ))}
      </Grid>
    </VStack>
  );
};

export default FeaturesSection;

const featuresList: FeatureCardProps[] = [
  {
    icon: <AiOutlineDollarCircle />,
    description: "Save up to $900/year",
  },
  {
    icon: <MdOutlineCarCrash />,
    description: "File an insurance claim in minutes",
  },
  {
    icon: <MdOutlineAppShortcut />,
    description: "Easily manage your policy in the app",
  },
  {
    icon: <MdOutlineCampaign />,
    description: "Earn rewards for referring friends",
  },
  {
    icon: <GiCarKey />,
    description: "Rates based on your actual driving",
  },
  {
    icon: <GiPulleyHook />,
    description: "Roadside Assistance included in every policy",
  },
];
