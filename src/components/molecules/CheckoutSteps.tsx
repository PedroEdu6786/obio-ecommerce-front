import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { AiOutlineRight } from 'react-icons/ai'
import LinkR from '../atoms/LinkR'

const CheckoutSteps = () => {
  return (
    <Breadcrumb spacing="8px" separator={<AiOutlineRight color="gray.500" />}>
      <BreadcrumbItem>
        <LinkR href="/carro">Carrito</LinkR>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <LinkR href="/checkout/envio">Envio</LinkR>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <LinkR href="/checkout/pago">Método de Pago</LinkR>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <LinkR href="/checkout/confirmacion">Confirmacion</LinkR>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export default CheckoutSteps
