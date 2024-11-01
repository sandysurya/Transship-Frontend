import {React,useState,useEffect} from "react";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Link,
  Button,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TablesProjectRow from "components/Tables/TablesProjectRow";
import ProductTableRow from "components/Tables/ProductTableRow";
import { tablesProjectData, tablesTableData } from "variables/general";
import { NavLink } from "react-router-dom";
import AuthApi from "../../api/auth";
import CustomerTableRow from "components/Tables/CustomerTableRow";

function Users() {
  const textColor = useColorModeValue("gray.700", "white");
  const bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800"
  );
  let users = localStorage.getItem("user");
  users = JSON.parse(users);
  let user=users.data;
  const [userdata, setUserData] = useState([]);
  const [error, setError] = useState(undefined);

  useEffect(async()=>{
   
     try {
    
      let response =  await AuthApi.UserData({method:'userlist'});
      if (response.data && response.data.success === false) {
      
        return setError(response.data.msg);
        
      }
      setUserData(response.data.data);
      localStorage.setItem('userdata',JSON.stringify(response.data.data));

    } catch (err) {
      console.log(err);
      if (err.response) {
        return setError(err.response.data.msg);
      }
      return setError("There has been an error.");
    }
  

  },[]);


  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">
        <Flex justify="space-between" align="center" minHeight="60px" w="100%">
        <Text fontSize="xl" color={textColor} fontWeight="bold">
            Users List
          </Text>
        <NavLink to="/admin/newuser">
        <Button
             bg={bgButton}
             color="white"
             fontSize="xs"
             variant="no-hover"
            
           >
             New User
           </Button>
           </NavLink>
           </Flex>
        
          
        </CardHeader>
        <CardBody>
        
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
               
                <Th color="gray.400">ID</Th>
                <Th color="gray.400">Name</Th>
                <Th color="gray.400">Email</Th>
                <Th color="gray.400">User Type</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {userdata.map((row,k) => {
                return (
                  <CustomerTableRow
                    id={k+1}
                    name={row.name}
                    email={row.email}
                    user_type={row.user_type}
                    edits={row.id}
                    action='user'
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
 
    </Flex>
  );
}

export default Users;
