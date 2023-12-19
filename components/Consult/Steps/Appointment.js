import React from 'react'
import { Col, Row, Typography } from 'antd'
import DateAppointment from '../Modals/DateAppointment'
import BillingAddress from '../Modals/BillingAddress'
const { Title, Text } = Typography

const Appointment = ({ step, ...props }) => {
  const renderSwitch = (param) => {
    switch (param) {
      case 2:
        return <DateAppointment {...props} />
      case 3:
        return <BillingAddress {...props} />
      default:
        return <BillingAddress {...props} />
    }
  }
  return (
    <Row>
      <Col span={18} style={{ width: '30vh' }}>
        <Text
          type="secondary"
          strong
          style={{ fontFamily: 'Inter', color: '#1286F1', fontSize: '13px' }}
        >
          STEP {step} OF 3
        </Text>
        <Title level={4} style={{ fontFamily: 'Inter' }}>
          Proceed to add billing address
          {/* Select a Date and Time Slot for Appointment booking according to your
          preference */}
        </Title>
        {renderSwitch(step)}
      </Col>
    </Row>
  )
}

export default Appointment
