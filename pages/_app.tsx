import { ToastContainer } from 'react-toastify'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <ToastContainer/>
      <Component {...pageProps} />
    </>
  )
  
}

export default MyApp
