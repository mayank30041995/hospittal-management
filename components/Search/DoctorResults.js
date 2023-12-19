import React, { memo } from 'react'
import { Col, Rate, Row, Typography, Empty } from 'antd'
import {
  ButtonWrapper,
  ButtonWrapperBlock,
  DocImg,
  LinkDecoration,
  ParagraphText,
  ParagraphTextDoc,
  SlideText,
  SlideTextBlockDoctor,
  SlideWrapper,
  SpanStyle,
  TitleText,
} from './search.styled'
import Router from 'next/router'
import { ExpandAltOutlined } from '@ant-design/icons'
import Spacer from 'react-spacer'
import { useRouter } from 'next/router'
import {
  HideDisplay,
  HideDisplayMobile,
} from '../Dashboard/dashboardmobile.styled'

const { Title, Paragraph, Text, Link } = Typography
let fullWidth = { width: '100%', borderRadius: '12px' }

function DoctorResults({ loader, doctorResult, auth }) {
  // console.log('doctorResult', doctorResult)
  const router = useRouter()

  if (!loader && doctorResult.length === 0) {
    return <Empty description="No Doctor's Found" />
  }
  return (
    <>
      {doctorResult.length > 0 &&
        doctorResult.map((item, key) => {
          let {
            _id,
            Name,
            Department,
            hospital,
            Rating,
            Experience,
            Pictures,
          } = item
          return (
            <div key={key}>
              <Spacer height={22} />
              <SlideWrapper justify="space-between" key={key} listing="true">
                <Row
                  justify="center"
                  onClick={() =>
                    router.push({
                      pathname: `/doctor`,
                      query: {
                        id: `${_id}`,
                        type: 'Doctor',
                      },
                    })
                  }
                >
                  <>
                    {Pictures ? (
                      <DocImg
                        src={Pictures[0]?.url || 'doctor_example.jpg'}
                        alt="doctor_example.jpg"
                        style={{ objectFit: 'cover', borderRadius: '12px' }}
                      />
                    ) : (
                      <DocImg
                        src="doctor_example.jpg"
                        alt="doctor_example.jpg"
                      />
                    )}
                  </>
                  <Spacer width={15} />

                  <SlideTextBlockDoctor>
                    <HideDisplayMobile>
                      <Spacer height={10} />
                      <TitleText level={4}>{Name}</TitleText>
                      <ParagraphTextDoc>
                        Hospital: <SpanStyle bold> {hospital?.Name}</SpanStyle>
                      </ParagraphTextDoc>
                    </HideDisplayMobile>

                    <HideDisplay>
                      <TitleText level={4}>{Name}</TitleText>
                      <ParagraphTextDoc>
                        <SpanStyle bold> {hospital?.Name}</SpanStyle>
                      </ParagraphTextDoc>
                    </HideDisplay>

                    <ParagraphTextDoc>
                      Experience:{' '}
                      <SpanStyle bold style={{ fontFamily: 'Inter' }}>
                        {Experience} Years
                      </SpanStyle>
                    </ParagraphTextDoc>
                    <ParagraphTextDoc>
                      Department:{' '}
                      <SpanStyle bold>{Department?.slice(0, 50)}</SpanStyle>{' '}
                    </ParagraphTextDoc>

                    <Col>
                      <span
                        style={{
                          marginLeft: '4px',
                          fontSize: '14px',
                          fontWeight: 400,
                          fontFamily: 'Inter',
                        }}
                      >
                        Google Ratings:{' '}
                        <Rate allowHalf disabled defaultValue={Rating} />
                      </span>
                    </Col>
                  </SlideTextBlockDoctor>
                </Row>

                <ButtonWrapperBlock align="center">
                  <LinkDecoration>
                    <Link href="/" target="_blank">
                      Start Live Chat Now <ExpandAltOutlined />
                    </Link>
                  </LinkDecoration>
                  <Col span={24}>
                    <Spacer height={10} />
                    <Row justify="space-between">
                      <Col span={12}>
                        <ButtonWrapper
                          colors="primary"
                          size="large"
                          style={{ ...fullWidth }}
                          onClick={() =>
                            Router.push({
                              pathname: `/opinion/${_id}`,
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
                              pathname: `/consult/${_id}`,
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
                            pathname: `/consult/${_id}`,
                          })
                        }
                      >
                        Book an Appointment
                      </ButtonWrapper>
                    </Row>
                  </Col>
                </ButtonWrapperBlock>
              </SlideWrapper>{' '}
            </div>
          )
        })}
    </>
  )
}

export default memo(DoctorResults)
