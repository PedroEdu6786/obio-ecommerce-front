import { Stack, Heading, Text, HStack, Box, Button } from '@chakra-ui/react'
import ProductInfo from '../../../src/components/molecules/ProductInfo'
import CheckoutTemplate from '../../../src/components/template/CheckoutTemplate'

export default function Home() {
  return (
    <CheckoutTemplate isLast previous="/checkout/pago">
      <HStack justify="space-between" align="flex-start">
        <Stack spacing="2rem">
          <HStack align="flex-start">
            <Stack p="2rem" bgColor="gray.100" borderRadius="1rem" w="250px">
              <Heading size="md">Dirección de envío</Heading>
              <Text fontSize="14px">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
                nisi porro quas iste iure sapiente laudantium impedit pariatur!
                Minus, ipsa.
              </Text>
            </Stack>
            <Stack p="2rem" bgColor="gray.100" borderRadius="1rem" w="250px">
              <Heading size="md">Método de pago</Heading>
              <Text fontSize="14px">MasterCard</Text>
              <Text fontSize="14px">Tarjeta con terminación: 1111</Text>
            </Stack>
            <Stack p="2rem" bgColor="gray.100" borderRadius="1rem" w="250px">
              <Heading size="md">Opción de envío</Heading>
              <Text fontSize="14px">Bici Entregas</Text>
            </Stack>
          </HStack>
          <Stack>
            <ProductInfo />
            <ProductInfo />
            <ProductInfo />
          </Stack>
        </Stack>
        <Stack p="2rem" bgColor="gray.200" borderRadius="1rem" spacing="1rem">
          <Heading size="md">Resumen de Compra</Heading>
          <HStack justify="space-between">
            <Text>Productos(3): </Text>
            <Text>$250</Text>
          </HStack>
          <HStack justify="space-between">
            <Text>Envío: </Text>
            <Text>$89</Text>
          </HStack>
          <HStack justify="space-between">
            <Text>Costo sin Iva: </Text>
            <Text>$439</Text>
          </HStack>
          <HStack justify="space-between">
            <Text>Iva: </Text>
            <Text>$20</Text>
          </HStack>
          <HStack fontWeight="bold" justify="space-between">
            <Text>Total: </Text>
            <Text>$459</Text>
          </HStack>
          <Button>Realizar Compra</Button>
        </Stack>
      </HStack>
    </CheckoutTemplate>
  )
}
