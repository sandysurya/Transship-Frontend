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
import { useHistory } from "react-router-dom";
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




function NewCustomer() {
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

  const emailColor = useColorModeValue("gray.400", "gray.300");
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [address1, setAddress1] = useState();
  const [address2, setAddress2] = useState();
  const [postalcode, setPostalcode] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const [district, setDistrict] = useState();
  const [tin, setTIN] = useState("");
  const [tincols, setTINCOLS] = useState(0);
  const [buttonText, setButtonText] = useState("Save");
  const [buttonText1, setButtonTextForm] = useState("ADD Authorization Form");
  const [buttonText2, setButtonTextDoc] = useState("ADD a Driving License or Passport");
  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [conPassword, setConPassword] = useState();

  const [passworderr, setPasswordErr] = useState();

  const [error, setError] = useState(undefined);
  const history = useHistory();
  const [doc, setDoc] = useState([]);
  const [userdocdata, setDocData] = useState([]);
  const [type, setType] = useState("");
  const [tins, setTINS] = useState(0);


  const handleChange = (event) => {
    setType(event.target.value);
  };

 const userdelete = async(id) =>{
  setDocData(oldValues => {
    return oldValues.filter(userdocdata => userdocdata.id !== id)
  });
  };
  
  const handleform = async (imageList, addUpdateIndex) => {
let userd = [...userdocdata];

   const formData = new FormData(); 
    formData.append('doc', imageList[0].file, imageList[0].name);
    formData.append('method','doc');
    formData.append('document_type','Document');
    formData.append('user_id',customerdatas.user_id);
    try {
    
      let response = await AuthApi.NewCustomerDoc(formData);
      if (response.data && response.data.success === false) {
        return setError(response.data.msg);
        
      }
      setDocData([...userdocdata,{id:userd.length+1,'document_name':imageList[0].file.name,'document_type':'Document'}]);

    } catch (err) {
      
      if (err.response) {
        return setError(err.response.data.msg);
      }
      return setError("There has been an error.");
    }



  };

  const handledoc = async (imageList, addUpdateIndex) => {
    let userd = [...userdocdata];

    const formData = new FormData(); 
    formData.append('doc', imageList[0].file, imageList[0].name);
    formData.append('method','doc');
    ormData.append('document_type','Photo ID');
    formData.append('user_id',customerdatas.user_id);
    try {
    
      let response = await AuthApi.NewCustomerDoc(formData);
      if (response.data && response.data.success === false) {
        return setError(response.data.msg);
        
      }
      setDocData([...userdocdata,{id:userd.length+1,'document_name':imageList[0].file.name,'document_type':'Photo ID'}]);

    } catch (err) {
      
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
    if (newPassword === "") {
      return setError("You must enter a new password.");
    }
    if (conPassword === "") {
      return setError("You must enter a confirm password.");
    }
    const formData = new FormData(); 
    formData.append('username', name);
    formData.append('email',email);
    formData.append('tin_number',tin);
    formData.append('tin_cols',tincols);
    formData.append('password',newPassword);
    formData.append('doc',JSON.stringify(userdocdata));
    formData.append('address1',address1);
    formData.append('address2',address2);
    formData.append('postal_code',postalcode);
    formData.append('phone_number',phonenumber);
    formData.append('district',district);
    formData.append('user_type',type);
    formData.append('tins',tins);
    formData.append('method','add');

    try {
      setButtonText("Saving");
      let response = await AuthApi.NewCustomerInfo(formData);
      if (response.data && response.data.success === false) {
        setButtonText("Save");
        return setError(response.data.msg);
        
      }
     
      return history.push("/admin/customers");
    } catch (err) {
      console.log(err);
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
        <Text fontSize="lg" color={textColor} fontWeight="bold">
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
            </Text>
          <CardHeader p="12px 5px" mb="12px">
          
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Profile Information
            </Text>
          </CardHeader>
          <CardBody px="5px">
            <Flex direction="column"  w="100%">
           
             
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
               
           
              
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  me="10px"
                >
                  Social Media:{" "}
                </Text>
                <Flex>
                  <Link
                    href="#"
                    color="teal.300"
                    fontSize="lg"
                    me="10px"
                    _hover={{ color: "teal.300" }}
                  >
                    <Icon as={FaFacebook} />
                  </Link>
                  <Link
                    href="#"
                    color="teal.300"
                    fontSize="lg"
                    me="10px"
                    _hover={{ color: "teal.300" }}
                  >
                    <Icon as={FaInstagram} />
                  </Link>
                  <Link
                    href="#"
                    color="teal.300"
                    fontSize="lg"
                    me="10px"
                    _hover={{ color: "teal.300" }}
                  >
                    <Icon as={FaTwitter} />
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
        <Card p="16px">
          <CardHeader p="12px 5px" mb="12px">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              TIN
            </Text>
          </CardHeader>
          <CardBody px="5px">
            <Flex direction="column" w="100%">
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
         
              <Flex justifyContent="space-between" mb="21px">
             

                <Flex align="center">
                <Text fontSize="sm" color={textColor} fontWeight="normal">
                Customs requires you to obtain your own TIN # and assign us as your agent. No orders will be processed until National Logistics is assigned as your agent. 
                Link to COLS 
        <Link
          // color={linkTeal}
          color="teal.400"
          href="https://online.gov.ky/cols/faces/home"
        > here</Link>.
                    </Text>
                 
                </Flex>
              
            </Flex>
             
              <Flex justifyContent="space-between" mb="21px">
                <Flex align="center">
                <Text fontSize="sm" color={textColor} fontWeight="normal">
               Transship Brokerage will not be responsible for any delays if we are not assigned as your agent on COLS.
     
                    </Text>
                  
                </Flex>
             
              </Flex>
              <Flex justifyContent="space-between" mb="21px">
                <Flex align="center">
              
                    <Text fontSize="sm" color={textColor} fontWeight="normal">
                    Please click here to download a guide
     
                    </Text>
                </Flex>
             
              </Flex>
              <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
              Type
            </FormLabel>
        <Select
          onChange={handleChange}
          mb="24px"
        >
        <option value="">Type</option>
        <option value="Personal">Personal Account</option>
        <option value="Business">Business Account</option>
        </Select>
        <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
              Do you have a TIN Number?
            </FormLabel>
        <Select
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
              <Flex justifyContent="space-between" mb="21px">
                <Flex align="center" direction="column" w="100%">
                
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Your TIN Number"
                  size="lg"
                  value={tin}
                  onChange={(event) => {
                    setTIN(event.target.value);
                    setError(undefined);
                  }}
                />
                <FormControl display="flex" alignItems="center">
                  <Switch id="remember-login" defaultValue={tincols} defaultChecked={(tincols == 1) ? true : false } value={1} onChange={(event) => {
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
               
                </Flex>
              
              </Flex>
             ):("")}
            </Flex>
            
          </CardBody>
        </Card>

      </Grid>
      <Card p="16px" my="24px">
        <CardHeader p="12px 5px" mb="12px">
          <Flex direction="column">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Documentaion
            </Text>
            <Text fontSize="sm" color={textColor} fontWeight="normal">
            Please click    <Link
          // color={linkTeal}
          color="teal.400"
          target="_blank"
          href={AuthorizationForm}
        > here</Link> to download a copy of the customs Agent Authorization form. When you complete the form, please upload a scanned copy along with a colored copy of your ID (Passport or Driver’s License). This MUST be done before shipping any orders Click here to view an example of a completed Agent Authorization form.
            </Text>

            <Flex  align="center"
              mb={{ sm: "10px", md: "0px" }}
              mt="10px"
              direction={{ sm: "column", md: "row" }}
              w={{ sm: "100%" }}
              textAlign={{ sm: "center", md: "start" }}>
           
           <ImageUploads
        
        action={handleform}
        acceptTypes={["pdf","doc","docx"]}
        buttonTexts={buttonText1}
      />
   
           
             
               <Flex direction="column" ml="15px">
               
               <ImageUploads
        
        action={handledoc}
        acceptTypes={["jpg","png","jpeg","pdf"]}
        buttonTexts={buttonText2}
      />
               

               </Flex>
               </Flex>
            
          </Flex>
          
        </CardHeader>
        <CardBody px="5px">
        <Flex direction="column" w="100%">
      

          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th pl="0px" color="gray.400">
                  Type
                </Th>
                <Th color="gray.400">Document Name</Th>
                <Th color="gray.400">Download</Th>
                <Th color="gray.400">Delete</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {userdocdata.map((row) => {
                return (
                  <TablesTableRow
                    name={row.document_type}
                    logo={row.logo}
                    domain={row.document_name}
                    status={row.flag}
                    date={row.date}
                    deletes={()=>userdelete(row.id)}
                  />
                );
              }) }
            </Tbody>
          </Table>
            </Flex>
           
        </CardBody>
      </Card>
      <Grid templateColumns={{ sm: "1fr", xl: "1fr" }} gap="22px">
      <Card p="16px" my={{ sm: "24px", xl: "0px" }}>
        
          <CardBody px="5px">
            <Flex direction="column"  w="50%">
           
            
                
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
              onClick={save}
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

export default NewCustomer;
