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
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no' />
      </Head>
      <div className='mx-auto flex h-auto min-h-full flex-col bg-[#EDE7D7]'>
        <Header />
        <main className='flex flex-1 px-[7rem] xl:px-[5rem]'>{props.children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
