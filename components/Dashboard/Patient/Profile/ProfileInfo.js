import React from 'react'
import { Avatar, Button, Col, Row, Typography } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import {
  ContentParagraph,
  ContentParagraphRow,
  ContentWrittenArea,
  ProfileRow,
} from '../../dashboard.styled'
import Spacer from 'react-spacer'
// import Paragraph from 'antd/es/skeleton/Paragraph'
const { Title, Text, Paragraph } = Typography
function ProfileInfo({ user, ...props }) {
  const { username, name, email, phone, image } = user
  return (
    <Col>
      <Text
        style={{
          fontFamily: 'Inter',
          fontWeight: 500,
          margin: '0 0 10px 8px',
        }}
      >
        Profile Info
      </Text>
      <Spacer height={8} />
      <ProfileRow justify="space-around">
        <Col
          style={{
            padding: '12px 5px 12px 5px',
          }}
          // span={8}
        >
          <Avatar
            src={
              image
                ? image.url
                : `${name} ? ${name.charAt(0).toUpperCase()} : ''`
            }
            size={180}
            // src="https://media.gettyimages.com/id/146107054/photo/tom-cruise-attends-the-european-premiere-of-rock-of-ages-at-odeon-leicester-square-on-june-10.jpg?s=612x612&w=0&k=20&c=hLVx3A_B2pBAbv_aoELoqp523xlaoZOQmKvdRaBaCjI="
          >
            {name ? name.charAt(0).toUpperCase() : ''}
          </Avatar>
        </Col>
        <Col span={14}>
          <Row
            justify="end"
            style={{
              padding: '0 16px',
              cursor: 'pointer',
              // height: '4vh',
            }}
          >
            <Col>
              <Paragraph
                strong
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
                Edit Profile
              </Paragraph>
            </Col>
            &ensp;
            <Col>
              <EditOutlined />
            </Col>
          </Row>
          <Col>
            <ContentWrittenArea>
              <div>
                <ContentParagraph>Name</ContentParagraph>
                {name && <ContentParagraphRow>{name}</ContentParagraphRow>}
              </div>
              <div>
                <ContentParagraph>Phone Number</ContentParagraph>
                {phone && <ContentParagraphRow>{phone}</ContentParagraphRow>}
              </div>
              {/* <div>
              <ContentParagraph>Password</ContentParagraph>
              <ContentParagraphRow>*******</ContentParagraphRow>
            </div> */}
            </ContentWrittenArea>
            <ContentWrittenArea>
              <div>
                <ContentParagraph>Email</ContentParagraph>
                {email && (
                  <ContentParagraphRow>
                    {email.slice(0, 18)}
                  </ContentParagraphRow>
                )}
              </div>

              {/* <div style={{ marginRight: '7rem' }}>
              <ContentParagraph>Gender</ContentParagraph>
              <ContentParagraphRow>Male</ContentParagraphRow>
            </div> */}
              {/* <div>
              <ContentParagraph>Age</ContentParagraph>
              <ContentParagraphRow>34</ContentParagraphRow>
            </div> */}
            </ContentWrittenArea>
            {/* <ContentWrittenArea>
            <div>
              <ContentParagraph>Street Address</ContentParagraph>
              <ContentParagraphRow>ABC</ContentParagraphRow>
            </div>
            <div>
              <ContentParagraph>Address</ContentParagraph>
              <ContentParagraphRow>XYZ</ContentParagraphRow>
            </div>
            <div>
              <ContentParagraph>ZIP Code</ContentParagraph>
              <ContentParagraphRow>12345</ContentParagraphRow>
            </div>
          </ContentWrittenArea> */}
          </Col>
        </Col>
      </ProfileRow>
    </Col>
  )
}

export default ProfileInfo
