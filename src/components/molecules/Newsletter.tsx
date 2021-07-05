import { Stack, Box, Text, Input, Center } from '@chakra-ui/react'
import ButtonAction from '../atoms/ButtonAction'
import Title from '../atoms/Title'

const Newsletter = () => {
  return (
    <Box p="10rem" bgColor="gray.400">
      <Center>
        <Stack
          bgColor="gray.100"
          spacing="4rem"
          p="3rem"
          borderRadius="1rem"
          w="40rem"
        >
          <Title>Entérate de nuevos productos, ofertas y más!</Title>
          <Box>
            <Text>Correo electrónico</Text>
            <Input size="md" />
            <ButtonAction>Enviar</ButtonAction>
          </Box>
        </Stack>
      </Center>
    </Box>
  )
}

export default Newsletter
