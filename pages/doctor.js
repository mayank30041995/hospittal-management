import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import NavLayout from '../components/NavLayout'
import Search from '../components/Search/Doctor'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import withAuth from './withAuth'
import Doctor from '../components/Doctor'
import { loadDoctor } from '@/redux/actions/searchAction'
import { fetchSearchJSON } from '@/utils/apiCalls'
import appConfig from '@/utils/appConfig'

function Doctors() {
  const [filters, setFilters] = useState([])
  const dispatch = useDispatch()
  const { doctors, searchDoctorResult, loading, error, count, pagination } =
    useSelector((state) => state.search)
  const { jwt, user, _id } = useSelector((state) => state.auth)
  const router = useRouter()
  const { id, value } = router.query

  async function fetchData() {
    if (id === '' && value) {
      const response = await fetchSearchJSON(
        `${
          appConfig.socketURL
        }/home/search?q=${value.toLowerCase()}&cat=doctor&limit=-1`
      )
        .then((body) => {
          if (body.length > 0) {
            dispatch(loadDoctor([{ key: body[0].id }]))
          } else {
            dispatch(loadDoctor([{ key: value }]))
            router.push('/')
          }
        })
        .catch((err) => console.log(err))
    }
  }

  useEffect(() => {
    console.log('router.query', id)
    if (id) {
      dispatch(loadDoctor([{ key: id }]))
    }
  }, [id])

  useEffect(() => {
    if (id?.length === 0) {
      fetchData()
    }
  }, [value])

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
      <Doctor doctorId={id} user={user} doctors={doctors} loading={loading} />
      <Footer />
    </div>
  )
}

export default Doctors
