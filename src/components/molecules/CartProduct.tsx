import { HStack, Image, Text, Heading, Box } from '@chakra-ui/react'
import ProductQuantity from './ProductQuantity'

const CartProduct = () => {
  return (
    <HStack
      spacing="1rem"
      padding="1rem"
      bgColor="gray.100"
      borderRadius="1rem"
      w="600px"
    >
      <Image src="https://via.placeholder.com/100" />
      <Text fontSize="1.25rem" fontWeight="bold" w="10rem">
        Nombre del producto
      </Text>
      <Box w="150px">
        <ProductQuantity />
      </Box>
      <Text fontWeight="bold">$950</Text>
      <Text fontWeight="bold">X</Text>
    </HStack>
  )
}

export default CartProduct
