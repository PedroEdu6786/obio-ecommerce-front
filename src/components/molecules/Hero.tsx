import { Stack } from '@chakra-ui/react'
import ButtonAction from '../atoms/ButtonAction'
import Title from '../atoms/Title'

const Hero = () => {
  return (
    <Stack align="center" justify="center" px="10rem" py="20rem" spacing="2rem">
      <Title textAlign="center">Negocios que conservan la vida</Title>
      <ButtonAction>Buscar Productos</ButtonAction>
    </Stack>
  )
}

export default Hero
