// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
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

function TermsConditions() {
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
              Terms & Conditions
              </Text>
            </CardHeader>
            <CardBody>
              <Flex direction="column" w="100%">
              <Text color={textColor} fontSize="md" fontWeight="bold" mb="15px">
              30 Days Free Consolidation Service
              </Text>
              <Text color={textColor} fontSize="sm" mb="15px">
              Enjoy the convenience of shopping from all your favorite stores with free consolidation for up to 30 days. During this period, you can combine multiple orders at no cost. Once you reach 30 tracking numbers (individual packages), we will generate an invoice for your review.</Text>
<Text color={textColor} fontSize="md" fontWeight="bold" mb="15px">
STORAGE FEES
</Text>
<Text color={textColor} fontSize="sm" mb="15px">
ackages must be collected within 3 days from the date the invoice is issued. Any packages held at the Transship Brokerage Cayman Islands location beyond this period will incur a storage fee of CI$15 per day or more. Transship Brokerage reserves the right to withhold the release or delivery of packages until all outstanding storage or related charges have been paid.</Text>
<Text color={textColor} fontSize="md" fontWeight="bold" mb="15px">
ABANDONED CARGO
</Text>

<Text color={textColor} fontSize="sm" mb="15px">
Any packages left in either the Florida warehouse or Cayman Islands location for more than 30 days will be deemed abandoned. Transship Brokerage reserves the right to sell abandoned packages to recover unpaid fees and charges.</Text>
<Text color={textColor} fontSize="md" fontWeight="bold" mb="15px">
CANCELED/REFUNDED ITEMS
</Text>
<Text color={textColor} fontSize="sm" mb="15px">
If any items in your order are canceled or refunded by the supplier, you must notify us before the goods arrive in Miami. If the original order has already been processed, we cannot guarantee adjustments. Please note that administrative fees may apply for these situations.</Text>    
<Text color={textColor} fontSize="lg" fontWeight="bold" mb="15px">
ADDITIONAL FEES
</Text>
<Text color={textColor} fontSize="md" fontWeight="bold" mb="15px">
BOL(Bill Of Lading) requests
</Text>
<Text color={textColor} fontSize="sm" mb="15px">
A fee of CI$50 per Bill of Lading (BOL) request will apply for tax refunds or other requests.</Text>    
<Text color={textColor} fontSize="md" fontWeight="bold" mb="15px">
Advance fee
</Text>
<Text color={textColor} fontSize="sm" mb="15px">
If Transship Brokerage pre-pays customs duties exceeding CI$1,000 on behalf of a customer, a 4% advance and brokerage fee will be applied to the total amount.</Text>   
<Text color={textColor} fontSize="md" fontWeight="bold" mb="15px">
Excessive Weight/Volume
</Text>
<Text color={textColor} fontSize="sm" mb="15px">
For shipments exceeding 150 cubic feet, an additional handling charge of CI$99 will apply. For those exceeding 300 cubic feet, the fee will increase to CI$149.</Text>  
<Text color={textColor} fontSize="md" fontWeight="bold" mb="15px">
Excessive Packages
</Text>
<Text color={textColor} fontSize="sm" mb="15px">
Shipments containing 15 or more items within a single flat-rate package may incur additional charges as per the terms outlined here.</Text>  
<Text color={textColor} fontSize="md" fontWeight="bold" mb="15px">
WAIVERS:
</Text>
<Text color={textColor} fontSize="sm" mb="15px">
or shipments requiring duty waivers from Cayman Customs, all necessary documentation must be submitted to Transship Brokerage prior to the goods arriving at our Miami warehouse. If this is not done, the shipment will be processed at the standard 22% duty rate. A minimum handling fee of CI$50 will be charged for processing duty waivers. Post-submission refunds may incur an administration fee starting from CI$50.</Text>  
<Text color={textColor} fontSize="md" fontWeight="bold" mb="15px">
Used Personal Effects:
</Text>
<Text color={textColor} fontSize="sm" mb="15px">
Additional handling and administration charges will apply to shipments containing used personal effects.
</Text>   
            <Text color={textColor} fontSize="md" fontWeight="bold" mb="15px">
            INSURANCE
</Text>   
<Text color={textColor} fontSize="sm" mb="15px">
Transship Brokerage's insurance coverage begins the moment your shipment is delivered to our Miami warehouse and covers the invoice value of the goods, either in full or in part. Coverage lasts for up to 3 days after the cargo has been released to the customer. All claims must be submitted in writing within this timeframe.</Text>        
<Text color={textColor} fontSize="sm" mb="15px">
The following items are excluded from insurance coverage:

</Text>     
              <Flex pl="25px" my="0px" direction="column">
             <ul >
             
              <li>Antiques and fine artwork (including paintings, drawings, sculptures, rare books, etc.)</li>
              <li>Fine jewelry and watches (unless prior agreement has been made)</li>
              <li>Precious stones (diamonds, gems)</li>
              <li>Precious metals and bullion (gold, silver, platinum)</li>
              <li>Money, currency (including phone and gift cards)</li>
              <li>Legal documents (including deeds, securities, tickets, passports)</li>
              <li>Electronic data and media</li>
              <li>Contraband or items involved in illegal trade</li>
              <li>Furs and animal hides</li>
              <li>Furniture or fragile items (such as glass, mirrors) inadequately packaged</li>
              <li>Perishable goods</li>
              <li>Used household goods and personal effects</li>
              <li>High-value consolidations of cell phones</li>
             </ul>
              </Flex>
             
              </Flex>
              
            </CardBody>
          </Flex>
        </Card>
       
      </Grid>
    </Flex>
  );
}

export default TermsConditions;
