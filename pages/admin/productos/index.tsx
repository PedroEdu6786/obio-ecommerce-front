import { Stack, Box, Button } from '@chakra-ui/react'
import LinkR from '../../../src/components/atoms/LinkR'
import AdminProduct from '../../../src/components/molecules/AdminProduct'
import StoreTemplate from '../../../src/components/template/StoreTemplate'

const Home = () => {
  return (
    <StoreTemplate>
      <Stack p="5rem" spacing="3rem" align="flex-start">
        <LinkR href="/admin">
          <Button variant="link">Regresar a Inicio</Button>
        </LinkR>
        <LinkR href="/admin/productos/nuevo">
          <Button>Agregar un producto</Button>
        </LinkR>
        <Stack spacing="2rem">
          <AdminProduct />
          <AdminProduct />
          <AdminProduct />
        </Stack>
      </Stack>
    </StoreTemplate>
  )
}

export default Home
