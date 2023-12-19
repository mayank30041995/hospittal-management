import { Typography } from 'antd'
import React from 'react'
import { TitleBar, TitleHead, TitleWrapper } from './module.styled'
import { HideDisplayMobile } from '../Dashboard/dashboardmobile.styled'

export default function HeaderTitle({ children }) {
  return (
    <TitleWrapper justify="center">
      <TitleHead>
        <Typography>
          <HideDisplayMobile>
            <TitleBar>{children}</TitleBar>
          </HideDisplayMobile>
        </Typography>
      </TitleHead>
    </TitleWrapper>
  )
}
