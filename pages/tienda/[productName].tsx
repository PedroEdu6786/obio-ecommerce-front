import StoreTemplate from '../../src/components/template/StoreTemplate'
import {
  Center,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Box,
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import Title from '../../src/components/atoms/Title'
import ProductCard from '../../src/components/molecules/ProductCard'
import { productTypes } from '../../src/utils/productTypes'
import { productLines } from '../../src/utils/productLines'

const Home = ({ products }: any) => {
  const listOfProducts = products[0].products
  return (
    <StoreTemplate>
      <Center py="5rem">
        <Stack spacing="3rem" align="center">
          <Title>Productos de linea</Title>
          <InputGroup>
            <Input variant="filled" />
            <InputRightElement children={<FiSearch />} />
          </InputGroup>
          <SimpleGrid columns={2} gap="1.5rem">
            {listOfProducts.map((product: any) => (
              <Box key={product.id}>
                <ProductCard
                  isProduct
                  href={`/producto/${product.id}`}
                  {...product}
                />
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Center>
    </StoreTemplate>
  )
}

export async function getStaticPaths() {
  const paths = productLines.map((product) => ({
    params: { productName: product.id + '' },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context: any) {
  let productType: any = productTypes.filter((product) => {
    return product.productId == context.params.productName
  })

  let products = productType

  return {
    props: { products },
  }
}

export default Home
