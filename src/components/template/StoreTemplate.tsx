import Header from '../molecules/Header'
import Footer from '../molecules/Footer'
import { Box } from '@chakra-ui/react'

const StoreTemplate = ({ children, ...rest }: any) => {
  return (
    <Box {...rest}>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </Box>
  )
}

export default StoreTemplate
