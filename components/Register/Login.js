import { Button, Col, Row } from 'antd'
import { Typography, Avatar, Radio, Divider } from 'antd'
import { UserOutlined, ArrowRightOutlined } from '@ant-design/icons'
import Spacer from 'react-spacer'
import InputGroup from '../Input/InputGroup'
import { ButtonWrapper } from '../NavLayout/module.styled'
import { login } from '@/redux/actions/authAction'
import { useEffect, useState } from 'react'
import {
  ButtonSubmit,
  CardGroup,
  HideDisplayMobile,
  TextBlock,
} from './register.styled'
import { useRouter } from 'next/router'
const { Title, Paragraph, Text, Link } = Typography

const Login = ({ dispatch, role }) => {
  const router = useRouter()
  const [type, setType] = useState('user')
  const [input, setInput] = useState({
    email: '',
    password: '',
  })

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let { email, password } = input
    dispatch(login(email, password, type))
  }

  return (
    <Col span={24}>
      <Title level={2} style={{ fontFamily: 'Ralewayw' }}>
        Welcome back!
      </Title>
      <Paragraph style={{ fontFamily: 'Ralewayw' }}>
        Enter your Login Credentials.
      </Paragraph>
      <Spacer height={30} />
      {type !== 'hospital' && type !== 'partner' && (
        <Row justify="space-around">
          <CardGroup google="true">
            <Col>
              <Avatar src="/google.png" size={25} icon={<UserOutlined />} />
              <Col>
                <Text style={{ fontFamily: 'Ralewayw' }}>Google</Text>
              </Col>
            </Col>
          </CardGroup>

          <CardGroup>
            <Col>
              <Avatar src="/whatsApp.png" size={25} icon={<UserOutlined />} />
              <Col>
                <Text style={{ fontFamily: 'Ralewayw' }}>whatsApp</Text>
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
                Login with Google
              </Text>
            </Col>
          </TextBlock>
          <Spacer height={10} />
          <TextBlock className="gutter-row" span={6}>
            <Col span={22}>
              <Avatar src="/whatsApp.png" size={25} icon={<UserOutlined />} />
              <Text style={{ fontFamily: 'Ralewayw', fontSize: '13px' }}>
                Login with whatsApp
              </Text>
            </Col>
          </TextBlock>
          <Spacer height={10} />
          <Divider>or</Divider>{' '}
        </>
      )}

      <Col style={{ textAlign: 'start' }}>
        <InputGroup
          push={0}
          size="large"
          placeholder="email"
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

        <Link strong onClick={() => router.push('/404')}>
          <span
            style={{
              color: '#06509F',
              fontWeight: 600,
              fontFamily: 'Ralewayw',
            }}
          >
            Forgot Password?
          </span>
        </Link>
        <Spacer height={10} />
        {type !== 'hospital' ? (
          <ButtonSubmit
            colors="primary"
            size="large"
            icon={<ArrowRightOutlined />}
            onClick={(e) => handleSubmit(e)}
          >
            Login
          </ButtonSubmit>
        ) : (
          <>
            <Spacer height={150} />
            <ButtonSubmit
              colors="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              onClick={(e) => handleSubmit(e)}
            >
              Login
            </ButtonSubmit>
          </>
        )}
        <Spacer height={10} />
        <HideDisplayMobile>
          <Link strong onClick={() => router.push('/partner/login')}>
            {/* <span
              style={{
                color: '#06509F',
                fontWeight: 600,
                fontFamily: 'Ralewayw',
              }}
            >
              Login with partner account
            </span> */}
          </Link>
        </HideDisplayMobile>
      </Col>
    </Col>
  )
}
export default Login
