import { Col, Row, Typography } from 'antd'
import React from 'react'
import Spacer from 'react-spacer'
import {
  BillingCard,
  BillingText,
  RowGroup,
  TextInner,
} from '../consult.styled'

function ConsultationDetails({ doctors, ...props }) {
  let { Text } = Typography
  let {
    Name,
    Pictures,
    Address,
    Experience,
    Department,
    specialities,
    googleRating = 5,
  } = doctors.length && doctors[0]
  let { age, location, patientName, phone } = props.formOne
  let { dateSlot, timeSlot } = props.formTwo
  console.log('ConsultationDetails', props)
  return (
    <BillingCard>
      <Row
        justify="center"
        style={{
          paddingTop: '15px',
        }}
      >
        <Col>
          <BillingText strong>Tele-Consultation-Details</BillingText>
        </Col>
      </Row>
      <Spacer height={14} />
      <RowGroup justify="space-between">
        <Col>
          <TextInner strong>Doctor’s Name</TextInner>
        </Col>
        <Col>
          <TextInner>{Name}</TextInner>
        </Col>
      </RowGroup>
      <RowGroup justify="space-between">
        <Col>
          <TextInner strong>Date of Appointment</TextInner>
        </Col>
        <Col>
          <TextInner>{dateSlot ? dateSlot : '-'}</TextInner>
        </Col>
      </RowGroup>
      <RowGroup justify="space-between">
        <Col>
          <TextInner strong>Time Slot</TextInner>
        </Col>
        <Col>
          <TextInner>{timeSlot ? timeSlot : '-'}</TextInner>
        </Col>
      </RowGroup>
      <RowGroup justify="space-between">
        <Col>
          <TextInner strong>Appointment Fee</TextInner>
        </Col>
        <Col>
          <TextInner>₹ 1200/-</TextInner>
        </Col>
      </RowGroup>
      <RowGroup justify="space-between">
        <Col>
          <Text strong>Patient’s Name</Text>
        </Col>
        <Col>
          <TextInner>{patientName ? patientName : ''}</TextInner>
        </Col>
      </RowGroup>
      <RowGroup justify="space-between">
        <Col>
          <TextInner strong>Age</TextInner>
        </Col>
        <Col>
          <Text>{age ? age : ''}</Text>
        </Col>
      </RowGroup>
      <RowGroup justify="space-between">
        <Col>
          <TextInner strong>Phone Number</TextInner>
        </Col>
        <Col>
          <Text>{phone ? phone : ''}</Text>
        </Col>
      </RowGroup>
      <RowGroup justify="space-between">
        <Col>
          <TextInner strong>Location</TextInner>
        </Col>
        <Col>
          <TextInner>{location ? location : ''}</TextInner>
        </Col>
      </RowGroup>
      <Spacer height={14} />
      <RowGroup justify="space-between">
        <Col>
          <TextInner strong>Tele-Consult Fee:</TextInner>
        </Col>
        <Col>
          <TextInner strong>₹ 1200/-</TextInner>
        </Col>
      </RowGroup>
      <Spacer height={8} />
    </BillingCard>
  )
}

export default ConsultationDetails
