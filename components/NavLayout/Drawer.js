import React from 'react'
import {
  ButtonWrapper,
  ColList,
  DrawerContainer,
  RowList,
  TextProfile,
  TextProfileTitle,
} from './module.styled'
import { CloseOutlined, RightOutlined } from '@ant-design/icons'
import { Row, Avatar, Typography, Col } from 'antd'
import Spacer from 'react-spacer'
import { logOut } from '@/redux/actions/authAction'
const { Title, Text } = Typography

function Drawer({ setToggle, auth, router, ...props }) {
  let { user } = auth
  return (
    <DrawerContainer>
      <Row justify="end">
        <CloseOutlined
          style={{
            fontSize: '22px',
            fontWeight: 400,
            color: 'rgb(107 107 107)',
          }}
          onClick={() => setToggle(false)}
        />
      </Row>

      <Row justify="start">
        <Avatar
          size={68}
          src={
            user.image
              ? user.image.url
              : `${user.name} ? ${user.name?.charAt(0)?.toUpperCase()} : ''`
          }
        >
          {user.username?.charAt(0)?.toUpperCase()}
        </Avatar>
        &ensp;
        <div style={{ display: 'grid', textAlign: 'start' }}>
          <TextProfile>{user?.username}</TextProfile>
          <TextProfileTitle>{user?.email}</TextProfileTitle>
        </div>
      </Row>
      <Spacer height={25} />
      <RowList justify="space-between">
        <ColList span={14}>Tele Consult</ColList>
        <ColList span={2}>
          <RightOutlined
            style={{ fontSize: '14px', fontWeight: 400 }}
            onClick={() => setToggle(false)}
          />
        </ColList>
      </RowList>
      <Spacer height={8} />
      <RowList justify="space-between">
        <ColList span={14}>Book an appointment</ColList>
        <ColList span={2}>
          <RightOutlined
            style={{ fontSize: '14px', fontWeight: 400 }}
            onClick={() => setToggle(false)}
          />
        </ColList>
      </RowList>
      <Spacer height={8} />
      <RowList justify="space-between">
        <ColList
          span={14}
          onClick={() =>
            router.push({
              pathname: `/speciality`,
              query: {
                id: '',
                value: 'All',
                type: 'TopHospital',
              },
            })
          }
        >
          Top Hospital
        </ColList>
        <ColList span={2}>
          <RightOutlined
            style={{ fontSize: '14px', fontWeight: 400 }}
            onClick={() => setToggle(false)}
          />
        </ColList>
      </RowList>
      <Spacer height={8} />
      <RowList justify="space-between">
        <ColList
          span={14}
          onClick={() =>
            router.push({
              pathname: `/treatment`,
              query: {
                id: '',
                value: 'All',
                type: 'Doctor',
              },
            })
          }
        >
          Top Doctors
        </ColList>
        <ColList span={2}>
          <RightOutlined
            style={{ fontSize: '14px', fontWeight: 400 }}
            onClick={() => setToggle(false)}
          />
        </ColList>
      </RowList>
      <Spacer height={65} />

      <Row justify="space-between">
        <TextProfileTitle style={{ fontSize: '14px', fontWeight: 400 }}>
          &emsp;&nbsp; My Profile
        </TextProfileTitle>
      </Row>
      <Spacer height={4} />
      <RowList justify="space-between">
        <ColList
          span={14}
          onClick={() => {
            router.push(`/dashboard/${user.type}/${user._id}`)
          }}
        >
          my Account
        </ColList>
        <ColList span={2}>
          <RightOutlined
            style={{ fontSize: '14px', fontWeight: 400 }}
            onClick={() => setToggle(false)}
          />
        </ColList>
      </RowList>
      <Spacer height={8} />
      <RowList justify="space-between">
        <ColList span={14}>Settings</ColList>
        <ColList span={2}>
          <RightOutlined
            style={{ fontSize: '14px', fontWeight: 400 }}
            onClick={() => setToggle(false)}
          />
        </ColList>
      </RowList>
      <Spacer height={8} />
      <RowList justify="space-between">
        <ButtonWrapper
          colors="primary"
          size="large"
          onClick={() => {
            router.push('/login')
            props.dispatch(logOut())
          }}
          style={{ width: '98%' }}
        >
          Sign Out
        </ButtonWrapper>
      </RowList>
    </DrawerContainer>
  )
}

export default Drawer
