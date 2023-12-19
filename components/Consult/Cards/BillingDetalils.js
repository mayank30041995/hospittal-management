import { Col, Row, Typography } from 'antd'
import React from 'react'
import Spacer from 'react-spacer'
import {
  BillingCard,
  BillingText,
  RowGroup,
  TextInner,
} from '../consult.styled'

function BillingDetails({ doctors, ...props }) {
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

  let { firstName, lastName, state, country, houseNumber, streetAddress, zip } =
    props.formThree

  return (
    <BillingCard>
      <Row
        justify="center"
        style={{
          paddingTop: '15px',
        }}
      >
        <Col>
          <BillingText strong>Billing Address Details</BillingText>
        </Col>
      </Row>
      <Spacer height={14} />
      <RowGroup justify="space-between">
        <Col>
          <TextInner strong>Patient’s Name</TextInner>
        </Col>
        <Col>
          <TextInner>
            {firstName} {lastName}
          </TextInner>
        </Col>
      </RowGroup>
      <RowGroup justify="space-between">
        <Col>
          <TextInner strong>Street Address</TextInner>
        </Col>
        <Col>
          <TextInner>{streetAddress ? streetAddress : '-'}</TextInner>
        </Col>
      </RowGroup>
      <RowGroup justify="space-between">
        <Col>
          <TextInner strong>House Number</TextInner>
        </Col>
        <Col>
          <TextInner>{houseNumber ? houseNumber : '-'}</TextInner>
        </Col>
      </RowGroup>
      <RowGroup justify="space-between">
        <Col>
          <TextInner strong>Zip Code</TextInner>
        </Col>
        <Col>
          <TextInner>{zip ? zip : '-'}</TextInner>
        </Col>
      </RowGroup>
      <RowGroup justify="space-between">
        <Col>
          <Text strong>State</Text>
        </Col>
        <Col>
          <TextInner>{state ? state : '-'}</TextInner>
        </Col>
      </RowGroup>
      <RowGroup justify="space-between">
        <Col>
          <TextInner strong>Country</TextInner>
        </Col>
        <Col>
          <TextInner>{country ? country : '-'}</TextInner>
        </Col>
      </RowGroup>
    </BillingCard>
  )
}

export default BillingDetails
