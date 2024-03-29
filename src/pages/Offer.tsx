import {
  Button,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import CreateOfferForm from "../components/forms/CreateOfferForm";

const Offer = () => {
  const { loggedIn } = useAuth();
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToHome = () => {
    navigate("/");
  };

  const ModalComponent = () => {
    return (
      <Modal isOpen={true} onClose={goToHome}>
        <ModalOverlay backdropFilter="auto" backdropBlur="2px" />
        <ModalContent bg="gray.900" color="white">
          <ModalHeader>Login required</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Text color="gray.300">
              Please log in to create an insurance policy offer. If you don't
              have an account, you can sign up for free.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" bg="customBlue" mr={3} onClick={goToLogin}>
              Login
            </Button>
            <Button
              variant="outline"
              colorScheme="blue"
              color="customBlue"
              _hover={{ bg: "white", color: "gray.900" }}
              onClick={goToHome}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      pt={4}
      bg="gray.900"
      color="white"
    >
      {loggedIn ? (
        <Center minH="100vh" flexDirection="column" mb={8}>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            mx={4}
            my={8}
            textAlign="center"
          >
            Create Your Insurance Policy Offer
          </Text>
          <Text fontSize="lg" mx={4} textAlign="center">
            Welcome,{" "}
            <Text as="span" color="customBlue">
              {loggedIn}
            </Text>
            !
          </Text>
          <Text fontSize="lg" mx={4} textAlign="center">
            Please fill out the form below to create your personalised insurance
            policy offer.
          </Text>
          <CreateOfferForm />
        </Center>
      ) : (
        <ModalComponent />
      )}
    </Flex>
  );
};

export default Offer;
