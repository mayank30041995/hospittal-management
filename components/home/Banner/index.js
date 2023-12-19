import {
  AutoCompleteSelect,
  ColBlock,
  ColMobSection,
  ColSearchSmall,
  CommaIcons,
  GlobalSearchMobWrapper,
  SearchBtn,
  SearchInputWrapper,
  SearchMobWrapper,
  TextMob,
  TextMobArea,
  TextSearchMob,
  TitleWrapper,
} from './search.styled'
import SearchBanner from '../FilteredLayout'
import Services from '../Services'
import PostTitle from '../Services/PostTitle'
import router from 'next/router'
import BannerSearch from './BannerSearch'
import { Col, Row, Typography } from 'antd'
import { useState } from 'react'
import AutocompleteSelect from '../../AutoComplete'
import { doctors, hospitals, treatments } from './helper'
import appConfig from '@/utils/appConfig'
import { SearchOutlined } from '@ant-design/icons'
import { fetchJSON, fetchSearchJSON } from '@/utils/apiCalls'
import { useSelector } from 'react-redux'
import { fetchDefaultOptions } from '@/components/helper/fetchSelectLookup'

const Search = () => {
  const defaultSearchOptions = useSelector(
    (state) => state.app?.defaultSearchOptions
  )
  return (
    <>
      <TitleWrapper justify="center" align="space-around" hide="true">
        <BannerSearch defaultSearchOptions={defaultSearchOptions} />
      </TitleWrapper>
      {MobileBanner()}
      <SearchBanner />
      <Services />

      <PostTitle>
        <CommaIcons>
          <img src="commaone.png" alt="hosplan_logo.png" />
          <img src="commatwo.png" alt="hosplan_logo.png" />
        </CommaIcons>
        We sincerely do everything within our means to support our patients
      </PostTitle>
    </>
  )
}

