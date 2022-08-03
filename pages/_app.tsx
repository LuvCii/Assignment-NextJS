import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from '../models/layout';
import Layout from '../components/Layout';
import { BrowserRouter } from 'react-router-dom';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return (
    <LayoutWrapper>
      {/* <BrowserRouter> */}
      <Component {...pageProps} />
      {/* </BrowserRouter> */}
    </LayoutWrapper>
  )
}

export default MyApp
