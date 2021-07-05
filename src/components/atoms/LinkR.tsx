import Link from 'next/link'
import { Box } from '@chakra-ui/layout'

const LinkR = ({
  href,
  as = href,
  children,
  decoration = 'underline',
  ...rest
}: any) => {
  return (
    <Link href={href} as={as}>
      <Box
        as="a"
        _hover={{ cursor: 'pointer', textDecoration: decoration }}
        fontWeight="bold"
        fontSize={{ base: '.9rem', sm: '1rem', md: '1.25rem' }}
        {...rest}
      >
        {children}
      </Box>
    </Link>
  )
}

export default LinkR
