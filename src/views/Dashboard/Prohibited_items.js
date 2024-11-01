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

function ProhibitedItems() {
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
              Prohibited Items for Shipping
              </Text>
            </CardHeader>
            <CardBody>
              <Flex direction="column" w="100%">
              <Text color={textColor} fontSize="sm" fontWeight="bold" mb="15px">
              Before shipping anything to the Cayman Islands, please review the import prohibitions as prescribed the Cayman Islands Cabinet and Customs.
              </Text>
              <Text color={textColor} fontSize="sm" fontWeight="bold" mb="15px">
              The import or export of Prohibited or restricted items – We do not warrant that the below is full and/or accurate list. You should always check information on prohibited or restricted items that cannot be imported to the Cayman Islands.              </Text>
             
             
              <Flex pl="25px" my="0px" direction="column">
             <ul >
              <ol>
              <li><b>Hazardous Materials:</b> Items such as toxic chemicals, asbestos, and certain types of radioactive materials.</li>
              <li><b>Endangered Species and Products:</b> Items made from endangered animals or plants, such as ivory, specific types of coral, or rare animal hides, in accordance with the Convention on International Trade in Endangered Species (CITES).</li>
              <li><b>Explosive Materials:</b> Explosives or certain types of fireworks not authorized by law.</li>
              <li><b>Illegally Sourced Goods:</b> Products obtained through illegal means, such as poaching, illegal logging, or human trafficking.</li>
              <li><b>Counterfeit Goods:</b> Fake or unauthorized copies of branded goods, including electronics, clothing, pharmaceuticals, and more.</li>
              <li><b>Harmful Consumer Products:</b> Products that have been deemed unsafe, such as toys with lead paint or electrical items that do not meet safety standards.</li>
              <li><b>Human Remains or Body Parts:</b> Except under specific circumstances, human remains or body parts are restricted or prohibited.</li>
              <li><b>Offensive Materials:</b> Pornographic content or any items that violate public morality laws.</li>
              <li><b>Unauthorized Medicines or Medical Equipment:</b> Certain drugs, supplements, or medical devices that have not been approved for use or sale in the Cayman Islands.
              </li>
              <li><b>Cultural Artifacts:</b> Antiquities or items of significant cultural heritage that are subject to protection by international laws.</li>
            <li><b>Pirated Media:</b> Illegal copies of films, music, books, or software.</li>
              </ol>
             </ul>
              </Flex>
              <Text color={textColor} fontSize="sm" fontWeight="bold" mt="15px">
              Failure to comply with the above may cause delay, additional cost and/or the cases being opened and the offending items disposed of.
              </Text>
              </Flex>
              
            </CardBody>
          </Flex>
        </Card>
       
      </Grid>
    </Flex>
  );
}

export default ProhibitedItems;
