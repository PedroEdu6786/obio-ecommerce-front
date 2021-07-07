import { Stack, Image, Text } from '@chakra-ui/react'
import LinkR from '../atoms/LinkR'

const ProductCard = ({ href = '/', isProduct, price = 250 }: any) => {
  return (
    <LinkR href={href}>
      <Stack
        align="center"
        border="2px solid"
        borderColor="gray.300"
        padding="2rem"
        borderRadius=".5rem"
        spacing="1rem"
      >
        <Image src="https://via.placeholder.com/250" alt="product image" />
        <Stack align="center">
          <Text fontWeight="bold">Nombre del producto</Text>
          {isProduct && <Text fontWeight="bold">${price}</Text>}
        </Stack>
      </Stack>
    </LinkR>
  )
}

export default ProductCard
