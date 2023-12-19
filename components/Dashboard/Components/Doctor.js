import React from 'react'
import { Col, Row, Typography } from 'antd'
import {
  MenuSection,
  MenuSectionMobile,
  RowContainer,
  SelectArea,
  SelectAreaGlobal,
} from '../dashboard.styled'
import { useState } from 'react'
import { BodyTitle } from '../dashboard.styled'
import Menu from '../Menu'
import Doctor from '../Doctor'
import DoctorsAppointments from '../Doctor/DoctorsAppointments'
import PatientLists from '../Doctor/PatientList'
import MobileMenu from './MobileMenu'
import Hospital from '../Hospital'
import DoctorProfile from '../Doctor/DoctorProfile'
import { HideDisplayMobile } from '../dashboardmobile.styled'
import { loadProfilePatientList } from '@/redux/actions/dashboardAction'

const Doctors = ({ user, ...props }) => {
  const { overview, appointment, patientList, profile } = props.doctorLink
  const [switchOpen, setSwitchOpen] = useState(false)
  const { type, image } = user
  const handleChange = (value) => {
    // console.log(`selected ${value}`)
    props.dispatch(loadProfilePatientList(user._id, value))
  }
  const handleChangeAppointment = (value) => {
    // console.log(`selected ${value}`)
    // props.dispatch(loadProfilePatientList(user._id, value))
  }
  return (
    <RowContainer>
      <MenuSection flex="100px">
        <Menu type={type} {...props} />
      </MenuSection>
      <MenuSectionMobile className="accordion_col" style={{ overflow: 'auto' }}>
        <MobileMenu user={user} {...props} />
      </MenuSectionMobile>
      {overview && (
        <Col flex="auto" style={{ background: '#FFFFFF', width: '75%' }}>
          <Doctor user={user} {...props} />
        </Col>
      )}
      {profile && (
        <Col flex="auto" style={{ background: '#FFFFFF', width: '75%' }}>
          <DoctorProfile user={user} {...props}>
            <Col>
              <BodyTitle level={3}>My Profile</BodyTitle>
            </Col>
          </DoctorProfile>
        </Col>
      )}

      {appointment && (
        <Col flex="auto" style={{ background: '#FFFFFF', width: '70%' }}>
          <DoctorsAppointments user={user} {...props}>
            <Col>
              <BodyTitle level={3}>Appointments</BodyTitle>
            </Col>
            <Col>
              <HideDisplayMobile>
                <SelectAreaGlobal
                  size="large"
                  defaultValue="Sort By"
                  style={{
                    width: 150,
                    background: '#FFF',
                  }}
                  onChange={handleChangeAppointment}
                  options={[
                    {
                      value: 'doctor',
                      label: 'Name',
                    },
                    {
                      value: 'createdAt',
                      label: 'Date',
                    },
                  ]}
                />
              </HideDisplayMobile>
            </Col>
          </DoctorsAppointments>
        </Col>
      )}
      {patientList && (
        <Col flex="auto" style={{ background: '#FFFFFF', width: '75%' }}>
          <PatientLists user={user} {...props}>
            <Col>
              <BodyTitle level={3}>Patient’s List</BodyTitle>
            </Col>
            <Col>
              <SelectAreaGlobal
                size="large"
                defaultValue="Sort By"
                style={{
                  width: 150,
                  background: '#FFF',
                }}
                onChange={handleChange}
                options={[
                  {
                    value: 'fname',
                    label: 'Name',
                  },
                  {
                    value: 'createdAt',
                    label: 'Date',
                  },
                ]}
              />
            </Col>
          </PatientLists>
        </Col>
      )}
    </RowContainer>
  )
}

export default Doctors
