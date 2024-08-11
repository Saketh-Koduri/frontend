import {
  FormControl,
  FormLabel,
  Input,
  Box,
  VStack,
  Button,
  Heading,
  Text,
  InputGroup,
  InputRightElement,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { api } from "./actions/api"; 
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!fullName || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(`${api}/signup`, {
        fullName,
        email,
        password,
      });
      if (response.data) {
        alert(response.data);
        navigate("/signin"); // Redirect to sign-in page on successful sign-up
      } else {
        setError(response.data || "An error occurred. Please try again.");
      }
    } catch (e) {
      console.error(e);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <Box
      bgGradient="linear(to-r, pink.200, blue.200)"
      p={8}
      borderRadius={16}
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
      maxWidth="400px"
      m="auto"
    >
      <VStack spacing={6} align="stretch">
        <Heading as="h2" size="xl" textAlign="center" color="pink.600">
          Sign Up
        </Heading>

        {error && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Error!</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <FormControl>
          <FormLabel color="pink.600">Full Name</FormLabel>
          <Input
            type="text"
            bg="white"
            borderColor="pink.200"
            _hover={{ borderColor: "pink.300" }}
            _focus={{ borderColor: "pink.400", boxShadow: "0 0 0 1px #FED7E2" }}
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel color="blue.600">Email address</FormLabel>
          <Input
            type="email"
            bg="white"
            borderColor="blue.200"
            _hover={{ borderColor: "blue.300" }}
            _focus={{ borderColor: "blue.400", boxShadow: "0 0 0 1px #BEE3F8" }}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel color="purple.600">Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              bg="white"
              borderColor="purple.200"
              _hover={{ borderColor: "purple.300" }}
              _focus={{ borderColor: "purple.400", boxShadow: "0 0 0 1px #E9D8FD" }}
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel color="teal.600">Confirm Password</FormLabel>
          <InputGroup>
            <Input
              type={showConfirmPassword ? "text" : "password"}
              bg="white"
              borderColor="teal.200"
              _hover={{ borderColor: "teal.300" }}
              _focus={{ borderColor: "teal.400", boxShadow: "0 0 0 1px #B2F5EA" }}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button
          colorScheme="purple"
          size="lg"
          width="100%"
          bgGradient="linear(to-r, purple.400, pink.400)"
          _hover={{ bgGradient: "linear(to-r, purple.500, pink.500)" }}
          _active={{ bg: "purple.600" }}
          onClick={handleSignup}
        >
          Sign Up
        </Button>

        <Text fontSize="sm" textAlign="center" color="gray.600">
          Already have an account? <Text as="span" color="pink.500" fontWeight="bold" onClick={() => navigate('/signin')}>Sign In</Text>
        </Text>
      </VStack>
    </Box>
  );
};
