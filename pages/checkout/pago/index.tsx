import {
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  HStack,
  useRadioGroup,
} from '@chakra-ui/react'
import CheckoutTemplate from '../../../src/components/template/CheckoutTemplate'
import RadioCard from '../../../src/components/atoms/RadioCard'

export default function Home() {
  const options = ['mastercard', 'visa', 'paypal', 'codi']

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: console.log,
  })

  const group = getRootProps()

  return (
    <CheckoutTemplate previous="/checkout/envio" next="/checkout/confirmacion">
      <Stack spacing="2rem">
        <Heading>Información de pago</Heading>
        <HStack {...group}>
          {options.map((value) => {
            const radio = getRadioProps({ value })
            return (
              <RadioCard key={value} {...radio}>
                {value}
              </RadioCard>
            )
          })}
        </HStack>
        <HStack>
          <FormControl id="email">
            <FormLabel>Nombre Completo</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="telefono">
            <FormLabel>Numero de tarjeta</FormLabel>
            <Input type="text" />
          </FormControl>
        </HStack>
        <HStack>
          <FormControl id="telefono">
            <FormLabel>CVV</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="telefono">
            <FormLabel>Fecha de expiracion</FormLabel>
            <Input type="text" />
          </FormControl>
        </HStack>
      </Stack>
    </CheckoutTemplate>
  )
}
