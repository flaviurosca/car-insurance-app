import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IoMdKey } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { formMessages } from "../utils/formMessages";
import { getUsersData } from "../utils/helpers";

const formSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: formMessages.email.required })
    .email({ message: formMessages.email.pattern }),
  password: z
    .string()
    .trim()
    .min(1, { message: formMessages.password.required }),
});

type FormValues = z.infer<typeof formSchema>;

const LoginForm = () => {
  const { handleLogin } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    const existingUsers: FormValues[] = getUsersData("users");

    const user = existingUsers.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (user) {
      handleLogin(data.email);
      navigate("/dashboard");
    } else {
      toast({
        title: "Login failed.",
        description: "Please check your credentials and try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Log into your account
      </Text>

      <Box w="md" borderWidth="1px" borderRadius="lg" p={4}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={3}>
            <FormControl id="email" isInvalid={!!errors.email}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" {...register("email")} />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl id="password" isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                />
                <InputRightElement w="3rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>

            <Button type="submit" colorScheme="green">
              <HStack spacing={2}>
                <IoMdKey size={20} />
                <Text>Login</Text>
              </HStack>
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;
