import React, { memo, useMemo } from 'react'
import { Col, Rate, Row } from 'antd'
import {
  ParagraphText,
  RateStatus,
  SlideWrapper,
  SpanStyle,
} from '../../Search/search.styled'
import useDeviceSize from '@/components/helper/useDeviceSize'
import { ButtonWrapper } from '../../NavLayout/module.styled'
import Spacer from 'react-spacer'
import Router from 'next/router'
import { useRouter } from 'next/router'
import {
  TextAreaWrapper,
  SliderImg,
  SlideCarouselText,
  CardRow,
  TitleGroup,
} from '../hospital.styled'
import { useState } from 'react'
import { useEffect } from 'react'
import {
  HideDisplay,
  HideDisplayMobile,
} from '../../Dashboard/dashboardmobile.styled'
import Slider from '../../Slider'

let fullWidth = { width: '100%' }

const Carousel = ({
  doctors = [],
  hospitalName,
  searchValues,
  switchFilters,
}) => {
  const [width, height] = useDeviceSize()
  const router = useRouter()
  // console.log('searchValues', searchValues)
  const total_doctors = useMemo(() => {
    return (doctors.length && doctors.slice(0, 10)) || []
  }, [doctors])

  const [carousel, setCarousel] = useState(total_doctors)

  useEffect(() => {
    setCarousel(total_doctors)
  }, [total_doctors.length])

  useEffect(() => {
    if (total_doctors.length) {
      const bookingOrder = [...total_doctors]

      if (searchValues && searchValues.length) {
        const filterBySearch = bookingOrder.filter((item) => {
          if (
            item.Name.toLowerCase().includes(searchValues.trim().toLowerCase())
          ) {
            return item
          }
        })
        // console.log('bookingOrder', searchValues, bookingOrder, filterBySearch)
        setCarousel(filterBySearch)
      } else {
        setCarousel(bookingOrder)
        return
      }
    }
  }, [searchValues])

  return (
    <TextAreaWrapper>
      {carousel.length > 0 && (
        <Slider
          slidesToShow={width >= 970 ? 3 : width >= 536 ? 2 : 1}
          autoplay={carousel.length < 2 ? false : true}
          slidesToScroll={2}
          height={150}
        >
          {carousel.length > 0 &&
            carousel.map((doctor, key) => {
              let { _id, Name, Experience, Department, Pictures, Rating } =
                doctor
              return (
                <SlideWrapper key={key}>
                  <CardRow
                    justify="space-around"
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
                    <Col>
                      {Pictures ? (
                        <SliderImg
                          // src="hospital.png"
                          src={Pictures[0]?.url || 'doctor_example.jpg'}
                          alt="hosplan_logo"
                        />
                      ) : (
                        <SliderImg
                          src="doctor_example.jpg"
                          alt="hosplan_logo"
                        />
                      )}
                      {/* <img style={{ width: '99%' }} src={} alt="" /> */}
                    </Col>

                    <SlideCarouselText>
                      <HideDisplayMobile>
                        <TitleGroup level={5} slide="true">
                          {Name}
                        </TitleGroup>
                        <ParagraphText>
                          Hospital: <SpanStyle bold>{hospitalName}</SpanStyle>
                        </ParagraphText>
                      </HideDisplayMobile>
                      <HideDisplay>
                        <TitleGroup
                          level={5}
                          slide="true"
                          style={{ margin: 0 }}
                        >
                          {Name}
                        </TitleGroup>
                        <ParagraphText>
                          <SpanStyle bold>{hospitalName}</SpanStyle>
                        </ParagraphText>
                      </HideDisplay>

                      <ParagraphText>
                        Experience:
                        <SpanStyle style={{ fontFamily: 'Inter' }}>
                          {' '}
                          {Experience} Years
                        </SpanStyle>
                      </ParagraphText>
                      <ParagraphText>
                        Department:{' '}
                        <SpanStyle>{Department?.slice(0, 15)}...</SpanStyle>
                      </ParagraphText>
                      <Col>
                        <RateStatus>
                          Google Ratings:{' '}
                          <Rate allowHalf disabled defaultValue={Rating} />
                        </RateStatus>
                      </Col>
                    </SlideCarouselText>
                    <Spacer width={10} />
                  </CardRow>
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
                </SlideWrapper>
              )
            })}
        </Slider>
      )}
    </TextAreaWrapper>
  )
}

export default memo(Carousel)
