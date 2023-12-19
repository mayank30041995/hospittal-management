import { Alert, Button, Col, Row, message } from 'antd'
import { Typography, Avatar, Radio, Divider } from 'antd'
import { UserOutlined, ArrowRightOutlined } from '@ant-design/icons'
import Spacer from 'react-spacer'
import InputGroup from '../Input/InputGroup'
import { ButtonWrapper } from '../NavLayout/module.styled'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { login, signup } from '@/redux/actions/authAction'
import { ButtonSubmit, CardGroup, TextBlock } from '../Register/register.styled'
import { useEffect } from 'react'
const { Title, Paragraph, Text } = Typography

const Login = ({ dispatch, role, ...props }) => {
  const [type, setType] = useState('user')

  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target
    props.setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e, type) => {
    e.preventDefault()
    let { email, password } = props.input
    dispatch(login(email, password, type))
  }

  return (
    <Col span={24}>
      <Title level={2}>Login</Title>
      <Paragraph>Enter your details below.</Paragraph>
      <Spacer height={30} />

      {/* <Alert message="Error" type="error" showIcon /> */}
      <Col style={{ textAlign: 'start' }}>
        <InputGroup
          push={0}
          size="large"
          placeholder="Email*"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <InputGroup
          push={0}
          size="large"
          type="password"
          placeholder="Password*"
          name="password"
          onChange={(e) => handleChange(e)}
        />

        <Spacer height={10} />
        <ButtonSubmit
          colors="primary"
          size="large"
          icon={<ArrowRightOutlined />}
          onClick={(e) => handleSubmit(e, 'partner')}
        >
          LOGIN
        </ButtonSubmit>
      </Col>
    </Col>
  )
}
export default Login
