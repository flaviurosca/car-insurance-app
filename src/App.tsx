import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Offer from "./pages/Offer";
import UserDashboard from "./pages/UserDashboard";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <ChakraProvider>
          <div>
            <Navbar />

            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/offer" element={<Offer />} />
                <Route path="/dashboard" element={<UserDashboard />} />
              </Routes>
            </div>
            
          </div>
        </ChakraProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
