import React, { memo, useEffect, useRef, useState } from 'react'
import {
  AutocompleteSelectArea,
  CardRow,
  DataContainer,
  EmptyItems,
  FlexRow,
  LayoutWrapper,
  ParagraphArea,
  SearchInput,
  SlideWrapper,
  TitleBlock,
  TitleGroup,
} from './hospital.styled'
import Router from 'next/router'
import { useRouter } from 'next/router'
import { Typography, Col, Row, Rate, Skeleton, Input, Empty, Spin } from 'antd'
import {
  LoaderContainer,
  RateStatus,
  SlideText,
  SliderImg,
  SpanStyle,
} from '../Search/search.styled'
import Spacer from 'react-spacer'
import { ExpandAltOutlined } from '@ant-design/icons'
import { ButtonWrapper } from '../NavLayout/module.styled'
import { SlideCarouselText } from '../Search/search.styled'
import {
  HideDisplay,
  HideDisplayMobile,
} from '../Dashboard/dashboardmobile.styled'
import AutocompleteSelect from '../AutoComplete'
import { fetchSearchJSON } from '@/utils/apiCalls'
import appConfig from '@/utils/appConfig'
import { loadHospitalDoctors } from '@/redux/actions/searchAction'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDefaultOptions } from '@/components/helper/fetchSelectLookup'
const _ = require('lodash')
import styles from '@/styles/Home.module.css'
let fullWidth = { width: '100%', borderRadius: '12px' }

