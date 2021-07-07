import { Stack, Button, HStack } from '@chakra-ui/react'
import LinkR from '../atoms/LinkR'
import CheckoutSteps from '../molecules/CheckoutSteps'
import StoreTemplate from './StoreTemplate'

export default function CheckoutTemplate({
  children,
  isLast,
  previous,
  next,
}: any) {
  return (
    <StoreTemplate>
      <Stack p="10rem" spacing="3rem">
        <CheckoutSteps />
        {children}
        <HStack justify="space-between">
          <Button variant="link">
            <LinkR href={previous}>Anterior</LinkR>
          </Button>
          {!isLast && (
            <Button variant="link">
              <LinkR href={next}>Siguiente</LinkR>
            </Button>
          )}
        </HStack>
      </Stack>
    </StoreTemplate>
  )
}
