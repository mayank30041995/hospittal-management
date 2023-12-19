import React from 'react'
import { Col, Row, Typography } from 'antd'
const { Title, Paragraph, Text } = Typography
import Spacer from 'react-spacer'
import { NavImage } from '../NavLayout/module.styled'
import { PanelCard, PanelWrapper } from './search.styled'

function Panel({ setEnable }) {
  return (
    <PanelWrapper align="-webkit-center">
      <Title level={5}>Filters</Title>
      <Spacer height={30} />
      <PanelCard span={24} onClick={() => setEnable(true)}>
        <NavImage src="location.png" alt="hosplan_logo" width={18} />
        <Paragraph>Location</Paragraph>
      </PanelCard>
      <Spacer height={26} />
      <PanelCard span={24} onClick={() => setEnable(true)}>
        <NavImage src="ratings.png" alt="hosplan_logo" width={25} />
        <Paragraph>Ratings</Paragraph>
      </PanelCard>
      <Spacer height={26} />
      <PanelCard span={24} onClick={() => setEnable(true)}>
        <NavImage src="consultationFee.png" alt="hosplan_logo" width={20} />
        <Paragraph>Consultation Fee</Paragraph>
      </PanelCard>
      <Spacer height={26} />
      <PanelCard span={24} onClick={() => setEnable(true)}>
        <NavImage src="phoneCall.png" alt="hosplan_logo" width={18} />
        <Paragraph>Phone Call</Paragraph>
      </PanelCard>
      <Spacer height={26} />
      <PanelCard span={24} onClick={() => setEnable(true)}>
        <NavImage src="videoConsultation.png" alt="hosplan_logo" width={18} />
        <Paragraph>Video Consultation</Paragraph>
      </PanelCard>
      <Spacer height={26} />
      <PanelCard span={24} onClick={() => setEnable(true)}>
        <NavImage src="gender.png" alt="hosplan_logo" width={18} />
        <Paragraph>Gender</Paragraph>
      </PanelCard>
    </PanelWrapper>
  )
}

export default Panel
