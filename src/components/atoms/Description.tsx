import { Text } from '@chakra-ui/react'

const Description = ({ children, ...rest }: any) => {
  return (
    <Text fontSize="md" {...rest}>
      {children}
    </Text>
  )
}

export default Description
