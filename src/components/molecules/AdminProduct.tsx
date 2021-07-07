import { HStack, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import Description from '../atoms/Description'

const AdminProduct = () => {
  return (
    <HStack
      spacing="1.5rem"
      bgColor="gray.200"
      padding="1rem"
      borderRadius=".5rem"
      maxW="900px"
    >
      <Image src="https://via.placeholder.com/150" alt="product image" />
      <Stack>
        <HStack justify="space-between">
          <Heading size="md">Nombre del producto</Heading>
          <Text>$250</Text>
        </HStack>
        <Description w="400px">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          aliquam nobis aut deserunt illum id placeat voluptatibus sit dolor
          quo, quam provident sequi? Exercitationem rem animi quaerat vel
          architecto earum.
        </Description>
      </Stack>
      <Button>Detalles del producto</Button>
    </HStack>
  )
}

export default AdminProduct
