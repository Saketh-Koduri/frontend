import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Box,
    VStack,
    Button,
    Heading,
    Text,
  } from '@chakra-ui/react';
  import axios from 'axios';
  import { api } from "./actions/api"; 
  import { useState } from "react";

  export const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [password,setPassword]=useState("")
    const handleSubmit = async (event) => {
      
  
      try {
        const response = await axios.post(api+'/forgot-password', {
          email,
          password,
        });
  
        if (response) {
          alert('Password reset successfully!');
        } else {
          alert('Error resetting password:');
        }
      } catch (error) {
        alert('Error resetting password:', error);
      }
    };
  
    return (
      <Box
        bg="linear-gradient(135deg, #FFF5F7 0%, #FED7E2 100%)"
        p={8}
        borderRadius={16}
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
        maxWidth="400px"
        m="auto"
      >
        <VStack spacing={6} align="stretch">
          <Heading as="h2" size="xl" textAlign="center" color="pink.600">
            Forgot Password
          </Heading>
  
          <FormControl>
            <FormLabel color="gray.700">Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              bg="white"
              borderColor="pink.200"
              placeholder="Enter your email address"
              name="email"
            />
            <FormHelperText color="gray.500">
              We'll send you an email to reset your password.
            </FormHelperText>
          </FormControl>
  
          <FormControl>
            <FormLabel color="gray.700">New Password</FormLabel>
            <Input
              type="password"
              bg="white"
              borderColor="pink.200"
              placeholder="Enter your new password"
              name="newPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormHelperText color="gray.500">
              Enter a strong and unique password.
            </FormHelperText>
          </FormControl>
  
          <Button
            type="submit"
            bg="pink.600"
            color="white"
            _hover={{ bg: 'pink.700' }}
            _active={{ bg: 'pink.800' }}
            onClick={handleSubmit}
          >
            Send Reset Link
          </Button>
  
          <Text fontSize="sm" color="gray.500" textAlign="center">
            Remember your password? <a href="#">Log in</a>
          </Text>
        </VStack>
      </Box>
    );
  };