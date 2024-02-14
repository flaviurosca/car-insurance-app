import { VStack, Text, Flex, Grid, GridItem } from "@chakra-ui/react";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { RiDoubleQuotesL } from "react-icons/ri";

type ReviewCardProps = {
  review: string;
  reviewer: string;
};

const ReviewCard = ({ review, reviewer }: ReviewCardProps) => {
  return (
    <VStack
      w={{ base: "300px", md: "500px", xl: "300px" }}
      h={{ base: "350px", xl: "400px" }}
      m={4}
      p={4}
      spacing={4}
      justify="space-around"
      boxShadow="2px 16px 16px 8px rgba(0,0,0,0.2)"
      borderRadius="lg"
    >
      <RiDoubleQuotesL size={60} />
      <Text fontSize="lg" color="gray.900">
        {review}
      </Text>
      <Text color="gray.500">{reviewer}</Text>
    </VStack>
  );
};

const ReviewsSection = () => {
  return (
    <Flex bg="white" w="full" justify="center" pb={8}>
      <VStack spacing={8} mt={8} align="center">
        <Text
          fontSize={{ base: "3xl", xl: "5xl" }}
          fontWeight="bold"
          color="gray.900"
          textAlign="center"
        >
          Real reviews from happy customers
        </Text>
        <Text fontSize="xl" color="gray.500" textAlign="center">
          4.7 stars for a reason | almost 60,000 reviews and counting
        </Text>

        <Flex fontSize={{ base: 50, md: 70 }}>
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStarHalf />
        </Flex>

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          gap={8}
        >
          {userReviews.map((review, index) => (
            <GridItem key={index}>
              <ReviewCard {...review} />
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Flex>
  );
};

export default ReviewsSection;

const userReviews: ReviewCardProps[] = [
  {
    review:
      "Safe driving. Great insurance! I have been with them for 3 years and I have no complaints. I would recommend them to anyone looking for a great insurance company.",
    reviewer: "Amanda S.",
  },
  {
    review:
      "Trying RoadMaster was the best decision I could have made. I now have full coverage while spending $300 less than what I was paying before. I am so happy I made the switch!",
    reviewer: "Luis G.",
  },
  {
    review:
      "Prices are great and the customer service is even better. When our car was destroyed by a fallen tree, RoadMaster was in touch the next day and had everything done within a week. If I could give more than 5 stars, I would!",
    reviewer: "Sarah M.",
  },
];
