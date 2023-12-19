import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import HospitalResults from '../components/Hospital'
import NavLayout from '../components/NavLayout'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { fetchSearchJSON } from '@/utils/apiCalls'
import appConfig from '@/utils/appConfig'
import styles from '@/styles/Home.module.css'
import {
  loadHospitalDoctors,
  loadingSearch,
  refreshApp,
} from '@/redux/actions/searchAction'
import { loadDefaultOptions } from '@/redux/actions/appAction'

function Hospitals() {
  const [hospitalDetails, setHospitalDetails] = useState({})
  const [loading, setLoading] = useState(true)
  const { jwt, user, _id } = useSelector((state) => state.auth)

  const {
    error,
    loading: loader,
    count,
    hospitalDoctors,
  } = useSelector((state) => state.search)
  const router = useRouter()
  const dispatch = useDispatch()
  const { id, value } = router.query

  const fetchApiData = async (id) => {
    setLoading(true)
    const apiData = await fetchSearchJSON(
      `${appConfig.socketURL}/hospitals/${id}`,
      {}
    )
    if (apiData) {
      console.log('hospitalDetails', apiData)

      setHospitalDetails(apiData)
      dispatch(loadHospitalDoctors(id, {}, {}, 10))
      setLoading(false)
    }
  }

  async function fetchData() {
    // You can await here
    if (value) {
      const response = await fetchSearchJSON(
        `${
          appConfig.socketURL
        }/home/search?q=${value.toLowerCase()}&cat=hospital&limit=-1`
      )
        .then((body) => {
          // console.log('setSearch manual fetch', body)
          if (body.length > 0) {
            fetchApiData(body[0].id)
          } else {
            fetchApiData(value)
            router.push('/')
            // setFilters([{ key: value }])
          }
        })
        .catch((err) => {
          console.log(err)
          setLoading(false)
        })
    }
    // ...
  }

  useEffect(() => {
    if (id) {
      try {
        dispatch(refreshApp())
        dispatch(loadingSearch(true))
        fetchApiData(id)
        dispatch(loadDefaultOptions())
      } catch (err) {
        console.log('error', err.message)
      }
    }
  }, [id])

  useEffect(() => {
    if (id?.length === 0) {
      dispatch(refreshApp())
      dispatch(loadingSearch(true))
      fetchData()
    }
  }, [value])

  return (
    <div className={styles.main}>
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

      <HospitalResults
        loading={loading}
        hospitalDetails={hospitalDetails}
        user={user}
        doctorResult={hospitalDoctors}
        loader={loader}
        count={count}
      />
    </div>
  )
}

export default Hospitals
