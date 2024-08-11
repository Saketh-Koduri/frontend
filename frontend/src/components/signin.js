import { 
  Card, 
  CardBody, 
  FormControl, 
  FormHelperText, 
  FormLabel, 
  Input, 
  Button, 
  VStack, 
  Box, 
  Link
} from "@chakra-ui/react";
import axios from 'axios';
import { api } from "./actions/api";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Signup } from "./signup";
import { ForgotPassword } from "./forgot_pass";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signin = async () => {
    await axios.post(api + "/signin", { email, password })
      .then((res) => {
        if (res.data) {
          alert(res.data);
        } else {
          alert(res.data);
          // navigate("/signup");
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <Box 
      height="100vh" 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      bgGradient="linear(to-r, pink.200, blue.200)"
    >
      <Card 
        width="400px" 
        boxShadow="2xl" 
        p={8} 
        borderRadius="lg" 
        bgGradient="linear(to-b, white, pink.50)"
      >
        <CardBody>
          <VStack spacing={6} align="stretch">
            <FormControl id="email">
              <FormLabel color="pink.600">Email address</FormLabel>
              <Input 
                type="email" 
                focusBorderColor="pink.500" 
                bg="white" 
                borderColor="pink.200"
                _hover={{ borderColor: 'pink.300' }}
                _focus={{ borderColor: 'pink.400', boxShadow: '0 0 0 1px #FED7E2' }}
                onChange={(e) => setEmail(e.target.value)} 
              />
              <FormHelperText color="pink.500">We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl id="password">
              <FormLabel color="blue.600">Password</FormLabel>
              <Input 
                type="password" 
                focusBorderColor="blue.500" 
                bg="white" 
                borderColor="blue.200"
                _hover={{ borderColor: 'blue.300' }}
                _focus={{ borderColor: 'blue.400', boxShadow: '0 0 0 1px #BEE3F8' }}
                onChange={(e) => setPassword(e.target.value)} 
              />
              <FormHelperText color="blue.500">We'll never share your password.</FormHelperText>
            </FormControl>

            <Button 
              colorScheme="purple" 
              size="lg" 
              mt={4} 
              onClick={signin}
              bgGradient="linear(to-r, purple.400, pink.400)"
              _hover={{ bgGradient: 'linear(to-r, purple.500, pink.500)' }}
            >
              Sign In
            </Button>

            <Button 
              as={RouterLink}
              to="/forgot-password"
              colorScheme="orange" 
              size="lg" 
              mt={4}
              bgGradient="linear(to-r, purple.400, pink.400)"
              _hover={{ bgGradient: 'linear(to-r, purple.500, pink.500)' }}
            >
              Forgot Password
            </Button>

            <Button 
              as={RouterLink}
              to="/signup"
              colorScheme="orange" 
              size="lg" 
              mt={4}
              bgGradient="linear(to-r, purple.400, pink.400)"
              _hover={{ bgGradient: 'linear(to-r, purple.500, pink.500)' }}
            >
              Sign Up
            </Button>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
};