import React from 'react'
import Head from 'next/head'
import { Block, CardWrapper } from './login'
import RegisterPartner from '../components/RegisterPartner/Signup'
import PatientDetails from '../components/Dashboard/Doctor/PatientDetails'
import { useSelector } from 'react-redux'

function PatientDetailsPage() {
  const { jwt, user: auth, _id } = useSelector((state) => state.auth)

  return (
    <div>
      <Head>
        <title>HOSPLAN</title>
        <meta
          name="description"
          content="Search amongst finest specialist Doctors and get opinion, tele consultations, and schedule appointments"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="register_page">
        <PatientDetails authId={auth} />
      </div>
    </div>
  )
}

export default PatientDetailsPage
