import React from 'react'
import { Col, Divider, Row } from 'antd'
import { Space, Typography } from 'antd'
import { NavArea, NavLink, ScrollWrap } from './hospital.styled'
const { Text, Link } = Typography

function NavbarMenu() {
  return (
    <ScrollWrap>
      <NavArea justify="center" align="start">
        <Col span={4}>
          <NavLink target="_blank" onClick={() => {
            window.scrollTo(0, 100)
          }}>
            Overview
          </NavLink>
        </Col>
        <Col span={4}>
          <NavLink target="_blank" onClick={() => {
            window.scrollTo(100, 500)
          }}>
            Doctors
          </NavLink>
        </Col>
        <Col span={4}>
          <NavLink target="_blank" onClick={() => {
            window.scrollTo(500, 1300)
          }}>
            Specialisation
          </NavLink>
        </Col>
        <Col span={4}>
          <NavLink target="_blank" onClick={() => {
             window.scrollTo(1800, 3400)
          }}>
            Location
          </NavLink>
        </Col>
        <Col span={4}>
          <NavLink target="_blank" onClick={() => {
            window.scrollTo(3300, 4100)
           
          }}>
            Reviews
          </NavLink>
        </Col>
      </NavArea>
    </ScrollWrap>
  )
}

export default NavbarMenu
