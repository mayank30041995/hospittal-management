import { Button, Col, Row, Typography } from 'antd'
import { useState } from 'react'
import Spacer from 'react-spacer'
import AutocompleteSelect from '../../AutoComplete'
import { NavImageBanner } from '../../NavLayout/module.styled'
import appConfig from '@/utils/appConfig'
import router from 'next/router'
import {
  borderPicker,
  colorPicker,
  comingSoon,
  doctors,
  findPlaceholder,
  hospitals,
  treatments,
} from './helper'
import {
  AutocompleteSelectBlock,
  GlobalSearchBlock,
  GlobalSearchButton,
  GlobalSearchButtonWell,
  GlobalSearchSection,
  GlobalSearchWrapper,
  SearchInner,
  SearchInputWrapper,
  SearchTitle,
  TextGroup,
  TypeTextSearch,
} from './search.styled'
import { fetchJSON, fetchSearchJSON } from '@/utils/apiCalls'
import { fetchDefaultOptions } from '@/components/helper/fetchSelectLookup'

const { Title, Text, Paragraph } = Typography
const style = {
  background: '#0092ff',
  padding: '8px 0',
}

const BannerSearch = ({ defaultSearchOptions }) => {
  const [active, setActive] = useState('treatment')

  return (
    <>
      <Col>
        <GlobalSearchWrapper
          active={active}
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          <Col className="gutter-row" span={6}>
            <SearchInner
              onClick={() => setActive('treatment')}
              style={{
                borderBottom: active === 'treatment' && '4px solid #06509F',
                cursor: 'pointer',
              }}
            >
              <NavImageBanner src="Treat_ment.png" alt="hosplan_logo" />
              <TypeTextSearch strong>TREATMENT</TypeTextSearch>
            </SearchInner>
          </Col>
          <Col className="gutter-row" span={6}>
            <SearchInner
              onClick={() => setActive('hospital')}
              style={{
                borderBottom: active === 'hospital' && '4px solid #FD7B07',
                cursor: 'pointer',
              }}
            >
              <Spacer height={5} />
              <NavImageBanner src="hospital_small.png" alt="hosplan_logo" />
              <Spacer height={12} />
              <TypeTextSearch strong>HOSPITAL</TypeTextSearch>
            </SearchInner>
          </Col>
          <Col className="gutter-row" span={6}>
            <SearchInner
              onClick={() => setActive('doctor')}
              style={{
                borderBottom: active === 'doctor' && '4px solid #E96161',
                cursor: 'pointer',
              }}
            >
              <NavImageBanner src="Doc_tor.png" alt="hosplan_logo" />

              <TypeTextSearch strong>DOCTOR</TypeTextSearch>
            </SearchInner>
          </Col>
          <Col className="gutter-row" span={6}>
            <SearchInner
              onClick={() => setActive('wellness')}
              style={{
                borderBottom: active === 'wellness' && '4px solid #F0C48A',

                cursor: 'pointer',
              }}
            >
              <NavImageBanner src="Wellness.png" alt="hosplan_logo" />
              <TypeTextSearch strong>WELLNESS</TypeTextSearch>
            </SearchInner>
          </Col>
        </GlobalSearchWrapper>
      </Col>
      <Col style={{ width: '90%' }}>
        <GlobalSearchBlock
          active={active}
          style={active === 'wellness' && { background: '#FFE5C3' }}
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          {RenderSwitch(active, defaultSearchOptions)}
          {active !== 'wellness' && (
            <GlobalSearchButton type="primary" size="large" active={active}>
              SEARCH
            </GlobalSearchButton>
          )}
        </GlobalSearchBlock>
      </Col>
    </>
  )
}

