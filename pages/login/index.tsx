import {
  Center,
  Stack,
  Heading,
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  Button,
  Text,
  Box,
} from '@chakra-ui/react'
import StoreTemplate from '../../src/components/template/StoreTemplate'

const Home = () => {
  const handleLogin = () => {
    window.location.href = '/admin'
  }
  return (
    <StoreTemplate>
      <Center p="10rem" pb="20rem">
        <Stack spacing="1.25rem">
          <Heading>Iniciar Sesión</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button onClick={handleLogin}>Iniciar Sesión</Button>
          <Stack pt="1rem" fontWeight="semibold" fontSize=".9rem">
            <Text>¿Olvidaste tu contraseña? Haz click acá</Text>
            <Text>
              ¿Aún no cuentas con una cuenta?{' '}
              <Box as="span" fontWeight="bold">
                Registrate
              </Box>
            </Text>
          </Stack>
        </Stack>
      </Center>
    </StoreTemplate>
  )
}

export default Home
