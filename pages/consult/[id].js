import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import NavLayout from '@/components/NavLayout'
import Consult from '@/components/Consult'
import Footer from '@/components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { loadDoctor } from '@/redux/actions/searchAction'

function Consults() {
  const [filters, setFilters] = useState([])
  const dispatch = useDispatch()
  const { doctors, searchDoctorResult, loading, error, count, pagination } =
    useSelector((state) => state.search)
  const { step, formOne, formTwo, formThree } = useSelector(
    (state) => state.app
  )
  const { isLoggedIn } = useSelector((state) => state.auth)

  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    console.log('router.query', id)
    if (id) {
      dispatch(loadDoctor([{ key: id }]))
    }
  }, [id])
  return (
    <div className={styles.main} key={id}>
      <Head>
        <title>HOSPLAN</title>
        <meta
          name="description"
          content="Search amongst finest specialist Doctors and get opinion, tele consultations, and schedule appointments."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavLayout dispatch={dispatch} useSelector={useSelector} />
      <Consult
        doctors={doctors}
        loading={loading}
        isLoggedIn={isLoggedIn}
        error={error}
        count={count}
        step={step}
        formOne={formOne}
        formTwo={formTwo}
        formThree={formThree}
      />
      <Footer />
    </div>
  )
}

export default Consults
