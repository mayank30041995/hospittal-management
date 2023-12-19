import React, { useMemo, useState, memo, useEffect } from 'react'
import useDeviceSize from '@/components/helper/useDeviceSize'
import { Col, Rate, Row, Typography, Empty, Spin, Skeleton } from 'antd'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { fetchJSON, fetchSearchJSON } from '@/utils/apiCalls'
import appConfig from '@/utils/appConfig'
import Slider from '../Slider'
import SlideItems from './SlideItems'
import { getMatch } from '@/components/helper/getMatch'
import Spacer from 'react-spacer'
import { NavImage, NavImageSection } from '../NavLayout/module.styled'
import {
  BannerImg,
  BannerRowTitles,
  CardWrapper,
  DescriptionBlock,
  ParagraphText,
  ParagraphTextDesktop,
  ParagraphTextMobile,
  RateStatus,
  TitleText,
} from './search.styled'

const Carousel = ({
  hospitalName,
  hospitalId,
  selectedId,
  search,
  auth = {},
  hospitalResult,
  item,
  loader,
  defaultValue,
}) => {
  const [width, height] = useDeviceSize()
  const router = useRouter()
  const [doctors, setDoctors] = useState([])
  const [typeId, setTypeId] = useState('')
  const [loading, setLoading] = useState(true)
  const { onVideo, onPhone, fee, experience } = useSelector(
    (state) => state.app.filters
  )
  let { speciality, id } = router.query
  let { type } = auth
  let rate = useMemo(() => {
    return search[3]?.value || 5
  }, [search])

  const carousel = useMemo(() => {
    return (doctors.length && doctors.slice(0, 40)) || []
  }, [doctors])
  // console.log('CarouselCarouselCarousel22222', JSON.stringify(onPhone))

  useEffect(() => {
    setLoading(false)
  }, [])

  function renderSwitch(param) {
    switch (router.pathname) {
      case '/condition':
        if (selectedId) {
          fetchJSON(`${appConfig.socketURL}/conditions/${selectedId}`).then(
            (value) => {
              if (!_.isEmpty(value)) {
                let specialitiesId = value?.speciality?.id
                setTypeId(specialitiesId)
              }
            }
          )
        }
        break
      case '/treatment':
        if (selectedId) {
          fetchJSON(`${appConfig.socketURL}/treatments/${selectedId}`).then(
            (value) => {
              if (!_.isEmpty(value)) {
                let specialitiesId =
                  value?.specialities?.length > 0
                    ? value.specialities[0].id
                    : ''
                setTypeId(specialitiesId)
              }
            }
          )
        }
        break
      default:
        return setTypeId(undefined)
    }
  }

  useEffect(() => {
    let URL = ''
    if (defaultValue === '') {
      URL = `${appConfig.socketURL}/doctors?hospital=${hospitalId}&_limit=-1`
    } else if (router.pathname === '/speciality' || speciality) {
      URL = speciality
        ? `${appConfig.socketURL}/doctors?hospital=${hospitalId}&_limit=-1&specialities=${speciality}`
        : `${
            appConfig.socketURL
          }/doctors?hospital=${hospitalId}&_limit=-1&specialities=${
            id || typeId || selectedId
          }`
    } else {
      if (router.pathname === '/treatment') {
        URL = `${appConfig.socketURL}/doctors?hospital=${hospitalId}&_limit=-1&treatments=${selectedId}`
      } else if (router.pathname === '/condition') {
        URL = `${appConfig.socketURL}/doctors?hospital=${hospitalId}&_limit=-1&conditions=${selectedId}`
      } else {
        URL = `${appConfig.socketURL}/doctors?hospital=${hospitalId}&_limit=-1`
      }
    }
    setLoading(true)
    if (hospitalId) {
      fetchJSON(URL)
        .then((value) => {
          if (!_.isEmpty(value) && value?.length) {
            let allData =
              experience.length > 0
                ? [...value].filter(function (el) {
                    return (
                      el.Experience >= experience[0] &&
                      el.Experience <= experience[1]
                    )
                  })
                : value

            allData =
              fee.length > 0
                ? [...allData].filter(function (el) {
                    el.Price = el.Price !== undefined ? el.Price : 0
                    return el.Price >= fee[0] && el.Price < fee[1]
                  })
                : allData

            allData =
              getMatch(rate).length > 0
                ? [...allData].filter(function (el) {
                    return getMatch(rate).includes(el.Rating)
                  })
                : allData

            allData = onPhone
              ? [...allData].filter(function (el) {
                  return el.OnPhone === true
                })
              : allData

            allData = onVideo
              ? [...allData].filter(function (el) {
                  return el.OnVideo === true
                })
              : allData

            setDoctors(allData)
          } else {
            setDoctors(value)
          }

          setLoading(false)
        })
        .catch((err) => setLoading(false))
    }
  }, [fee, experience, rate, onVideo, onPhone, defaultValue])

  useEffect(() => {
    renderSwitch(router.pathname)
  }, [selectedId])

  let { _id, Name, Address, Rating = 1, Beds = 0, EstablishedYear } = item

  return (
    <div>
      {loading ? (
        <Skeleton />
      ) : (
        carousel?.length > 0 && (
          <>
            <CardWrapper
              onClick={() =>
                router.push({
                  pathname: `/hospital`,
                  query: {
                    id: `${_id}`,
                    type: 'Hospital',
                  },
                })
              }
            >
              <BannerRowTitles>
                {item.Pictures ? (
                  <BannerImg
                    // src="hospital.png"
                    src={item.Pictures[0]?.url || 'hospital.png'}
                    alt="hosplan_logo"
                    width={180}
                    style={{ objectFit: 'cover', borderRadius: '12px' }}
                  />
                ) : (
                  <BannerImg
                    src="hospital.png"
                    alt="hosplan_logo"
                    style={{ maxWidth: '95%', borderRadius: '12px' }}
                  />
                )}
                <Spacer width={10} />
                <DescriptionBlock>
                  <TitleText level={3} banner="true">
                    {Name}
                  </TitleText>
                  <ParagraphTextDesktop>
                    Established In: {EstablishedYear} | No of Beds: {Beds}
                  </ParagraphTextDesktop>
                  <ParagraphTextMobile>
                    Established In: {EstablishedYear}
                  </ParagraphTextMobile>
                  <ParagraphTextMobile>No of Beds: {Beds}</ParagraphTextMobile>
                  <Spacer width={10} />
                  <RateStatus banner="true">
                    Google Ratings:{' '}
                    <Rate allowHalf disabled defaultValue={Rating} />
                  </RateStatus>
                </DescriptionBlock>
              </BannerRowTitles>
              <Col style={{ display: 'grid' }}>
                <NavImageSection
                  src="map.png"
                  alt="hosplan_logo"
                  height={100}
                  style={{ maxWidth: '90%', borderRadius: '12px' }}
                  hide
                />
                <Spacer height={5} />
                <NavImageSection
                  src="directions.png"
                  alt="hosplan_logo"
                  style={{ maxWidth: '90%', borderRadius: '12px' }}
                  hide
                />
              </Col>
            </CardWrapper>
            <Spacer height={10} />

            {carousel?.length > 1 ? (
              <Slider
                slidesToShow={width >= 768 ? 2 : 1}
                autoplay={carousel.length < 2 ? false : true}
                slidesToScroll={2}
                height={120}
              >
                {carousel.length > 0 &&
                  carousel.map((doctor, i) => (
                    <SlideItems
                      hospitalName={hospitalName}
                      doctor={doctor}
                      key={i}
                      stop="false"
                      role={type}
                    />
                  ))}
              </Slider>
            ) : (
              <>
                {carousel?.length < 2 &&
                  carousel.map((doctor, i) => (
                    <SlideItems
                      hospitalName={hospitalName}
                      doctor={doctor}
                      key={i}
                      stop="true"
                      role={type}
                    />
                  ))}
              </>
            )}
          </>
        )
      )}
      <Spacer height={6} />
    </div>
  )
}

export default memo(Carousel)
