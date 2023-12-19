import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/Home.module.css'
import NavLayout from '@/components/NavLayout'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import withAuth from '/pages/withAuth'
import { loadDoctor } from '@/redux/actions/searchAction'
import Dashboard from '@/components/Dashboard'
import { loadBookingOrder } from '@/redux/actions/dashboardAction'

function DashboardPage() {
  const [filters, setFilters] = useState([])
  const dispatch = useDispatch()
  const {
    medicalReport,
    bookingOrder,
    prescriptions,
    patientList,
    loading: loadingDashboard,
  } = useSelector((state) => state.dashboard)

  const { jwt, user, _id } = useSelector((state) => state.auth)
  const { profileData, loading } = useSelector((state) => state.app)

  const [patientLink, setPatientLink] = useState({
    overview: true,
    appointment: false,
    medicalreport: false,
    prescription: false,
    profile: false,
  })

  const [doctorLink, setDoctorLink] = useState({
    overview: true,
    appointment: false,
    patientList: false,
    profile: false,
  })

  const [hospitalLink, setHospitalLink] = useState({
    overview: true,
    ourDoctor: false,
    appointment: false,
    hospitalInfo: false,
  })
  // have to remove
  // useEffect(() => {
  //   if (user._id) {
  //     dispatch(loadBookingOrder(user._id))
  //   }
  // }, [user._id])

  const listInnerRef = useRef()
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current
      // console.log('listInnerRef', scrollTop, scrollHeight, clientHeight)
      if (scrollTop + clientHeight === scrollHeight) {
        // setCurrPage(currPage + 1)
        console.log('Fetch infinite scroll')
      }
    }
  }

  return (
    <div
      className={styles.main}
      key={user._id}
      onScroll={onScroll}
      ref={listInnerRef}
      style={{ height: '100vh', overflowY: 'auto' }}
    >
      <Head>
        <title>HOSPLAN</title>
        <meta
          name="description"
          content="Search amongst finest specialist Doctors and get opinion, tele consultations, and schedule appointments."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavLayout
        dispatch={dispatch}
        useSelector={useSelector}
        dashboard={'true'}
      />
      {/* {JSON.stringify(active)} */}
      <Dashboard
        loading={loading}
        loadingDashboard={loadingDashboard}
        profileData={profileData}
        bookingOrder={bookingOrder}
        patientLink={patientLink}
        doctorLink={doctorLink}
        hospitalLink={hospitalLink}
        setPatientLink={setPatientLink}
        setDoctorLink={setDoctorLink}
        setHospitalLink={setHospitalLink}
        dispatch={dispatch}
        user={user}
        medicalReport={medicalReport}
        prescriptions={prescriptions}
        patients={patientList}
      />
    </div>
  )
}

export default DashboardPage
