import {
  Center,
  HStack,
  Stack,
  SimpleGrid,
  Text,
  Image,
  Box,
  Heading,
} from '@chakra-ui/react'
import LinkR from '../../src/components/atoms/LinkR'

import StoreTemplate from '../../src/components/template/StoreTemplate'

const Home = () => {
  return (
    <StoreTemplate>
      <Box as="section" id="header" bgColor="gray.200">
        <Stack py="1.5rem" px="2rem">
          <Heading size="md" fontWeight="semibold">
            Tablero
          </Heading>
          <Text>
            Comienza aquí y accede rápidamente a las secciones más importantes
            de tu cuenta.
          </Text>
        </Stack>
      </Box>
      <Center p="5rem">
        <SimpleGrid columns={2} gap={10} justify="space-around">
          <Stack
            p="2rem"
            bgColor="gray.200"
            borderRadius=".5rem"
            align="center"
            spacing="2rem"
          >
            <Image src="https://via.placeholder.com/200" alt="product image" />
            <Text fontWeight="bold" fontSize="1.5rem">
              Buzón de pedidos
            </Text>
          </Stack>
          <LinkR href="/admin/productos">
            <Stack
              p="2rem"
              bgColor="gray.200"
              borderRadius=".5rem"
              align="center"
              spacing="2rem"
            >
              <Image
                src="https://via.placeholder.com/200"
                alt="product image"
              />
              <Text fontWeight="bold" fontSize="1.5rem">
                Mis Productos
              </Text>
            </Stack>
          </LinkR>
          <Stack
            p="2rem"
            bgColor="gray.200"
            borderRadius=".5rem"
            align="center"
            spacing="2rem"
          >
            <Image src="https://via.placeholder.com/200" alt="product image" />
            <Text fontWeight="bold" fontSize="1.5rem">
              Datos de ventas
            </Text>
          </Stack>
          <Stack
            p="2rem"
            bgColor="gray.200"
            borderRadius=".5rem"
            align="center"
            spacing="2rem"
          >
            <Image src="https://via.placeholder.com/200" alt="product image" />
            <Text fontWeight="bold" fontSize="1.5rem">
              Configuración de Cuenta
            </Text>
          </Stack>
        </SimpleGrid>
      </Center>
    </StoreTemplate>
  )
}

export default Home
