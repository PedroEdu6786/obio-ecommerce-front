import { Stack, Text, SimpleGrid, Box } from '@chakra-ui/react'
import Title from '../../src/components/atoms/Title'
import BannerMerchant from '../../src/components/molecules/BannerMerchant'
import ProductCard from '../../src/components/molecules/ProductCard'
import StoreTemplate from '../../src/components/template/StoreTemplate'
import { merchants } from '../../src/utils/merchants'
import { productList } from '../../src/utils/productList'

const Home = ({ merchant, products }: any) => {
  const { id, name, img, description } = merchant[0]

  return (
    <StoreTemplate>
      <Stack p="5rem" px="15rem" spacing="3rem">
        <BannerMerchant {...merchant[0]} isMerchantPage />
        <Text>{description}</Text>
        <Title>Productos de cooperativa</Title>
        <SimpleGrid columns={2} gap="1.5rem">
          {products.map((product: any) => (
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
    </StoreTemplate>
  )
}

export async function getStaticPaths() {
  const paths = merchants.map((merchant) => ({
    params: { merchantId: merchant.id + '' },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context: any) {
  let merchantPage: any = merchants.filter((merchant) => {
    return merchant.id == context.params.merchantId
  })

  let products: any = productList.filter((product) => {
    return product.merchantId == context.params.merchantId
  })

  return {
    props: { merchant: merchantPage, products },
  }
}

export default Home
