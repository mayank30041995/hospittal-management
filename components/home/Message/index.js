import React from 'react'
import {
  MainTitles,
  MessageWrapper,
  TitleMain,
  TitleMessage,
} from './message.styled'
import { Button, Col, Row, Typography } from 'antd'
import InputGroup from '../../Input/InputGroup'
import Spacer from 'react-spacer'
import { HideDisplay } from '../../Dashboard/dashboardmobile.styled'
import { TitleMobile } from '../Services/services.styled'
import { ButtonWrapper } from '../../NavLayout/module.styled'
const { Title } = Typography

function Message() {
  return (
    <div>
      <HideDisplay>
        <TitleMobile level={5}>Submit your Query</TitleMobile>
      </HideDisplay>
      <MessageWrapper>
        <MessageWrapper justify="center">
          <MainTitles>
            <TitleMain level={1} color="secondary">
              Drop us a message
            </TitleMain>
            <TitleMessage level={3}>We’d LOVE to help you!</TitleMessage>
          </MainTitles>
        </MessageWrapper>
        <Row justify="end">
          <Col span={24}>
            <InputGroup
              size="large"
              border="none"
              width="85%"
              label="Your Name"
              placeholder=""
            />
            <Row>
              <InputGroup
                size="large"
                border="none"
                width="40%"
                label="Email Address"
              />
              <Spacer width="5%" />
              <InputGroup
                size="large"
                border="none"
                width="40%"
                label="Phone Number"
              />
            </Row>

            <InputGroup
              size="large"
              width="85%"
              marginTop="15px"
              type="textArea"
              showCount
              maxLength={500}
              placeholder="Need medical advice? Don't worry I'm here to help!"
              autoSize={{ minRows: 12, maxRows: 24 }}
            />
          </Col>

          <ButtonWrapper colors="primary" style={{ margin: '28px 7%' }}>
            Submit
          </ButtonWrapper>
        </Row>

        <br />
      </MessageWrapper>
    </div>
  )
}

export default Message
