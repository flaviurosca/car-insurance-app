import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  FormErrorMessage,
  FormHelperText,
  Text,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formMessages } from "../../utils/formMessages";
import { PASSWORD_REGEX } from "../../utils/constants";
import { getUsersData, setUsersData } from "../../utils/helpers";

const formSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: formMessages.email.required })
    .email({ message: formMessages.email.pattern })
    .refine((email) => !existingUsers.some((user) => user.email === email), {
      message: formMessages.email.exists,
    }),
  password: z
    .string()
    .trim()
    .min(1, { message: formMessages.password.required })
    .regex(PASSWORD_REGEX, { message: formMessages.password.pattern }),
});

type FormValues = {
  email: string;
  password: string;
};

const existingUsers: FormValues[] = getUsersData("users");

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handlePasswordFocus = () => setPasswordTouched(true);

  const handleRegistration = (data: FormValues) => {
    const newUser: FormValues = { email: data.email, password: data.password };
    const updatedUsers = [...existingUsers, newUser];

    setUsersData("users", updatedUsers);

    toast({
      title: "Account created successfully.",
      description: "Please login to continue.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Create a new account
      </Text>

      <Box borderWidth="1px" borderRadius="lg" p={4}>
        <form onSubmit={handleSubmit(handleRegistration)} noValidate>
          <Stack spacing={3}>
            <FormControl id="email" isInvalid={!!errors.email}>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="john@doe.com"
                {...register("email")}
                autoComplete="off"
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl id="password" isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  onFocus={handlePasswordFocus}
                  {...register("password")}
                  autoComplete="off"
                />
                <InputRightElement width="3rem">
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
              {!errors.password && !passwordTouched && (
                <FormHelperText>{formMessages.password.pattern}</FormHelperText>
              )}
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              variant="ghost"
              colorScheme="gray"
              bg="#51ACEC"
              fontWeight="bold"
            >
              Register
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default RegistrationForm;
