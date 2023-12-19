import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { wrapper } from '../redux/store'
import 'nprogress/nprogress.css'
import '../styles/globals.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'

import NProgress from 'nprogress'
import {
  loadGeoLocation,
  loginRequest,
  loginSuccess,
} from '@/redux/actions/authAction'

const GlobalStyle = createGlobalStyle`
  body,
  html {
    margin: 0;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

function App({ Component, pageProps }) {
  const router = useRouter()
  const dispatch = useDispatch()
  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start())
    router.events.on('routeChangeComplete', () => NProgress.done())
    router.events.on('routeChangeError', () => NProgress.done())
  }, [])

  useEffect(() => {
    const jwt = localStorage.getItem('token')
    const userInfo = localStorage.getItem('userInfo')
    const user = JSON.parse(userInfo)
    const payload = { jwt, user }

    if (jwt !== undefined && user !== null) {
      // dispatch(loginRequest())
      dispatch(loginSuccess(payload))
    }
    dispatch(loadGeoLocation())
  }, [])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hosplan</title>
      </Helmet>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <script async defer src="/newrelic.js"></script>

          {/*<link rel="stylesheet" href="/styles/globals.css" />*/}
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default wrapper.withRedux(App)
