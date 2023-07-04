import React from "react";
import { Box, Button, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

function SingUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Box
      backgroundColor="gray.200"
      minHeight="100vh"
      minW="100vw"
      align="center"
    >
      <br />
      <br />
      <Box
        as="form"
        boxShadow="lg"
        rounded="md"
        bg="white"
        maxWidth={"400px"}
        minHeight={"400px"}
        align="center"
        p="12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box as="h1" fontWeight="600" fontSize="40px">
          Unete a la comunidad
        </Box>
        <Box as="h1" fontWeight="600" color="gray.400">
          {" "}
          Enterate de todo lo que el futbol tiene para ofrecer{" "}
        </Box>
        <Input type="text" placeholder="Nombre" mt="2" {...register("name", { required: true })}/>
        {errors.name?.type === "required" && (
          <Box textAlign="left" color="red" fontSize="xs">
            Necesitas ingresar un nombre
          </Box>
        )}
        <Input type="text" placeholder="Apellido" mt="2" {...register("lastname", { required: true })}/>
        {errors.lastname?.type === "required" && (
          <Box textAlign="left" color="red" fontSize="xs">
            Necesitas ingresar un apellido
          </Box>
        )}
        <Input type="email" placeholder="email" mt="2" {...register("email", { required: true })}/>
        {errors.email?.type === "required" && (
          <Box textAlign="left" color="red" fontSize="xs">
            Necesitas ingresar un correo
          </Box>
        )}
        <Input type="password" placeholder="password" mt="2" {...register("password", { required: true })} />
        {errors.password?.type === "required" && (
          <Box textAlign="left" color="red" fontSize="xs">
            Necesitas ingresar una contraseña
          </Box>
        )}
        <Button type="submit" colorScheme="blue" mt="4">
          Registrate
        </Button>
      </Box>
    </Box>
  );
}

export default SingUp;
