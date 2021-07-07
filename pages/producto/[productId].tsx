import { Box } from '@chakra-ui/react'
import StoreTemplate from '../../src/components/template/StoreTemplate'
import BannerMerchant from '../../src/components/molecules/BannerMerchant'
import DisplayProduct from '../../src/components/molecules/DisplayProduct'
import { productList } from '../../src/utils/productList'

export default function Home({ product }: any) {
  return (
    <StoreTemplate>
      <DisplayProduct {...product[0]} />
      <Box px="5rem" pb="5rem">
        <BannerMerchant />
      </Box>
    </StoreTemplate>
  )
}

export async function getStaticPaths() {
  const paths = productList.map((product) => ({
    params: { productId: product.id + '' },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context: any) {
  let productType: any = productList.filter((product) => {
    return product.id == context.params.productId
  })

  let product = productType

  return {
    props: { product },
  }
}
