import { Alert, Button, Col, Row, message } from 'antd'
import { Typography, Avatar, Radio, Divider } from 'antd'
import { UserOutlined, ArrowRightOutlined } from '@ant-design/icons'
import Spacer from 'react-spacer'
import InputGroup from '../Input/InputGroup'
import { ButtonWrapper } from '../NavLayout/module.styled'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { signup } from '@/redux/actions/authAction'

import {
  ButtonSubmit,
  CardGroup,
  HideDisplayMobile,
  PhoneInputReact,
  TextBlock,
} from './register.styled'
import { useEffect } from 'react'
const { Title, Paragraph, Text, Link } = Typography

const Signup = ({ dispatch, role, ...props }) => {
  const [type, setType] = useState('user')

  const router = useRouter()

  const getRole = (role) => {
    switch (role) {
      case 1:
        return 'user'
      case 2:
        return 'doctor'
      case 3:
        return 'hospital'
      case 4:
        return 'partner'
      default:
        return 'hospital'
    }
  }
  useEffect(() => {
    if (getRole(role)) {
      setType(getRole(role))
    }
  }, [role])

  const handleChange = (e, type) => {
    if (type === 'phone') {
      props.setInput((prevState) => ({
        ...prevState,
        phone: e,
      }))
    } else {
      const { name, value } = e.target
      props.setInput((prevState) => ({
        ...prevState,
        [name]: value,
      }))
    }
  }

  const handleSubmit = (e, type) => {
    e.preventDefault()
    let { fullName, phone, email, password } = props.input
    if (fullName === '') {
      message.error('Please enter username')
    } else if (phone === '') {
      message.error('Please enter phone number')
    } else if (email === '') {
      message.error('Please enter email')
    } else if (password === '') {
      message.error('Please enter password')
    } else if (isNaN(phone)) {
      message.error('Phone number should digits')
    } else if (type === 'hospital' || type === 'partner') {
      props.setFlag(false)
      console.log('handleSubmit', type)
      dispatch(signup(fullName, phone, email, password, type))
    } else {
      props.setFlag(true)
    }
  }

  return (
    <Col span={24}>
      <Title level={2}>Create an account</Title>
      <Paragraph>Enter Signup Credentials.</Paragraph>
      <Spacer height={30} />
      {type !== 'hospital' && type !== 'partner' && (
        <Row justify="space-around">
          <CardGroup google="true">
            <Col>
              <Avatar src="/google.png" size={25} icon={<UserOutlined />} />
              <Col>
                <Text>Google</Text>
              </Col>
            </Col>
          </CardGroup>

          <CardGroup>
            <Col>
              <Avatar src="/whatsApp.png" size={25} icon={<UserOutlined />} />
              <Col>
                <Text>whatsApp</Text>
              </Col>
            </Col>
          </CardGroup>
        </Row>
      )}
      {type !== 'hospital' && type !== 'partner' && (
        <>
          <TextBlock className="gutter-row" span={6}>
            <Col span={22}>
              <Avatar src="/google.png" size={25} icon={<UserOutlined />} />{' '}
              <Text style={{ fontFamily: 'Ralewayw', fontSize: '13px' }}>
                Sign Up with Google
              </Text>
            </Col>
          </TextBlock>
          <Spacer height={10} />
          <TextBlock className="gutter-row" span={6}>
            <Col span={22}>
              <Avatar src="/whatsApp.png" size={25} icon={<UserOutlined />} />{' '}
              <Text style={{ fontFamily: 'Ralewayw', fontSize: '13px' }}>
                Sign Up with whatsApp
              </Text>
            </Col>
          </TextBlock>
          <Spacer height={10} />
          <Divider>or</Divider>{' '}
        </>
      )}
      {/* <Alert message="Error" type="error" showIcon /> */}
      <Col style={{ textAlign: 'start' }}>
        <Row>
          <InputGroup
            push={0}
            width="100%"
            size="large"
            placeholder="Full Name"
            name="fullName"
            onChange={(e) => handleChange(e)}
          />
          <Spacer width="3%" />
          <PhoneInputReact
            size="large"
            country={'in'}
            name="phone"
            style={{ width: '100%' }}
            // value={this.state.phone}
            onChange={(phone) => handleChange(phone, 'phone')}
          />
        </Row>
        <InputGroup
          push={0}
          size="large"
          placeholder="Email Address"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <InputGroup
          push={0}
          size="large"
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <Spacer height={10} />
        {type !== 'hospital' && type !== 'partner' ? (
          <ButtonSubmit
            colors="primary"
            size="large"
            onClick={(e) => handleSubmit(e)}
          >
            Next <ArrowRightOutlined />
          </ButtonSubmit>
        ) : (
          <>
            <Spacer height={150} />
            <ButtonSubmit
              colors="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              onClick={(e) => handleSubmit(e, type)}
            >
              Sign Up
            </ButtonSubmit>
          </>
        )}
        <Spacer height={10} />
        <HideDisplayMobile>
          <Link strong onClick={() => router.push('/partner/register')}>
            {/* <span
              style={{
                color: '#06509F',
                fontWeight: 600,
                fontFamily: 'Ralewayw',
              }}
            >
              Signup with partner account
            </span> */}
          </Link>
        </HideDisplayMobile>
      </Col>
    </Col>
  )
}
export default Signup
