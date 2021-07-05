import { Stack } from '@chakra-ui/react'
import ButtonAction from '../atoms/ButtonAction'
import Title from '../atoms/Title'

const Hero = () => {
  return (
    <Stack align="center" justify="center" px="10rem" py="20rem" spacing="2rem">
      <Title textAlign="center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, expedita?
      </Title>
      <ButtonAction>Buscar Productos</ButtonAction>
    </Stack>
  )
}

export default Hero
