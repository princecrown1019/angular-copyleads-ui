import '@/styles/globals.css'
import '@/styles/layout.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return  <ChakraProvider>
  <Component {...pageProps} />
  <ToastContainer />
</ChakraProvider>
}
