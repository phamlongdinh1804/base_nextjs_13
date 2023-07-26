import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import Providers from '@/libs/Provider'
import NextAuthProviders from '@/libs/NextAuthProviders'
import { ConfigProvider } from 'antd'
import '@/styles/globals.scss'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <NextAuthProviders>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#EF4230',
          },
        }}
      >
        <Providers>{getLayout(<Component {...pageProps} />)}</Providers>
      </ConfigProvider>
    </NextAuthProviders>
  )
}
