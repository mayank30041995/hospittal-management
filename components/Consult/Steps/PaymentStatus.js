import { Avatar, Col, Row, Typography } from 'antd'
import React from 'react'
import { CheckCircleOutlined, UserOutlined } from '@ant-design/icons'
import { BoxContainer } from '../consult.styled'
import Spacer from 'react-spacer'
import { Span } from '../../Search/search.styled'
import PaymentSuccess from '../Modals/ApplicationSuccess'
const { Title, Text, Paragraph } = Typography

function PaymentStatus({ doctors, ...props }) {
  let { Name, Pictures, Phone, googleRating = 5 } = doctors.length && doctors[0]
  return (
    <Row>
      <BoxContainer>
        <Title
          level={5}
          style={{
            fontFamily: 'Inter',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            color: '#1286F1',
          }}
        >
          <CheckCircleOutlined /> <Spacer width={15} /> Appointment Request
          Recieved
        </Title>
      </BoxContainer>

      <BoxContainer>
        <Title
          level={5}
          style={{
            fontFamily: 'Inter',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            color: '#000000',
            width: '80vh',
          }}
        >
          <CheckCircleOutlined /> <Spacer width={15} /> Waiting for Doctor’s
          office to confirm your Tele-Consult appointment.
        </Title>
        <Paragraph
          style={{
            fontWeight: 300,
            fontFamily: 'Inter',
            margin: '15px 0 15px 28px',

            display: 'flex',
            alignItems: 'center',
            color: '#000000',
            width: '80vh',
          }}
        >
          Your appointment request is under process, our patient care manager
          will call back shortly or call or Whatsapp on the number given below
        </Paragraph>

        <Title
          level={5}
          style={{
            fontFamily: 'Inter',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            color: '#000000',
          }}
        >
          <Avatar
            shape="square"
            src={Pictures[0].url}
            size={42}
            icon={<UserOutlined />}
          />{' '}
          <Spacer width={15} /> {Name} {'\u00A0'}
          <Span style={{ fontWeight: 400 }}>
            Patient Care Manager {Phone || '+91 987654321'}
          </Span>
        </Title>
      </BoxContainer>

      <BoxContainer>
        <Title
          level={5}
          style={{
            fontFamily: 'Inter',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            color: '#6A6A6A',
          }}
        >
          <CheckCircleOutlined /> <Spacer width={15} /> Booking Confirmed
        </Title>
      </BoxContainer>
      <PaymentSuccess />
    </Row>
  )
}

export default PaymentStatus
