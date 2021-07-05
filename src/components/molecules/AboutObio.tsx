import { Stack, Box, Heading, Center, HStack } from '@chakra-ui/react'
import React from 'react'
import Title from '../atoms/Title'
import Description from '../atoms/Description'

const AboutObio = () => {
  return (
    <Center bgColor="gray.200" p="10rem">
      <Stack align="center" w="25rem" textAlign="center" spacing="1rem">
        <Title size="lg">¿Qué es Obio?</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus dolor similique, architecto delectus eum ducimus optio
          at tempora deserunt modi. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Nihil earum recusandae quam, iste cum magni aperiam
          expedita accusamus natus facere.
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
