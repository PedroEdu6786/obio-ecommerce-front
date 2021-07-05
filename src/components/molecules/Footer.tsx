import { Box, Center } from '@chakra-ui/react'
import Title from '../atoms/Title'

const Footer = () => {
  return (
    <Box w="100%" p="2rem" bgColor="gray.700">
      <Center>
        <Title size="md" color="white">
          Obio
        </Title>
      </Center>
    </Box>
  )
}

export default Footer
