import React from "react";
import { Box, Input} from "@chakra-ui/react";

function SingUp() {
  return (
    <Box
      backgroundColor="gray.200"
      minHeight="100vh"
      minW="100vw"
      align="center"
    >
      <br/>
      <br/>
      <br/>
      <br/>
      <Box
        boxShadow="lg"
        rounded="md"
        bg="white"
        maxWidth={"400px"}
        maxHeight={"500px"}
        align="center"
        p="12"
      >
        <Box as="h1" fontWeight="600" fontSize="40px" >
          Unete a la comunidad 
        </Box>
        <Box as="h1" fontWeight="600" color="gray.400">
          {" "}
          Enterate de todo lo que el futbol tiene para ofrecer {" "}
        </Box>
          <Input placeholder="Nombre" mx="2" mt="2" />
          <Input placeholder="Apellido" mx="2" mt="2" />
          <Input placeholder="email" mx="2" mt="2" />
          <Input placeholder="password" mx="2" mt="2" />
      </Box>
    </Box>
  );
}

export default SingUp;
