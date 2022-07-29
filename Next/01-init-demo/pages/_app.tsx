import { NextPage } from 'next'
import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => JSX.Element; //o puede ser () => ReactNode, importado
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  //return <Component {...pageProps} />
  return getLayout(<Component {...pageProps}/>)
}

export default MyApp
