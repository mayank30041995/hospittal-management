import { Avatar, Col, Dropdown, Row, Typography } from 'antd'
import React, { useState } from 'react'
import Spacer from 'react-spacer'
import {
  CardEdit,
  DropdownButton,
  ListText,
  ListTextCol,
} from '../dashboardmobile.styled'

import { UserOutlined, MoreOutlined } from '@ant-design/icons'

const { Title, Text, Paragraph } = Typography

const items = [
  {
    label: 'Download',
    key: '1',
  },
  {
    label: 'Delete',
    key: '2',
  },
  {
    label: 'Size : 27kb',
    key: '3',
  },
]

function MobileAppointmentList({ order }) {
  const [loadings, setLoadings] = useState([])
  const enterLoading = (index) => {
    setLoadings((state) => {
      const newLoadings = [...state]
      newLoadings[index] = true
      return newLoadings
    })
  }
  // console.log('MobileAppointmentList', order.Bookings)
  return (
    <CardEdit
      style={{
        boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.25)',
        borderRadius: '5px',
      }}
    >
      {order.Bookings.length > 0 && (
        <>
          <Col span={22}>
            <Row>
              <Avatar
                shape="circle"
                src={order.Bookings[0].DrImage}
                size={42}
                icon={<UserOutlined />}
              />

              <Col style={{ margin: '0px' }}>
                <ListTextCol>
                  {order.Bookings[0].DrName.length > 17
                    ? order.Bookings[0].DrName.slice(0, 17)
                    : order.Bookings[0].DrName}{' '}
                  |{' '}
                  {order.Bookings[0].DrDesignation.length > 15
                    ? order.Bookings[0].DrDesignation.slice(0, 15)
                    : order.Bookings[0].DrDesignation}
                </ListTextCol>
                <ListTextCol strong>3:00pm - 3:30pm</ListTextCol>
              </Col>
            </Row>
          </Col>
          <Col span={2}>
            <DropdownButton
              placement="topRight"
              icon={
                <MoreOutlined
                  style={{
                    padding: '3px 8px 6px',
                    marginTop: '-4px',
                  }}
                />
              }
              loading={loadings[1]}
              menu={{
                items,
              }}
              onClick={() => enterLoading(1)}
            ></DropdownButton>
          </Col>
        </>
      )}
      {/* <Col span={2}>
        <MoreOutlined style={{ fontSize: '24px', marginTop: '12px' }} />
      </Col> */}
    </CardEdit>
  )
}

export default MobileAppointmentList
