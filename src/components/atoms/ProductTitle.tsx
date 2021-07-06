import { Heading } from '@chakra-ui/react'

const ProductTitle = ({ children, ...rest }: any) => {
  return <Heading {...rest}>{children}</Heading>
}

export default ProductTitle
