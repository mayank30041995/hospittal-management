import { Col, Popover, Typography, Avatar } from 'antd'
import React from 'react'
import {
  NavImage,
  ButtonWrapper,
  NavWrapper,
  NavWrapperMobile,
  NavLogo,
  SpanLinks,
  ContainerPop,
  ContainerPopOuter,
} from './module.styled'
import { MenuOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { decrement, increment, reset } from '@/redux/actions/appAction'
import { login, logOut } from '@/redux/actions/authAction'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Spacer from 'react-spacer'
import Drawer from './Drawer'
import { useState } from 'react'
const { Title, Paragraph, Text } = Typography
const NavLayout = ({ underline, lastUpdate, dashboard, ...props }) => {
  const [toggle, setToggle] = useState(false)
  const auth = props.useSelector && props.useSelector((state) => state.auth)
  const router = useRouter()
  const pad = (n) => (n < 10 ? `0${n}` : n)
  const format = (t) => {
    const hours = t.getUTCHours()
    const minutes = t.getUTCMinutes()
    const seconds = t.getUTCSeconds()
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
  }
  let { city, country } = auth?.location

  function toTitleCase(str) {
    if (!str) {
      return ''
    }
    const strArr = str.split(' ').map((word) => {
      return word[0].toUpperCase() + word.substring(1).toLowerCase()
    })
    return strArr.join(' ')
  }

  const content = (
    <div>
      {auth && auth.isLoggedIn && (
        <>
          <ContainerPopOuter>
            <Avatar
              src={
                auth?.user.image
                  ? auth?.user.image.url
                  : `${auth?.user.name} ? ${auth?.user.name
                      ?.charAt(0)
                      ?.toUpperCase()} : ''`
              }
            >
              {auth?.user.username?.charAt(0).toUpperCase()}
            </Avatar>
            <ContainerPop>
              <span> {auth?.user.name}</span>
              <span> {auth?.user.email}</span>
            </ContainerPop>
          </ContainerPopOuter>
          <Title
            level={5}
            onClick={() => {
              router.push(`/`)
            }}
          >
            <SpanLinks> Home</SpanLinks>
          </Title>
          <Title
            level={5}
            onClick={() => {
              router.push(`/dashboard/${auth.user.type}/${auth.user._id}`)
            }}
          >
            <SpanLinks>Dashboard</SpanLinks>
          </Title>
          <Title
            level={5}
            onClick={() => {
              router.push('/login')
              props.dispatch(logOut())
            }}
          >
            <SpanLinks>Logout</SpanLinks>
          </Title>
        </>
      )}
    </div>
  )
  const url = ''

  return (
    <>
      {toggle ? (
        <Drawer setToggle={setToggle} auth={auth} router={router} {...props} />
      ) : (
        <>
          <NavWrapperMobile justify="space-around">
            {auth.isLoggedIn && (
              <Col>
                <MenuOutlined
                  style={{ fontSize: '22px' }}
                  onClick={() => setToggle(!toggle)}
                />
                <Spacer width={16} />
              </Col>
            )}

            <Col>
              <NavImage
                src="/hosplan_logo.png"
                alt="hosplan_logo"
                width={110}
                onClick={() => router.push('/')}
              />
            </Col>
            <span>
              {toTitleCase(city)} {country}
            </span>

            {auth && !auth.isLoggedIn ? (
              <ButtonWrapper
                onClick={() => router.push('/login')}
                style={{ width: '20%' }}
              >
                Login
              </ButtonWrapper>
            ) : (
              <Col>
                <Popover
                  content={content}
                  title={
                    <img
                      src="/hosplan_logo.png"
                      alt="hosplan_logo"
                      width={100}
                    />
                  }
                  trigger="hover"
                >
                  <Avatar
                    src={
                      auth?.user.image
                        ? auth?.user.image.url
                        : `${auth?.user.name} ? ${auth?.user.name
                            ?.charAt(0)
                            ?.toUpperCase()} : ''`
                    }
                  >
                    {auth?.user.username?.charAt(0).toUpperCase()}
                  </Avatar>
                  {/* <p>{auth?.user.username}</p> */}
                </Popover>
              </Col>
            )}
          </NavWrapperMobile>
          <NavWrapper
            justify="space-between"
            underline={underline}
            dashboard={dashboard}
          >
            <Col>
              <Link href="/">
                <NavLogo src="/hosplan_logo.png" alt="hosplan_logo" />
              </Link>
            </Col>
            {auth && !auth.isLoggedIn ? (
              <Col>
                {/* <ButtonWrapper onClick={() => props.dispatch(increment())}> */}
                <span>
                  {toTitleCase(city)} {country}
                </span>

                <ButtonWrapper onClick={() => router.push('/login')}>
                  Login
                </ButtonWrapper>
                <ButtonWrapper
                  colors="primary"
                  onClick={() => router.push('/signup')}
                >
                  Sign Up
                </ButtonWrapper>
              </Col>
            ) : (
              <div
                style={{
                  display: 'flex',
                  width: '12em',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>
                  {toTitleCase(city)} {country}
                </span>
                <Popover
                  content={content}
                  title={
                    <img
                      src="/hosplan_logo.png"
                      alt="hosplan_logo"
                      width={100}
                    />
                  }
                  trigger="hover"
                >
                  <Avatar
                    src={
                      auth?.user.image
                        ? auth?.user.image.url
                        : `${auth?.user.name} ? ${auth?.user.name
                            ?.charAt(0)
                            ?.toUpperCase()} : ''`
                    }
                  >
                    {auth?.user.username?.charAt(0)?.toUpperCase()}
                  </Avatar>
                  {/* <p>{auth?.user.username}</p> */}
                </Popover>

                <Col>
                  <MenuOutlined
                    style={{ fontSize: '28px' }}
                    onClick={() => router.push('/')}
                  />
                </Col>
              </div>
            )}
          </NavWrapper>
        </>
      )}
    </>
  )
}

export default NavLayout
