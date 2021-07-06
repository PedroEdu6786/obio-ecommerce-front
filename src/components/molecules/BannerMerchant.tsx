import { Stack, Box } from '@chakra-ui/react'
import ButtonAction from '../atoms/ButtonAction'
import Title from '../atoms/Title'

const BannerMerchant = () => {
  return (
    <Stack
      w="100%"
      py="6rem"
      px="3rem"
      spacing="5rem"
      borderRadius="1rem"
      bgColor="gray.200"
    >
      <Title size="xl">Nombre de la cooperativa</Title>
      <Box>
        <ButtonAction size="lg">Conoce más</ButtonAction>
      </Box>
    </Stack>
  )
}

export default BannerMerchant
