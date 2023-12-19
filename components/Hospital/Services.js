import React from 'react'
import { Col, Divider, Row } from 'antd'
import { Space, Typography } from 'antd'
import { NavImage, ServiceRow, ServiceTitle } from './hospital.styled'
import Spacer from 'react-spacer'
const { Text, Link, Title } = Typography

const style = {
  padding: '8px 2px 0 2px',
}

function Services() {
  return (
    <ServiceRow align="center" justify="start">
      <Col span={20}>
        <ServiceTitle level={2}>Most requested services</ServiceTitle>
      </Col>
      <Col span={24}>
        <Row
          // gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{
            justifyContent: 'space-evenly',
          }}
        >
          <Col className="gutter-row">
            <div style={style}>
              <NavImage src="freeOpinions.png" alt="hosplan_logo" />
            </div>
          </Col>
          <Col className="gutter-row">
            <div style={style}>
              <NavImage src="teleConsult.png" alt="hosplan_logo" />
            </div>
          </Col>
          <Col className="gutter-row">
            <div style={style}>
              <NavImage src="visaInvitation.png" alt="hosplan_logo" />
            </div>
          </Col>
          <Col className="gutter-row">
            <div style={style}>
              <NavImage src="priorityTreatment.png" alt="hosplan_logo" />
            </div>
          </Col>
        </Row>
      </Col>
    </ServiceRow>
  )
}

export default Services
