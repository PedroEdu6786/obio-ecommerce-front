import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    obio: {
      'military-green': '#757B63',
      honey: '#D0973C',
      'pale-green': '#B9BD8F',
      orange: '#FBAF1C',
      dirt: '#BD9A5F',
      grey: '#636569',
      dark: '#323E48',
      tangerine: '#F58221',
      reddish: '#F36F4F',
      separator: '#C5C5C5',
    },
  },
  styles: {
    global: {
      'html, body': {
        background: '#F7F7F7',
        p: 0,
        m: 0,
      },
      a: {
        color: 'inherit',
      },
      '*': {
        boxSizing: 'border-box',
      },
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
