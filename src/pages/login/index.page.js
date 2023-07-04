import React from "react";
import { Box, Input, Button, Flex, Spacer } from "@chakra-ui/react";

function Login() {
  return (
    <Box
      backgroundColor="gray.200"
      minHeight="100vh"
      minW="100vw"
      align="center"
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Box
        boxShadow="lg"
        rounded="md"
        bg="white"
        maxWidth={"400px"}
        maxHeight={"500px"}
        align="center"
        p="12"
      >
        <Box as="h1" fontWeight="600" fontSize="40px">
          Bienvenido
        </Box>
        <Box as="h1" fontWeight="600" color="gray.400">
          {" "}
          inicia sesión{" "}
        </Box>
        <Input type="email" placeholder="email" mt="2" />
        <Input type="password" placeholder="password" mt="2" />

        <Button colorScheme="blue" mt="4">
          iniciar sesión
        </Button>

        <Box mt="4">
          Si aún no estás registrado{" "}
          <Box as="a" href="/singup" color="blue">
            {" "}
            Registrate aquí
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
