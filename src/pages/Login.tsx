import { useState } from "react";
import { Box, Button, Center, Divider } from "@chakra-ui/react";
import LoginForm from "../components/forms/LoginForm";
import RegistrationForm from "../components/forms/RegistrationForm";

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin((prev) => !prev);
  };

  return (
    <Center bg="gray.900" color="white" minH="100vh">
      <Box w={{ base: "xs", md: "md" }}>
        {showLogin ? <LoginForm /> : <RegistrationForm />}
        <Divider my="4" />
        <Button
          onClick={toggleForm}
          w="full"
          variant="outline"
          colorScheme="blue"
          color="#51ACEC"
          _hover={{ bg: "#51ACEC", color: "gray.900" }}
        >
          {showLogin ? "Create an account" : "Back to login"}
        </Button>
      </Box>
    </Center>
  );
};

export default Login;