const MobileBanner = () => {
  const { Text } = Typography
  const [active, setActive] = useState('treatment')
  const defaultSearchOptions = useSelector(
    (state) => state.app?.defaultSearchOptions
  )

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
    // console.log('mySearch', e, active, type)

    switch (active) {
      case 'treatment':
        if (e?.key) {
          let path = active && active.concat('s')
          fetchJSON(`${appConfig.socketURL}/${path}/${e?.key}`).then(
            (value) => {
              if (!_.isEmpty(value)) {
                let specialitiesId =
                  value?.specialities?.length > 0
                    ? value.specialities[0].id
                    : ''
                router.push({
                  pathname: `/${active}`,
                  query: {
                    value: `${e.value.replace(/\s/g, '-')}`,
                    id: `${e.key}`,
                    ...(specialitiesId !== '' && {
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
            (value) => {
              if (!_.isEmpty(value)) {
                let specialitiesId = value?.speciality?.id
                router.push({
                  pathname: `/${active}`,
                  query: {
                    value: `${e.value.replace(/\s/g, '-')}`,
                    id: `${e.key}`,
                    ...(specialitiesId !== '' && {
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
    // console.log('fetching user', username, getCategory(active))
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
      // let data = []
      // if (response.length) {
      //   data = response.filter((res) => {
      //     return res.label.toLowerCase().includes(username.toLowerCase())
      //   })
      // }
      return response
    }
  }

  const getSearchByType = (active) => {
    switch (active) {
      case 'treatment':
        return treatments.map((treatment, key) => {
          return (
            <ColSearchSmall span={24} key={`type-search-${key}`} code="#06509F">
              <ColBlock>
                <TextMob active={active}>{treatment.title}</TextMob>

                <AutoCompleteSelect
                  size="small"
                  placeholder={treatment.placeholder}
                  allowClear
                  fetchOptions={(e) => fetchSelectLookup(e, treatment.type)}
                  searchDispatch={(e) =>
                    handleSearch(e, treatment.type, 'Hospital')
                  }
                  onSelect={(e) => onSelect(e, treatment.type, 'Hospital')}
                  datasourceitem={fetchDefaultOptions(
                    defaultSearchOptions,
                    treatment.type
                  )}
                />
              </ColBlock>
              <Col>
                <SearchOutlined size="large" />
              </Col>
            </ColSearchSmall>
          )
        })
      case 'hospital':
        return hospitals.map((hospital, key) => {
          return (
            <ColSearchSmall span={24} key={`type-search-${key}`} code="#FD7B07">
              <ColBlock>
                <TextMob active={active}>{hospital.title}</TextMob>
                <AutoCompleteSelect
                  size="small"
                  placeholder={hospital.placeholder}
                  allowClear
                  fetchOptions={(e) => fetchSelectLookup(e, hospital.type)}
                  searchDispatch={(e) =>
                    handleSearch(e, hospital.type, 'TopHospital')
                  }
                  onSelect={(e) => onSelect(e, hospital.type, 'TopHospital')}
                  datasourceitem={fetchDefaultOptions(
                    defaultSearchOptions,
                    hospital.type
                  )}
                />
              </ColBlock>
              <Col>
                <SearchOutlined size="large" />
              </Col>
            </ColSearchSmall>
          )
        })

      case 'doctor':
        return doctors.map((doctor, key) => {
          return (
            <ColSearchSmall span={24} key={`type-search-${key}`} code="#F0C48A">
              <ColBlock>
                <TextMob active={active}>{doctor.title}</TextMob>
                <AutoCompleteSelect
                  size="small"
                  placeholder={doctor.placeholder}
                  allowClear
                  fetchOptions={(e) => fetchSelectLookup(e, doctor.type)}
                  searchDispatch={(e) => handleSearch(e, doctor.type, 'Doctor')}
                  onSelect={(e) => onSelect(e, doctor.type, 'Doctor')}
                  datasourceitem={fetchDefaultOptions(
                    defaultSearchOptions,
                    doctor.type
                  )}
                />
              </ColBlock>
              <Col>
                <SearchOutlined size="large" />
              </Col>
            </ColSearchSmall>
          )
        })
    }
  }

  // For Random input search
  const onSelect = (data, active, type) => {
    // router.push({
    //   pathname: `/${active}`,
    //   query: {
    //     value: data.value,
    //     id: `${data.key}`,
    //     type: type,
    //   },
    // })
  }

  return (
    <>
      <GlobalSearchMobWrapper active={active}>
        <SearchMobWrapper justify="space-between" active={active}>
          <ColMobSection
            span={6}
            active={active}
            type="treatment"
            onClick={() => setActive('treatment')}
            style={{
              borderBottom: active === 'treatment' && '4px solid #06509F',
            }}
          >
            <img src="treatment_small.png" alt="hosplan_logo.png" width={44} />
            <TextMobArea> Treatment</TextMobArea>
          </ColMobSection>
          <ColMobSection
            span={6}
            active={active}
            type="hospital"
            onClick={() => setActive('hospital')}
            style={{
              borderBottom: active === 'hospital' && '4px solid #FD7B07',
            }}
          >
            <img
              src="hospitals.png"
              alt="hosplan_logo.png"
              style={{ width: '6vh' }}
            />
            <TextMobArea> Hospitals</TextMobArea>
          </ColMobSection>
          <ColMobSection
            span={6}
            active={active}
            type="doctor"
            onClick={() => setActive('doctor')}
            style={{
              borderBottom: active === 'doctor' && '4px solid #E96161',
            }}
          >
            <img
              src="doctor_small.png"
              alt="hosplan_logo.png"
              style={{ width: '6vh' }}
            />
            <TextMobArea> Doctors</TextMobArea>
          </ColMobSection>
          <ColMobSection
            span={6}
            onClick={() => setActive('wellness')}
            style={{
              borderBottom: active === 'wellness' && '4px solid #F0C48A',
              opacity: active === 'wellness' ? 1 : 0.4,
            }}
          >
            <img
              src="wellness_small.png"
              alt="hosplan_logo.png"
              style={{ width: '6vh' }}
            />
            <TextMobArea> Wellness</TextMobArea>
          </ColMobSection>
        </SearchMobWrapper>
        {getSearchByType(active)}
        <SearchBtn span={24} active={active}>
          <TextSearchMob level={4}>Search</TextSearchMob>
        </SearchBtn>
      </GlobalSearchMobWrapper>
    </>
  )
}

export default Search
