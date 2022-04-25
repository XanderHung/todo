import { Box, ChakraProvider } from '@chakra-ui/react'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar/>
      <Box minH="90vh">
        <Component {...pageProps} />
      </Box>
      <Footer/>
    </ChakraProvider>
  )
}

export default MyApp
