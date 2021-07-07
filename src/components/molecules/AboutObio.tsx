import { Stack, Box, Heading, Center, HStack } from '@chakra-ui/react'
import React from 'react'
import Title from '../atoms/Title'
import Description from '../atoms/Description'

const AboutObio = () => {
  return (
    <Center bgColor="gray.200" p="10rem">
      <Stack align="center" w="25rem" textAlign="center" spacing="1rem">
        <Title size="lg">Acerca de Obio</Title>
        <Description>
          Obio es una iniciativa de comercio justo y colaborativo que busca
          impulsar la comercialización de productos elaborados con prácticas
          amigables con la biodiversidad, a través de tiendas de autoservicio,
          departamentales, especializadas y comercio electrónico, que permitan
          llevar a la mesa de los hogares mexicanos productos saludables de la
          más alta calidad.
        </Description>

        <HStack pt="3rem" spacing="2rem">
          <Stack align="center">
            <Box p="2rem" bgColor="gray.300" borderRadius="50%" w="2rem"></Box>
            <Heading size="sm">BIOLÓGICO</Heading>
          </Stack>
          <Stack align="center">
            <Box p="2rem" bgColor="gray.300" borderRadius="50%" w="2rem"></Box>
            <Heading size="sm">BIO(VIDA)</Heading>
          </Stack>
          <Stack align="center">
            <Box p="2rem" bgColor="gray.300" borderRadius="50%" w="2rem"></Box>
            <Heading size="sm">BIODIVERSO</Heading>
          </Stack>
          <Stack align="center">
            <Box p="2rem" bgColor="gray.300" borderRadius="50%" w="2rem"></Box>
            <Heading size="sm">BIOSFERA</Heading>
          </Stack>
        </HStack>
      </Stack>
    </Center>
  )
}

export default AboutObio
