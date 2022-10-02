import { Layout } from '../components/layout/layout'
import { LayoutProvider } from '../context/layout-context'

import '../styles/globals.scss'



function MyApp({ Component, pageProps }) {

  return (
    <LayoutProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LayoutProvider>
  )
}

export default MyApp
