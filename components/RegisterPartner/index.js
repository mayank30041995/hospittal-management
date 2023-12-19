import React, { useState } from 'react'
import { Col, Row, Radio } from 'antd'
import { Typography } from 'antd'
const { Title, Text, Link, Paragraph } = Typography
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { UserOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Avatar, Space } from 'antd'
import { useRouter } from 'next/router'
import Spacer from 'react-spacer'
import { NavImage } from '../NavLayout/module.styled'
import {
  ButtonSubmit,
  CardWrapper,
  ColumnBlock,
  ContentLayout,
  LayoutWrapper,
  LayoutWrapperChain,
  RadioGroup,
  SpanText,
} from '../Register/register.styled'

function Section1({ type, role, onChangeRole }) {
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
        <ContentLayout>
          <Row>
            <Col>
              <Title level={2}>Partner Account</Title>
              <Paragraph>This is a special access for our partners.</Paragraph>
            </Col>
          </Row>
          <ButtonSubmit
            type="primary"
            size="large"
            onClick={(e) => router.push('/partner/register')}
          >
            SIGN UP
          </ButtonSubmit>
          <ButtonSubmit
            type="primary"
            style={{
              background: '#FFF',
              borderColor: '#0872E3',
              color: '#0872E3',
            }}
            size="large"
            onClick={(e) => router.push('/partner/login')}
          >
            LOGIN
          </ButtonSubmit>
        </ContentLayout>
      </Col>
    </LayoutWrapperChain>
  )
}

export default Section1
