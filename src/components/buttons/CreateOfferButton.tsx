import { Button, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

type CreateOfferButtonProps = {
  customVariant?: boolean;
};

const CreateOfferButton = ({ customVariant }: CreateOfferButtonProps) => {
  return (
    <ChakraLink as={ReactRouterLink} to="/offer">
      <Button
        w={customVariant ? "100px" : "300px"}
        variant="ghost"
        size={customVariant ? "sm" : "lg"}
        colorScheme="gray"
        bg="customBlue"
      >
        {customVariant ? "Create Offer" : "Get Started"}
      </Button>
    </ChakraLink>
  );
};

export default CreateOfferButton;
