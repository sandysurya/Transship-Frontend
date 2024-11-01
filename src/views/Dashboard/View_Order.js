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
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Text,
  Th,
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
import { useHistory,useParams } from "react-router-dom";

import IconBox from "components/Icons/IconBox";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "components/Icons/Icons.js";

import {
  FaArrowDown,
  FaArrowUp,
  FaBell,
  FaCreditCard,
  FaFilePdf,
  FaHtml5,
  FaShoppingCart,
} from "react-icons/fa";
import DashboardTableRow from "components/Tables/DashboardTableRow";
import TimelineRow from "components/Tables/TimelineRow";
import React, { useState } from "react";
// react icons
import { BsArrowRight } from "react-icons/bs";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import envelope from "assets/img/envelope.png";
import pallets from "assets/img/pallet.png";
import packages from "assets/img/package.jpg";
import container from "assets/img/container.png";
import flatrack from "assets/img/flatrack.png";

export default function ViewOrder() {
  const value = "$100.000";
  // Chakra Color Mode
  const { colorMode, toggleColorMode } = useColorMode();
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("#F8F9FA", "gray.800");
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
  const overlayRef = React.useRef();
  let users = localStorage.getItem("user");

    users = JSON.parse(users);
    let user=users.data;
  
    let shipmentdata = localStorage.getItem("shipmentdata");
  
  const emailColor = useColorModeValue("gray.400", "gray.300");
  const { id } = useParams();
  shipmentdata = JSON.parse(shipmentdata);
  var shipmentdatas=[];
  shipmentdata.map((row)=>{
if(row.id == id){
  shipmentdatas=row;
}
  })

  const timelineData = [
    {
      logo: FaBell,
      title: "Waiting for Approval",
      date: "22 DEC 7:20 PM",
      color: "teal.300",
    },
    {
      logo: FaHtml5,
      title: "Approved",
      date: "21 DEC 11:21 PM",
      color: "orange",
    },
    {
      logo: FaShoppingCart,
      title: "In Processing",
      date: "21 DEC 9:28 PM",
      color: "blue.400",
    },
    {
      logo: FaCreditCard,
      title: "Arriving",
      date: "20 DEC 3:52 PM",
      color: "orange.300",
    },
    {
      logo: FaCreditCard,
      title: "Delivered",
      date: "19 DEC 11:35 PM",
      color: "purple",
    },
    {
      logo: FaCreditCard,
      title: "Cancelled",
      date: "18 DEC 4:41 PM",
    },
  ];

 //from details
 const [f_country, setFCountry] = useState(shipmentdatas.f_country);
 const [f_name, setFName] = useState(shipmentdatas.f_name);
 const [f_companyname, setFCompanyname] = useState(shipmentdatas.f_companyname);
 const [f_address1, setFAddress1] = useState(shipmentdatas.f_address1);
 const [f_address2, setFAddress2] = useState(shipmentdatas.f_address2);
 const [f_postalcode, setFPostalcode] = useState(shipmentdatas.f_postalcode);
 const [f_phonenumber, setFPhonenumber] = useState(JSON.parse(shipmentdatas.f_phonenumber));
 const [f_city, setFCity] = useState(shipmentdatas.f_city);
 const [f_state, setFState] = useState(shipmentdatas.f_state);
 const [f_email, setFEmail] = useState(shipmentdatas.f_email);
 const [f_otherinfo, setFOtherInfo] = useState(shipmentdatas.f_otherinfo);

 //to details
 const [t_country, setTCountry] = useState(JSON.parse(shipmentdatas.t_country));
 const [t_name, setTName] = useState(shipmentdatas.t_name);
 const [t_companyname, setTCompanyname] = useState(shipmentdatas.t_companyname);
 const [t_address1, setTAddress1] = useState(shipmentdatas.t_address1);
 const [t_address2, setTAddress2] = useState(shipmentdatas.t_address2);
 const [t_postalcode, setTPostalcode] = useState(shipmentdatas.t_postalcode);
 const [t_phonenumber, setTPhonenumber] = useState(JSON.parse(shipmentdatas.t_phonenumber));
 const [t_city, setTCity] = useState(JSON.parse(shipmentdatas.t_city));
 const [t_state, setTState] = useState(JSON.parse(shipmentdatas.t_state));
 const [t_email, setTEmail] = useState(shipmentdatas.t_email);
 const [t_otherinfo, setTOtherInfo] = useState(shipmentdatas.t_otherinfo);

//package info

 const [buttonText, setButtonText] = useState("Update");

 const [package_type, setPackageType] = useState(shipmentdatas.package_type);
 const [merchandize_type, setMerchandizeType] = useState(shipmentdatas.merchandize_type);
 const [declared_value, setDeclaredValue] = useState(shipmentdatas.declared_value)
 const [extra_insurance, setExtraInsurance] = useState(shipmentdatas.extra_insurance)
 const [length, setLength] = useState(shipmentdatas.length)
 const [height, setHeight] = useState(shipmentdatas.height)
 const [width, setWidth] = useState(shipmentdatas.width)
 const [wieghtlb, setWieghtlb] = useState(shipmentdatas.wieghtlb)
 const [commodity, setCommodity] = useState(shipmentdatas.commodity)
 const [drop_it_off, setDropitOff] = useState(shipmentdatas.pick_up_package)
 const [shipmenttype, setShipmentType] = useState(shipmentdatas.shipment_type)

 
 const [accept_policy, setAcceptPolicy] = useState(shipmentdatas.accept_policy)
 const [product_details, setProductDetails] = useState(JSON.parse(shipmentdatas.product_details));
 const [tracking_id, setTrackingID] = useState(shipmentdatas.tracking_id);
 const [order_id, setOrderID] = useState(shipmentdatas.order_id);


 const [package_img,setPackageImg]=useState([envelope,packages,pallets,container,flatrack])

 const [error, setError] = useState(undefined);
 const history = useHistory();

 const format = (val) => `$` + val;
 const parse = (val) => (val == "undefined") ? '0' :val.replace(/^\$/, '');


  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      
    
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
              {timelineData.map((row, index, arr) => {
                return (
                  <TimelineRow
                    logo={row.logo}
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
          <Text  fontSize="md" color={ "red.400"} fontWeight="semibold">
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
  );
}
