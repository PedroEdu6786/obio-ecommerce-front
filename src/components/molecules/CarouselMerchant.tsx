import { Stack, Box, HStack } from '@chakra-ui/react'
import Title from '../atoms/Title'

const CarouselMerchant = () => {
  return (
    <Stack px="10rem" py="15rem" align="center" spacing="4rem">
      <Box>
        <Title size="lg">Conoce a nuestras Cooperativas</Title>
      </Box>
      <HStack spacing="5rem">
        <Box p="5rem" borderRadius="50%" bgColor="gray.200"></Box>
        <Box p="5rem" borderRadius="50%" bgColor="gray.200"></Box>
        <Box p="5rem" borderRadius="50%" bgColor="gray.200"></Box>
      </HStack>
    </Stack>
  )
}

export default CarouselMerchant
