import React from 'react'
import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
type Props = {
  children?: React.ReactNode
}
const Layout = (props: Props) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <div className="mx-auto flex flex-col h-[calc(100%-1px)]">
        <Header />
        <main className="flex-1">{props.children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
