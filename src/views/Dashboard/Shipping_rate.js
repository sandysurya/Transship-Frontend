// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Table,
  Thead,
  Tbody,Tr,Td,Th,
  Icon,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import BackgroundCard1 from "assets/img/BackgroundCard1.png";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import IconBox from "components/Icons/IconBox";
import { MastercardIcon, VisaIcon } from "components/Icons/Icons";
import BillingRow from "components/Tables/BillingRow";
import InvoicesRow from "components/Tables/InvoicesRow";
import TransactionRow from "components/Tables/TransactionRow";
import { Separator } from "components/Separator/Separator";
import React from "react";
import {
  FaPaypal,
  FaPencilAlt,
  FaRegCalendarAlt,
  FaWallet,
} from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
import {
  billingData,
  invoicesData,
  newestTransactions,
  olderTransactions,
} from "variables/general";

function ShippingRate() {
  // Chakra color mode
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("#dee2e6", "gray.500");
  const bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800"
  );

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
     
      <Grid >
        <Card my={{ lg: "24px" }} me={{ lg: "24px" }}>
          <Flex direction="column">
            <CardHeader py="12px">
              <Text color={textColor} fontSize="lg" fontWeight="bold">
              Standard Ocean Freight Rates
              </Text>
            </CardHeader>
            <CardBody>
              <Flex direction="column" w="100%">
              <Text color="red" fontSize="md" fontWeight="bold" mb="15px">
              Flat Rate Packages Starting from $19.99
              </Text>
              <Grid
            templateColumns={{
              sm: "1fr",
              md: "1fr 1fr",
              xl: "1fr 2fr",
            }}
            mb="15px"
            templateRows={{ sm: "auto auto auto", md: "1fr auto", xl: "1fr" }}
           
          >
               
             
              <Flex my="0px" direction="column">
              <Text color={textColor} fontSize="sm"  mb="15px">
              Includes:
              </Text>
              <Flex my="0px" pl="25px" direction="column">
              <ul >
              <li>Freight</li>
              <li>Clearing Customs</li>
              <li>Processing & Handling</li>
              <li>Storage Fees</li>
              <li>Administration</li>
              <li>No signup fee</li>
              </ul>
              </Flex>
              </Flex>
              
              <Flex my="0px" direction="column">
              <Table variant="simple" border={2} color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" bgcolor="black">
               
                <Th color="white">Small Package Shipments</Th>
                <Th color="white">Ocean Freight</Th>
                <Th color="white">Insurance</Th>
              
              </Tr>
            </Thead>
            <Tbody>
            <Tr>
      <Td >
       
          <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
          Up to 2 Cubic Feet
          </Text>
        
        </Flex>
      </Td>
      <Td >
       
       <Flex direction="column">
       <Text fontSize="md" color={textColor} fontWeight="bold">
       CI$19.99
       </Text>
     
     </Flex>
   </Td>
   <Td >
       
       <Flex direction="column">
       <Text fontSize="md" color={textColor} fontWeight="bold">
       3% of value, min CI$5
       </Text>
     
     </Flex>
   </Td>
      </Tr>
      <Tr>
      <Td >
       
          <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
          Up to 5 Cubic Feet
          </Text>
        
        </Flex>
      </Td>
      <Td >
       
       <Flex direction="column">
       <Text fontSize="md" color={textColor} fontWeight="bold">
       CI$39.99
       </Text>
     
     </Flex>
   </Td>
   <Td >
       
       <Flex direction="column">
       <Text fontSize="md" color={textColor} fontWeight="bold">
       3% of value, min CI$15
       </Text>
     
     </Flex>
   </Td>
      </Tr>
      <Tr>
      <Td >
       
          <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
          6-10 Cubic Feet
          </Text>
        
        </Flex>
      </Td>
      <Td >
       
       <Flex direction="column">
       <Text fontSize="md" color={textColor} fontWeight="bold">
       CI$49.99
       </Text>
     
     </Flex>
   </Td>
   <Td >
       
       <Flex direction="column">
       <Text fontSize="md" color={textColor} fontWeight="bold">
       3% of value, min CI$15
       </Text>
     
     </Flex>
   </Td>
      </Tr>
            </Tbody>
          </Table>

              </Flex>
              </Grid>
              <Text color="red" fontSize="md" fontWeight="bold" mb="15px">
              LCL over 11 cubic feet
              </Text>
              <Grid
            templateColumns={{
              sm: "1fr",
              md: "1fr 1fr",
              xl: "1fr 2fr",
            }}
            mb="15px"
            templateRows={{ sm: "auto auto auto", md: "1fr auto", xl: "1fr" }}
            gap="26px"
          >
               
             
              <Flex my="0px" direction="column">
              <Text color={textColor} fontSize="sm"  mb="15px">
              Includes:
              </Text>
              <Flex my="0px" pl="25px" direction="column">
              <ul >
              <li>30 days for free consolidations</li>
              <li>Order from multiple websites</li>
              <li>No minimum order</li>
              <li>No signup fee</li>
            
              </ul>
              </Flex>
              </Flex>
              
              <Flex my="0px" direction="column">
              <Table variant="simple" border={2} color={textColor}>
            
            <Tbody>
            <Tr>
      <Td bgcolor="black">
       
          <Flex direction="column">
          <Text fontSize="md" color="white" fontWeight="bold">
          Ocean Freight
          </Text>
        
        </Flex>
      </Td>
      <Td >
       
       <Flex direction="column">
       <Text fontSize="md" color={textColor} fontWeight="bold">
       CI$2.90 per cubic ft
       </Text>
     
     </Flex>
   </Td>
  
      </Tr>
      <Tr>
      <Td bgcolor="black">
       
          <Flex direction="column">
          <Text fontSize="md" color="white" fontWeight="bold">
          Port Fees
          </Text>
        
        </Flex>
      </Td>
      <Td >
       
       <Flex direction="column">
       <Text fontSize="md" color={textColor} fontWeight="bold">
       CI$1.29 per cubic ft.
       </Text>
     
     </Flex>
   </Td>

      </Tr>
      <Tr>
      <Td bgcolor="black" >
       
          <Flex direction="column">
          <Text fontSize="md" color="white" fontWeight="bold">
          Admin Fee
          </Text>
        
        </Flex>
      </Td>
      <Td >
       
       <Flex direction="column">
       <Text fontSize="md" color={textColor} fontWeight="bold">
       3% of declared value, min $15 
       </Text>
     
     </Flex>
   </Td>
   
      </Tr>
      <Tr>
      <Td bgcolor="black" >
       
          <Flex direction="column">
          <Text fontSize="md" color="white" fontWeight="bold">
          Insurance
          </Text>
        
        </Flex>
      </Td>
      <Td >
       
       <Flex direction="column">
       <Text fontSize="md" color={textColor} fontWeight="bold">
       CI $0
       </Text>
     
     </Flex>
   </Td>
   
      </Tr>
      <Tr>
      <Td bgcolor="black" >
       
          <Flex direction="column">
          <Text fontSize="md" color="white" fontWeight="bold">
          Customs Brokerage
          </Text>
        
        </Flex>
      </Td>
      <Td >
       
       <Flex direction="column">
       <Text fontSize="md" color={textColor} fontWeight="bold">
       CI$49.50
       </Text>
     
     </Flex>
   </Td>
   
      </Tr>
            </Tbody>
          </Table>



              </Flex>
              </Grid>
              <Text color="red" fontSize="md" fontWeight="bold" mb="15px">
              Unbeatable pallet pricing for Businesses $225
              </Text>
              <Text color={textColor} fontSize="sm"  mb="15px">
              Save on your shipping costs with our unbeatable pallet pricing and competitive ocean freight rates. $225 pallet*
             </Text>
             <Text color={textColor} fontSize="sm"  mb="15px">
              Includes:
              </Text>
              <Flex my="0px"  mb="15px" pl="25px" direction="column">
              <ul >
              <li>30 days for free consolidations</li>
              <li>Order from multiple websites</li>
              <li>No minimum order</li>
              <li>No signup fee</li>
              <li>No other fee</li>
              
              </ul>
              </Flex>
              <Text color={textColor} fontSize="sm"  mb="15px">
              Our ocean shipping service is designed for businesses. It's an ideal solution for transporting bulky cargo, ensuring safe and reliable transportation. With 2 x weekly sailings from Miami, it's cost-effective and efficient; we handle customs clearance, you have peace of mind. Additionally, our 30-day consolidation service helps streamline shipping and saves you money.
             </Text>
             <Text color={textColor} fontSize="sm"  mb="15px">
             Flat rate packages fees exclude port and any government fees.
                          </Text>
                          <Text color={textColor} fontSize="sm"  mb="15px">
                          Consolidations minimum flat rate is $39.99
                                                    </Text>
                          <Text color={textColor} fontSize="sm"  mb="15px">
                          Additional handling charges apply based on weight and size. Over 150 cubic feet, $99, over 300 cubic feet, $149.
                          </Text>
                          <Text color={textColor} fontSize="sm"  mb="15px">
                          Additional handling charges, and administrations charges apply to all USED personal effects.
                          </Text>
              </Flex>
              
            </CardBody>
          </Flex>
        </Card>
       
      </Grid>
    </Flex>
  );
}

export default ShippingRate;
