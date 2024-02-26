import { Button } from "@chakra-ui/react";

type GiveFeedbackButtonProps = {
  onClick: () => void;
};

const GiveFeedbackButton = ({ onClick }: GiveFeedbackButtonProps) => {
  return (
    <Button
      onClick={onClick}
      position="fixed"
      right="-30px"
      top="60%"
      transform="rotate(-90deg)"
      py={5}
      size="xs"
      bg="gray.700"
      color="white"
      _hover={{ bg: "gray.400", color: "gray.900" }}
    >
      Give Feedback
    </Button>
  );
};

export default GiveFeedbackButton;
