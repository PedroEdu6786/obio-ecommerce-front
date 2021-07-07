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
import { productLines } from '../../src/utils/productLines'

const Home = ({ products }: any) => {
  return (
    <StoreTemplate>
      <Center py="5rem">
        <Stack spacing="3rem" align="center">
          <Title>Línea de productos</Title>
          <InputGroup>
            <Input variant="filled" />
            <InputRightElement children={<FiSearch />} />
          </InputGroup>
          <SimpleGrid columns={2} gap="1.5rem">
            {products.map((product: any) => (
              <Box key={product.id}>
                <ProductCard
                  href={`/tienda/${product.id}`}
                  name={product.productType}
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

export async function getStaticProps() {
  let products = productLines
  return {
    props: { products },
  }
}

export default Home
