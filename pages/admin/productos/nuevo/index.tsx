import {
  Stack,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  HStack,
  Textarea,
  Select,
  Box,
  Center,
} from '@chakra-ui/react'
import { BiImageAdd } from 'react-icons/bi'
import LinkR from '../../../../src/components/atoms/LinkR'
import StoreTemplate from '../../../../src/components/template/StoreTemplate'

const Home = () => {
  return (
    <StoreTemplate>
      <Stack p="5rem" py="10rem" align="flex-start" spacing="2rem">
        <LinkR href="/admin/productos">
          <Button variant="link">Regresar a mis productos</Button>
        </LinkR>
        <Heading>Registra tu producto</Heading>
        <HStack align="flex-start" spacing="3rem">
          <Stack spacing="1.5rem">
            <FormControl id="nombre-producto" isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="nombre-producto" isRequired>
              <FormLabel>Precio</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="nombre-producto" isRequired>
              <FormLabel>Descripcion</FormLabel>
              <Textarea placeholder="Here is a sample placeholder" />
            </FormControl>
          </Stack>
          <Stack spacing="1.5rem">
            <FormControl id="nombre-producto" isRequired>
              <FormLabel>Presentación</FormLabel>
              <FormHelperText>
                ¿Como se vende el producto? (unidad, peso, volumen)
              </FormHelperText>
              <Select placeholder="Select option">
                <Box as="option" value="option1">
                  Unidad
                </Box>
                <Box as="option" value="option2">
                  Peso
                </Box>
                <Box as="option" value="option3">
                  Volumen
                </Box>
              </Select>
            </FormControl>
            <FormControl id="nombre-producto" isRequired>
              <FormLabel>Etiquetas</FormLabel>
              <FormHelperText>
                ¿Que características se asocian a tu producto?
              </FormHelperText>
              <Select placeholder="Select option">
                <Box as="option" value="option1">
                  Vegano
                </Box>
                <Box as="option" value="option2">
                  Organico
                </Box>
                <Box as="option" value="option3">
                  Natural
                </Box>
                <Box as="option" value="option3">
                  Artesanal
                </Box>
              </Select>
            </FormControl>
          </Stack>
          <Stack>
            <FormControl id="imagen-producto" isRequired>
              <FormLabel>Imágen del producto</FormLabel>
              <FormHelperText>
                Agrega una imagen para que los usuarios puedan ver tu producto
              </FormHelperText>
              <Box p="5rem" bgColor="gray.200" borderRadius=".5rem">
                <Center>
                  <BiImageAdd fontSize="2rem" />
                </Center>
              </Box>
            </FormControl>
          </Stack>
        </HStack>
        <HStack>
          <Button variant="outline">Cancelar</Button>
          <Button>Registrar producto</Button>
        </HStack>
      </Stack>
    </StoreTemplate>
  )
}

export default Home
