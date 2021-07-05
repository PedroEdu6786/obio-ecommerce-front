import { Heading } from '@chakra-ui/react'

const Title = ({ children, ...props }: any) => {
  return <Heading {...props}>{children}</Heading>
}

export default Title
