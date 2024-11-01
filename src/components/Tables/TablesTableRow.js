import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Link,
  Icon,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import {React} from "react";
import {
  FaFileImage,
  FaFileDownload,
  FaFilePdf,
} from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

function TablesTableRow(props) {
  const { logo, name, email, subdomain, domain, status, date,deletes } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
let path="assets/documents/"+domain;
  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          {(name == 'Document')?(
            <Icon h={"24px"} w={"50px"} color="teal.300" as={FaFilePdf} />
          ):(
            <Icon h={"24px"} w={"50px"} color="teal.300" as={FaFileImage} />
          )
          }

          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {name}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {email}
            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {domain}
          </Text>
          <Text fontSize="sm" color="gray.400" fontWeight="normal">
            {subdomain}
          </Text>
        </Flex>
      </Td>
      <Td>
      
      <Link
      href={`/assets/documents/${domain}`}
      display="flex"
      lineHeight="100%"
      fontWeight="bold"
      justifyContent="center"
      alignItems="center"
      download
    >
     <Icon h={"24px"} w={"50px"} color="teal.300" as={FaFileDownload} />
    </Link>
      </Td>
      
      <Td>
      <Flex
          direction={{ sm: "column", md: "row" }}
          align="flex-start"
        >
          <Button
            p="0px"
            bg="transparent"
            mb={{ sm: "10px", md: "0px" }}
            me={{ md: "12px" }}
            onClick={deletes}
          >
           
            <Flex color="red.500" cursor="pointer" align="center" p="12px">
              <Icon as={FaTrashAlt} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                DELETE
              </Text>
            </Flex>
           
          </Button>
        </Flex>
        {/* <Button p="0px" onClick={deletes} bg="transparent" variant="no-hover">
          <Text
            fontSize="md"
            color="gray.400"
            fontWeight="bold"
            cursor="pointer"
          >
            Delete
          </Text>
        </Button> */}
      </Td>
    </Tr>
  );
}

export default TablesTableRow;
