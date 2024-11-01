import {React, useState,useEffect} from "react";
// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Link,
  Switch,
  Text,
  FormLabel,
  FormControl,
  Select,
  Table,
  Tbody,
  Th,
  Td,
  Thead,
  Tr,
  NumberInput,
  NumberInputField,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";

import ProductTableRow from "components/Tables/ProductTableRow";
import AuthApi from "../../api/auth";
import { useHistory,useParams } from "react-router-dom";
import { Separator } from "components/Separator/Separator";
import { IoCloseCircleSharp } from "react-icons/io5";

import {
  CitySelect,
  CountrySelect,
  StateSelect,
  LanguageSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import envelope from "assets/img/envelope.png";
import pallets from "assets/img/pallet.png";
import packages from "assets/img/package.jpg";
import container from "assets/img/container.png";
import flatrack from "assets/img/flatrack.png";

function EditOrder() {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  const borderProfileColor = useColorModeValue(
    "white",
   "rgba(255, 255, 255, 0.31)"
  );
  const bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800"
  );
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


  const [package_img,setPackageImg]=useState([envelope,packages,pallets,container,flatrack])

  const [error, setError] = useState(undefined);
  const history = useHistory();

  const format = (val) => `$` + val;
  const parse = (val) => (val == "undefined") ? '0' :val.replace(/^\$/, '');


  const save = async (event) => {
    
    if (event) {
      event.preventDefault();
    }
   
  
    try {
      setButtonText("Updating");
      let response = await AuthApi.Shipment({
        id:shipmentdatas.id,
        f_country:f_country,
        f_name:f_name,
        f_companyname:f_companyname,
        f_address1:f_address1,
        f_address2:f_address2,
        f_postalcode:f_postalcode,
        f_phonenumber:JSON.stringify(f_phonenumber),
        f_city:f_city,
        f_state:f_state,
        f_email:f_email,
        f_otherinfo:f_otherinfo,
        t_country:JSON.stringify(t_country),
        t_name:t_name,
        t_companyname:t_companyname,
        t_address1:t_address1,
        t_address2:t_address2,
        t_postalcode:t_postalcode,
        t_phonenumber:JSON.stringify(t_phonenumber),
        t_city:JSON.stringify(t_city),
        t_state:JSON.stringify(t_state),
        t_email:t_email,
        t_otherinfo:t_otherinfo,
        package_type:package_type,
        merchandize_type:merchandize_type,
        declared_value:declared_value,
        extra_insurance:extra_insurance,
        length:length,
        height:height,
        width:width,
        wieghtlb:wieghtlb,
        commodity:commodity,
        pick_up_package:drop_it_off,
        shipment_type:shipmenttype,
        accept_policy:accept_policy,
        product_details:JSON.stringify(product_details),
        method:'update'
      });
      if (response.data && response.data.success === false) {
        setButtonText("Update");
        return setError(response.data.msg);
        
      }
      
      return history.push("/admin/orders");
    } catch (err) {
      console.log(err);
      setButtonText("Update");
      if (err.response) {
        return setError(err.response.data.msg);
      }
      return setError("There has been an error.");
    }
  };

const addProduct=(e)=>{
let id=product_details[product_details.length-1].id+1;

  setProductDetails([...product_details,{id:id,qty:'',product_name:'',unit_value:'',subtotal:''}]);
};
const storedetails = (id,rowid,keyv,val)=>{

  const p_details = [...product_details];
  if(keyv == 'qty')
    p_details[id].qty = val;
  else if(keyv == 'product_name')
    p_details[id].product_name = val;
  else if(keyv == 'unit_value')
    p_details[id].unit_value = val;
    
  p_details[id].subtotal = (p_details[id].qty*p_details[id].unit_value);
  var dc=0;
  p_details.map((row)=>{
    dc =dc+row.subtotal
  })
  setDeclaredValue(dc);
  setProductDetails(p_details);
 
};
const removeProduct= id =>{
  
  setProductDetails(oldValues => {
    return oldValues.filter(product_detail => product_detail.id !== id)
  });
};
const handleCountrySelect = (option) => {
  setTCountry(option)
}

const handleStateSelect = (option) => {
  setTState(option)
}

const handleCitySelect = (option) => {
  setTCity(option)
}
const handleOnChange = (value, countryObj, e, formattedValue,phonetype) => {
  if (phonetype === 'FR') {
    setFPhonenumber({'code':countryObj?.countryCode,'phonenumber':formattedValue});
  } else if (phonetype === 'TO') {
    setTPhonenumber({'code':countryObj?.countryCode,'phonenumber':formattedValue});
  }

};
  return (
    <Flex direction="column">
      <Box
        mb={{ sm: "205px", md: "75px", xl: "70px" }}
        borderRadius="15px"
        px="0px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        align="center"
      >
      
      </Box>
      <Grid templateColumns={{ sm: "1fr", xl: "repeat(2, 1fr)" }} gap="22px">
        
        <Card p="16px" my={{ sm: "24px", xl: "0px" }}>
          <CardHeader p="12px 5px" mb="12px">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
            Where are you shipping from?
            </Text>
          </CardHeader>
          <CardBody px="5px">
            <Flex direction="column"  w="100%">
            <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
                 Full Name :
              </FormLabel>
             
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Your Full Name"
                  size="lg"
                  value={f_name}
                  onChange={(event) => {
                    setFName(event.target.value);
                    setError(undefined);
                  }}
                />
              <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
              Country :
              </FormLabel>
              
                 <Select
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  placeholder="Your Country"
                  size="lg"
                  value={f_country}
                  onChange={(event) => {
                    setFCountry(event.target.value);
                    setError(undefined);
                  }}
                >
        <option value="Cayman Islands">Cayman Islands</option>
        <option value="Jamaica">Jamaica</option>
        <option value="United States">United States</option>

                </Select>
                <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
                State/province/Parish  :
              </FormLabel>
              
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Your State/province/Parish"
                  size="lg"
                  value={f_state}
                  onChange={(event) => {
                    setFState(event.target.value);
                    setError(undefined);
                  }}
                />
                  <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
            City/Town :
              </FormLabel>
              
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Your City"
                  size="lg"
                  value={f_city}
                  onChange={(event) => {
                    setFCity(event.target.value);
                    setError(undefined);
                  }}
                />
                 <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
                 Company Name(Optional) :
              </FormLabel>
             
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Your Company Name"
                  size="lg"
                  value={f_companyname}
                  onChange={(event) => {
                    setFCompanyname(event.target.value);
                    setError(undefined);
                  }}
                />
                <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
                  Address Line1 :
              </FormLabel>
              
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Your Address Line1"
                  size="lg"
                  value={f_address1}
                  onChange={(event) => {
                    setFAddress1(event.target.value);
                    setError(undefined);
                  }}
                />
                <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
                  Address Line2 :
              </FormLabel>
              
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Your Address Line2"
                  size="lg"
                  value={f_address2}
                  onChange={(event) => {
                    setFAddress2(event.target.value);
                    setError(undefined);
                  }}
                />
          
               
                <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
                Zip Code / Postal Code :
              </FormLabel>
              
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Your Postal Code"
                  size="lg"
                  value={f_postalcode}
                  onChange={(event) => {
                    setFPostalcode(event.target.value);
                    setError(undefined);
                  }}
                />
                <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
               Email :
              </FormLabel>
              
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Your email address"
                  size="lg"
                  value={f_email}
                  onChange={(event) => {
                    setFEmail(event.target.value);
                    setError(undefined);
                  }}
                />
               
               <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
                  Phone Number :
              </FormLabel>
              
                 <PhoneInput
  country={f_phonenumber.code}
  enableSearch={true}
  disableSearchIcon={true}
  enableTerritories={true}
  countryCodeEditable={false}
  enableLongNumbers={true}
  enableAreaCodes={true}
  autoFormat={true}
  inputStyle={{width:'100%',borderRadius:"10px",borderWidth:"1px",borderStyle:"solid",height: "3rem",marginBottom:'24px'}}
  borderRadius="15px"
  mb="24px"
  fontSize="sm"
  placeholder="Your Phone Number"
  size="lg"
  value={f_phonenumber.phonenumber}
  onChange={(value, countryObj, e, formattedValue) =>
    handleOnChange(value, countryObj, e, formattedValue,'FR')
  }

/>
              <FormLabel ms="4px" fontSize="sm" mt="24px" fontWeight="bold">
              Other Information :
              </FormLabel>
              
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Your Other Information"
                  size="lg"
                  value={f_otherinfo}
                  onChange={(event) => {
                    setFOtherInfo(event.target.value);
                    setError(undefined);
                  }}
                />
              

            </Flex>
          </CardBody>
        </Card>
        <Card p="16px">
          <CardHeader p="12px 5px" mb="12px">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
            Where is your shipping going?
            </Text>
          </CardHeader>
          <CardBody px="5px">
            <Flex direction="column" w="100%">
            <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
                 Full Name :
              </FormLabel>
             
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Your Full Name"
                  size="lg"
                  value={t_name}
                  onChange={(event) => {
                    setTName(event.target.value);
                    setError(undefined);
                  }}
                />
            <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
              Country :
              </FormLabel>
              <CountrySelect
     
        placeHolder="Your Country"
        onChange={handleCountrySelect}
        countryid={t_country.id}
        defaultValue={t_country}
         size="lg"
         borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
      />
                 <FormLabel ms="4px" mt="24px" fontSize="sm" fontWeight="bold">
                State/province/Parish  :
              </FormLabel>
              <StateSelect
        countryid={t_country.id}
        placeHolder="Your State/province/Parish"
        onChange={handleStateSelect}
        defaultValue={t_state}
                  size="lg"
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
      />
            
                  <FormLabel ms="4px" mt="24px" fontSize="sm" fontWeight="bold">
            City/Town :
              </FormLabel>
              <CitySelect
        countryid={t_country.id}
        stateid={t_state.id}
        defaultValue={t_city}
        placeHolder="Your City"
        onChange={handleCitySelect}
                  size="lg"
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
      />
              
                 <FormLabel ms="4px" mt="24px" fontSize="sm" fontWeight="bold">
                 Company Name(Optional) :
              </FormLabel>
             
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Your company name"
                  size="lg"
                  value={t_companyname}
                  onChange={(event) => {
                    setTCompanyname(event.target.value);
                    setError(undefined);
                  }}
                />
                <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
                  Address Line1 :
              </FormLabel>
              
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Your Address Line1"
                  size="lg"
                  value={t_address1}
                  onChange={(event) => {
                    setTAddress1(event.target.value);
                    setError(undefined);
                  }}
                />
                <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
                  Address Line2 :
              </FormLabel>
              
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Your Address Line2"
                  size="lg"
                  value={t_address2}
                  onChange={(event) => {
                    setTAddress2(event.target.value);
                    setError(undefined);
                  }}
                />
          
                <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
                Zip Code / Postal Code :
              </FormLabel>
              
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Your Postal Code"
                  size="lg"
                  value={t_postalcode}
                  onChange={(event) => {
                    setTPostalcode(event.target.value);
                    setError(undefined);
                  }}
                />
                <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
               Email :
              </FormLabel>
              
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Your email"
                  size="lg"
                  value={t_email}
                  onChange={(event) => {
                    setTEmail(event.target.value);
                    setError(undefined);
                  }}
                />
               
               <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
                  Phone Number :
              </FormLabel>
              <PhoneInput
  country={t_phonenumber.code}
  enableSearch={true}
  disableSearchIcon={true}
  enableTerritories={true}
  countryCodeEditable={false}
  enableLongNumbers={true}
  enableAreaCodes={true}
  autoFormat={true}
  inputStyle={{width:'100%',borderRadius:"10px",borderWidth:"1px",borderStyle:"solid",height: "3rem",marginBottom:'24px'}}
  borderRadius="15px"
  mb="24px"
  fontSize="sm"
  placeholder="Your Phone Number"
  size="lg"
  value={t_phonenumber.phonenumber}
  onChange={(value, countryObj, e, formattedValue) =>
    handleOnChange(value, countryObj, e, formattedValue,'TO')
  }

/>
               
              <FormLabel ms="4px" mt="24px" fontSize="sm" fontWeight="bold">
              Other Information :
              </FormLabel>
              
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Your Other Information"
                  size="lg"
                  value={t_otherinfo}
                  onChange={(event) => {
                    setTOtherInfo(event.target.value);
                    setError(undefined);
                  }}
                />
              
            </Flex>
          </CardBody>
        </Card>

      </Grid>
      <Card p="16px" my="24px">
        <CardHeader p="12px 5px" mb="12px">
          <Flex direction="column" >
            <Text fontSize="lg" color={textColor} mb="12px" fontWeight="bold">
              Package
            </Text>
            {(package_type) ? (
            <Avatar
                me={{ md: "22px" }}
                src={package_img[(package_type == 'envelope') ? 0 : (package_type == 'box') ? 1 : (package_type == 'pallets') ? 2 :(package_type == 'container')? 3 :(package_type == 'flat rack') ? 4 :'']}
                w="80px"
                h="80px"
                borderRadius="15px"
              />
            )
            : [""]
            }
              
          </Flex>
          
        </CardHeader>
        <CardBody px="5px">
        <Flex direction="column" >
        <Flex
              direction={{ sm: "column", lg: "row" }}
              w={{ sm: "100%", md: "50%", lg: "auto" }}
            >
            <FormControl mr="20px">  
            <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
            Packaging Type :
              </FormLabel>
              
               
                <Select
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Select Packaging Type"
                  size="lg"
                  value={package_type}
                  onChange={(event) => {
                    setPackageType(event.target.value);
                    setError(undefined);
                  }}
                >
        <option value="envelope">Envelope</option>
        <option value="box">Box</option>
        <option value="pallets">Pallets</option>
        <option value="container">Container</option>
        <option value="flat rack">Flat Rack</option>

                </Select>
                </FormControl>
                <FormControl mr="20px">  
          <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
           Merchandize Type :
              </FormLabel>
              
                
                 <Select
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Select Merchandize Type"
                  size="lg"
                  value={merchandize_type}
                  onChange={(event) => {
                    setMerchandizeType(event.target.value);
                    setError(undefined);
                  }}
                >
        <option value="Fragile">Fragile</option>
            <option value="Non-breakable">Non-breakable</option>
        

                </Select>
</FormControl>
             
<FormControl mr="20px">  
               <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
               Declared value($) :
              </FormLabel>
    <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="md"
                  type="text"
                  placeholder="Declare Value"
                  size="lg"
                  disabled
                  value={format(declared_value)}
                  onChange={(event) => {
                    setDeclaredValue(event.target.value);
                    setError(undefined);
                  }}
                />
               </FormControl>
               <FormControl>  
               <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
               Insurance($):
              </FormLabel>
              
              <NumberInput
      onChange={(valueString) => setExtraInsurance(parse(valueString))}
      value={format(extra_insurance)}
      defaultValue={0}
      borderRadius="15px"
      size="lg"
      fontSize="sm"
    >
      <NumberInputField />
    
    </NumberInput>
             </FormControl>
             </Flex>   
             <Flex
              direction={{ sm: "column", lg: "row" }}
              w={{ sm: "100%", md: "50%", lg: "auto" }}
            >
            <FormControl mr="15px">  
            <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
            Length :
              </FormLabel>
              
                <NumberInput
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  value={length}
                  defaultValue={0}
                  placeholder="Your Length"
                  size="lg"
                 
                  onChange={(valueString) => setLength(parse(valueString))}
                >
                 <NumberInputField />
    
    </NumberInput>
                </FormControl>
                <FormControl mr="15px">  
          <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
          Height :
              </FormLabel>
              
              <NumberInput
      onChange={(valueString) => setHeight(parse(valueString))}
      defaultValue={0}
      borderRadius="15px"
      size="lg"
      value={height}
      fontSize="sm"
    >
      <NumberInputField />
    
    </NumberInput>
</FormControl>
             
<FormControl mr="15px">  
               <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
               Width :
              </FormLabel>
              <NumberInput
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  defaultValue={0}
                  placeholder="Your Width"
                  size="lg"
                  value={width}
                  onChange={(valueString) => setWidth(parse(valueString))}
                >
                   <NumberInputField />
    
    </NumberInput>
               </FormControl>
               <FormControl mr="15px">  
               <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
               Weight in lb :
              </FormLabel>
              
              <NumberInput
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  defaultValue={0}
                  placeholder="Your Weight in lb"
                  size="lg"
                  value={wieghtlb}
                  onChange={(valueString) => setWieghtlb(parse(valueString))}
                >
                  <NumberInputField />
    
    </NumberInput>
             </FormControl>
             <FormControl mr="15px">  
          <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
          Commodity :
              </FormLabel>
              
               
<Select
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Select Commodity"
                  size="lg"
                  value={commodity}
                  onChange={(event) => {
                    setCommodity(event.target.value);
                    setError(undefined);
                  }}
                >
        <option value="Commercial">Commercial</option>
        <option value="Personal">Personal</option>
        <option value="Gift to Friend/ Family">Gift to Friend/ Family</option>
        <option value="Excess Bagagge">Excess Bagagge</option>
        <option value="Shipping back after service">Shipping back after service</option>
        <option value="Shipping for service">Shipping for service</option>
        <option value="Exhibition Shipping">Exhibition Shipping</option>
        <option value="E-commerce Purchase">E-commerce Purchase</option>

                </Select>


</FormControl>
             
             </Flex> 
           </Flex>
        </CardBody>
      </Card>
     
      <Card p="16px" my={{ sm: "24px", xl: "0px" }}>
          
          <Flex justify="space-between" align="center" minHeight="60px" w="100%">
                <Text fontSize="lg" color={textColor} fontWeight="bold">
                Content Description
                </Text>
                <Button
                  bg={bgButton}
                  color="white"
                  fontSize="xs"
                  variant="no-hover"
                  onClick={addProduct}
                >
                  ADD NEW
                </Button>
              </Flex>
          <CardBody px="5px">
            <Flex direction="column"  w="100%">
            <Flex direction="column" w="100%">
      

      <Table variant="simple" color={textColor}>
        <Thead>
          <Tr my=".8rem" pl="0px" color="gray.400">
           
            <Th color="gray.400">Qty</Th>
            <Th color="gray.400">Product Details</Th>
            <Th color="gray.400">Unit Value</Th>
            <Th color="gray.400">Subtotal</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {product_details.map((row,k) => {
            return (
              <Tr key={row.id}>
      <Td>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
          <Input
                  borderRadius="15px"
                 
                  fontSize="sm"
                  type="text" 
                  placeholder="Qty"
                  size="lg"
                 value={row.qty}
                 onChange={(e)=>storedetails(k,row.id,'qty',e.target.value)}
                />
            
          </Flex>
        </Flex>
      </Td>

      <Td minWidth={{ sm: "250px" }} pl="0px"> 
        <Flex direction="column">
        <Input
                  borderRadius="15px"
                 
                  fontSize="sm"
                  type="text" 
                  placeholder="Product Details"
                  size="lg"
                  value={row.product_name}
                  onChange={(e)=>storedetails(k,row.id,'product_name',e.target.value)}
                />
        </Flex>
      </Td>
      <Td>
      
      <Input
                  borderRadius="15px"
                 
                  fontSize="sm"
                  type="text" 
                  placeholder="Unit Value"
                  size="lg"
                  value={row.unit_value}
                  onChange={(e)=>storedetails(k,row.id,'unit_value',e.target.value)}
                />
      </Td>
      <Td>
      
      <Input
                  borderRadius="15px"
                  
                  fontSize="sm"
                  type="text" 
                  placeholder="Sub Total"
                  size="lg"
                  disabled
                  value={row.subtotal}
                  onChange={(e)=>storedetails(k,row.id,'subtotal',e.target.value)}
                />
      </Td>
    
      
      <Td>
        <Button color="white" fontSize="xs" onClick={()=>removeProduct(row.id)}  bg={bgButton}  variant="no-hover">
        <Icon h={"24px"} w={"20px"} color="white" as={IoCloseCircleSharp} />
        </Button>
      </Td>
    </Tr>
            );
          }) }
        </Tbody>
      </Table>
        </Flex>

            </Flex>
          </CardBody>
        </Card>
        
        <Card p="16px" my="24px">
        <CardHeader p="12px 5px" mb="12px">
            
            <Flex direction="column"  w="100%">
            <FormControl mr="20px">  
          <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
          Shipment Type :
              </FormLabel>
              
                
                 <Select
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  width={"250px"}
                  placeholder="Select Shipment Type"
                  size="lg"
                  value={shipmenttype}
                  onChange={(event) => {
                    setShipmentType(event.target.value);
                    setError(undefined);
                  }}
                >
        <option value="Standard Shipment">Standard Shipment</option>
            <option value="Express Shipment">Express Shipment</option>
        

                </Select>
</FormControl>
            <Text fontSize="lg" color={textColor} fontWeight="bold">
            Whould you like us to pick up your shipment?
            </Text>
            <Flex direction="column" mt="15px" w="100%">
<FormControl display="flex" mt="15px" mb="20px" alignItems="center">
                  <Switch id="remember-login" defaultValue={drop_it_off} defaultChecked={(drop_it_off == 1) ? true : false } value={1} onChange={(event) => {
                    setDropitOff(event.target.value);
                    setError(undefined);
                  }} colorScheme="teal" me="10px" />
                  <FormLabel
                    htmlFor="remember-login"
                    mb="1"
                    ms="1"
                    fontWeight="normal"
                  >
No I'll drop it off                </FormLabel>
               
                  <Switch id="remember-login"  value={2} efaultChecked={(drop_it_off == 2) ? true : false } onChange={(event) => {
                    setDropitOff(event.target.value);
                    setError(undefined);
                  }} colorScheme="teal" me="10px" />
                  <FormLabel
                    htmlFor="remember-login"
                    mb="1"
                    ms="1"
                    fontWeight="normal"
                  >
Yes pick up my shipment                </FormLabel>

                </FormControl>

                <Text fontSize="sm" mb="20px" color={textColor} fontWeight="normal">
                Local Pick Up by our Tranship Brokerage Truck $25 Fee Apply

     
                    </Text>
   {(shipmenttype) ?                 
 <Flex width={"250px"} justifyContent="space-between">
  
      <Flex alignItems="center">
    
        <Flex direction="column">
        <Text
            fontSize={{ sm: "md", md: "lg", lg: "md" }}
            color={ "green.400"}
            fontWeight="bold"
          >
        Days Of Shipment
          </Text>
          <Text
            fontSize={{ sm: "md", md: "lg", lg: "md" }}
            color={ "green.400"}
            fontWeight="bold"
          >
           Sub Total
          </Text>
          <Text
            fontSize={{ sm: "md", md: "lg", lg: "md" }}
            color={ "green.400"}
            fontWeight="bold"
          >
          Insurance
          </Text>
          <Text
            fontSize={{ sm: "md", md: "lg", lg: "md" }}
            color={ "green.400"}
            fontWeight="bold"
          >
          Total
          </Text>
        </Flex>
      </Flex>
      <Box
        color={ "green.400"}
      >
         <Text fontSize={{ sm: "md", md: "lg", lg: "md" }} fontWeight="bold">
         {(shipmenttype == 'Standard Shipment') ? '7 Days' : (shipmenttype == 'Express Shipment') ? '3 Days' : ''}
         </Text>
        <Text fontSize={{ sm: "md", md: "lg", lg: "md" }} fontWeight="bold">
        {"$"+declared_value}
        </Text>
        <Text fontSize={{ sm: "md", md: "lg", lg: "md" }} fontWeight="bold">
        {"$"+extra_insurance}
        </Text>
        <Text fontSize={{ sm: "md", md: "lg", lg: "md" }} fontWeight="bold">
        {"$"+(parseInt(extra_insurance)+parseInt(declared_value))}
        </Text>
      </Box>

    </Flex>
    :[""]}
</Flex>
</Flex>
          </CardHeader>
          <CardBody px="5px">
            <Flex direction="column"  w="100%">
                

<Text fontSize="lg" color={textColor} mt="55px" fontWeight="bold">
        Accept
            </Text>
<FormControl display="flex" mt="15px" mb="20px">
                  <Switch id="remember-login" defaultValue={accept_policy} defaultChecked={(accept_policy == 1) ? true : false } value={1} onChange={(event) => {
                    setAcceptPolicy(event.target.value);
                    setError(undefined);
                  }} colorScheme="teal" me="10px" />
                  <FormLabel
                    htmlFor="remember-login"
                    mb="1"
                    ms="1"
                    fontWeight="normal"
                  >
We have clearly read and understood the claim policy and the limitation of liability and agree the term of trade and transport. All that i declared in the packing list are true exact items and value. There is no dangerous goods, no contraband items and the shipper/consignee takes the complete responsibility of anything contrary to the declaration and charge is estimate until Tranship Brokerage reweight and may not include all fee and surcharges. Shipments paid by credit card if the final billed amount exceeds the original pre-authorized amount. You will receive a second charge for the additional amount. Both the original and additional charges will reference the same shipment</FormLabel>
</FormControl>


              <Flex  direction="column" mt="15px" w="50%">
                <Button
              type="submit"
              bg="teal.300"
              fontSize="15px"
              color="white"
              fontWeight="bold"
              w="30%"
              h="45"
              mb="24px"
              _hover={{
                bg: "teal.200",
              }}
              _active={{
                bg: "teal.400",
              }}
              onClick={save}
            >
           {buttonText}
            </Button>
            </Flex>
            </Flex>
          </CardBody>
        </Card>
    </Flex>
  );
}

export default EditOrder;
