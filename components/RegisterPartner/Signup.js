import { Alert, Button, Col, Row, message } from 'antd'
import { Typography, Avatar, Radio, Divider } from 'antd'
import { UserOutlined, ArrowRightOutlined } from '@ant-design/icons'
import Spacer from 'react-spacer'
import InputGroup from '../Input/InputGroup'
import { ButtonWrapper } from '../NavLayout/module.styled'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { signupPartner } from '@/redux/actions/authAction'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {
  ButtonSubmit,
  CardGroup,
  PhoneInputReact,
  TextBlock,
} from '../Register/register.styled'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
const { Title, Paragraph, Text } = Typography

const Signup = ({ role, ...props }) => {
  const [type, setType] = useState('user')
  const dispatch = useDispatch()
  const router = useRouter()

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
    } else if (type === 'partner') {
      props.setFlag(false)

      dispatch(signupPartner(fullName, phone, email, password, type))
    } else {
      props.setFlag(true)
    }
  }

  return (
    <Col span={24}>
      <Title level={2}>SIGN UP</Title>
      <Paragraph>Create your account as a Partner.</Paragraph>
      <Spacer height={30} />

      {/* <Alert message="Error" type="error" showIcon /> */}
      <Col style={{ textAlign: 'start' }}>
        <InputGroup
          push={0}
          size="large"
          placeholder="Full Name*"
          name="fullName"
          onChange={(e) => handleChange(e)}
        />
        <InputGroup
          push={0}
          size="large"
          placeholder="Email Address*"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <Row>
          <PhoneInputReact
            size="large"
            country={'in'}
            name="phone"
            style={{ width: '100%' }}
            // value={this.state.phone}
            onChange={(phone) => handleChange(phone, 'phone')}
          />
          {/* <InputGroup
            push={0}
            width="48%"
            type="text"
            size="large"
            placeholder="Phone Number*"
            name="phone"
            onChange={(e) => handleChange(e)}
          /> */}

          <Spacer width="3%" />
          <InputGroup
            push={0}
            width="100%"
            size="large"
            placeholder="Country*"
            name="country"
            onChange={(e) => handleChange(e)}
          />
        </Row>
        <InputGroup
          push={0}
          size="large"
          placeholder="Occupation (Optional)"
          name="occupation"
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

        <ButtonSubmit
          colors="primary"
          size="large"
          icon={<ArrowRightOutlined />}
          onClick={(e) => handleSubmit(e, role)}
        >
          SIGN UP
        </ButtonSubmit>
      </Col>
    </Col>
  )
}
export default Signup
