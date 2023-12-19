import React, { useState } from 'react'
import { Col, Row, Typography } from 'antd'
import { TabBlock, TabBlockText, TopScroll } from '../dashboardmobile.styled'

function MobileMenu({ user, ...props }) {
  const { type } = user
  return (
    <TopScroll type={type}>
      {type === 'user' && (
        <Row>
          <TabBlock
            span={5}
            style={{
              borderBottom: props.patientLink.overview
                ? '4px solid #1286F1'
                : '#FFF',
            }}
          >
            <TabBlockText
              onClick={() =>
                props.setPatientLink({
                  ...props.patientLink,
                  overview: true,
                  appointment: false,
                  medicalreport: false,
                  prescription: false,
                  profile: false,
                })
              }
            >
              Overview
            </TabBlockText>
          </TabBlock>
          <TabBlock
            span={5}
            style={{
              borderBottom: props.patientLink.appointment
                ? '4px solid #1286F1'
                : '#FFF',
            }}
          >
            <TabBlockText
              onClick={() =>
                props.setPatientLink({
                  ...props.patientLink,
                  overview: false,
                  appointment: true,
                  medicalreport: false,
                  prescription: false,
                  profile: false,
                })
              }
            >
              Appointments
            </TabBlockText>
          </TabBlock>
          <TabBlock
            span={5}
            style={{
              borderBottom: props.patientLink.medicalreport
                ? '4px solid #1286F1'
                : '#FFF',
            }}
          >
            <TabBlockText
              onClick={() =>
                props.setPatientLink({
                  ...props.patientLink,
                  overview: false,
                  appointment: false,
                  medicalreport: true,
                  prescription: false,
                  profile: false,
                })
              }
            >
              Medical Reports
            </TabBlockText>
          </TabBlock>
          <TabBlock
            span={5}
            style={{
              borderBottom: props.patientLink.prescription
                ? '4px solid #1286F1'
                : '#FFF',
            }}
          >
            <TabBlockText
              onClick={() =>
                props.setPatientLink({
                  ...props.patientLink,
                  overview: false,
                  appointment: false,
                  medicalreport: false,
                  prescription: true,
                  profile: false,
                })
              }
            >
              Prescription
            </TabBlockText>
          </TabBlock>
          <TabBlock
            span={4}
            style={{
              borderBottom: props.patientLink.profile
                ? '4px solid #1286F1'
                : '#FFF',
            }}
          >
            <TabBlockText
              onClick={() =>
                props.setPatientLink({
                  ...props.patientLink,
                  overview: false,
                  appointment: false,
                  medicalreport: false,
                  prescription: false,
                  profile: true,
                })
              }
            >
              My Profile
            </TabBlockText>
          </TabBlock>
        </Row>
      )}

      {(type === 'doctor' || type === 'partner') && (
        <Row>
          <TabBlock
            span={5}
            style={{
              borderBottom: props.doctorLink.overview
                ? '4px solid #1286F1'
                : '#FFF',
            }}
          >
            <TabBlockText
              onClick={() =>
                props.setDoctorLink({
                  ...props.doctorLink,
                  overview: true,
                  appointment: false,
                  patientList: false,
                  profile: false,
                })
              }
            >
              Overview
            </TabBlockText>
          </TabBlock>
          <TabBlock
            span={5}
            style={{
              borderBottom: props.doctorLink.appointment
                ? '4px solid #1286F1'
                : '#FFF',
            }}
          >
            <TabBlockText
              onClick={() =>
                props.setDoctorLink({
                  ...props.doctorLink,
                  overview: false,
                  appointment: true,
                  patientList: false,
                  profile: false,
                })
              }
            >
              Appointments
            </TabBlockText>
          </TabBlock>
          <TabBlock
            span={5}
            style={{
              borderBottom: props.doctorLink.patientList
                ? '4px solid #1286F1'
                : '#FFF',
            }}
          >
            <TabBlockText
              onClick={() =>
                props.setDoctorLink({
                  ...props.doctorLink,
                  overview: false,
                  appointment: false,
                  patientList: true,
                  profile: false,
                })
              }
            >
              Patient List
            </TabBlockText>
          </TabBlock>
          <TabBlock
            span={5}
            style={{
              borderBottom: props.doctorLink.profile
                ? '4px solid #1286F1'
                : '#FFF',
            }}
          >
            <TabBlockText
              onClick={() =>
                props.setDoctorLink({
                  ...props.doctorLink,
                  overview: false,
                  appointment: false,
                  patientList: false,
                  profile: true,
                })
              }
            >
              Profile
            </TabBlockText>
          </TabBlock>
        </Row>
      )}

      {type === 'hospital' && (
        <Row>
          <TabBlock
            span={5}
            style={{
              borderBottom: props.hospitalLink.overview
                ? '4px solid #1286F1'
                : '#FFF',
            }}
          >
            <TabBlockText
              onClick={() =>
                props.setHospitalLink({
                  ...props.hospitalLink,
                  overview: true,
                  ourDoctor: false,
                  appointment: false,
                  hospitalInfo: false,
                })
              }
            >
              Overview
            </TabBlockText>
          </TabBlock>

          <TabBlock
            span={5}
            style={{
              borderBottom: props.hospitalLink.ourDoctor
                ? '4px solid #1286F1'
                : '#FFF',
            }}
          >
            <TabBlockText
              onClick={() =>
                props.setHospitalLink({
                  ...props.hospitalLink,
                  overview: false,
                  ourDoctor: true,
                  appointment: false,
                  hospitalInfo: false,
                })
              }
            >
              Our Doctors
            </TabBlockText>
          </TabBlock>
          <TabBlock
            span={5}
            style={{
              borderBottom: props.hospitalLink.appointment
                ? '4px solid #1286F1'
                : '#FFF',
            }}
          >
            <TabBlockText
              onClick={() =>
                props.setHospitalLink({
                  ...props.hospitalLink,
                  overview: false,
                  ourDoctor: false,
                  appointment: true,
                  hospitalInfo: false,
                })
              }
            >
              Appointments
            </TabBlockText>
          </TabBlock>
          <TabBlock
            span={5}
            style={{
              borderBottom: props.hospitalLink.hospitalInfo
                ? '4px solid #1286F1'
                : '#FFF',
            }}
          >
            <TabBlockText
              onClick={() =>
                props.setHospitalLink({
                  ...props.hospitalLink,
                  overview: false,
                  ourDoctor: false,
                  appointment: false,
                  hospitalInfo: true,
                })
              }
            >
              Profile Info
            </TabBlockText>
          </TabBlock>
        </Row>
      )}
    </TopScroll>
  )
}

export default MobileMenu
