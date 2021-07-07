import { useState } from 'react'
import {
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  HStack,
} from '@chakra-ui/react'
import CheckoutTemplate from '../../../src/components/template/CheckoutTemplate'

export default function Home() {
  const [value, setValue] = useState('1')

  return (
    <CheckoutTemplate previous="/carro" next="/checkout/pago">
      <Stack spacing="2rem">
        <Heading>Detalles de envío</Heading>
        <HStack>
          <FormControl id="email">
            <FormLabel>Nombre Completo</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="telefono">
            <FormLabel>Telefono</FormLabel>
            <Input type="text" />
          </FormControl>
        </HStack>
        <HStack>
          <FormControl id="telefono">
            <FormLabel>Dirección de Envío</FormLabel>
            <Input type="text" />
          </FormControl>
        </HStack>
        <HStack>
          <FormControl id="postal">
            <FormLabel>Codigo Postal</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="ciudad">
            <FormLabel>Ciudad</FormLabel>
            <Input type="text" />
          </FormControl>
        </HStack>
        <HStack>
          <FormControl id="ciudad">
            <FormLabel>Ciudad</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="references">
            <FormLabel>Referencias</FormLabel>
            <Input type="text" />
          </FormControl>
        </HStack>
      </Stack>
      <Stack>
        <Heading>Opciones de envío</Heading>
        <RadioGroup onChange={setValue} value={value}>
          <HStack>
            <Radio value="1">BiciEntregas</Radio>
            <Radio value="2">Estafeta</Radio>
          </HStack>
        </RadioGroup>
      </Stack>
    </CheckoutTemplate>
  )
}
