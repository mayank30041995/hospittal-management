import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import HomePage from './HomePage'
// import NavLayout from '../components/NavLayout'
import withAuth from './withAuth'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment, startClock } from '/redux/actions/appAction'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import {
  loadData,
  loadApp,
  loadDefaultOptions,
} from '@/redux/actions/appAction'
import { wrapper } from '../redux/store'
const inter = Inter({ subsets: ['latin'] })
import { END } from 'redux-saga'
import { loadComments } from '@/redux/actions/dashboardAction'
import { loadingSearch } from '@/redux/actions/searchAction'
const HomePage = dynamic(
  async () => await import('./HomePage').then((comp) => comp),
  {
    ssr: false,
  }
)
const NavLayout = dynamic(
  async () => await import('../components/NavLayout').then((comp) => comp),
  { ssr: false }
)
// import FontStyles from './FontStyles'

function Home() {
  const lastUpdate = useSelector((state) => state.app?.lastUpdate)
  const counter = useSelector((state) => state.app?.counter)
  const comments = useSelector((state) => state.dashboard?.comments)

  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(startClock())
    dispatch(loadComments())
    dispatch(loadDefaultOptions())
    dispatch(loadingSearch(true))
  }, [dispatch])

  return (
    <>
      <Head>
        <title>HOSPLAN</title>
        <meta
          name="description"
          content="Search amongst finest specialist Doctors and get opinion, tele consultations, and schedule appointments"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <FontStyles /> */}
      <main className={styles.main}>
        <NavLayout
          underline="true"
          lastUpdate={lastUpdate}
          counter={counter}
          dispatch={dispatch}
          useSelector={useSelector}
        />
        <HomePage comments={comments} />
      </main>
    </>
  )
}

export default Home
// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ req, res }) => {
//       await store.dispatch(loadApp())
//     }
// )

// export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
//   if (!store.getState()) {

//     // store.dispatch(loadApp())
//     store.dispatch(END)
//   }

//   await store.sagaTask.toPromise()
// })
