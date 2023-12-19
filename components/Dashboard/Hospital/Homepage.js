import { Col, Input, Row, Typography } from 'antd'
const { Search } = Input
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {
  CardCountTextTop,
  GridContainer,
  MainTitle,
  RangeFlow,
  RangeGraph,
  RecordCard,
  RecordCardText,
  SearchText,
  SelectArea,
  TotalRange,
  TotalRangeArea,
  TotalRangeLabel,
  TotalRecord,
  TotalRecordPatient,
} from '../dashboard.styled'
import { UserOutlined, SearchOutlined } from '@ant-design/icons'

import Spacer from 'react-spacer'
import { HideDisplay, HideDisplayContents } from '../dashboardmobile.styled'
const { Title, Text, Paragraph } = Typography

function Homepage({ user, ...props }) {
  let { hospital, Doctors, booking_orders } = user
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }

  return (
    <GridContainer>
      <div>
        <CardCountTextTop>Welcome</CardCountTextTop>
        <MainTitle level={2} style={{ margin: 0 }}>
          {hospital ? hospital.Name : ''}
        </MainTitle>
      </div>
      <Spacer height={12} />
      {/* <SearchText
        size="large"
        bordered={false}
        placeholder="Search By Department"
        onSearch={onSearch}
      /> */}
      <HideDisplayContents>
        <RecordCardText style={{ color: '#06509F' }}>
          Current Data
        </RecordCardText>
      </HideDisplayContents>
      <Row>
        <RecordCard>
          <RecordCardText>Total Doctors</RecordCardText>
          <TotalRecord>{Doctors.length || 0}</TotalRecord>
        </RecordCard>
        <RecordCard>
          <RecordCardText>Total Patients</RecordCardText>
          <TotalRecord>{booking_orders.length || 0}</TotalRecord>
        </RecordCard>
      </Row>
      <Spacer height={25} />
      <Row
        justify="space-between"
        style={{ alignItems: 'baseline', width: '100%' }}
      >
        <Col>
          <TotalRecordPatient>Patient’s by Specialisation</TotalRecordPatient>
        </Col>
        <Col>
          <SelectArea
            size="medium"
            defaultValue="This Month"
            onChange={handleChange}
            options={[
              {
                value: 'jack',
                label: 'This Month',
              },
              {
                value: 'lucy',
                label: 'Next Month',
              },
              {
                value: 'Yiminghe',
                label: 'Next Year',
              },
            ]}
          />
        </Col>
      </Row>
      <RangeGraph>
        <Col span={4}>
          <TotalRangeArea>
            <TotalRangeLabel>Pediatrician</TotalRangeLabel>
          </TotalRangeArea>

          <TotalRangeArea>
            <TotalRangeLabel>ENT</TotalRangeLabel>
          </TotalRangeArea>

          <TotalRangeArea>
            <TotalRangeLabel>Ophthalmology</TotalRangeLabel>
          </TotalRangeArea>

          <TotalRangeArea>
            <TotalRangeLabel>Neurologist</TotalRangeLabel>
          </TotalRangeArea>

          <TotalRangeArea>
            <TotalRangeLabel>Dermatologist</TotalRangeLabel>
          </TotalRangeArea>

          <TotalRangeArea>
            <TotalRangeLabel>Dermatologist</TotalRangeLabel>
          </TotalRangeArea>
        </Col>

        <RangeFlow span={20}>
          <TotalRange style={{ width: '40vh' }}>40</TotalRange>
          <Spacer height="18px" />
          <TotalRange style={{ width: '20vh' }}>20</TotalRange>
          <Spacer height="18px" />
          <TotalRange style={{ width: '60vh' }}>60</TotalRange>
          <Spacer height="18px" />
          <TotalRange style={{ width: '10vh' }}>10</TotalRange>
          <Spacer height="18px" />
          <TotalRange style={{ width: '30vh' }}>30</TotalRange>
          <Spacer height="18px" />
          <TotalRange style={{ width: '80vh' }}>80</TotalRange>
        </RangeFlow>
      </RangeGraph>
      <HideDisplay>
        <Row>
          <RecordCard>
            <RecordCardText>Pediatrician</RecordCardText>
            <TotalRecord>{Doctors.length || 0}</TotalRecord>
          </RecordCard>
          <RecordCard>
            <RecordCardText>ENT</RecordCardText>
            <TotalRecord>{booking_orders.length || 0}</TotalRecord>
          </RecordCard>
          <RecordCard>
            <RecordCardText>Ophthalmology</RecordCardText>
            <TotalRecord>{booking_orders.length || 0}</TotalRecord>
          </RecordCard>
          <RecordCard>
            <RecordCardText>Neurologist</RecordCardText>
            <TotalRecord>{booking_orders.length || 0}</TotalRecord>
          </RecordCard>
          <RecordCard>
            <RecordCardText>Dermatologist</RecordCardText>
            <TotalRecord>{booking_orders.length || 0}</TotalRecord>
          </RecordCard>
          <RecordCard>
            <RecordCardText>Cardiologist</RecordCardText>
            <TotalRecord>{booking_orders.length || 0}</TotalRecord>
          </RecordCard>
        </Row>
      </HideDisplay>
      <Spacer height={180} />
    </GridContainer>
  )
}

export default Homepage
