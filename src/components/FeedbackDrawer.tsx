import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import GiveFeedbackButton from "./buttons/GiveFeedbackButton";

const FeedbackDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const onSubmit = () => {
    // WIP: Send feedback to the server

    toast({
      title: "Feedback sent",
      description: "Thank you for your feedback!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    onClose();
  };

  return (
    <>
      <GiveFeedbackButton onClick={onOpen} />

      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter="auto" backdropBlur="2px" />
        <DrawerContent bg="gray.900" color="white" style={styleDrawer}>
          <DrawerCloseButton />
          <DrawerHeader>Feedback</DrawerHeader>

          <DrawerBody>
            <Textarea placeholder="Type your feedback here" />
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              colorScheme="blue"
              color="customBlue"
              _hover={{ bg: "white", color: "gray.900" }}
              mr={4}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button onClick={onSubmit} variant="ghost" bg="customBlue">
              Send
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const styleDrawer = {
  height: "300px",
  top: "40%",
  transform: "translateY(-50%)",
};

export default FeedbackDrawer;
