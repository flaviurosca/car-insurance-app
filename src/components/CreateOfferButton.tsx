import { Button, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const CreateOfferButton = () => {
  return (
    <ChakraLink as={ReactRouterLink} to="/offer">
      <Button
        w="300px"
        variant="ghost"
        size="lg"
        colorScheme="gray"
        bg="customBlue"
      >
        Get Started
      </Button>
    </ChakraLink>
  );
};

export default CreateOfferButton;