function RenderSwitch(active, defaultSearchOptions) {
  function toTitleCase(str) {
    if (!str) {
      return ''
    }
    const strArr = str.split(' ').map((word) => {
      return word[0].toUpperCase() + word.substring(1).toLowerCase()
    })
    return strArr.join(' ')
  }
  const handleSearch = (e, active, type) => {
    switch (active) {
      case 'treatment':
        if (e?.key) {
          let path = active && active.concat('s')
          fetchJSON(`${appConfig.socketURL}/${path}/${e?.key}`).then(
            async (value) => {
              if (!_.isEmpty(value)) {
                let specialitiesId =
                  value?.specialities?.length > 0
                    ? value.specialities[0].id
                    : ''
                await router.push({
                  pathname: `/${active}`,
                  query: {
                    value: `${e.value.replace(/\s/g, '-')}`,
                    id: `${e.key}`,
                    ...(specialitiesId &&
                      specialitiesId !== '' && {
                        speciality: `${specialitiesId}`,
                      }),
                    type: type,
                  },
                })
              }
            }
          )
          break
        }
      case 'condition':
        if (e?.key) {
          let path = active && active.concat('s')
          fetchJSON(`${appConfig.socketURL}/${path}/${e?.key}`).then(
            async (value) => {
              if (!_.isEmpty(value)) {
                let specialitiesId = value?.speciality?.id
                await router.push({
                  pathname: `/${active}`,
                  query: {
                    value: `${e.value.replace(/\s/g, '-')}`,
                    id: `${e.key}`,
                    ...(specialitiesId &&
                      specialitiesId !== '' && {
                        speciality: `${specialitiesId}`,
                      }),
                    type: type,
                  },
                })
              }
            }
          )
          break
        }

      case 'speciality':
        if (e?.key) {
          router.push({
            pathname: `/${active}`,
            query: {
              value: `${e.value.replace(/\s/g, '-')}`,
              id: `${e.key}`,
              type: type,
            },
          })
          break
        }

      default:
        if (e?.key) {
          router.push({
            pathname: `/${active}`,
            query: {
              id: `${e.key}`,
              type: toTitleCase(active),
            },
          })
        }
    }
  }

  async function fetchSelectLookup(username, value) {
    if (username) {
      const response = await fetchSearchJSON(
        `${
          appConfig.socketURL
        }/home/search?q=${username.toLowerCase()}&cat=${value}&limit=-1`
      ).then((body) =>
        body?.length > 0
          ? body?.map((user) => {
              return {
                label: (
                  <>
                    <div>{user.label}</div>
                    <div className="desc_search">{user.keywords}</div>
                  </>
                ),
                // label: `${user.label}`,
                value: user.label,
                key: user.id,
              }
            })
          : [
              {
                label: username,
                value: username,
                key: username,
              },
            ]
      )

      return response
    }
  }

  // For Random input search
  const onSelect = (data, active, type) => {
    // console.log('onSelect', data, active, type)
    // router.push({
    //   pathname: `/${active}`,
    //   query: {
    //     value: data.value,
    //     id: `${data.key}`,
    //     type: type,
    //   },
    // })
  }

  //Search enter actions
  const handleKeyDown = (event, active, type) => {
    if (event.key === 'Enter') {
      console.log('do validate', event.target.value, active, type)
      router.push({
        pathname: `/${active}`,
        query: {
          value: event.target.value,
          id: ``,
          type: type,
        },
      })
    }
  }

  switch (active) {
    case 'treatment':
      return treatments.map((treatment, key) => {
        return (
          <Col
            style={{
              width: '20%',
              borderRight: treatment.border ? borderPicker(active, 1) : '',
            }}
            key={`type-search-${key}`}
          >
            <GlobalSearchSection span={18}>
              <TextGroup>{treatment.title}</TextGroup>
            </GlobalSearchSection>
            <SearchInputWrapper justify="center" align="space-around" active="">
              <AutocompleteSelectBlock
                placeholder={treatment.placeholder}
                allowClear
                fetchOptions={(e) => fetchSelectLookup(e, treatment.type)}
                searchDispatch={(e) =>
                  handleSearch(e, treatment.type, 'Hospital')
                }
                datasourceitem={fetchDefaultOptions(
                  defaultSearchOptions,
                  treatment.type
                )}
                dropdownAlign={{
                  // points: ['tl', 'bl'], // align dropdown bottom-left to top-left of input element
                  offset: [-100, 5], // align offset
                  overflow: {
                    adjustX: 1,
                    adjustY: 2, // do not auto flip in y-axis
                  },
                }}
                onSelect={(e) => onSelect(e, treatment.type, 'Hospital')}
                onKeyDown={(e) => handleKeyDown(e, treatment.type, 'Hospital')}
                dropdownStyle={{ minWidth: '30%' }}
              />
            </SearchInputWrapper>
          </Col>
        )
      })
    case 'hospital':
      return hospitals.map((hospital, key) => {
        return (
          <Col
            style={{
              width: '20%',
              borderRight: hospital.border ? borderPicker(active, 1) : '',
            }}
            key={`type-search-${key}`}
          >
            <GlobalSearchSection span={18}>
              <TextGroup>{hospital.title}</TextGroup>
            </GlobalSearchSection>
            <SearchInputWrapper justify="center" align="space-around" active="">
              <AutocompleteSelectBlock
                placeholder={hospital.placeholder}
                allowClear
                fetchOptions={(e) => fetchSelectLookup(e, hospital.type)}
                searchDispatch={(e) =>
                  handleSearch(e, hospital.type, 'TopHospital')
                }
                datasourceitem={fetchDefaultOptions(
                  defaultSearchOptions,
                  hospital.type
                )}
                dropdownAlign={{
                  // points: ['tl', 'bl'], // align dropdown bottom-left to top-left of input element
                  offset: [-100, 5], // align offset
                  overflow: {
                    adjustX: 1,
                    adjustY: 2, // do not auto flip in y-axis
                  },
                }}
                onSelect={(e) => onSelect(e, hospital.type, 'TopHospital')}
                onKeyDown={(e) =>
                  handleKeyDown(e, hospital.type, 'TopHospital')
                }
                dropdownStyle={{ minWidth: '30%' }}
              />
            </SearchInputWrapper>
          </Col>
        )
      })

    case 'doctor':
      return doctors.map((doctor, key) => {
        return (
          <Col
            style={{
              width: '20%',
              borderRight: doctor.border ? borderPicker(active, 1) : '',
            }}
            key={`type-search-${key}`}
          >
            <GlobalSearchSection span={18}>
              <TextGroup>{doctor.title}</TextGroup>
            </GlobalSearchSection>
            <SearchInputWrapper justify="center" align="space-around" active="">
              <AutocompleteSelectBlock
                placeholder={doctor.placeholder}
                allowClear
                fetchOptions={(e) => fetchSelectLookup(e, doctor.type)}
                searchDispatch={(e) => handleSearch(e, doctor.type, 'Doctor')}
                datasourceitem={fetchDefaultOptions(
                  defaultSearchOptions,
                  doctor.type
                )}
                dropdownAlign={{
                  // points: ['tl', 'bl'], // align dropdown bottom-left to top-left of input element
                  offset: [-100, 5], // align offset
                  overflow: {
                    adjustX: 1,
                    adjustY: 2, // do not auto flip in y-axis
                  },
                }}
                onSelect={(e) => onSelect(e, doctor.type, 'Doctor')}
                onKeyDown={(e) => handleKeyDown(e, doctor.type, 'Doctor')}
                dropdownStyle={{ minWidth: '30%' }}
              />
            </SearchInputWrapper>
          </Col>
        )
      })
    default:
      return comingSoon.map((cs, i) => (
        <div key={i}>
          <Col
            span={24}
            style={{
              height: '10vh',
              fontWeight: 450,
              // background: '#FFE5C3',
              textAlign: 'center',
            }}
          >
            <Title
              type="warning"
              level={2}
              style={{
                color: '#DD5D00',
                fontWeight: 600,
                fontFamily: 'Inter',
                fontSize: '35px',
                letterSpacing: '-0.159848px',
              }}
            >
              {cs.title}
            </Title>
            <Spacer height={50} />
          </Col>
          <GlobalSearchButtonWell type="primary" size="large" active={active}>
            SEARCH
          </GlobalSearchButtonWell>
        </div>
      ))
  }
}
export default BannerSearch
