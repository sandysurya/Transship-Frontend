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
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
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
import DashboardTableRow from "components/Tables/DashboardTableRow";
import TimelineRow from "components/Tables/TimelineRow";
import React, { useState,useEffect } from "react";
// react icons
import { BsArrowRight } from "react-icons/bs";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { dashboardTableData, timelineData } from "variables/general";
import AuthApi from "../../api/auth";
import ProductTableRow from "components/Tables/ProductTableRow";

export default function Dashboard() {
  const value = "$100.000";
  // Chakra Color Mode
  const { colorMode, toggleColorMode } = useColorMode();
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
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
    const [dashboardData, setDashboardData] = useState();
    const [error, setError] = useState(undefined);

    useEffect(async()=>{
   
      try {
     
       let response =  await AuthApi.UserDashboardData({method:'dashboard',user_id:user.id});
       if (response.data && response.data.success === false) {
       
         return setError(response.data.msg);
         
       }
       setDashboardData(response.data.data);
     } catch (err) {
       console.log(err);
       if (err.response) {
         return setError(err.response.data.msg);
       }
       return setError("There has been an error.");
     }
   
 
   },[]);

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
      
        <Card minH="83px">
          <CardBody>
            <Flex flexDirection="row" align="center" justify="center" w="100%">
              <Stat me="auto">
                <StatLabel
                  fontSize="sm"
                  color="gray.400"
                  fontWeight="bold"
                  pb=".1rem"
                >
                  New Orders
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor}>
                   
                  </StatNumber>
                  <StatHelpText
                    alignSelf="flex-end"
                    justifySelf="flex-end"
                    m="0px"
                    color="green.400"
                    fontWeight="bold"
                    ps="3px"
                    fontSize="md"
                  >
                    +{(dashboardData) ? dashboardData["neworders"]:''}
                  </StatHelpText>
                </Flex>
              </Stat>
              <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
                <GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
          </CardBody>
        </Card>
        <Card minH="83px">
          <CardBody>
            <Flex flexDirection="row" align="center" justify="center" w="100%">
              <Stat me="auto">
                <StatLabel
                  fontSize="sm"
                  color="gray.400"
                  fontWeight="bold"
                  pb=".1rem"
                >
                  Total Orders
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                    
                  </StatNumber>
                  <StatHelpText
                    alignSelf="flex-end"
                    justifySelf="flex-end"
                    m="0px"
                    color="green.400"
                    fontWeight="bold"
                    ps="3px"
                    fontSize="md"
                  >
                    +{(dashboardData) ? dashboardData["totalorder"]:''}
                  </StatHelpText>
                </Flex>
              </Stat>
              <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
                <CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
          </CardBody>
        </Card>
       
      </SimpleGrid>
      <Grid
        templateColumns={{ md: "1fr", lg: "1fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my="26px"
        gap="24px"
      >
        <Card minHeight="290.5px" p="1.2rem">
          <CardBody w="100%">
            <Flex flexDirection={{ sm: "column", lg: "row" }} w="100%">
              <Flex
                flexDirection="column"
                h="100%"
                lineHeight="1.6"
                width={{ lg: "100%" }}
              >
               
                <Text
                  fontSize="lg"
                  color={textColor}
                  fontWeight="bold"
                  pb=".5rem"
                >
                 Welcome To Transship Brokerage
                </Text>
                <Text fontSize="lg"  color={textColor} fontWeight="bold">
                  {user.name}
                </Text>
                <Text fontSize="lg" color="gray.400" fontWeight="bold">
                  8000 NW 37 Avn Unit 6
                </Text>
                <Text fontSize="lg" color="gray.400" fontWeight="bold">
                MIAMI, FLORIDA 33147
                </Text>
                <Spacer />
                
              </Flex>
              <Spacer />
             
            </Flex>
          </CardBody>
        </Card>
       
      </Grid>
 
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr", lg: "1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
        gap="24px"
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
                Orders
              </Text>
             
            </Flex>
          </CardHeader>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" ps="0px">
                <Th color="gray.400">Tracking ID</Th>
                <Th color="gray.400">Order ID</Th>
                <Th color="gray.400">Name</Th>
                <Th color="gray.400">Email</Th>
                <Th color="gray.400">Phone Number</Th>
                <Th color="gray.400">Status</Th>
                <Th color="gray.400">Date</Th>
              </Tr>
            </Thead>
            <Tbody>
            {(dashboardData) ? dashboardData["listorders"].map((row) => {
                return (
                  <ProductTableRow
                    fname={row.f_name}
                    femail={row.f_email}
                    fphonenumber={JSON.parse(row.f_phonenumber).phonenumber}
                    trackingid={row.tracking_id}
                    orderid={row.order_id}
                    status={JSON.parse(row.status).length-1}
                    date={row.created_at}
                   edits={row.id}
                   action='dashboard'
                  />
                );
              }):""}
            </Tbody>
          </Table>
        </Card>
        
      </Grid>
    </Flex>
  );
}
