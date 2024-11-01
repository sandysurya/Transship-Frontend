import {React, useState,useEffect} from "react";
// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Link,
  Switch,
  Text,
  FormLabel,
  FormControl,
  Select,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
// Assets

import AuthorizationForm from "assets/img/AuthorizationForm.pdf";
import ProfileBgImage from "assets/img/ProfileBackground.png";
import TablesTableRow from "components/Tables/TablesTableRow";
import AuthApi from "../../api/auth";
import { useHistory,useParams } from "react-router-dom";
import ImageUploads from "components/Icons/ImageUpload";

import {
  FaCube,
  FaFacebook,
  FaInstagram,
  FaPenFancy,
  FaPlus,
  FaTwitter,
} from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";




function EditUser() {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  const borderProfileColor = useColorModeValue(
    "white",
    "rgba(255, 255, 255, 0.31)"
  );
  const bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800"
  );

  let userdata = localStorage.getItem("userdata");
  
  const { id } = useParams();
  userdata = JSON.parse(userdata);
  var userdatas=[];
  userdata.map((row)=>{
if(row.id == id){
  userdatas=row;
}
  })
  var userinfo=userdatas.userinfo[0];

  const emailColor = useColorModeValue("gray.400", "gray.300");
  const [email, setEmail] = useState(userdatas.email);
  const [name, setName] = useState(userdatas.name);
  const [address1, setAddress1] = useState(userinfo.address1);
  const [address2, setAddress2] = useState(userinfo.address1);
  const [postalcode, setPostalcode] = useState(userinfo.postal_code);
  const [phonenumber, setPhonenumber] = useState(userinfo.phone_number);
  const [district, setDistrict] = useState(userinfo.district);
  const [buttonText, setButtonText] = useState("Save");
  const [buttonText1, setButtonTextForm] = useState("ADD Authorization Form");
  const [buttonText2, setButtonTextDoc] = useState("ADD a Driving License or Passport");
  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [conPassword, setConPassword] = useState();

  const [passworderr, setPasswordErr] = useState();

  const [error, setError] = useState(undefined);
  const history = useHistory();

