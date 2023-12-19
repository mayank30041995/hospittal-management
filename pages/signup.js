import React, { useState } from 'react'
import Head from 'next/head'
import { Col, Row, Radio } from 'antd'
import styledComponents from 'styled-components'
import styles from '@/styles/Home.module.css'
import Register from '../components/Register'
import Signup from '../components/Register/Signup'
import { useDispatch, useSelector } from 'react-redux'
import withAuth from './withAuth'
import AdditionalForm from '../components/Register/AdditionalForm'
import AdditionalFormPatient from '../components/Register/AdditionalFormPatient'
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
function SignupPage() {
  const dispatch = useDispatch()
  const { role } = useSelector((state) => state.app)
  const [flag, setFlag] = useState(false)
  const [input, setInput] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
  })
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
      {!flag ? (
        <div className="register_page">
          <CardWrapper>
            <Register type="signup" role={role} onChangeRole={onChangeRole} />
          </CardWrapper>
          <Block>
            <Signup
              dispatch={dispatch}
              role={role}
              setFlag={setFlag}
              input={input}
              setInput={setInput}
            />
          </Block>
        </div>
      ) : (
        <>
          {role === 1 ? (
            <AdditionalFormPatient
              dispatch={dispatch}
              input={input}
              role={role}
            />
          ) : role === 2 ? (
            <AdditionalForm dispatch={dispatch} input={input} role={role} />
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  )
}

export default withAuth(SignupPage)
// padding: 6 % 4 % 0px 6 %;