function Doctors({
  loading,
  doctorResult,
  hospitalDetails,
  hospitalName,
  saved,
  setSaved,
  debounce_fun,
  onScroll,
  listInnerRef,
}) {
  const router = useRouter()
  let dispatch = useDispatch()
  const defaultSearchOptions = useSelector(
    (state) => state.app?.defaultSearchOptions
  )
  const [doctorResults, setDoctorResults] = useState([])
  const { id, doctors = [] } = hospitalDetails

  const filterBySearch = (event) => {
    console.log('setDoctorResults', event.target.value, doctorResults)
    const query = event.target.value
    var updatedList = [...doctors]
    updatedList = updatedList.filter(
      (item) => item.Name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    )
    setDoctorResults(updatedList)
  }

  const searchDefault = async (e) => {
    let updatedList = []
    const response = await fetchSearchJSON(
      `${
        appConfig.socketURL
      }/home/search?q=${e?.toLowerCase()}&cat=fordocs&limit=50`
    )
      .then(
        (body) =>
          body?.length > 0 &&
          body?.map((data) => ({
            label: (
              <>
                <div>{data.label}</div>
                <div className="desc_search">{data.category}</div>
              </>
            ),
            value: data.label,
            key: data.id,
            title: data.category,
          }))
      )
      .catch((err) => {
        console.log('error', err)
        return []
      })
    updatedList =
      doctors.length > 0 &&
      doctors.filter(
        (item) => item.Name.toLowerCase().indexOf(e.toLowerCase()) !== -1
      )
    const allDoctors = updatedList.map((list, i) => ({
      label: (
        <>
          <div>{list.Name}</div>
          <div className="desc_search">{'doctor'}</div>
        </>
      ),
      value: list.Name,
      key: list.id,
      title: 'doctor',
    }))
    console.log('setSearch2', response, allDoctors)
    if (response.length > 0) {
      return [...response, ...allDoctors]
    } else {
      return allDoctors
    }
  }

  const setSearchByType = (e) => {
    debounce_fun(e, 'doctor')
  }

  const handleSelect = async (e) => {
    console.log('setSearchByType', e)
  }

  return (
    <div>
      <FlexRow>
        <TitleBlock level={2}>Our Doctors</TitleBlock>
        <AutocompleteSelect
          placeholder="Search"
          allowClear
          className="sideSelectSearch"
          style={{
            width: '70%',
            marginRight: '4%',
            borderRadius: '0px',
            border: 'none',
            borderBottom: '1px solid #000',
          }}
          values={saved?.value}
          fetchOptions={(e) => searchDefault(e)}
          searchDispatch={(e) => setSearchByType(e)}
          datasourceitem={fetchDefaultOptions(
            defaultSearchOptions,
            'speciality'
          )}
          // fetchOptions={async () => await options}
          // onSelect={(e) => handleSelect(e)}
        />
      </FlexRow>
      <DataContainer
        align="start"
        className={styles.main}
        // key={user._id}
        onScroll={onScroll}
        ref={listInnerRef}
        style={{ height: '40rem', overflowY: 'auto' }}
      >
        <SearchInput>
          <Input
            placeholder="Search doctor"
            allowClear
            size="large"
            onChange={(e) => filterBySearch(e)}
          />
        </SearchInput>
        {loading && (
          <LoaderContainer
            style={{ position: 'absolute', top: '160%', zIndex: '1' }}
          >
            <Spin size="large" />
          </LoaderContainer>
        )}
        {doctorResult && doctorResult.length > 0 ? (
          doctorResult.map((doctor, i) => {
            let { id, Name, Pictures, Department, Experience, Rating } = doctor
            return (
              <Col key={`doctor-key-${id}`}>
                <SlideWrapper>
                  <CardRow justify="space-around">
                    <Col
                      onClick={() =>
                        router.push({
                          pathname: `/doctor`,
                          query: {
                            id: `${id}`,
                            type: 'Doctor',
                          },
                        })
                      }
                    >
                      {Pictures ? (
                        <SliderImg
                          size
                          // src="hospital.png"
                          src={Pictures[0]?.url || 'doctor_example.jpg'}
                          alt="hosplan_logo"
                        />
                      ) : (
                        <SliderImg
                          size
                          src="doctor_example.jpg"
                          alt="hosplan_logo"
                        />
                      )}
                      {/* <img style={{ width: '99%' }} src={} alt="" /> */}
                    </Col>

                    <SlideCarouselText
                      onClick={() =>
                        router.push({
                          pathname: `/doctor`,
                          query: {
                            id: `${id}`,
                            type: 'Doctor',
                          },
                        })
                      }
                    >
                      <HideDisplayMobile>
                        <TitleGroup level={5}>{Name}</TitleGroup>
                        <ParagraphArea>
                          Hospital: <SpanStyle bold>{hospitalName}</SpanStyle>
                        </ParagraphArea>
                      </HideDisplayMobile>
                      <HideDisplay>
                        <TitleGroup level={5} style={{ margin: 0 }}>
                          {Name}
                        </TitleGroup>
                        <ParagraphArea>
                          <SpanStyle bold>{hospitalName}</SpanStyle>
                        </ParagraphArea>
                      </HideDisplay>

                      <ParagraphArea>
                        Experience:
                        <SpanStyle style={{ fontFamily: 'Inter' }}>
                          {' '}
                          {Experience || 0} Years
                        </SpanStyle>
                      </ParagraphArea>
                      <ParagraphArea>
                        Department:
                        <SpanStyle> {Department?.slice(0, 50)}...</SpanStyle>
                      </ParagraphArea>
                      <Col>
                        <RateStatus>
                          Google Ratings:{' '}
                          <Rate allowHalf disabled defaultValue={Rating} />
                        </RateStatus>
                      </Col>
                    </SlideCarouselText>
                    <Spacer width={10} />
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
                  </CardRow>
                </SlideWrapper>
              </Col>
            )
          })
        ) : loading ? (
          [...Array(20)].map((e, i) => (
            <Skeleton.Input
              active={true}
              key={i}
              style={{ width: '250px', height: '200px', margin: '15px 22px' }}
            />
          ))
        ) : (
          <EmptyItems description="No Doctor's Found" />
        )}
      </DataContainer>
    </div>
  )
}

export default memo(Doctors)
