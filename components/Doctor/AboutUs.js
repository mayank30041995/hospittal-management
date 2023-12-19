import React from 'react'
import { Col, Skeleton, Typography } from 'antd'
import Spacer from 'react-spacer'
import {
  BannerWrapper,
  WrittenTextColumn,
  TextArea,
  TitleAboutText,
} from './doctor.styled'
const { Title } = Typography
// const responsive = { xs: 8, sm: 16, md: 24, lg: 32 }

function AboutUs({ doctors, loading }) {
  let { ShortDetails, Description, Memberships, UniqueContribution, Awards } =
    doctors.length && doctors[0]
  return (
    <BannerWrapper justify="space-between">
      <Col className="gutter-row">
        <Col>
          <TitleAboutText level={4}>About</TitleAboutText>
        </Col>
        <WrittenTextColumn>
          {!loading ? (
            <TextArea>{Description?.replace(/<(.|\n)*?>/g, '')}</TextArea>
          ) : (
            <Skeleton />
          )}
        </WrittenTextColumn>
        <Spacer height={10} />
        <Col>
          <TitleAboutText level={4}>Education & Experience</TitleAboutText>
        </Col>
        <WrittenTextColumn>
          <TextArea>
            {!loading ? (
              <TextArea>{ShortDetails?.replace(/<(.|\n)*?>/g, '')}</TextArea>
            ) : (
              <Skeleton />
            )}
          </TextArea>
        </WrittenTextColumn>
        <Spacer height={10} />

        <Col>
          <TitleAboutText level={4}>Memberships :</TitleAboutText>
        </Col>
        <WrittenTextColumn>
          <TextArea>
            {!loading ? (
              <TextArea>{Memberships?.replace(/<(.|\n)*?>/g, '')}</TextArea>
            ) : (
              <Skeleton />
            )}
          </TextArea>
        </WrittenTextColumn>
        <Spacer height={10} />
        <Col>
          <TitleAboutText level={4}>Awards :</TitleAboutText>
        </Col>
        <WrittenTextColumn>
          <TextArea>
            {!loading ? (
              <TextArea>
                {(UniqueContribution &&
                  UniqueContribution?.replace(/<(.|\n)*?>/g, '')) ||
                  (Awards && Awards.replace(/<(.|\n)*?>/g, ''))}
              </TextArea>
            ) : (
              <Skeleton style={{ width: '150vh', overflow: 'hidden' }} />
            )}
          </TextArea>
        </WrittenTextColumn>
      </Col>
    </BannerWrapper>
  )
}

export default AboutUs
