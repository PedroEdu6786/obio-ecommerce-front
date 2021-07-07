import { Stack, Text, Box, HStack, Button } from '@chakra-ui/react'
import Title from '../../src/components/atoms/Title'
import CartProduct from '../../src/components/molecules/CartProduct'
import StoreTemplate from '../../src/components/template/StoreTemplate'
import { BiLeftArrowAlt } from 'react-icons/bi'
import LinkR from '../../src/components/atoms/LinkR'

export default function Home() {
  return (
    <StoreTemplate>
      <HStack p="5rem" justify="space-between" align="flex-start">
        <Stack spacing="1.5rem">
          <LinkR href="/tienda">
            <HStack>
              <BiLeftArrowAlt />
              <Text fontWeight="semibold">Continuar Comprando</Text>
            </HStack>
          </LinkR>
          <Title>Tu Carrito</Title>
          <Text>Tienes # items en tu carro</Text>
          <Stack spacing="1.5rem">
            <CartProduct />
            <CartProduct />
            <CartProduct />
          </Stack>
        </Stack>
        <Stack
          spacing="1.5rem"
          p="2rem"
          bgColor="gray.200"
          w="300px"
          h="200px"
          borderRadius="1rem"
        >
          <Text>Subtotal: 200</Text>
          <Button>Proceder al pago</Button>
        </Stack>
      </HStack>
    </StoreTemplate>
  )
}
