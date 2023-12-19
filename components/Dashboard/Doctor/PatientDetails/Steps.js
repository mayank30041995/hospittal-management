import React, { useState } from 'react'
import { Col, Row, Radio } from 'antd'
import { Typography } from 'antd'
const { Title, Text, Link, Paragraph } = Typography
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { UserOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Avatar, Space } from 'antd'
import { useRouter } from 'next/router'
import Spacer from 'react-spacer'
import { NavImage } from '../../../NavLayout/module.styled'
import {
  ButtonSubmit,
  CardWrapper,
  ColumnBlock,
  ContentLayout,
  HideDisplayMobile,
  LayoutWrapper,
  LayoutWrapperChain,
  RadioGroup,
  SpanText,
} from '../../../Register/register.styled'
import StepStatus from './StepStatus'

function Steps({ stepCount }) {
  const { Header, Content, Sider } = Layout
  const router = useRouter()

  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <LayoutWrapperChain>
      <Col>
        <Link href="/">
          <NavImage src="/hosplan_logo.png" alt="hosplan_logo" />
        </Link>
      </Col>
      <Col>
        <HideDisplayMobile>
          <ContentLayout>
            <StepStatus step={stepCount} />
          </ContentLayout>
        </HideDisplayMobile>
      </Col>
    </LayoutWrapperChain>
  )
}

export default Steps
