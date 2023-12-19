import React from 'react'
import Signup from './Signup'
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import withAuth from '@/pages/withAuth'

function PartnerAccount() {
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
      <div className="register_page">
        <Signup />
      </div>
    </div>
  )
}

export default withAuth(PartnerAccount)
