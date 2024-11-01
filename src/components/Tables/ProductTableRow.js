import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Input,
  Icon,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import {React} from "react";
import { Link } from "react-router-dom";

import { dateFormat } from "react-big-calendar/lib/utils/propTypes";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";


function ProductTableRow(props) {
  const { fname, femail, fphonenumber, trackingid,orderid, status, date,edits,action } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
const d=new Date(date);

  return (
    <Tr>
      <Td >
       
          <Flex direction="column">
          <Link to={`/admin/vieworder/${edits}`}>
          <Text fontSize="sm" color={"red"} fontWeight="bold">
            {trackingid}
          </Text>
        </Link>
        </Flex>
      </Td>
      <Td >
       
       <Flex direction="column">
       <Text fontSize="sm" color={textColor} fontWeight="bold">
         {orderid}
       </Text>
     
     </Flex>
   </Td>
      <Td>
        <Flex direction="column">
          <Text fontSize="sm" color={textColor} fontWeight="bold">
            {fname}
          </Text>
         
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
          <Text fontSize="sm" color={textColor} fontWeight="bold">
            {femail}
          </Text>
         
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
          <Text fontSize="sm" color={textColor} fontWeight="bold">
            {fphonenumber}
          </Text>
         
        </Flex>
      </Td>
     
      <Td>
        <Flex direction="column">
          <Text fontSize="sm" color={textColor} fontWeight="bold">
            {(status == 0) ? 'Pending' : (status == 1) ? 'Approved' :(status == 2) ? 'In Process' : (status == 3) ? 'In Transit' : (status == 4) ? 'Arrived' : (status == 5) ? 'Delivered' : 'Cancelled'}
          </Text>
         
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
          <Text fontSize="sm" color={textColor} fontWeight="bold">
            {d.getDay()+'/'+d.getMonth()+'/'+d.getFullYear()}
          </Text>
         
        </Flex>
      </Td>
      {(action != 'dashboard') ? 
      <Td>
      
      <Flex
          direction={{ sm: "column", md: "row" }}
          align="flex-start"
         
        >
         
          <Button p="0px" bg="transparent">
          <Link to={`/admin/editorder/${edits}`}>
            <Flex color={textColor} cursor="pointer" align="center" p="12px">
              <Icon as={FaPencilAlt} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                EDIT
              </Text>
            </Flex>
            </Link>
          </Button>
          {(action == 'order') ? 
          <Button
            p="0px"
            bg="transparent"
            mb={{ sm: "10px", md: "0px" }}
            me={{ md: "12px" }}
          >
              <Link to={`#`}>
            <Flex color="red.500" cursor="pointer" align="center" p="12px">
              <Icon as={FaTrashAlt} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                DELETE
              </Text>
            </Flex>
            </Link>
          </Button>
          :""
}
        </Flex>
    
      </Td> : [""]}
    </Tr>
  );
}

export default ProductTableRow;
