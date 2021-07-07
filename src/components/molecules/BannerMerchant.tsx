import { Stack, Box } from '@chakra-ui/react'
import ButtonAction from '../atoms/ButtonAction'
import LinkR from '../atoms/LinkR'
import Title from '../atoms/Title'

const BannerMerchant = ({
  id,
  img,
  name = 'cooperativa',
  isMerchantPage,
}: any) => {
  return (
    <Stack
      w="100%"
      py="6rem"
      px="3rem"
      spacing="5rem"
      borderRadius="1rem"
      bgImage={img}
    >
      <Title size="xl">{name}</Title>
      {!isMerchantPage && (
        <Box>
          <LinkR href={`/merchant/${id}`}>
            <ButtonAction size="lg">Conoce más</ButtonAction>
          </LinkR>
        </Box>
      )}
    </Stack>
  )
}

export default BannerMerchant
