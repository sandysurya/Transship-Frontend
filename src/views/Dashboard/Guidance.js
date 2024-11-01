// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Link,
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

function Guidance() {
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
           
            <CardBody>
              <Flex direction="column" w="100%">
              <Text color={textColor} fontSize="sm" fontWeight="bold" mb="5px">
              How to create a TIN and appoint National Logistics as your shipping agent
              </Text>
              <Text color={textColor} fontSize="sm" mb="15px">
              Please click  <Link
          // color={linkTeal}
          color="teal.400"
          target="_blank"
          href="https://nationallogisticsky.blob.core.windows.net/public/COLS%20TIN%20Authorization%20for%20National%20Logistics.pdf"
        > here</Link> to download a guide
              </Text>
            
              <Text color={textColor} fontSize="sm" fontWeight="bold" mb="5px">
              How to Consolidate?
              </Text>
              <Text color={textColor} fontSize="sm" mb="15px">
              Please click  <Link
          // color={linkTeal}
          color="teal.400"
          target="_blank"
          href="https://nationallogisticsky.blob.core.windows.net/public/Consolidations.pdf"
        > here</Link> to download a guide
              </Text>
              
            
              <Text color={textColor} fontSize="sm" fontWeight="bold" mb="5px">
              Damaged Goods
              </Text>
              <Flex pl="25px" my="0px" direction="column">
             <ul >
             
              <li>Customers have 3 days after invoice has been received to inspect the packages and report any damages. Failure to report within this timeframe will result in denial of the claim.</li>
             </ul>
              </Flex>
              <Text color={textColor} fontSize="sm" fontWeight="bold" mb="5px">
              Address Label
              </Text>
              <Flex pl="25px" my="0px" direction="column">
             <ul >
             
              <li>The address label must contain Transship Brokerage followed by your Full Name. Failure to include will result in delays.</li>
             </ul>
              </Flex>
              <Text color={textColor} fontSize="sm" fontWeight="bold" mb="5px">
              Your Orders
              </Text>
              <Flex pl="25px" my="0px" direction="column">
             <ul >
             
              <li>Order number, amount, tracking numbers and invoice document should be entered on the portal. Failure to input this information on the portal will result in delays</li>
              <li><b>Tracking Numbers are required at all times.</b> If a tracking number is not available please email info@transshipbrokerage.ky to confirm delivery.</li>

             </ul>
              </Flex>
              <Text color={textColor} fontSize="sm" fontWeight="bold" mb="5px">
              Invoice Documents
              </Text>
              <Flex pl="25px" my="0px" direction="column">
             <ul >
             
              <li>In order to avoid delays at Customs, please ensure that the original supplier invoices are uploaded against your orders.</li>
              <li>Please avoid uploading screenshots or edited invoices as these are not acceptable</li>
              <li>Email print-outs of invoices are accepted as long as the invoice shows the following information:</li>
              <ul >
              <li>Itemised goods and prices and description of goods</li>
              <li>Total cost</li>
              <li>Payment method</li>
              <li>Supplier name</li>
              <li>Shipping address</li>
              </ul>
             </ul>
              </Flex>
              <Text color={textColor} fontSize="sm" fontWeight="bold" mb="5px">
              Miami warehouse Opening Hours
              </Text>
              <Flex pl="25px" my="0px" direction="column">
             <ul >
             
              <li>The Miami warehouse opening hours are Monday to Friday between 8:00am and 4:00pm.</li>
              <li>The warehouse is NOT open on Weekends.</li>
              <li>Please note the following US holiday schedule. The Warehouse will be closed and won't be accepting packages on these days.</li>
             </ul>
              </Flex>
          
              <Text color={textColor} fontSize="sm"  mb="5px">
              Note: Always select shipping on all retailer sites. For example, on Walmart, you should select Shipping, NOT delivery, as delivery means it will be delivered without packaging.
              </Text>
              <Text color={textColor} fontSize="sm" fontWeight="bold" mb="15px">
              Our Cayman address 80 Shedden Road, Elizabethan Square, Amerigo House, George Town, Cayman Islands
              </Text>
           
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.7263323407424!2d-81.38480632924211!3d19.294263705229156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f25865e3b5d45a7%3A0xded00bcf925554e5!2s80%20Shedden%20Rd%2C%20George%20Town%2C%20Cayman%20Islands!5e0!3m2!1sen!2smx!4v1686345922520!5m2!1sen!2smx"  width="860"
        height="484" ></iframe>
              </Flex>
            </CardBody>
          </Flex>
        </Card>
       
      </Grid>
    </Flex>
  );
}

export default Guidance;
