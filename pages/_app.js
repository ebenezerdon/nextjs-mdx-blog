import { MDXProvider } from '@mdx-js/react'
import '../styles/globals.css'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </MDXProvider>
  )
}

export default MyApp
