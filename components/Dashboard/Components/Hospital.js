import React from 'react'
import { Col, Row, Typography } from 'antd'
import {
  ButtonCreate,
  MenuSection,
  MenuSectionMobile,
  RowContainer,
} from '../dashboard.styled'

import { BodyTitle } from '../dashboard.styled'
import Menu from '../Menu'

import MobileMenu from './MobileMenu'
import Hospital from '../Hospital'
import OurDoctors from '../Hospital/OurDoctors'
import HospitalAppointments from '../Hospital/HospitalAppointments'
import HospitalInfo from '../Hospital/HospitalInfo'

const Hospitals = ({ user, ...props }) => {
  const { overview, ourDoctor, appointment, hospitalInfo } = props.hospitalLink
  const { type } = user
  return (
    <RowContainer>
      <MenuSection flex="100px">
        <Menu type={type} {...props} />
      </MenuSection>
      <MenuSectionMobile style={{ overflow: 'auto' }} className="accordion_col">
        <MobileMenu user={user} {...props} />
      </MenuSectionMobile>
      {overview && (
        <Col flex="auto" style={{ background: '#FFFFFF', width: '75%' }}>
          <Hospital user={user} {...props} />
        </Col>
      )}

      {ourDoctor && (
        <Col flex="auto" style={{ background: '#FFFFFF', width: '75%' }}>
          <OurDoctors user={user} {...props}>
            <Col>
              <BodyTitle level={3}>Our Doctors</BodyTitle>
            </Col>
            {/* <Col>
              <ButtonCreate>ADD A DOCTOR</ButtonCreate>
            </Col> */}
          </OurDoctors>
        </Col>
      )}
      {appointment && (
        <Col flex="auto" style={{ background: '#FFFFFF', width: '75%' }}>
          <HospitalAppointments user={user} {...props}>
            <Col>
              <BodyTitle level={3}>Appointments</BodyTitle>
            </Col>
          </HospitalAppointments>
        </Col>
      )}
      {hospitalInfo && (
        <Col flex="auto" style={{ background: '#FFFFFF', width: '75%' }}>
          <HospitalInfo user={user} {...props}>
            <Col>
              <BodyTitle level={3}>Hospital Info</BodyTitle>
            </Col>
          </HospitalInfo>
        </Col>
      )}
    </RowContainer>
  )
}

export default Hospitals
