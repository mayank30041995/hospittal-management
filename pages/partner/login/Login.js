import React, { useState } from 'react'
import styledComponents from 'styled-components'
import { Col } from 'antd'
import RegisterPartner from '@/components/RegisterPartner/Login'
import Register from '@/components/RegisterPartner'
import { useDispatch } from 'react-redux'

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

function Login() {
  const [input, setInput] = useState({
    email: '',
    password: '',
  })
  const [flag, setFlag] = useState(false)
  const dispatch = useDispatch()
  return (
    <div className="register_page">
      <CardWrapper>
        <Register type="signup" />
      </CardWrapper>
      <Block>
        <RegisterPartner
          dispatch={dispatch}
          role="partner"
          setFlag={setFlag}
          input={input}
          setInput={setInput}
        />
      </Block>
    </div>
  )
}

export default Login
