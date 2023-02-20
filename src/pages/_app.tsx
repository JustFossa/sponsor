import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import {AnimatePresence, motion} from 'framer-motion'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Open source inviting alternative to GitHub sponsors" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="JustFossa" />
      </Head>
      <div className="min-h-screen w-full dark:bg-[#0d1117] flex flex-col items-center">
        <div className="w-[80%] md:w-[45rem]">
          <AnimatePresence mode="wait">
            <Component {...pageProps} />
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}
