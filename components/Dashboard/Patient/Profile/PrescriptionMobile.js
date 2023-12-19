import { Avatar, Col, Dropdown, Row, Typography } from 'antd'
import React, { useState } from 'react'
import Spacer from 'react-spacer'
import {
  CardEdit,
  DropdownButton,
  ListText,
} from '../../dashboardmobile.styled'

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

function PrescriptionMobile({ ...props }) {
  const [loadings, setLoadings] = useState([])
  const enterLoading = (index) => {
    setLoadings((state) => {
      const newLoadings = [...state]
      newLoadings[index] = true
      return newLoadings
    })
  }
  return (
    <div>
      {props.prescriptions?.length > 0 &&
        props.prescriptions?.map((prescription, i) => {
          let { Diagnosis, doctor, FollowUp } = prescription
          let { Name, Pictures, Department, Experience } = doctor
          return (
            <CardEdit
              key={i}
              style={{
                background: '#F8F8FA',
                boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.25)',
                borderRadius: '5px',
              }}
            >
              <Col span={22}>
                <Row>
                  <Avatar
                    shape="square"
                    src="/login2.png"
                    size={42}
                    icon={<UserOutlined />}
                  />

                  <ListText>{'patient’s report.pdf'}</ListText>
                </Row>
              </Col>
              <Col span={2}>
                <DropdownButton
                  placement="topRight"
                  icon={
                    <MoreOutlined
                      style={{
                        background: '#F8F8FA',
                        padding: '3px 5px 10px',
                        marginTop: '-3px',
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
              {/* <Col span={2}>
        <MoreOutlined style={{ fontSize: '24px', marginTop: '12px' }} />
      </Col> */}
            </CardEdit>
          )
        })}
    </div>
  )
}

export default PrescriptionMobile
