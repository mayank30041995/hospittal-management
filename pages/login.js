import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Col, Row, Radio } from 'antd'
import styledComponents from 'styled-components'
import styles from '@/styles/Home.module.css'
import Register from '../components/Register'
import Login from '../components/Register/Login'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import withAuth from './withAuth'
import Router from 'next/router'
import { roleSave } from '@/redux/actions/appAction'

export const CardWrapper = styledComponents(Col)`
   padding: 30px;
   background: #F5F7F9;
   width: 90vh;
   height: 110vh;
    @media (max-width: 768px) {
      padding: 15px;
       width: auto;
       height: 100%;
    }
`
export const Block = styledComponents(Col)`
   padding: 6% 0 0 10%; 
   width: 45%;
  @media (max-width: 768px) {
       width: 92%;
       padding: 8% 0 50% 10%;
  }
`

function LoginPage() {
  const dispatch = useDispatch()
  const { jwt, user } = useSelector((state) => state.auth)
  const { role } = useSelector((state) => state.app)
  // const [role, setRole] = useState(1)

  const onChangeRole = (e) => {
    dispatch(roleSave(e.target.value))
    // setRole(e.target.value)
  }

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
        <CardWrapper>
          <Register type="login" role={role} onChangeRole={onChangeRole} />
        </CardWrapper>
        <Block>
          <Login dispatch={dispatch} role={role} />
        </Block>
      </div>
    </div>
  )
}

export default withAuth(LoginPage)