const savepassword = async (event)=>{

  if (event) {
    event.preventDefault();
  }
  if (currentPassword === "") {
    return setError("You must enter current password");
  }
  if (newPassword === "") {
    return setError("You must enter new password.");
  }
  if (conPassword === "") {
    return setError("You must enter confirm password.");
  }

  try {
    let response = await AuthApi.ChangeAdminUserPassword(
      {
        id:userdatas.id,
        method:'changepassword',
        current_password:currentPassword,
        new_password:newPassword

      });
    if (response.data && response.data.success === false) {
    
      return setError(response.data.msg);
      
    }
    setCurrentPassword("");
    setNewPassword("");
    setConPassword("");
  } catch (err) {
    console.log(err);
    if (err.response) {
      return setError(err.response.data.msg);
    }
    return setError("There has been an error.");
  }

};
  

  
  const save = async (event) => {
    
    if (event) {
      event.preventDefault();
    }
    if (name === "") {
      return setError("You must enter your name.");
    }
    if (email === "") {
      return setError("You must enter your email.");
    }
    if (phonenumber === "") {
      return setError("You must enter a phone number.");
    }
    if (district === "") {
      return setError("You must select a district.");
    }
    if (postalcode === "") {
      return setError("You must enter a postal code.");
    }
    if (address1 === "") {
      return setError("You must enter a address.");
    }
  
    try {
      setButtonText("Saving");
      let response = await AuthApi.EditUserData({
        id:userdatas.id,
        username:name,
        address1:address1,
        address2:address2,
        postal_code:postalcode,
        phone_number:phonenumber,
        district:district,
        email:email,
        method:'useredit'
      });
      if (response.data && response.data.success === false) {
        setButtonText("Save");
        return setError(response.data.msg);
        
      }
      return history.push("/admin/users");
    } catch (err) {
      setButtonText("Save");
      if (err.response) {
        return setError(err.response.data.msg);
      }
      return setError("There has been an error.");
    }
  };



  return (
    <Flex direction="column">
      <Box
        mb={{ sm: "205px", md: "75px", xl: "70px" }}
        borderRadius="15px"
        px="0px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        align="center"
      >
        <Box
          bgImage={ProfileBgImage}
          w="100%"
          h="300px"
          borderRadius="25px"
          bgPosition="50%"
          bgRepeat="no-repeat"
          position="relative"
          display="flex"
          justifyContent="center"
        >
          <Flex
            direction={{ sm: "column", md: "row" }}
            mx="1.5rem"
            maxH="330px"
            w={{ sm: "90%", xl: "95%" }}
            justifyContent={{ sm: "center", md: "space-between" }}
            align="center"
            backdropFilter="saturate(200%) blur(50px)"
            position="absolute"
            boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
            border="2px solid"
            borderColor={borderProfileColor}
            bg={bgProfile}
            p="24px"
            borderRadius="20px"
            transform={{
              sm: "translateY(45%)",
              md: "translateY(110%)",
              lg: "translateY(160%)",
            }}
          >
            <Flex
              align="center"
              mb={{ sm: "10px", md: "0px" }}
              direction={{ sm: "column", md: "row" }}
              w={{ sm: "100%" }}
              textAlign={{ sm: "center", md: "start" }}
            >
              <Avatar
                me={{ md: "22px" }}
                src={"#"}
                w="80px"
                h="80px"
                borderRadius="15px"
              />
              <Flex direction="column" maxWidth="100%" my={{ sm: "14px" }}>
                <Text
                  fontSize={{ sm: "lg", lg: "xl" }}
                  color={textColor}
                  fontWeight="bold"
                  ms={{ sm: "8px", md: "0px" }}
                >
                 {userdatas.name}
                </Text>
                <Text
                  fontSize={{ sm: "sm", md: "md" }}
                  color={emailColor}
                  fontWeight="semibold"
                >
                  {userdatas.email}
                </Text>
              </Flex>
            </Flex>
            <Flex
              direction={{ sm: "column", lg: "row" }}
              w={{ sm: "100%", md: "50%", lg: "auto" }}
            >
              <Button p="0px" bg="transparent" _hover={{ bg: "none" }}>
                <Flex
                  align="center"
                  w={{ sm: "100%", lg: "135px" }}
                  bg="hsla(0,0%,100%,.3)"
                  borderRadius="15px"
                  justifyContent="center"
                  py="10px"
                  boxShadow="inset 0 0 1px 1px hsl(0deg 0% 100% / 90%), 0 20px 27px 0 rgb(0 0 0 / 5%)"
                  border="1px solid gray.200"
                  cursor="pointer"
                >
                  <Icon as={FaCube} me="6px" />
                  <Text fontSize="xs" color={textColor} fontWeight="bold">
                    OVERVIEW
                  </Text>
                </Flex>
              </Button>
              <Button p="0px" bg="transparent" _hover={{ bg: "none" }}>
                <Flex
                  align="center"
                  w={{ sm: "100%", lg: "135px" }}
                  borderRadius="15px"
                   bg="hsla(0,0%,100%,.3)"
                  justifyContent="center"
                  py="10px"
                  boxShadow="inset 0 0 1px 1px hsl(0deg 0% 100% / 90%), 0 20px 27px 0 rgb(0 0 0 / 5%)"
                  border="1px solid gray.200"
                  mx={{ lg: "1rem" }}
                  cursor="pointer"
                >
                  <Icon  color="red" as={IoCloseCircleSharp} me="6px" />
                  <Text fontSize="xs" color="red" fontWeight="bold">
                    DIACTIVATE
                  </Text>
                </Flex>
              </Button>
             
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Grid templateColumns={{ sm: "1fr", xl: "repeat(2, 1fr)" }} gap="22px">
        
        <Card p="16px" my={{ sm: "24px", xl: "0px" }}>
          <CardHeader p="12px 5px" mb="12px">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Profile Information
            </Text>
          </CardHeader>
          <CardBody px="5px">
            <Flex direction="column"  w="100%">
              <Text fontSize="md" color="gray.500" fontWeight="400" mb="30px">
                Hi, {userdatas.name}
              </Text>
             
              <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
                  Full Name :
              </FormLabel>
              
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Your Full Name"
                  size="lg"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    setError(undefined);
                  }}
                />
                
               
                <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
                  Address Line1 :
              </FormLabel>
              
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Your Address Line1"
                  size="lg"
                  value={address1}
                  onChange={(event) => {
                    setAddress1(event.target.value);
                    setError(undefined);
                  }}
                />
                
                <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
                  Address Line2 :
              </FormLabel>
              
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Your Address Line2"
                  size="lg"
                  value={address2}
                  onChange={(event) => {
                    setAddress2(event.target.value);
                    setError(undefined);
                  }}
                />
           
              
              <Flex align="center" mb="18px">
                                 
              <Flex  direction="column" mt="15px" w="100%">
                <Button
              type="submit"
              bg="teal.300"
              fontSize="15px"
              color="white"
              fontWeight="bold"
              w="30%"
              h="45"
              mb="24px"
              _hover={{
                bg: "teal.200",
              }}
              _active={{
                bg: "teal.400",
              }}
              onClick={save}
            >
           {buttonText}
            </Button>
            </Flex>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
        <Card p="16px">
          <CardHeader p="12px 5px" mb="12px">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
        
            </Text>
          </CardHeader>
          <CardBody px="5px">
            <Flex direction="column" w="100%">
            <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
                  Email :
              </FormLabel>
             
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Your email adress"
                  size="lg"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setError(undefined);
                  }}
                />
           
            <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
                  Postal Code :
              </FormLabel>
              
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Your Postal Code"
                  size="lg"
                  value={postalcode}
                  onChange={(event) => {
                    setPostalcode(event.target.value);
                    setError(undefined);
                  }}
                />
            <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
                  Phone Number :
              </FormLabel>
              
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Your Phone Number"
                  size="lg"
                  value={phonenumber}
                  onChange={(event) => {
                    setPhonenumber(event.target.value);
                    setError(undefined);
                  }}
                />
