import React, { useState } from 'react'
import { Col, Row, Radio } from 'antd'
import { Typography } from 'antd'
const { Text, Link } = Typography
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Space } from 'antd'
import { useRouter } from 'next/router'
import Spacer from 'react-spacer'
import { NavImage } from '../NavLayout/module.styled'
import {
  CardWrapper,
  ColumnBlock,
  ContentLayout,
  HideDisplay,
  LayoutWrapper,
  LayoutWrapperChain,
  RadioGroup,
  SpanText,
} from './register.styled'

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
          <RadioGroup onChange={onChangeRole} value={role}>
            <CardWrapper className="gutter-row" span={6} type="treatment">
              <ColumnBlock span={22}>
                <Avatar src="/login1.png" size={65} icon={<UserOutlined />} />{' '}
                <Text strong style={{ fontFamily: 'Ralewayw' }}>
                  I&apos;m looking for treatment
                </Text>
              </ColumnBlock>
              <Col span={2}>
                <Radio value={1}></Radio>
              </Col>
            </CardWrapper>
            <Spacer height={30} />
            <CardWrapper className="gutter-row" span={6} type="doctor">
              <ColumnBlock span={22}>
                <Avatar src="/login2.png" size={65} icon={<UserOutlined />} />{' '}
                <Text strong style={{ fontFamily: 'Ralewayw' }}>
                  I&apos;m a Doctor
                </Text>
              </ColumnBlock>
              <Col span={2}>
                <Radio value={2}></Radio>
              </Col>
            </CardWrapper>
            <Spacer height={30} />
            <CardWrapper className="gutter-row" span={6} type="management">
              <ColumnBlock span={22}>
                <Avatar src="/login3.png" size={65} icon={<UserOutlined />} />{' '}
                <Text strong style={{ fontFamily: 'Ralewayw' }}>
                  Hospital Management
                </Text>
              </ColumnBlock>
              <Col span={2}>
                <Radio value={3}></Radio>
              </Col>
            </CardWrapper>
            <HideDisplay>
              <Spacer height={30} />
              <CardWrapper className="gutter-row" span={6} type="management">
                <ColumnBlock span={22}>
                  <Avatar
                    src="/partner.png"
                    size={65}
                    icon={<UserOutlined />}
                  />{' '}
                  <Text strong style={{ fontFamily: 'Ralewayw' }}>
                    I&apos;m a Partner
                  </Text>
                </ColumnBlock>
                <Col span={2}>
                  <Radio value={4} />
                </Col>
              </CardWrapper>
            </HideDisplay>
            <Spacer height={80} />

            {type !== 'login' && (
              <Col>
                <Link
                  strong
                  onClick={() => router.push('/login')}
                  style={{ fontFamily: 'Ralewayw' }}
                >
                  Already have an account?&nbsp;<SpanText>Log In</SpanText>
                </Link>
              </Col>
            )}
            {type !== 'signup' && (
              <Col>
                <Link
                  strong
                  onClick={() => router.push('/signup')}
                  style={{ fontFamily: 'Ralewayw' }}
                >
                  Don’t have an account?&nbsp;<SpanText>Sign up</SpanText>
                </Link>
              </Col>
            )}
          </RadioGroup>
        </ContentLayout>
      </Col>
    </LayoutWrapperChain>
  )
}

export default Section1
