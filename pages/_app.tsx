import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Gallery} from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Gallery />
      </>

  )
}
