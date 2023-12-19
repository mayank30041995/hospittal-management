import React, { useState } from 'react'
import { Avatar, Button, Col, Row, Space, Typography } from 'antd'
import { DownOutlined, EnvironmentOutlined } from '@ant-design/icons'

import {
  BodyTitle,
  SwitchProfile,
  TextSwitch,
  TopNavSection,
} from '../../dashboard.styled'
import ProfileInfo from './ProfileInfo'
import Spacer from 'react-spacer'
import Cards from './Cards'
import ProfileInfoMobile from './ProfileInfoMobile'
import ReportMobile from './ReportMobile'
const { Title, Text, Paragraph } = Typography

function Profile({ user, children, ...props }) {
  return (
    <div>
      <TopNavSection justify="space-between">{children}</TopNavSection>

      {/* Profile Info Appointments*/}
      <Cards user={user} {...props} />

      {/* Mobile  */}

      <ProfileInfoMobile user={user} {...props} />
      <ReportMobile user={user} {...props} />
    </div>
  )
}

export default Profile
