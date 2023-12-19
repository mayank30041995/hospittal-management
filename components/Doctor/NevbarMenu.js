import React from 'react'
import { Col, Typography } from 'antd'
import { MenuArea, NavLink } from './doctor.styled'

function NavbarMenu() {
  return (
    <MenuArea justify="space-around" align="start">
      <Col span={4} push={1}>
        <NavLink
          target="_blank"
          onClick={() => {
            window.scrollTo(0, 300)
          }}
        >
          About
        </NavLink>
      </Col>
      <Col span={4}>
        <NavLink
          target="_blank"
          onClick={() => {
            window.scrollTo(300, 800)
          }}
        >
          Awards & Recognitions
        </NavLink>
      </Col>
      <Col span={4}>
        <NavLink
          target="_blank"
          onClick={() => {
            window.scrollTo(1300, 1900)
          }}
        >
          Reviews
        </NavLink>
      </Col>
      <Col span={4} pull={1}>
        <NavLink
          target="_blank"
          onClick={() => {
            window.scrollTo(800, 1300)
          }}
        >
          Location
        </NavLink>
      </Col>
    </MenuArea>
  )
}

export default NavbarMenu
