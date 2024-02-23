import { useMemo, useRef } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  VStack,
  Center,
  Flex,
} from "@chakra-ui/react";

import { useAuth } from "../context/AuthContext";
import { format } from "date-fns";
import ScrollButton from "../components/buttons/ScrollButton";
import CreateOfferButton from "../components/buttons/CreateOfferButton";

type OfferType = {
  createdAt: number;
  insurancePremium: string;
  lastName: string;
  firstName: string;
  birthdate: string;
  insuranceType: string;
  carManufacturer: string;
  yearOfManufacture: number;
  licensePlate?: string;
  chassisNumber?: string;
  mileage: number;
};

const UserDashboard = () => {
  const { loggedIn } = useAuth();
  const tableRef = useRef<HTMLDivElement>(null);

  const userData: OfferType[] = useMemo(() => {
    return JSON.parse(localStorage.getItem(loggedIn || "") || "[]");
  }, [loggedIn]);

  const sortedUserOffers = useMemo(() => {
    return [...userData].sort((a, b) => b.createdAt - a.createdAt);
  }, [userData]);

  const formattedCreatedAt = useMemo(() => {
    return sortedUserOffers.map((offer) =>
      format(new Date(offer.createdAt), "dd/MM/yyyy")
    );
  }, [sortedUserOffers]);

  const offerCount = sortedUserOffers.length;

  return (
    <Center minH="100vh" bg="gray.900" color="white">
      <Box w="90%">
        <Text textAlign="center" fontSize="2xl" fontWeight="bold" mb={4}>
          Welcome to Your Insurance Policy Dashboard, {loggedIn}!
        </Text>

        <VStack>
          <Box my={8} p={4} boxShadow="md" borderRadius="lg" color="gray.300">
            <Text fontWeight="bold">
              Here, you can find all your insurance policies and manage them
              easily.
            </Text>
            <Text>Total Number of Policies Created: {offerCount}</Text>
          </Box>

          {sortedUserOffers.length ? (
            <>
              <Box alignSelf="flex-start">
                <CreateOfferButton customVariant />
              </Box>
              <Flex w="full" justify="center">
                <ScrollButton variant="left" tableRef={tableRef} />

                <TableContainer borderWidth="1px" ref={tableRef}>
                  <Table
                    variant="striped"
                    size="sm"
                    colorScheme="customStriped"
                  >
                    <Thead>
                      <Tr>
                        <Th>Created at</Th>
                        <Th>Insurance Premium</Th>
                        <Th>Last Name</Th>
                        <Th>First Name</Th>
                        <Th>Birthdate</Th>
                        <Th>Insurance Type</Th>
                        <Th>Car Manufacturer</Th>
                        <Th>Year of Manufacture</Th>
                        <Th>License Plate</Th>
                        <Th>Chassis Number</Th>
                        <Th>Mileage</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {sortedUserOffers.map((offer, index) => (
                        <Tr key={index}>
                          <Td>{formattedCreatedAt[index]}</Td>
                          <Td>{offer.insurancePremium}</Td>
                          <Td>{offer.lastName}</Td>
                          <Td>{offer.firstName}</Td>
                          <Td>{offer.birthdate}</Td>
                          <Td>{offer.insuranceType}</Td>
                          <Td>{offer.carManufacturer}</Td>
                          <Td>{offer.yearOfManufacture}</Td>
                          <Td>{offer.licensePlate || "-"}</Td>
                          <Td>{offer.chassisNumber || "-"}</Td>
                          <Td>{offer.mileage}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>

                <ScrollButton variant="right" tableRef={tableRef} />
              </Flex>
            </>
          ) : (
            <VStack spacing={4}>
              <Text>
                No insurance policies have been created yet. Start by creating
                your first policy!
              </Text>
              <CreateOfferButton />
            </VStack>
          )}
        </VStack>
      </Box>
    </Center>
  );
};

export default UserDashboard;
