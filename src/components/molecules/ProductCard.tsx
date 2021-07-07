import { Stack, Image, Text, Link } from '@chakra-ui/react'

const ProductCard = () => {
  return (
    <Link>
      <Stack
        align="center"
        border="2px solid"
        borderColor="gray.300"
        padding="2rem"
        borderRadius=".5rem"
        spacing="1rem"
      >
        <Image src="https://via.placeholder.com/250" alt="product image" />
        <Text fontWeight="bold">Nombre del producto</Text>
      </Stack>
    </Link>
  )
}

export default ProductCard