<FormLabel ms="4px" fontSize="sm" fontWeight="bold">
                  District :
              </FormLabel>
              
                <Select
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Select District"
                  size="lg"
                  value={district}
                  onChange={(event) => {
                    setDistrict(event.target.value);
                    setError(undefined);
                  }}
                >
        <option value="Bodden Town">Bodden Town</option>
        <option value="Breakers">Breakers</option>
        <option value="Cayman Brac">Cayman Brac</option>
        <option value="East End">East End</option>
        <option value="George Town">George Town</option>
        <option value="Little Cayman">Little Cayman</option>
        <option value="North Side">North Side</option>
        <option value="Other">Other</option>
        <option value="Savannah">Savannah</option>
        <option value="Seven Mile Beach">Seven Mile Beach</option>
        <option value="West Bay">West Bay</option>

                </Select>
           
            </Flex>
            
          </CardBody>
        </Card>

      </Grid>
     
      <Grid templateColumns={{ sm: "1fr", xl: "repeat(2, 1fr)" }} mt="24px" gap="22px">
      <Card p="16px" my={{ sm: "24px", xl: "0px" }}>
          <CardHeader p="12px 5px" mb="12px">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Change Password
            </Text>
          </CardHeader>
          <CardBody px="5px">
            <Flex direction="column"  w="100%">
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
              <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
                  Current Password :
              </FormLabel>
              
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="password"
                  placeholder="Current Password"
                  size="lg"
                  value={currentPassword}
                  onChange={(event) => {
                    setCurrentPassword(event.target.value);
                    setError(undefined);
                  }}
                />
                
                <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
                  New Password :
              </FormLabel>
             
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="password"
                  placeholder="New Password"
                  size="lg"
                  value={newPassword}
                  onChange={(event) => {
                    setNewPassword(event.target.value);
                    setError(undefined);
                  }}
                />
                <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
                  Confirm Password:
              </FormLabel>
              
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="password"
                  placeholder="Confirm Password"
                  size="lg"
                  value={conPassword}
                 onInput={(event)=>{
                  if(event.target.value != newPassword){
                    setPasswordErr("Password Mismached!");
                  }
                  else{
                    setPasswordErr("");
                    setConPassword(event.target.value);
                  }
                 }}
                 
                />
                <FormLabel ms="4px" fontSize="sm" color="red" fontWeight="bold">
                {passworderr}
              </FormLabel>
                
              <Flex  direction="column" mt="15px" w="100%">
                <Button
              type="submit"
              bg="teal.300"
              fontSize="15px"
              color="white"
              fontWeight="bold"
              w="30%"
              h="45"
              mb="24px"
              _hover={{
                bg: "teal.200",
              }}
              _active={{
                bg: "teal.400",
              }}
              onClick={savepassword}
            >
           {buttonText}
            </Button>
            </Flex>
            </Flex>
          </CardBody>
        </Card>
        </Grid>
    </Flex>
  );
}

export default EditUser;
