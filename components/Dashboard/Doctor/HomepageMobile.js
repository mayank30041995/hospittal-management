import { Col, Empty, Input, Row, Typography } from 'antd'
const { Search } = Input
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {
  CardCountTextTopMobile,
  RightInfoCard,
  TabStatus,
  TabStatusPara,
  TabStatusText,
  TopNavFlex,
} from '../dashboard.styled'
import { HideDisplay, HideDisplayMobile } from '../dashboardmobile.styled'
import {
  UserOutlined,
  SearchOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons'

import Spacer from 'react-spacer'
import moment from 'moment'
import Accordian from '../Patient/Profile/Accordian'
import MobileAppointmentList from './MobileAppointmentList'
import { loadBookingOrderByStatus } from '@/redux/actions/dashboardAction'
import useDeviceSize from '@/components/helper/useDeviceSize'
import { memo } from 'react'
const { Title, Text, Paragraph } = Typography

const HomepageMobile = ({
  active,
  setActive,
  onSearch,
  user,
  width,
  appointment,
  ...props
}) => {
  useEffect(() => {
    if (width < 600 && navigator.userAgentData.mobile) {
      if (active) {
        props.dispatch(loadBookingOrderByStatus(user.id, 'Progress'))
      } else {
        props.dispatch(loadBookingOrderByStatus(user.id, 'Completed'))
      }
    }
  }, [active])
  return (
    <HideDisplay>
      <Spacer height={22} />
      <CardCountTextTopMobile strong>Appointment’s List</CardCountTextTopMobile>
      <RightInfoCard span={10} style={{ minWidth: '92%', marginTop: '5px' }}>
        <TopNavFlex justify="space-between">
          {active ? (
            <Col span={12}>
              <TabStatus>
                <TabStatusText>Upcoming </TabStatusText>
              </TabStatus>
            </Col>
          ) : (
            <Col
              span={12}
              onClick={() => {
                setActive(true)
              }}
              style={{ height: '4vh' }}
            >
              <TabStatusPara> Upcoming</TabStatusPara>
            </Col>
          )}
          {!active ? (
            <Col span={12}>
              <TabStatus>
                <TabStatusText>Past </TabStatusText>
              </TabStatus>
            </Col>
          ) : (
            <Col
              span={12}
              onClick={() => {
                setActive(false)
              }}
              style={{ height: '4vh' }}
            >
              <TabStatusPara>Past</TabStatusPara>
            </Col>
          )}
        </TopNavFlex>

        <Row style={{ padding: '5px' }}>
          <Input
            bordered={false}
            placeholder="Search By Patient Name"
            onChange={(e) => onSearch(e.target.value)}
            suffix={
              <SearchOutlined
                style={{
                  color: 'rgba(0,0,0,.45)',
                }}
              />
            }
            style={{
              width: '100%',
              background: '#F7F7F7',
              borderRadius: '6px',
              height: '8vh',
            }}
          />
        </Row>
        {appointment.length > 0 ? (
          appointment.map((order, i) => (
            <MobileAppointmentList order={order} key={i} />
          ))
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="No Appointments"
          />
        )}
      </RightInfoCard>
    </HideDisplay>
  )
}
export default HomepageMobile
