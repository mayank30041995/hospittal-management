import React, { useState } from 'react'
import { Col, Row, Typography } from 'antd'
import Spacer from 'react-spacer'
import {
  MenuBlock,
  MenuButton,
  MenuItem,
  MenuSection,
  NavMenuText,
  NavMenuTextBlack,
} from './dashboard.styled'
import { useRouter } from 'next/router'
import { logOut } from '@/redux/actions/authAction'
const { Title, Text } = Typography

function Menu({
  type,
  setSwitchOpen,
  patientLink,
  doctorLink,
  hospitalLink,
  setPatientLink,
  setDoctorLink,
  setHospitalLink,
  ...props
}) {
  const router = useRouter()
  return (
    <div>
      {/* Patient Links */}
      {type === 'user' && (
        <MenuBlock justify="center" align="center">
          {patientLink.overview ? (
            <MenuButton
              span={21}
              onClick={() => {
                setSwitchOpen(false)
                setPatientLink({
                  ...patientLink,
                  overview: true,
                  appointment: false,
                  medicalreport: false,
                  prescription: false,
                  profile: false,
                })
              }}
            >
              <img src="/overvieww.png" alt="" width={22} />
              <NavMenuText>Overview</NavMenuText>
            </MenuButton>
          ) : (
            <MenuItem
              span={21}
              onClick={() => {
                setSwitchOpen(false)
                setPatientLink({
                  ...patientLink,
                  overview: true,
                  appointment: false,
                  medicalreport: false,
                  prescription: false,
                  profile: false,
                })
              }}
            >
              <img src="/overview.png" alt="" width={22} />
              <NavMenuTextBlack>Overview</NavMenuTextBlack>
            </MenuItem>
          )}
          {patientLink.appointment ? (
            <MenuButton
              span={21}
              onClick={() => {
                setSwitchOpen(false)
                setPatientLink({
                  ...patientLink,
                  overview: false,
                  appointment: true,
                  medicalreport: false,
                  prescription: false,
                  profile: false,
                })
              }}
            >
              <img src="/appointmentw.png" alt="" />
              <NavMenuText>Appointments</NavMenuText>
            </MenuButton>
          ) : (
            <MenuItem
              span={21}
              onClick={() => {
                setSwitchOpen(false)
                setPatientLink({
                  ...patientLink,
                  overview: false,
                  appointment: true,
                  medicalreport: false,
                  prescription: false,
                  profile: false,
                })
              }}
            >
              <img src="/appointment.png" alt="" width={22} />
              <NavMenuTextBlack>Appointments</NavMenuTextBlack>
            </MenuItem>
          )}

          {patientLink.medicalreport ? (
            <MenuButton
              span={21}
              onClick={() => {
                setSwitchOpen(false)
                setPatientLink({
                  ...patientLink,
                  overview: false,
                  appointment: false,
                  medicalreport: true,
                  prescription: false,
                  profile: false,
                })
              }}
            >
              <img src="/medicalreportsw.png" alt="" />
              <NavMenuText>Medical Reports</NavMenuText>
            </MenuButton>
          ) : (
            <MenuItem
              span={21}
              onClick={() => {
                setSwitchOpen(false)
                setPatientLink({
                  ...patientLink,
                  overview: false,
                  appointment: false,
                  medicalreport: true,
                  prescription: false,
                  profile: false,
                })
              }}
            >
              <img src="/medicalreport.png" alt="" width={22} />
              <NavMenuTextBlack>Medical Reports</NavMenuTextBlack>
            </MenuItem>
          )}

          {patientLink.prescription ? (
            <MenuButton
              span={21}
              onClick={() => {
                setSwitchOpen(false)
                setPatientLink({
                  ...patientLink,
                  overview: false,
                  appointment: false,
                  medicalreport: false,
                  prescription: true,
                  profile: false,
                })
              }}
            >
              <img src="/prescriptionw.png" alt="" />
              <NavMenuText>Prescription</NavMenuText>
            </MenuButton>
          ) : (
            <MenuItem
              span={21}
              onClick={() => {
                setSwitchOpen(false)
                setPatientLink({
                  ...patientLink,
                  overview: false,
                  appointment: false,
                  medicalreport: false,
                  prescription: true,
                  profile: false,
                })
              }}
            >
              <img src="/prescription.png" alt="" width={22} />
              <NavMenuTextBlack>Prescription</NavMenuTextBlack>
            </MenuItem>
          )}

          {patientLink.profile ? (
            <MenuButton
              span={21}
              onClick={() => {
                setSwitchOpen(false)
                setPatientLink({
                  ...patientLink,
                  overview: false,
                  appointment: false,
                  medicalreport: false,
                  prescription: false,
                  profile: true,
                })
              }}
            >
              <img src="/profilew.png" alt="" />
              <NavMenuText>My Profile</NavMenuText>
            </MenuButton>
          ) : (
            <MenuItem
              span={21}
              onClick={() => {
                setSwitchOpen(false)
                setPatientLink({
                  ...setPatientLink,
                  overview: false,
                  appointment: false,
                  medicalreport: false,
                  prescription: false,
                  profile: true,
                })
              }}
            >
              <img src="/profile.png" alt="" width={22} />
              <NavMenuTextBlack>My Profile</NavMenuTextBlack>
            </MenuItem>
          )}
        </MenuBlock>
      )}
      {/* Doctors Links */}
      {(type === 'doctor' || type === 'partner') && (
        <MenuBlock justify="center" align="center">
          {doctorLink.overview ? (
            <MenuButton
              span={21}
              onClick={() => {
                setDoctorLink({
                  ...doctorLink,
                  overview: true,
                  appointment: false,
                  patientList: false,
                  profile: false,
                })
              }}
            >
              <img src="/overvieww.png" alt="" width={22} />
              <NavMenuText>Overview</NavMenuText>
            </MenuButton>
          ) : (
            <MenuItem
              span={21}
              onClick={() => {
                setDoctorLink({
                  ...doctorLink,
                  overview: true,
                  appointment: false,
                  patientList: false,
                  profile: false,
                })
              }}
            >
              <img src="/overview.png" alt="" width={22} />
              <NavMenuTextBlack>Overview</NavMenuTextBlack>
            </MenuItem>
          )}
          {doctorLink.appointment ? (
            <MenuButton
              span={21}
              onClick={() => {
                setDoctorLink({
                  ...doctorLink,
                  overview: false,
                  appointment: true,
                  patientList: false,
                  profile: false,
                })
              }}
            >
              <img src="/appointmentw.png" alt="" />
              <NavMenuText>Appointments</NavMenuText>
            </MenuButton>
          ) : (
            <MenuItem
              span={21}
              onClick={() => {
                setDoctorLink({
                  ...doctorLink,
                  overview: false,
                  appointment: true,
                  patientList: false,
                  profile: false,
                })
              }}
            >
              <img src="/appointment.png" alt="" width={22} />
              <NavMenuTextBlack>Appointments</NavMenuTextBlack>
            </MenuItem>
          )}

          {doctorLink.patientList ? (
            <MenuButton
              span={21}
              onClick={() => {
                setDoctorLink({
                  ...doctorLink,
                  overview: false,
                  appointment: false,
                  patientList: true,
                  profile: false,
                })
              }}
            >
              <img src="/prescriptionw.png" alt="" />
              <NavMenuText>Patient’s List</NavMenuText>
            </MenuButton>
          ) : (
            <MenuItem
              span={21}
              onClick={() => {
                setDoctorLink({
                  ...doctorLink,
                  overview: false,
                  appointment: false,
                  patientList: true,
                  profile: false,
                })
              }}
            >
              <img src="/prescription.png" alt="" width={22} />
              <NavMenuTextBlack>Patient’s List</NavMenuTextBlack>
            </MenuItem>
          )}

          {doctorLink.profile ? (
            <MenuButton
              span={21}
              onClick={() => {
                setDoctorLink({
                  ...doctorLink,
                  overview: false,
                  appointment: false,
                  patientList: false,
                  profile: true,
                })
              }}
            >
              <img src="/profilew.png" alt="" />
              <NavMenuText>My Profile</NavMenuText>
            </MenuButton>
          ) : (
            <MenuItem
              span={21}
              onClick={() => {
                setDoctorLink({
                  ...doctorLink,
                  overview: false,
                  appointment: false,
                  patientList: false,
                  profile: true,
                })
              }}
            >
              <img src="/profile.png" alt="" width={22} />
              <NavMenuTextBlack>My Profile</NavMenuTextBlack>
            </MenuItem>
          )}
        </MenuBlock>
      )}

      {/* Hospitals Links */}

      {type === 'hospital' && (
        <MenuBlock justify="center" align="center">
          {hospitalLink.overview ? (
            <MenuButton
              span={21}
              onClick={() => {
                setHospitalLink({
                  ...hospitalLink,
                  overview: true,
                  ourDoctor: false,
                  appointment: false,
                  hospitalInfo: false,
                })
              }}
            >
              <img src="/overvieww.png" alt="" width={22} />
              <NavMenuText>Overview</NavMenuText>
            </MenuButton>
          ) : (
            <MenuItem
              span={21}
              onClick={() => {
                setHospitalLink({
                  ...hospitalLink,
                  overview: true,
                  ourDoctor: false,
                  appointment: false,
                  hospitalInfo: false,
                })
              }}
            >
              <img src="/overview.png" alt="" width={22} />
              <NavMenuTextBlack>Overview</NavMenuTextBlack>
            </MenuItem>
          )}
          {hospitalLink.ourDoctor ? (
            <MenuButton
              span={21}
              onClick={() => {
                setHospitalLink({
                  ...hospitalLink,
                  overview: false,
                  ourDoctor: true,
                  appointment: false,
                  hospitalInfo: false,
                })
              }}
            >
              <img src="/mydoctor-logosw.png" alt="" />
              <NavMenuText>Our Doctors</NavMenuText>
            </MenuButton>
          ) : (
            <MenuItem
              span={21}
              onClick={() => {
                setHospitalLink({
                  ...hospitalLink,
                  overview: false,
                  ourDoctor: true,
                  appointment: false,
                  hospitalInfo: false,
                })
              }}
            >
              <img src="/mydoctor-logosb.png" alt="" width={22} />
              <NavMenuTextBlack>Our Doctors</NavMenuTextBlack>
            </MenuItem>
          )}

          {hospitalLink.appointment ? (
            <MenuButton
              span={21}
              onClick={() => {
                setHospitalLink({
                  ...hospitalLink,
                  overview: false,
                  ourDoctor: false,
                  appointment: true,
                  hospitalInfo: false,
                })
              }}
            >
              <img src="/profilew.png" alt="" />
              <NavMenuText>Appointment</NavMenuText>
            </MenuButton>
          ) : (
            <MenuItem
              span={21}
              onClick={() => {
                setHospitalLink({
                  ...hospitalLink,
                  overview: false,
                  ourDoctor: false,
                  appointment: true,
                  hospitalInfo: false,
                })
              }}
            >
              <img src="/profile.png" alt="" width={22} />
              <NavMenuTextBlack>Appointment</NavMenuTextBlack>
            </MenuItem>
          )}

          {hospitalLink.hospitalInfo ? (
            <MenuButton
              span={21}
              onClick={() => {
                setHospitalLink({
                  ...hospitalLink,
                  overview: false,
                  ourDoctor: false,
                  appointment: false,
                  hospitalInfo: true,
                })
              }}
            >
              <img src="/profilew.png" alt="" />
              <NavMenuText>Hospital Info</NavMenuText>
            </MenuButton>
          ) : (
            <MenuItem
              span={21}
              onClick={() => {
                setHospitalLink({
                  ...hospitalLink,
                  overview: false,
                  ourDoctor: false,
                  appointment: false,
                  hospitalInfo: true,
                })
              }}
            >
              <img src="/profile.png" alt="" width={22} />
              <NavMenuTextBlack>Hospital Info</NavMenuTextBlack>
            </MenuItem>
          )}
        </MenuBlock>
      )}
      <Spacer height={100} />
      <MenuItem
        span={21}
        onClick={() => {
          router.push('/login')
          props.dispatch(logOut())
        }}
      >
        <Spacer width={25} />
        <img src="/logout.png" alt="" width={22} />
        <NavMenuTextBlack>Log Out</NavMenuTextBlack>
      </MenuItem>
    </div>
  )
}

export default Menu
