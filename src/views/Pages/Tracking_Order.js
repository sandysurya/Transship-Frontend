// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Portal,
  Progress,
  SimpleGrid,
  Spacer,
  Input,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Text,
  Th,
  FormControl,
  FormLabel,
  Td,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import { useHistory } from "react-router-dom";

import {
  FaBell,
  FaCheckCircle,
  FaCogs,
  FaShippingFast,
  FaShip,
  FaTimesCircle
} from "react-icons/fa";
import TimelineRow from "components/Tables/TimelineRow";
import React, { useState } from "react";
// react icons
import { BsArrowRight } from "react-icons/bs";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import AuthApi from "../../api/auth";

import BgSignUp from "assets/img/BgSignUp.png";
import envelope from "assets/img/envelope.png";
import pallets from "assets/img/pallet.png";
import packages from "assets/img/package.jpg";
import container from "assets/img/container.png";
import flatrack from "assets/img/flatrack.png";

export default function TrackingOrder() {
  // Chakra Color Mode
  const { colorMode, toggleColorMode } = useColorMode();
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const iconBoxInside = useColorModeValue("white", "white");
  const nameColor = useColorModeValue("gray.500", "white");

  const [series, setSeries] = useState([
    {
      type: "area",
      name: "Mobile apps",
      data: [190, 220, 205, 350, 370, 450, 400, 360, 210, 250, 292, 150],
    },
    {
      type: "area",
      name: "Websites",
      data: [400, 291, 121, 117, 25, 133, 121, 211, 147, 25, 201, 203],
    },
  ]);
 
  
  const emailColor = useColorModeValue("gray.400", "gray.300");

  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");

  let trackingdata = JSON.parse(localStorage.getItem("trackingdata"))[0];

   //from details
 const [f_country, setFCountry] = useState();
 const [f_name, setFName] = useState();
 const [f_companyname, setFCompanyname] = useState();
 const [f_address1, setFAddress1] = useState();
 const [f_address2, setFAddress2] = useState();
 const [f_postalcode, setFPostalcode] = useState();
 const [f_phonenumber, setFPhonenumber] = useState({});
 const [f_city, setFCity] = useState();
 const [f_state, setFState] = useState();
 const [f_email, setFEmail] = useState();
 const [f_otherinfo, setFOtherInfo] = useState();

 //to details
 const [t_country, setTCountry] = useState({});
 const [t_name, setTName] = useState();
 const [t_companyname, setTCompanyname] = useState();
 const [t_address1, setTAddress1] = useState();
 const [t_address2, setTAddress2] = useState();
 const [t_postalcode, setTPostalcode] = useState();
 const [t_phonenumber, setTPhonenumber] = useState({});
 const [t_city, setTCity] = useState({});
 const [t_state, setTState] = useState({});
 const [t_email, setTEmail] = useState();
 const [t_otherinfo, setTOtherInfo] = useState();

//package info
const [package_type, setPackageType] = useState();
 const [merchandize_type, setMerchandizeType] = useState();
 const [declared_value, setDeclaredValue] = useState()
 const [extra_insurance, setExtraInsurance] = useState()
 const [length, setLength] = useState()
 const [height, setHeight] = useState()
 const [width, setWidth] = useState()
 const [wieghtlb, setWieghtlb] = useState()
 const [commodity, setCommodity] = useState()
 const [drop_it_off, setDropitOff] = useState()
 const [shipmenttype, setShipmentType] = useState()

 
 const [accept_policy, setAcceptPolicy] = useState()
 const [product_details, setProductDetails] = useState([]);
 const [tracking_id, setTrackingID] = useState();
 const [order_id, setOrderID] = useState();
 const [status, setStatus] = useState([]);

 const [package_img,setPackageImg]=useState([envelope,packages,pallets,container,flatrack])

   const [buttonText, setButtonText] = useState("Track Your Order");

 const [tracking, setTracking] = useState();

 const [error, setError] = useState(undefined);
 const history = useHistory();

 
 const searchtracking = async (event) => {
  if (event) {
    event.preventDefault();
  }
  if (!tracking) {
    return setError("You must enter your tracking number.");
  }
  setButtonText("Tracking");
  try {
    let response = await AuthApi.TrackingData({
      tracking:tracking,
      method:'tracking'
    });
    if (response.data && response.data.success === false) {
      setButtonText("Track Your Order");
      return setError(response.data.msg);
    }
    setTracking('');
    setButtonText("Track Your Order");
    localStorage.setItem("trackingdata",JSON.stringify(response.data.data));
    let trackdts=response.data.data[0];

setFCountry(trackdts.f_country);
setFName(trackdts.f_name);
setFCompanyname(trackdts.f_companyname);
setFEmail(trackdts.f_email);
setFPhonenumber(JSON.parse(trackdts.f_phonenumber))
setFAddress1(trackdts.f_address1);
setFAddress2(trackdts.f_address2);
setFState(trackdts.f_state);
setFCity(trackdts.f_city);
setFPostalcode(trackdts.f_postalcode);
setFOtherInfo(trackdts.f_otherinfo);

setTCountry(JSON.parse(trackdts.t_country));
setTName(trackdts.t_name);
setTCompanyname(trackdts.t_companyname);
setTEmail(trackdts.t_email);
setTPhonenumber(JSON.parse(trackdts.t_phonenumber))
setTAddress1(trackdts.t_address1);
setTAddress2(trackdts.t_address2);
setTState(JSON.parse(trackdts.t_state));
setTCity(JSON.parse(trackdts.t_city));
setTPostalcode(trackdts.t_postalcode);
setTOtherInfo(trackdts.t_otherinfo);

setPackageType(trackdts.package_type);
setMerchandizeType(trackdts.merchandize_type);
setDeclaredValue(trackdts.declared_value);
setExtraInsurance(trackdts.extra_insurance);
setLength(trackdts.length);
setWidth(trackdts.width);
setHeight(trackdts.height);
setWieghtlb(trackdts.wieghtlb);
setCommodity(trackdts.commodity);
setShipmentType(trackdts.shipment_type);
setDropitOff(trackdts.pick_up_package);

setTrackingID(trackdts.tracking_id);
setOrderID(trackdts.order_id);
setStatus(JSON.parse(trackdts.status));
setProductDetails(JSON.parse(trackdts.product_details));

  } catch (err) {
    setButtonText("Track Your Order");
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
    <Flex alignItems="center" justifyContent="center" mb="10px" mt="20px">
      <Flex
        direction="column"
        w="650px"
        background="transparent"
        borderRadius="15px"
        p="40px"
        mx={{ base: "100px" }}
        bg={bgColor}
        boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
      >
      <h4
                  style={{
                    fontSize: ".9em",
                    color: "red",
                    textAlign: "center",
                    fontWeight: 400,
                    transition: ".2s all",
                  }}
                >
                  {error}
                </h4>
      <Flex
          alignItems="center"
          justifyContent="start"
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "100%", lg: "100%" }}
        >
          
          <Input
            fontSize="sm"
            ms="4px"
            borderRadius="15px"
            type="text"
            placeholder="Enter Your Tacking Number"
            mr="14px"
            value={tracking}
            size="lg"
            onChange={(event) => {
              setTracking(event.target.value);
              setError(undefined);
            }}
          />
               
          <Button
            type="submit"
            bg="teal.300"
            fontSize="15px"
            color="white"
            fontWeight="bold"
            w="60%"
            h="45"
           
            _hover={{
              bg: "teal.200",
            }}
            _active={{
              bg: "teal.400",
            }}
            onClick={searchtracking}
          >
            {buttonText}
          </Button>
      
          </Flex>
      </Flex>
    </Flex>
    <Flex alignItems="center" justifyContent="center" mb="60px" mt="20px">
     
      {(f_country) ?
    <Flex
    direction="column"
    w="1000px"
    background="transparent"
    borderRadius="15px"
    p="20px"
    mx={{ base: "100px" }}
    bg={bgColor}
    boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
  >
    
   <Grid
   templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
   templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
   gap="24px"
 >
   <Card p="16px" overflowX={{ sm: "scroll", xl: "hidden" }}>
     <CardHeader p="12px 0px 28px 0px">
     <Flex justify="space-between" align="center" minHeight="60px" w="100%">
         <Text
           fontSize="lg"
           color={textColor}
           fontWeight="bold"
           pb=".5rem"
         >
          Order OverView
         </Text>
         <Flex align="center">
           <Icon
             as={IoCheckmarkDoneCircleSharp}
             color="teal.300"
             w={4}
             h={4}
             pe="3px"
           />
           <Text fontSize="sm" color="gray.400" fontWeight="normal">
             <Text fontWeight="bold" as="span">
              {tracking_id}
             </Text>
           </Text>
         </Flex>
       </Flex>
     </CardHeader>
     <Flex justify="space-between" w="100%">
         <Flex direction={{ sm: "column", md: "row" }} mb="24px" w="100%">
      <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
    Order ID:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm"  color="teal.300" fontWeight="semibold">
    {order_id}
     </Text>
     </Flex>
     </Flex>
     <Flex direction={{ sm: "column", md: "row" }} mb="24px" w="100%">
      <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
    Tracking ID:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm"  color="teal.300" fontWeight="semibold">
    {tracking_id}
     </Text>
     </Flex>
     </Flex>
     </Flex>
     <Grid
       templateColumns={{
         sm: "1fr",
         md: "1fr 1fr",
         xl: "1fr 1fr",
       }}
       templateRows={{ sm: "auto auto auto", md: "1fr auto", xl: "1fr" }}
       gap="10px"
     >
      
     <Box p="18px" bg={bgColor} my="22px" borderRadius="12px">
 <Flex justify="space-between" w="100%">
   <Flex direction="column" maxWidth="100%" w="100%">
     <Text color={nameColor} fontSize="lg" fontWeight="bold" mb="10px">
     Shipping From
     </Text>
     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
       Full Name:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {f_name}
     </Text>
     </Flex>
     </Flex>

     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Country:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {f_country}
     </Text>
     </Flex>
     </Flex>

     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     State/province:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {f_state}
     </Text>
     </Flex>
     </Flex>

     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     City/Town:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {f_city}
     </Text>
     </Flex>
     </Flex>

     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Company Name:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {f_companyname}
     </Text>
     </Flex>
     </Flex>
   
     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Address Line1:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {f_address1}
     </Text>
     </Flex>
     </Flex>

     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Address Line2:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {f_address2}
     </Text>
     </Flex>
     </Flex>

     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Postal Code:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {f_postalcode}
     </Text>
     </Flex>
     </Flex>
     
     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Email Address:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {f_email}
     </Text>
     </Flex>
     </Flex>
     
     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Phone Number:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {f_phonenumber.phonenumber}
     </Text>
     </Flex>
     </Flex>

     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Other Information:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {f_otherinfo}
     </Text>
     </Flex>
     </Flex>

   </Flex>
   
 </Flex>
</Box>
<Box p="18px" bg={bgColor} my="22px" borderRadius="12px">
 <Flex justify="space-between" w="100%">
   <Flex direction="column" maxWidth="100%" w="100%">
     <Text color={nameColor} fontSize="lg" fontWeight="bold" mb="10px">
    Shipping To
     </Text>
     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
       Full Name:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {t_name}
     </Text>
     </Flex>
     </Flex>

     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Country:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {t_country.name}
     </Text>
     </Flex>
     </Flex>

     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     State/province:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {t_state.name}
     </Text>
     </Flex>
     </Flex>

     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     City/Town:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {t_city.name}
     </Text>
     </Flex>
     </Flex>

     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Company Name:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {t_companyname}
     </Text>
     </Flex>
     </Flex>
   
     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Address Line1:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {t_address1}
     </Text>
     </Flex>
     </Flex>

     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Address Line2:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {t_address2}
     </Text>
     </Flex>
     </Flex>

     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Postal Code:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {t_postalcode}
     </Text>
     </Flex>
     </Flex>
     
     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Email Address:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {t_email}
     </Text>
     </Flex>
     </Flex>
     
     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Phone Number:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {t_phonenumber.phonenumber}
     </Text>
     </Flex>
     </Flex>

     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Other Information:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {t_otherinfo}
     </Text>
     </Flex>
     </Flex>
   </Flex>
 
 </Flex>
</Box>
</Grid>
<Grid
       templateColumns={{
         sm: "1fr",
         md: "1fr",
         xl: "1fr",
       }}
       templateRows={{ sm: "auto auto auto", md: "1fr", xl: "1fr" }}
       gap="10px"
     >
<Box p="18px" bg={bgColor} my="22px" borderRadius="12px">
 <Flex justify="space-between" w="100%">
 <Flex direction="column" maxWidth="100%" w="50%">
   
     <Text color={nameColor} fontSize="lg" fontWeight="bold" mb="10px">
   Package Details
     </Text>

     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Packaging Type:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {package_type}
     </Text>
     </Flex>
     </Flex>
     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Insurance($):{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      ${extra_insurance}
     </Text>
     </Flex>
     </Flex>
     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Length:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {length}
     </Text>
     </Flex>
     </Flex>
     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Width:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {width}
     </Text>
     </Flex>
     </Flex>
     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Commodity:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {commodity}
     </Text>
     </Flex>
     </Flex>

   </Flex>
   <Flex direction="column" maxWidth="100%" w="50%">
     <Text color={nameColor} fontSize="lg" mb="37px" fontWeight="bold" >
 
     </Text>
     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Merchandize Type:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {merchandize_type}
     </Text>
     </Flex>
     </Flex>
     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Declared value($):{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      ${declared_value}
     </Text>
     </Flex>
     </Flex>
     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Height:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {height}
     </Text>
     </Flex>
     </Flex>
     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Weight in lb:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {wieghtlb}
     </Text>
     </Flex>
     </Flex>
     <Flex direction={{ sm: "column", md: "row" }} w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Shipment Type:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {shipmenttype}
     </Text>
     </Flex>
     </Flex>
   </Flex>
 </Flex>
</Box>
</Grid>
   </Card>
   <Card maxH="100%">
     <CardHeader p="22px 0px 35px 14px">
       <Flex direction="column">
         <Text
           fontSize="lg"
           color={textColor}
           fontWeight="bold"
          
         >
           Order Tracking
         </Text>
         <Text fontSize="sm" color="gray.400" fontWeight="normal">
           <Text fontWeight="bold" as="span" color="teal.300">
            {tracking_id}
           </Text>
           
         </Text>
       </Flex>
     </CardHeader>
     <CardBody ps="20px" pe="0px" mb="31px" position="relative">
       <Flex direction="column">
         {status.map((row, index, arr) => {
           return (
             <TimelineRow
               logo={(index == 0) ? FaBell :(index == 1) ? FaCheckCircle :(index == 2) ? FaCogs : (index == 3) ? FaShippingFast : (index == 4) ? FaShip : FaTimesCircle}
               title={row.title}
               date={row.date}
               color={row.color}
               index={index}
               arrLength={arr.length}
             />
           );
         })}
       </Flex>
     </CardBody>
   </Card>
 </Grid>

 <Grid
   templateColumns={{ sm: "1fr", md: "1fr", lg: "1fr" }}
   templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
   gap="24px"
   mt="24px"
 >
   <Card p="16px" overflowX={{ sm: "scroll", xl: "hidden" }}>
     <CardHeader p="12px 0px 28px 0px">
       <Flex direction="column">
         <Text
           fontSize="lg"
           color={textColor}
           fontWeight="bold"
           pb=".5rem"
         >
           Item Description
         </Text>
       
       </Flex>
     </CardHeader>
     <Table variant="simple" color={textColor}>
       <Thead>
         <Tr my=".8rem" ps="0px">
         <Th color="gray.400">Qty</Th>
       <Th color="gray.400">Product Details</Th>
       <Th color="gray.400">Unit Value</Th>
       <Th color="gray.400">Subtotal</Th>
         </Tr>
       </Thead>
       <Tbody>
       {product_details.map((row,k) => {
       return (
         <Tr key={row.id}>
         <Td>
           <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
             <Flex direction="column">
             <Text color="gray.400" fontSize="sm" fontWeight="semibold">
    {row.qty}
     </Text>
               
             </Flex>
           </Flex>
         </Td>
         <Td>
           <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
             <Flex direction="column">
             <Text color="gray.400" fontSize="sm" fontWeight="semibold">
    {row.product_name}
     </Text>
               
             </Flex>
           </Flex>
         </Td>
         <Td>
           <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
             <Flex direction="column">
             <Text color="gray.400" fontSize="sm" fontWeight="semibold">
    ${row.unit_value}
     </Text>
               
             </Flex>
           </Flex>
         </Td>
         <Td>
           <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
             <Flex direction="column">
             <Text color="gray.400" fontSize="sm" fontWeight="semibold">
    ${row.subtotal}
     </Text>
               
             </Flex>
           </Flex>
         </Td>
</Tr>        
       )
       })
     }
       </Tbody>
     </Table>
     
   </Card>
   </Grid>
   <Grid
   templateColumns={{ sm: "1fr", md: "1fr", lg: "1fr" }}
   templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
   gap="24px"
   mt="24px"
 >
   <Card p="16px" overflowX={{ sm: "scroll", xl: "hidden" }}>
     <CardHeader p="12px 0px 28px 0px">
       <Flex direction="column">
         <Text
           fontSize="lg"
           color={textColor}
           fontWeight="bold"
           pb=".5rem"
         >
           Shipment Details
         </Text>
       
       </Flex>
     </CardHeader>
     <Flex direction={{ sm: "column", md: "row" }} mb="24px" w="100%">
      <Flex width="100%">
     <Text color="gray.400" fontSize="sm" fontWeight="semibold">
     Whould you like us to pick up your shipment?:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" fontWeight="semibold">
      {(drop_it_off == 1) ? "No I'll drop it off" : "Yes pick up my shipment" }
     </Text>
     </Flex>

     </Flex>
     <Flex direction={{ sm: "column", md: "row" }} w="60%">
      <Flex width="100%">
     <Text color={ "red.400"} fontSize="md" fontWeight="semibold">
     Days Of Shipment:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="md" color={ "red.400"} fontWeight="semibold">
     {(shipmenttype == 'Standard Shipment') ? '7 Days' : (shipmenttype == 'Express Shipment') ? '3 Days' : ''}
     </Text>
     </Flex>
     </Flex>
     <Flex direction={{ sm: "column", md: "row" }} w="60%">
      <Flex width="100%">
     <Text color={ "red.400"} fontSize="md" fontWeight="semibold">
     Sub Total:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="sm" color={ "red.400"} fontWeight="semibold">
     {"$"+declared_value}
     </Text>
     </Flex>
     </Flex>
     <Flex direction={{ sm: "column", md: "row" }} w="60%">
      <Flex width="100%">
     <Text color={ "red.400"} fontSize="md" fontWeight="semibold">
     Insurance:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="md" color={ "red.400"} fontWeight="semibold">
     {"$"+extra_insurance}
     </Text>
     </Flex>
     </Flex>
     <Flex direction={{ sm: "column", md: "row" }} w="60%">
      <Flex width="100%">
     <Text color={ "red.400"} fontSize="md" fontWeight="semibold">
     Total:{" "}
     </Text>
     </Flex>
     <Flex width="100%">
     <Text  fontSize="md" color={ "red.400"} fontWeight="semibold">
     {"$"+(parseInt(extra_insurance)+parseInt(declared_value))}
     </Text>
     </Flex>
     </Flex>
     
   </Card>
   </Grid>
    </Flex>
   
   :[""]  
    }
     
    </Flex>
    
  </Flex>
  );
}
