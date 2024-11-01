// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Select,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import BgSignUp from "assets/img/BgSignUp.png";
import React, { useState } from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

import AuthApi from "../../api/auth";
import { useHistory } from "react-router-dom";




function SignUp() {
  const history = useHistory();

  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Sign up");
  const [error, setError] = useState(undefined);
  const [type, setType] = useState("");
  const [tins, setTINS] = useState(0);
  const [tin, setTIN] = useState("");
  const [tincols, setTINCOLS] = useState(0);

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const register = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (name === "") {
      return setError("You must enter your name.");
    }
    if (email === "") {
      return setError("You must enter your email.");
    }
    if (password === "") {
      return setError("You must enter a password.");
    }
    if (type === "") {
      return setError("You must select a type.");
    }
    if (tins === "") {
      return setError("You must TIN Number.");
    }
    try {
      setButtonText("Signing up");
      let response = await AuthApi.Register({
        username: name,
        email,
        password,
        user_type:type,
        tin_number:tin,
        tin_cols:tincols
      });
      if (response.data && response.data.success === false) {
        setButtonText("Sign up");
        return setError(response.data.msg);
      }
      return history.push("/auth/signin");
    } catch (err) {
      console.log(err);
      setButtonText("Sign up");
      if (err.response) {
        return setError(err.response.data.msg);
      }
      return setError("There has been an error.");
    }
  };

  return (
    <Flex
      direction="column"
      alignSelf="center"
      justifySelf="center"
      overflow="hidden"
    >
      <Box
        position="absolute"
        minH={{ base: "70vh", md: "50vh" }}
        w={{ md: "calc(100vw - 50px)" }}
        borderRadius={{ md: "15px" }}
        left="0"
        right="0"
        bgRepeat="no-repeat"
        overflow="hidden"
        zIndex="-1"
        top="0"
        bgImage={BgSignUp}
        bgSize="cover"
        mx={{ md: "auto" }}
        mt={{ md: "14px" }}
      ></Box>
      <Flex
        direction="column"
        textAlign="center"
        justifyContent="center"
        align="center"
        mt="6.5rem"
        mb="30px"
      >
       
      </Flex>
      <Flex alignItems="center" justifyContent="center" mb="60px" mt="20px">
        <Flex
          direction="column"
          w="445px"
          background="transparent"
          borderRadius="15px"
          p="40px"
          mx={{ base: "100px" }}
          bg={bgColor}
          boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
        >
          <Text
            fontSize="xl"
            color={textColor}
            fontWeight="bold"
            textAlign="center"
            mb="22px"
          >
            Register
          </Text>
        
          <FormControl>

          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Type
            </FormLabel>
        <Select
          value={type}
          onChange={handleChange}
        >
        <option value="">Type</option>
        <option value="Personal">Personal Account</option>
        <option value="Business">Business Account</option>
        </Select>
      </FormControl>
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Name
            </FormLabel>
            <Input
              fontSize="sm"
              ms="4px"
              borderRadius="15px"
              type="text"
              placeholder="Your full name"
              mb="24px"
              size="lg"
              onChange={(event) => {
                setName(event.target.value);
                setError(undefined);
              }}
            />
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Email
            </FormLabel>
            <Input
              fontSize="sm"
              ms="4px"
              borderRadius="15px"
              type="email"
              placeholder="Your email address"
              mb="24px"
              size="lg"
              onChange={(event) => {
                setEmail(event.target.value);
                setError(undefined);
              }}
            />
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Password
            </FormLabel>
            <Input
              fontSize="sm"
              ms="4px"
              borderRadius="15px"
              type="password"
              placeholder="Your password"
              mb="24px"
              size="lg"
              onChange={(event) => {
                setPassword(event.target.value);
                setError(undefined);
              }}
            />
            
          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Do you have a TIN Number?
            </FormLabel>
        <Select
          value={tins}
           mb="24px"
          onChange={(event) => {
            setTINS(event.target.value);
            setError(undefined);
          }}
        >
        <option value="">TIN Number</option>
        <option value="0">NO</option>
        <option value="1">YES</option>
        </Select>
       
       { (tins == 1) ? (
        <FormControl alignItems="center">   
      
        <Input
              fontSize="sm"
              ms="4px"
              borderRadius="15px"
              type="number"
              placeholder="TIN Number"
              mb="24px"
              size="lg"
              onChange={(event) => {
                setTIN(event.target.value);
                setError(undefined);
              }}
            />
           {tincols}
                <FormControl display="flex" alignItems="center">   
                  <Switch id="remember-login" defaultValue={tincols} value={1} onChange={(event) => {
                    setTINCOLS(event.target.value);
                    setError(undefined);
                  }} colorScheme="teal" me="10px" />
                  <FormLabel
                    htmlFor="remember-login"
                    mb="1"
                    ms="1"
                    fontWeight="normal"
                  >
                  Yes, I have logged in COLS, and assigned Transship Brokerage as my agent
                </FormLabel>
                </FormControl>
                </FormControl>
  ):("")}
            <h4
              style={{
                fontSize: ".9em",
                color: "red",
                textAlign: "center",
                fontWeight: 400,
                transition: ".2s all",
                marginBottom: '1em'
              }}
            >
              {error}
            </h4>
            <Button
              type="submit"
              bg="teal.300"
              fontSize="15px"
              color="white"
              fontWeight="bold"
              w="100%"
              h="45"
              mb="24px"
              _hover={{
                bg: "teal.200",
              }}
              _active={{
                bg: "teal.400",
              }}
              onClick={register}
            >
              {buttonText}
            </Button>
          </FormControl>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            maxW="100%"
            mt="0px"
          >
         
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUp;
