import { HStack, Image, Text, Stack } from '@chakra-ui/react'

const CartProduct = () => {
  return (
    <HStack
      spacing="1rem"
      padding="1rem"
      bgColor="gray.100"
      borderRadius="1rem"
      w="500px"
    >
      <Image src="https://via.placeholder.com/100" />
      <Text fontSize="1.25rem" fontWeight="bold" w="10rem">
        Nombre del producto
      </Text>
      <Stack>
        <Text fontWeight="bold">Cantidad: 3</Text>
        <Text fontWeight="bold">$950</Text>
      </Stack>
    </HStack>
  )
}

export default CartProduct
