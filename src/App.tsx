import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Offer from "./pages/Offer";
import UserDashboard from "./pages/UserDashboard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ChakraProvider>
          <>
            <Navbar />

            <Box>
              <Routes>
                <Route path="*" element={<div>404 NOT FOUND</div>} />
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/offer" element={<Offer />} />
                <Route path="/dashboard" element={<UserDashboard />} />
              </Routes>
            </Box>

            <Footer />
          </>
        </ChakraProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
