import React, { memo } from 'react'
import { Col, Rate, Row, Typography } from 'antd'
import Router, { useRouter } from 'next/router'
import Spacer from 'react-spacer'
import { ButtonWrapper } from '../NavLayout/module.styled'
import {
  HideDisplay,
  HideDisplayMobile,
} from '../Dashboard/dashboardmobile.styled'
import {
  CardContent,
  ParagraphText,
  RateStatus,
  SlideCarouselText,
  SlideText,
  SlideWrapper,
  SliderImg,
  SpanStyle,
  TitleText,
} from './search.styled'
let fullWidth = { width: '100%' }

function SlideItems({ hospitalName, doctor, stop, role }) {
  const router = useRouter()
  return (
    <SlideWrapper search="true" listing="false" stop={stop}>
      <CardContent
        justify="center"
        onClick={() =>
          router.push({
            pathname: `/doctor`,
            query: {
              id: `${doctor._id}`,
              type: 'Doctor',
            },
          })
        }
      >
        <Col style={{ padding: '8px 0 0 0' }}>
          {doctor.Pictures ? (
            <SliderImg
              // src="hospital.png"
              src={doctor.Pictures[0]?.url || 'doctor_example.jpg'}
              alt="doctor_example.jpg"
            />
          ) : (
            <SliderImg src="doctor_example.jpg" alt="doctor_example.jpg" />
          )}
          {/* <img style={{ width: '99%' }} src={} alt="" /> */}
        </Col>

        <SlideCarouselText>
          <HideDisplayMobile>
            <TitleText level={5}> {doctor.Name}</TitleText>
            <ParagraphText>
              Hospital: <SpanStyle bold>{hospitalName}</SpanStyle>
            </ParagraphText>
          </HideDisplayMobile>

          <HideDisplay>
            <TitleText level={5} style={{ margin: 0 }}>
              {doctor.Name}
            </TitleText>
            <ParagraphText>
              <SpanStyle bold>{hospitalName}</SpanStyle>
            </ParagraphText>
          </HideDisplay>
          <ParagraphText>
            Experience:{' '}
            <SpanStyle style={{ fontFamily: 'Inter' }}>
              {doctor.Experience} Years
            </SpanStyle>
          </ParagraphText>
          <ParagraphText>
            Department:
            <SpanStyle> {doctor.Department?.slice(0, 50)}</SpanStyle>
          </ParagraphText>
          <Col>
            <RateStatus>
              Google Ratings:{' '}
              <Rate allowHalf disabled defaultValue={doctor.Rating} />
            </RateStatus>
          </Col>
        </SlideCarouselText>
        <Spacer width={10} />
      </CardContent>
      <Spacer height={8} />
      {role !== 'partner' ? (
        <Col span={24}>
          <Row justify="space-between">
            <Col span={12}>
              <ButtonWrapper
                colors="primary"
                size="large"
                style={{ ...fullWidth }}
                onClick={() =>
                  Router.push({
                    pathname: `/opinion/${doctor._id}`,
                  })
                }
              >
                Get Opinion
              </ButtonWrapper>
            </Col>

            <Col span={12}>
              <ButtonWrapper
                colors="primary"
                size="large"
                style={{ ...fullWidth }}
                onClick={() =>
                  Router.push({
                    pathname: `/consult/${doctor._id}`,
                  })
                }
              >
                Tele-Consult
              </ButtonWrapper>
            </Col>
          </Row>
          <Spacer height={10} />
          <Row>
            <ButtonWrapper
              colors="primary"
              size="large"
              style={{ ...fullWidth }}
              onClick={() =>
                Router.push({
                  pathname: `/consult/${doctor._id}`,
                })
              }
            >
              Book an Appointment
            </ButtonWrapper>
          </Row>
        </Col>
      ) : (
        <Col span={24}>
          <Row justify="space-between">
            <Col span={24}>
              <ButtonWrapper
                colors="primary"
                size="large"
                style={{ ...fullWidth }}
                onClick={() =>
                  Router.push({
                    pathname: `/consult/${doctor._id}`,
                  })
                }
              >
                Book for my Patient
              </ButtonWrapper>
            </Col>
          </Row>{' '}
        </Col>
      )}
    </SlideWrapper>
  )
}

export default memo(SlideItems)
