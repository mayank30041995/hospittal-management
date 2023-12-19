import { Avatar, Button, Col, Row, Typography } from 'antd'
import React from 'react'
import Spacer from 'react-spacer'
import {
  ProfileButton,
  ProfileMainText,
  ProfileMainTextList,
  ProfileMainTitle,
  ProfileText,
  ProfileTitle,
  ProfileWrap,
  TextContext,
  TextContextWrapper,
} from '../../dashboardmobile.styled'
const { Title, Text, Paragraph } = Typography

function ProfileInfoMobile({ user, ...props }) {
  const { username, name, email, phone, image } = user
  return (
    <div>
      <Spacer height={24} />
      <ProfileWrap>
        <Col span={24}>
          <ProfileTitle>
            <Avatar src={image ? image.url : ''} size={65}>
              {name ? name.charAt(0).toUpperCase() : ''}
            </Avatar>
            <Spacer width={12} />
            <Col>
              <ProfileMainTitle level={5}>{name || ''}</ProfileMainTitle>
              <ProfileMainTextList>{email || ''}</ProfileMainTextList>
            </Col>
          </ProfileTitle>
        </Col>
        <TextContextWrapper span={24}>
          <ProfileText justify="space-between">
            <TextContext span={8}>
              <ProfileMainText>Password</ProfileMainText>
              <ProfileMainTextList>********</ProfileMainTextList>
            </TextContext>
            <TextContext span={8}>
              <ProfileMainText>Phone no.</ProfileMainText>
              <ProfileMainTextList>{phone}</ProfileMainTextList>
            </TextContext>
            <TextContext span={8}>
              <ProfileMainText>Gender</ProfileMainText>
              <ProfileMainTextList>NA</ProfileMainTextList>
            </TextContext>
          </ProfileText>
          <Spacer height={15} />

          <ProfileText justify="space-between">
            <TextContext span={8}>
              <ProfileMainText>Age</ProfileMainText>
              <ProfileMainTextList>NA</ProfileMainTextList>
            </TextContext>
            <TextContext span={8}>
              <ProfileMainText>Street Address</ProfileMainText>
              <ProfileMainTextList>NA</ProfileMainTextList>
            </TextContext>
            <TextContext span={8}>
              <ProfileMainText>ZIP Code</ProfileMainText>
              <ProfileMainTextList>NA</ProfileMainTextList>
            </TextContext>
          </ProfileText>
          <Spacer height={15} />

          <ProfileText justify="space-between">
            <TextContext span={8}>
              <ProfileMainText>Address</ProfileMainText>
              <ProfileMainTextList>NA</ProfileMainTextList>
            </TextContext>
          </ProfileText>
          <Spacer height={12} />
          <ProfileButton
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
            EDIT PROFILE
          </ProfileButton>
          <Spacer height={12} />
        </TextContextWrapper>
      </ProfileWrap>
    </div>
  )
}

export default ProfileInfoMobile
