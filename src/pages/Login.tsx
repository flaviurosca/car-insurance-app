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
    <Center minH="100vh">
      <Box>
        {showLogin ? <LoginForm /> : <RegistrationForm />}
        <Divider my="4" />
        <Button onClick={toggleForm} w="full">
          {showLogin ? "Create an account" : "Back to login"}
        </Button>
      </Box>
    </Center>
  );
};

export default Login;
