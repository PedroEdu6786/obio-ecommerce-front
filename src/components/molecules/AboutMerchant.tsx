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
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus dolor similique, architecto delectus eum ducimus optio
          at tempora deserunt modi. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Nihil earum recusandae quam, iste cum magni aperiam
          expedita accusamus natus facere.
        </Description>
      </Stack>
    </SimpleGrid>
  )
}

export default AboutMerchant
