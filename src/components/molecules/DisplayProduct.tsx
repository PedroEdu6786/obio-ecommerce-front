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

const DisplayProduct = () => {
  return (
    <SimpleGrid columns={2} px="8rem" pt="15rem" pb="10rem" justify="center">
      <Center>
        <Image src="https://via.placeholder.com/400" alt="product image" />
      </Center>
      <Stack spacing="1.25rem">
        <ProductTitle>Café Orgánico</ProductTitle>
        <Text fontWeight="bold" fontSize="lg">
          $2504
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga
          iusto quia culpa dicta perferendis, architecto quo, et sit numquam
          modi id sapiente aliquid labore soluta! Obcaecati temporibus dolor
          mollitia!
        </Text>
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
