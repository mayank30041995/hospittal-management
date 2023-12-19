import { Col } from 'antd'

import React from 'react'
import { LayoutWrapper, TitleBarMessage } from '../../NavLayout/module.styled'
import { TitlePost } from './services.styled'
import Reviews from './Reviews'

export default function PostTitle({ children }) {
  return (
    <div>
      <LayoutWrapper justify="center">
        <TitlePost span={18}>
          <TitleBarMessage>{children}</TitleBarMessage>
        </TitlePost>
      </LayoutWrapper>
    </div>
  )
}
