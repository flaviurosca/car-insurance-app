import { useMemo } from "react";
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
} from "@chakra-ui/react";

import { useAuth } from "../context/AuthContext";
import { format } from "date-fns";

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
    <Box mt={16} mx={8}>
      <VStack alignItems="flex-start" mb={4}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Welcome, {loggedIn}
        </Text>
      </VStack>
      <VStack>
        <Box my={8} p={4} boxShadow="md" bg="white" borderRadius="lg">
          <Text fontWeight="bold">Total Offers Created: {offerCount}</Text>
        </Box>
        <TableContainer borderWidth="1px" borderRadius="lg" p={2}>
          <Table variant="striped" size="sm" colorScheme="teal">
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
      </VStack>
    </Box>
  );
};

export default UserDashboard;
