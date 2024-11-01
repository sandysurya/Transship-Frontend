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
import { FaPencilAlt, FaTrashAlt,FaEye } from "react-icons/fa";


function CustomerTableRow(props) {
  const { name, email, id, user_type,edits,action } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
      <Td >
       
          <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {id}
          </Text>
        
        </Flex>
      </Td>
      <Td >
       
       <Flex direction="column">
       <Text fontSize="md" color={textColor} fontWeight="bold">
         {name}
       </Text>
     
     </Flex>
   </Td>
      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {email}
          </Text>
         
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {user_type}
          </Text>
         
        </Flex>
        </Td>
      
      <Td>
     
        <Flex
          direction={{ sm: "column", md: "row" }}
          align="flex-start"
         
        >
         
          <Button p="0px" bg="transparent">
          <Link to={(action == 'user') ? `/admin/edituser/${edits}`: `/admin/editcustomer/${edits}`}>
            <Flex color={textColor} cursor="pointer" align="center" p="12px">
              <Icon as={FaPencilAlt} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                EDIT
              </Text>
            </Flex>
            </Link>
          </Button>
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
          {(action != 'user') ?
          <Button p="0px" bg="transparent">
          <Link to={`/admin/vieworderlist/${edits}`}>
            <Flex color={textColor} cursor="pointer" align="center" p="12px">
              <Icon as={FaEye} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                VIEW SHIPPMENT
              </Text>
            </Flex>
            </Link>
          </Button>
          :""}
        </Flex>
      </Td>
    </Tr>
  );
}

export default CustomerTableRow;
