import { Box } from '@chakra-ui/react'
import StoreTemplate from '../../src/components/template/StoreTemplate'
import BannerMerchant from '../../src/components/molecules/BannerMerchant'
import DisplayProduct from '../../src/components/molecules/DisplayProduct'

export default function Home() {
  return (
    <StoreTemplate>
      <DisplayProduct />
      <Box px="5rem" pb="5rem">
        <BannerMerchant />
      </Box>
    </StoreTemplate>
  )
}
