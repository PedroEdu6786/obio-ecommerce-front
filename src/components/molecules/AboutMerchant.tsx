import { Stack, Box, SimpleGrid } from '@chakra-ui/react'
import Title from '../atoms/Title'
import Description from '../atoms/Description'

const AboutMerchant = () => {
  return (
    <SimpleGrid columns={2} h="40rem">
      <Box>
        <Box w="100%" h="100%" bgColor="gray.600"></Box>
      </Box>
      <Stack p="5rem" justify="center" spacing="2rem">
        <Title size="lg">Cooperativas Obio</Title>
        <Description>
          Es Obio que las cooperativas que integran esta iniciativa comercial
          para acercar sus productos a los consumidores de la república están
          comprometidos en salvaguardar la biodiversidad, pues sus huertos,
          apiarios y familias viven en ellas. Por ello, la cuidan con sus manos,
          corazón y con la convicción de que este mundo puede ser mejor si
          mantenemos y conservamos el medio ambiente.
        </Description>
      </Stack>
    </SimpleGrid>
  )
}

export default AboutMerchant
