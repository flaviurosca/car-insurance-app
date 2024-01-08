import {
  Box,
  Button,
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
import CreateOfferForm from "../components/CreateOfferForm";

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
      <>
        <ModalHeader>Login required</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Text>Please login to create an offer.</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="green" mr={3} onClick={goToLogin}>
            Login
          </Button>
          <Button variant="ghost" onClick={goToHome}>
            Cancel
          </Button>
        </ModalFooter>
      </>
    );
  };

  return (
    <Flex alignItems="center" justifyContent="center" mt="4">
      {loggedIn ? (
        <Box>
          <Text fontSize="2xl" fontWeight="bold" mb="4">
            Welcome to the Offer Page!
          </Text>
          <Text fontSize="xl" fontWeight="bold" mb="4">
            {loggedIn}
          </Text>
          <CreateOfferForm />
        </Box>
      ) : (
        <Modal isOpen={true} onClose={goToHome}>
          <ModalOverlay />
          <ModalContent>
            <ModalComponent />
          </ModalContent>
        </Modal>
      )}
    </Flex>
  );
};

export default Offer;
