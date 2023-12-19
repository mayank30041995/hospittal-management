import React from 'react'
import { Avatar, Col, Row } from 'antd'
import {
  ButtonManage,
  ButtonSwitch,
  DisplayText,
  MenuSection,
  MenuSectionMobile,
  RowContainer,
  SwitchContent,
  SwitchContentText,
  TextDiv,
  TextDiv2,
} from '../dashboard.styled'
import Spacer from 'react-spacer'
import { useState } from 'react'
import { DownOutlined, UserAddOutlined } from '@ant-design/icons'
import { BodyTitle, SwitchProfile, TextSwitch } from '../dashboard.styled'
import MyProfile from '../Patient/MyProfile'
import Menu from '../Menu'
import Profile from '../Patient/Profile/Profile'
import Appointments from '../Patient/Appointments'
import Reports from '../Patient/Reports'
import MobileMenu from './MobileMenu'
import Prescription from '../Patient/Prescription'
import { logOut } from '@/redux/actions/authAction'
import { useRouter } from 'next/router'

const Patient = ({ user, ...props }) => {
  const router = useRouter()
  const { overview, appointment, medicalreport, prescription, profile } =
    props.patientLink
  const { type, image } = user
  const [switchOpen, setSwitchOpen] = useState(false)
  return (
    <RowContainer onClick={() => setSwitchOpen(false)}>
      <MenuSection flex="100px">
        <Menu type={type} setSwitchOpen={setSwitchOpen} {...props} />
      </MenuSection>
      <MenuSectionMobile className="accordion_col" style={{ overflow: 'auto' }}>
        <MobileMenu user={user} {...props} />
      </MenuSectionMobile>
      {overview && (
        <Col flex="auto" style={{ background: '#FAFBFD', width: '75%' }}>
          <Profile user={user} {...props}>
            <Col>
              <BodyTitle level={3}>Dashboard</BodyTitle>
            </Col>
            <Col>
              <SwitchProfile
                onClick={(e) => {
                  e.stopPropagation()
                  setSwitchOpen(!switchOpen)
                }}
              >
                <Avatar
                  size={45}
                  src={
                    image
                      ? image.url
                      : `${user.name} ? ${user.name
                          .charAt(0)
                          .toUpperCase()} : ''`
                  }
                  // src="https://media.gettyimages.com/id/146107054/photo/tom-cruise-attends-the-european-premiere-of-rock-of-ages-at-odeon-leicester-square-on-june-10.jpg?s=612x612&w=0&k=20&c=hLVx3A_B2pBAbv_aoELoqp523xlaoZOQmKvdRaBaCjI="
                >
                  {user.name ? user.name.charAt(0).toUpperCase() : ''}
                </Avatar>
                &nbsp; <TextSwitch>Switch Accounts</TextSwitch>
                &ensp;
                <DownOutlined />
              </SwitchProfile>
              {switchOpen && (
                <SwitchContent>
                  <SwitchContentText>
                    <Avatar
                      size={45}
                      src={
                        image
                          ? image.url
                          : `${user.name} ? ${user.name
                              .charAt(0)
                              .toUpperCase()} : ''`
                      }
                      // src="https://media.gettyimages.com/id/146107054/photo/tom-cruise-attends-the-european-premiere-of-rock-of-ages-at-odeon-leicester-square-on-june-10.jpg?s=612x612&w=0&k=20&c=hLVx3A_B2pBAbv_aoELoqp523xlaoZOQmKvdRaBaCjI="
                    >
                      {user.name ? user.name.charAt(0).toUpperCase() : ''}
                    </Avatar>
                    <Spacer width={5} />
                    <DisplayText>
                      <TextDiv strong>{user.name}</TextDiv>
                      <TextDiv2>{user.email ? user.email : ''}</TextDiv2>
                    </DisplayText>
                    <ButtonManage size="small">Manage</ButtonManage>
                  </SwitchContentText>
                  <Spacer height={30} />
                  <SwitchContentText>
                    <Avatar
                      src={
                        image
                          ? image.url
                          : `${user.name} ? ${user.name
                              .charAt(0)
                              .toUpperCase()} : ''`
                      }
                      size={45}
                      // src="https://media.gettyimages.com/id/146107054/photo/tom-cruise-attends-the-european-premiere-of-rock-of-ages-at-odeon-leicester-square-on-june-10.jpg?s=612x612&w=0&k=20&c=hLVx3A_B2pBAbv_aoELoqp523xlaoZOQmKvdRaBaCjI="
                    >
                      {user.name ? user.name.charAt(0).toUpperCase() : ''}
                    </Avatar>
                    <Spacer width={5} />
                    <DisplayText>
                      <TextDiv strong>{user.name}</TextDiv>
                      <TextDiv2>{user.email ? user.email : ''}</TextDiv2>
                    </DisplayText>
                  </SwitchContentText>
                  <Spacer height={15} />
                  <Col push={1} span={18}>
                    <ButtonSwitch size="large">
                      <UserAddOutlined style={{ fontSize: '14px' }} /> Add
                      Another Account
                    </ButtonSwitch>

                    <ButtonSwitch
                      size="large"
                      onClick={() => {
                        router.push('/login')
                        props.dispatch(logOut())
                      }}
                    >
                      <img src="/logout.png" alt="" width={12} /> &nbsp; Sign
                      Out
                    </ButtonSwitch>
                  </Col>
                </SwitchContent>
              )}
            </Col>
          </Profile>
        </Col>
      )}
      {profile && (
        <Col flex="auto" style={{ background: '#FFFFFF', width: '75%' }}>
          <MyProfile user={user} {...props}>
            <Col>
              <BodyTitle level={3}>My Profile</BodyTitle>
            </Col>
            <Col>
              <SwitchProfile
                onClick={(e) => {
                  e.stopPropagation()
                  setSwitchOpen(!switchOpen)
                }}
              >
                <Avatar
                  src={image ? image.url : ''}
                  size={45}
                  // src="https://media.gettyimages.com/id/146107054/photo/tom-cruise-attends-the-european-premiere-of-rock-of-ages-at-odeon-leicester-square-on-june-10.jpg?s=612x612&w=0&k=20&c=hLVx3A_B2pBAbv_aoELoqp523xlaoZOQmKvdRaBaCjI="
                >
                  {user.name ? user.name.charAt(0).toUpperCase() : ''}
                </Avatar>
                &nbsp; <TextSwitch>Switch Accounts</TextSwitch>
                &ensp;
                <DownOutlined />
              </SwitchProfile>
              {switchOpen && (
                <SwitchContent>
                  <SwitchContentText>
                    <Avatar
                      src={image ? image.url : ''}
                      size={45}
                      // src="https://media.gettyimages.com/id/146107054/photo/tom-cruise-attends-the-european-premiere-of-rock-of-ages-at-odeon-leicester-square-on-june-10.jpg?s=612x612&w=0&k=20&c=hLVx3A_B2pBAbv_aoELoqp523xlaoZOQmKvdRaBaCjI="
                    >
                      {user.name ? user.name.charAt(0).toUpperCase() : ''}
                    </Avatar>
                    <Spacer width={5} />
                    <DisplayText>
                      <TextDiv strong>{user.name}</TextDiv>
                      <TextDiv2>{user.email ? user.email : ''}</TextDiv2>
                    </DisplayText>
                    <ButtonManage size="small">Manage</ButtonManage>
                  </SwitchContentText>
                  <Spacer height={30} />
                  <SwitchContentText>
                    <Avatar
                      src={image ? image.url : ''}
                      size={45}
                      // src="https://media.gettyimages.com/id/146107054/photo/tom-cruise-attends-the-european-premiere-of-rock-of-ages-at-odeon-leicester-square-on-june-10.jpg?s=612x612&w=0&k=20&c=hLVx3A_B2pBAbv_aoELoqp523xlaoZOQmKvdRaBaCjI="
                    >
                      {user.name ? user.name.charAt(0).toUpperCase() : ''}
                    </Avatar>
                    <Spacer width={5} />
                    <DisplayText>
                      <TextDiv strong>{user.name}</TextDiv>
                      <TextDiv2>{user.email ? user.email : ''}</TextDiv2>
                    </DisplayText>
                  </SwitchContentText>
                  <Spacer height={15} />
                  <Col push={1} span={18}>
                    <ButtonSwitch size="large">
                      <UserAddOutlined style={{ fontSize: '14px' }} /> Add
                      Another Account
                    </ButtonSwitch>

                    <ButtonSwitch
                      size="large"
                      onClick={() => {
                        router.push('/login')
                        props.dispatch(logOut())
                      }}
                    >
                      <img src="/logout.png" alt="" width={12} /> &nbsp; Sign
                      Out
                    </ButtonSwitch>
                  </Col>
                </SwitchContent>
              )}
            </Col>
          </MyProfile>
        </Col>
      )}

      {appointment && (
        <Col flex="auto" style={{ background: '#FFFFFF', width: '75%' }}>
          <Appointments user={user} {...props}>
            <Col>
              <BodyTitle level={3}>Appointments</BodyTitle>
            </Col>
            <Col>
              <SwitchProfile
                onClick={(e) => {
                  e.stopPropagation()
                  setSwitchOpen(!switchOpen)
                }}
              >
                <Avatar
                  src={image ? image.url : ''}
                  size={45}
                  // src="https://media.gettyimages.com/id/146107054/photo/tom-cruise-attends-the-european-premiere-of-rock-of-ages-at-odeon-leicester-square-on-june-10.jpg?s=612x612&w=0&k=20&c=hLVx3A_B2pBAbv_aoELoqp523xlaoZOQmKvdRaBaCjI="
                >
                  {user.name ? user.name.charAt(0).toUpperCase() : ''}
                </Avatar>
                &nbsp; <TextSwitch>Switch Accounts</TextSwitch>
                &ensp;
                <DownOutlined />
              </SwitchProfile>
              {switchOpen && (
                <SwitchContent>
                  <SwitchContentText>
                    <Avatar
                      src={image ? image.url : ''}
                      size={45}
                      // src="https://media.gettyimages.com/id/146107054/photo/tom-cruise-attends-the-european-premiere-of-rock-of-ages-at-odeon-leicester-square-on-june-10.jpg?s=612x612&w=0&k=20&c=hLVx3A_B2pBAbv_aoELoqp523xlaoZOQmKvdRaBaCjI="
                    >
                      {user.name ? user.name.charAt(0).toUpperCase() : ''}
                    </Avatar>
                    <Spacer width={5} />
                    <DisplayText>
                      <TextDiv strong>{user.name}</TextDiv>
                      <TextDiv2>{user.email ? user.email : ''}</TextDiv2>
                    </DisplayText>
                    <ButtonManage size="small">Manage</ButtonManage>
                  </SwitchContentText>
                  <Spacer height={30} />
                  <SwitchContentText>
                    <Avatar
                      src={image ? image.url : ''}
                      size={45}
                      // src="https://media.gettyimages.com/id/146107054/photo/tom-cruise-attends-the-european-premiere-of-rock-of-ages-at-odeon-leicester-square-on-june-10.jpg?s=612x612&w=0&k=20&c=hLVx3A_B2pBAbv_aoELoqp523xlaoZOQmKvdRaBaCjI="
                    >
                      {user.name ? user.name.charAt(0).toUpperCase() : ''}
                    </Avatar>
                    <Spacer width={5} />
                    <DisplayText>
                      <TextDiv strong>{user.name}</TextDiv>
                      <TextDiv2>{user.email ? user.email : ''}</TextDiv2>
                    </DisplayText>
                  </SwitchContentText>
                  <Spacer height={15} />
                  <Col push={1} span={18}>
                    <ButtonSwitch size="large">
                      <UserAddOutlined style={{ fontSize: '14px' }} /> Add
                      Another Account
                    </ButtonSwitch>

                    <ButtonSwitch
                      size="large"
                      onClick={() => {
                        router.push('/login')
                        props.dispatch(logOut())
                      }}
                    >
                      <img src="/logout.png" alt="" width={12} /> &nbsp; Sign
                      Out
                    </ButtonSwitch>
                  </Col>
                </SwitchContent>
              )}
            </Col>
          </Appointments>
        </Col>
      )}
      {medicalreport && (
        <Col flex="auto" style={{ background: '#FFFFFF', width: '75%' }}>
          <Reports user={user} {...props}>
            <Col>
              <BodyTitle level={3}>My Reports</BodyTitle>
            </Col>
            <Col>
              <SwitchProfile
                onClick={(e) => {
                  e.stopPropagation()
                  setSwitchOpen(!switchOpen)
                }}
              >
                <Avatar
                  src={image ? image.url : ''}
                  size={45}
                  // src="https://media.gettyimages.com/id/146107054/photo/tom-cruise-attends-the-european-premiere-of-rock-of-ages-at-odeon-leicester-square-on-june-10.jpg?s=612x612&w=0&k=20&c=hLVx3A_B2pBAbv_aoELoqp523xlaoZOQmKvdRaBaCjI="
                >
                  {user.name ? user.name.charAt(0).toUpperCase() : ''}
                </Avatar>
                &nbsp; <TextSwitch>Switch Accounts</TextSwitch>
                &ensp;
                <DownOutlined />
              </SwitchProfile>
              {switchOpen && (
                <SwitchContent>
                  <SwitchContentText>
                    <Avatar
                      src={image ? image.url : ''}
                      size={45}
                      // src="https://media.gettyimages.com/id/146107054/photo/tom-cruise-attends-the-european-premiere-of-rock-of-ages-at-odeon-leicester-square-on-june-10.jpg?s=612x612&w=0&k=20&c=hLVx3A_B2pBAbv_aoELoqp523xlaoZOQmKvdRaBaCjI="
                    >
                      {user.name ? user.name.charAt(0).toUpperCase() : ''}
                    </Avatar>
                    <Spacer width={5} />
                    <DisplayText>
                      <TextDiv strong>{user.name}</TextDiv>
                      <TextDiv2>{user.email ? user.email : ''}</TextDiv2>
                    </DisplayText>
                    <ButtonManage size="small">Manage</ButtonManage>
                  </SwitchContentText>
                  <Spacer height={30} />
                  <SwitchContentText>
                    <Avatar
                      src={image ? image.url : ''}
                      size={45}
                      // src="https://media.gettyimages.com/id/146107054/photo/tom-cruise-attends-the-european-premiere-of-rock-of-ages-at-odeon-leicester-square-on-june-10.jpg?s=612x612&w=0&k=20&c=hLVx3A_B2pBAbv_aoELoqp523xlaoZOQmKvdRaBaCjI="
                    >
                      {user.name ? user.name.charAt(0).toUpperCase() : ''}
                    </Avatar>
                    <Spacer width={5} />
                    <DisplayText>
                      <TextDiv strong>{user.name}</TextDiv>
                      <TextDiv2>{user.email ? user.email : ''}</TextDiv2>
                    </DisplayText>
                  </SwitchContentText>
                  <Spacer height={15} />
                  <Col push={1} span={18}>
                    <ButtonSwitch size="large">
                      <UserAddOutlined style={{ fontSize: '14px' }} /> Add
                      Another Account
                    </ButtonSwitch>

                    <ButtonSwitch
                      size="large"
                      onClick={() => {
                        router.push('/login')
                        props.dispatch(logOut())
                      }}
                    >
                      <img src="/logout.png" alt="" width={12} /> &nbsp; Sign
                      Out
                    </ButtonSwitch>
                  </Col>
                </SwitchContent>
              )}
            </Col>
          </Reports>
        </Col>
      )}
      {prescription && (
        <Col flex="auto" style={{ background: '#FFFFFF', width: '75%' }}>
          <Prescription user={user} {...props}>
            <Col>
              <BodyTitle level={3}>My Prescriptions</BodyTitle>
            </Col>
            <Col>
              <SwitchProfile
                onClick={(e) => {
                  e.stopPropagation()
                  setSwitchOpen(!switchOpen)
                }}
              >
                <Avatar
                  src={image ? image.url : ''}
                  size={45}
                  // src="https://media.gettyimages.com/id/146107054/photo/tom-cruise-attends-the-european-premiere-of-rock-of-ages-at-odeon-leicester-square-on-june-10.jpg?s=612x612&w=0&k=20&c=hLVx3A_B2pBAbv_aoELoqp523xlaoZOQmKvdRaBaCjI="
                >
                  {user.name ? user.name.charAt(0).toUpperCase() : ''}
                </Avatar>
                &nbsp; <TextSwitch>Switch Accounts</TextSwitch>
                &ensp;
                <DownOutlined />
              </SwitchProfile>
              {switchOpen && (
                <SwitchContent>
                  <SwitchContentText>
                    <Avatar
                      src={image ? image.url : ''}
                      size={45}
                      // src="https://media.gettyimages.com/id/146107054/photo/tom-cruise-attends-the-european-premiere-of-rock-of-ages-at-odeon-leicester-square-on-june-10.jpg?s=612x612&w=0&k=20&c=hLVx3A_B2pBAbv_aoELoqp523xlaoZOQmKvdRaBaCjI="
                    >
                      {user.name ? user.name.charAt(0).toUpperCase() : ''}
                    </Avatar>
                    <Spacer width={5} />
                    <DisplayText>
                      <TextDiv strong>{user.name}</TextDiv>
                      <TextDiv2>{user.email ? user.email : ''}</TextDiv2>
                    </DisplayText>
                    <ButtonManage size="small">Manage</ButtonManage>
                  </SwitchContentText>
                  <Spacer height={30} />
                  <SwitchContentText>
                    <Avatar
                      src={image ? image.url : ''}
                      size={45}
                      // src="https://media.gettyimages.com/id/146107054/photo/tom-cruise-attends-the-european-premiere-of-rock-of-ages-at-odeon-leicester-square-on-june-10.jpg?s=612x612&w=0&k=20&c=hLVx3A_B2pBAbv_aoELoqp523xlaoZOQmKvdRaBaCjI="
                    >
                      {user.name ? user.name.charAt(0).toUpperCase() : ''}
                    </Avatar>
                    <Spacer width={5} />
                    <DisplayText>
                      <TextDiv strong>{user.name}</TextDiv>
                      <TextDiv2>{user.email ? user.email : ''}</TextDiv2>
                    </DisplayText>
                  </SwitchContentText>
                  <Spacer height={15} />
                  <Col push={1} span={18}>
                    <ButtonSwitch size="large">
                      <UserAddOutlined style={{ fontSize: '14px' }} /> Add
                      Another Account
                    </ButtonSwitch>

                    <ButtonSwitch
                      size="large"
                      onClick={() => {
                        router.push('/login')
                        props.dispatch(logOut())
                      }}
                    >
                      <img src="/logout.png" alt="" width={12} /> &nbsp; Sign
                      Out
                    </ButtonSwitch>
                  </Col>
                </SwitchContent>
              )}
            </Col>
          </Prescription>
        </Col>
      )}
      {/* {prescription && (
        <Col flex="auto" style={{ background: '#FFFFFF', width: '75%' }}>
          <Doctor />
        </Col>
      )} */}
    </RowContainer>
  )
}

export default Patient
