import React, { useEffect } from 'react'
import { Col, Row, Typography } from 'antd'
import router from 'next/router'
import appConfig from '@/utils/appConfig'
import { useRouter } from 'next/router'
import {
  ColBlock,
  ColSearchSmall,
  GlobalSearchMobWrapper,
} from '../home/Banner/search.styled'
import { useState } from 'react'
import {
  checkVisible,
  getTypeFetch,
} from '@/components/helper/globalSearchHelper'
import { getPlaceholder } from '@/components/helper/globalSearchHelper'
import { fetchJSON, fetchSearchJSON } from '@/utils/apiCalls'
import { searchSelect, sort } from '../Search/cities'
import { AutoCompleteSelect, SelectGroupSearch } from './globalSearch.styled'
import { HideDisplayContents } from '../Dashboard/dashboardmobile.styled'
import { fetchDefaultOptions } from '@/components/helper/fetchSelectLookup'
function MobileMultipleSearch({
  resultType,
  activeUrl,
  defaultValue,
  handleSearch,
  treatments,
  specialities,
  defaultSearchOptions,
}) {
  return (
    <div>
      {MobileBanner(
        resultType,
        activeUrl,
        defaultValue,
        handleSearch,
        treatments,
        specialities,
        defaultSearchOptions
      )}
    </div>
  )
}

const MobileBanner = (
  resultType,
  activeUrl,
  defaultValue,
  handleSearch,
  treatments,
  specialities,
  defaultSearchOptions
) => {
  const { Text } = Typography
  const [active, setActive] = useState('treatment')
  let [activeURLs, setActiveURLs] = useState('')
  const router = useRouter()

  const getDefaultOptions = (type) => {
    console.log('router.pathname', router.query.type, type)
    if (type === 'Hospital') {
      setActive('treatment')
    } else if (type === 'TopHospital') {
      setActive('hospital')
    } else if (type === 'Doctor') {
      setActive('doctor')
    }
  }
  useEffect(() => {
    if (router.query.type) {
      return getDefaultOptions(router.query.type)
    }
  }, [router.query.type])

  useEffect(() => {
    setActiveURLs(activeUrl)
  }, [])

  const handleSearchResult = (e, active, type) => {
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
                console.log('RenderSwitch2', value)
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
      default:
        if (e?.key) {
          router.push({
            pathname: `/${active}`,
            query: {
              value: `${e.value.replace(/\s/g, '-')}`,
              id: `${e.key}`,
              type: type,
            },
          })
        }
    }
  }
  async function fetchSelectLookup(username, value) {
    if (username) {
      return fetchSearchJSON(
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
    }
  }

  const getSearchByType = (active) => {
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

    switch (active) {
      case 'treatment':
        return treatments?.map((treatment, key) => {
          activeURLs = activeURLs === 'specialities' ? 'speciality' : activeURLs

          return (
            <HideDisplayContents key={`type-search-${key}`}>
              {treatment.type === activeURLs && (
                <ColSearchSmall
                  span={24}
                  key={`type-search-${key}`}
                  code="#06509F"
                >
                  {' '}
                  <ColBlock>
                    <SelectGroupSearch
                      placeholder={treatment.title}
                      allowClear
                      // value={treatment.title}
                      onChange={(e) => setActiveURLs(e)}
                      options={searchSelect}
                      size="medium"
                      style={{
                        background: '#fff',
                      }}
                    />
                    {/* <TextMob active={active}>{treatment.title}</TextMob> */}
                    <AutoCompleteSelect
                      size="small"
                      values={getTypeFetch(treatment, defaultValue, activeUrl)}
                      placeholder={getPlaceholder(
                        treatment,
                        defaultValue,
                        resultType
                      )}
                      disabled={checkVisible(treatment, resultType)}
                      allowClear
                      fetchOptions={(e) => fetchSelectLookup(e, treatment.type)}
                      searchDispatch={(e) =>
                        handleSearchResult(e, treatment.type, router.query.type)
                      }
                      onSelect={(e) => onSelect(e, treatment.type, resultType)}
                      datasourceitem={fetchDefaultOptions(
                        defaultSearchOptions,
                        treatment.type
                      )}
                    />
                  </ColBlock>
                  {/* <Col>
                    <SearchOutlined size="large" />
                  </Col> */}
                </ColSearchSmall>
              )}
            </HideDisplayContents>
          )
        })
    }
  }

  return (
    <>
      <GlobalSearchMobWrapper active={active} listing="true">
        {getSearchByType('treatment')}
        {/* <SearchBtn span={24} active={active}>
          <TextSearchMob level={4}>Search</TextSearchMob>
        </SearchBtn> */}
      </GlobalSearchMobWrapper>
    </>
  )
}

export default MobileMultipleSearch
