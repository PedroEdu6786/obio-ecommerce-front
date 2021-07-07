import StoreTemplate from '../../src/components/template/StoreTemplate'
import {
  Center,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  SimpleGrid,
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import Title from '../../src/components/atoms/Title'
import ProductCard from '../../src/components/molecules/ProductCard'

const Home = () => {
  return (
    <StoreTemplate>
      <Center py="5rem">
        <Stack spacing="3rem" align="center">
          <Title>Productos de linea</Title>
          <InputGroup>
            <Input variant="filled" />
            <InputRightElement children={<FiSearch />} />
          </InputGroup>
          <SimpleGrid columns={2} gap="1.5rem">
            <ProductCard isProduct href={'/producto/1'} />
            <ProductCard isProduct href={'/producto/1'} />
            <ProductCard isProduct href={'/producto/1'} />
            <ProductCard isProduct href={'/producto/1'} />
          </SimpleGrid>
        </Stack>
      </Center>
    </StoreTemplate>
  )
}

export default Home
