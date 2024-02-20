import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { z } from "zod";
import { formMessages } from "../../utils/formMessages";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  generateRandomPremium,
  getUsersData,
  setUsersData,
  validateBirthdate,
} from "../../utils/helpers";

const formSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: formMessages.firstName.required })
    .min(2, { message: formMessages.firstName.minLength })
    .max(30, { message: formMessages.firstName.maxLength }),
  lastName: z
    .string()
    .trim()
    .min(1, { message: formMessages.lastName.required })
    .min(2, { message: formMessages.lastName.minLength })
    .max(30, { message: formMessages.lastName.maxLength }),
  birthdate: z
    .string()
    .trim()
    .min(1, { message: formMessages.birthdate.required }),
  insuranceType: z.string(),
  carManufacturer: z
    .string()
    .trim()
    .min(1, { message: formMessages.carManufacturer.required }),
  yearOfManufacture: z.coerce
    .number()
    .min(1, { message: formMessages.yearOfManufacture.required })
    .min(1900, { message: formMessages.yearOfManufacture.pattern })
    .max(new Date().getFullYear(), {
      message: formMessages.yearOfManufacture.pattern,
    }),
  licensePlate: z.string().optional(),
  chassisNumber: z.string().optional(),
  mileage: z.coerce.number().min(1, { message: formMessages.mileage.required }),
});

type FormValues = z.infer<typeof formSchema>;

const CreateOfferForm = () => {
  const { loggedIn } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      insuranceType: "RCA",
    },
  });

  const olderThanEighteen = validateBirthdate();

  const createOfferData = (
    data: FormValues
  ): FormValues & {
    insurancePremium: string;
    createdAt: number;
  } => {
    const insurancePremium = generateRandomPremium();

    const createdAt = new Date().getTime();
    const formatedBirthdate = format(new Date(data.birthdate), "dd/MM/yyyy");

    return {
      ...data,
      birthdate: formatedBirthdate,
      insurancePremium,
      createdAt,
    };
  };

  const handleOfferSubmit = (data: FormValues) => {
    const offerData = createOfferData(data);

    const existingUserData: FormValues[] = getUsersData(loggedIn || "");

    const updatedUserData = [...existingUserData, offerData];

    setUsersData(loggedIn || "", updatedUserData);

    toast({
      title: "Offer submitted successfully!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    navigate("/dashboard");
  };

  return (
    <Box
      w={{ base: "xs", md: "md" }}
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      mt={4}
    >
      <form onSubmit={handleSubmit(handleOfferSubmit)} noValidate>
        <Stack spacing={8}>
          <FormControl id="firstName" isInvalid={!!errors.firstName} isRequired>
            <FormLabel>First Name</FormLabel>
            <Input type="text" {...register("firstName")} autoComplete="off" />
            <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
          </FormControl>

          <FormControl id="lastName" isInvalid={!!errors.lastName} isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input type="text" {...register("lastName")} autoComplete="off" />
            <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
          </FormControl>

          <FormControl id="birthdate" isInvalid={!!errors.birthdate} isRequired>
            <FormLabel>Birthdate</FormLabel>
            <Input
              type="date"
              max={olderThanEighteen}
              {...register("birthdate")}
            />
            <FormErrorMessage>{errors.birthdate?.message}</FormErrorMessage>
          </FormControl>

          <FormControl
            id="insuranceType"
            isInvalid={!!errors.insuranceType}
            isRequired
          >
            <FormLabel>Insurance Type</FormLabel>
            <Select {...register("insuranceType")}>
              <option value="RCA">RCA</option>
              <option value="Casco">Casco</option>
            </Select>
            <FormErrorMessage>{errors.insuranceType?.message}</FormErrorMessage>
          </FormControl>

          <FormControl
            id="carManufacturer"
            isInvalid={!!errors.carManufacturer}
            isRequired
          >
            <FormLabel>Car Manufacturer</FormLabel>
            <Input
              type="text"
              {...register("carManufacturer")}
              autoComplete="off"
            />
            <FormErrorMessage>
              {errors.carManufacturer?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            id="yearOfManufacture"
            isInvalid={!!errors.yearOfManufacture}
            isRequired
          >
            <FormLabel>Year of Manufacture </FormLabel>
            <Input
              type="number"
              {...register("yearOfManufacture")}
              autoComplete="off"
            />
            <FormErrorMessage>
              {errors.yearOfManufacture?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl id="licensePlate">
            <FormLabel>License Plate</FormLabel>
            <Input
              type="text"
              {...register("licensePlate")}
              autoComplete="off"
            />
          </FormControl>

          <FormControl id="chassisNumber">
            <FormLabel>Chassis Number</FormLabel>
            <Input
              type="text"
              {...register("chassisNumber")}
              autoComplete="off"
            />
          </FormControl>

          <FormControl id="mileage" isInvalid={!!errors.mileage} isRequired>
            <FormLabel>Mileage</FormLabel>
            <Input type="number" {...register("mileage")} autoComplete="off" />
            <FormErrorMessage>{errors.mileage?.message}</FormErrorMessage>
          </FormControl>

          <Button
            mt={4}
            type="submit"
            variant="ghost"
            colorScheme="gray"
            bg="customBlue"
            fontWeight="bold"
          >
            Submit Offer
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default CreateOfferForm;
