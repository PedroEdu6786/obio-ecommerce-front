import { Button } from '@chakra-ui/react'

const ButtonAction = ({ children, ...props }: any) => {
  return <Button {...props}>{children}</Button>
}

export default ButtonAction
