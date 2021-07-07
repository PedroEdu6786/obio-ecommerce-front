import { HStack, Box } from '@chakra-ui/react'
import { BiCart } from 'react-icons/bi'
import LinkR from '../atoms/LinkR'

const Header = () => {
  return (
    <Box as="section" id="header" bgColor="gray.100">
      <HStack justify="space-between" align="center" py="1.5rem" px="2rem">
        <Box>
          <LinkR href="/">Obio</LinkR>
        </Box>
        <HStack>
          <LinkR href="/tienda">Tienda</LinkR>
          <LinkR href="/">Iniciar Sesión</LinkR>
          <LinkR href="/carro">
            <BiCart fontSize="2rem" />
          </LinkR>
        </HStack>
      </HStack>
    </Box>
  )
}

export default Header
