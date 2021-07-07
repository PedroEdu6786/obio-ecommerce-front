import {
  SimpleGrid,
  Stack,
  Text,
  HStack,
  Image,
  Box,
  Center,
} from '@chakra-ui/react'
import ButtonAction from '../atoms/ButtonAction'
import ProductQuantity from './ProductQuantity'
import ProductTitle from '../atoms/ProductTitle'

const DisplayProduct = ({ img, name, price, description }: any) => {
  return (
    <SimpleGrid columns={2} px="8rem" pt="15rem" pb="10rem" justify="center">
      <Center>
        <Image src={img} alt="product image" />
      </Center>
      <Stack spacing="1.25rem">
        <ProductTitle>{name}</ProductTitle>
        <Text fontWeight="bold" fontSize="lg">
          ${price}
        </Text>
        <Text>{description}</Text>
        <Box>
          <ProductQuantity />
        </Box>
        <HStack>
          <ButtonAction variant="outline">Comprar ahora</ButtonAction>
          <ButtonAction>Agregar al carrito</ButtonAction>
        </HStack>
      </Stack>
    </SimpleGrid>
  )
}

export default DisplayProduct
