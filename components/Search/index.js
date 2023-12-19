import { Button, Col } from 'antd'
import { memo, useEffect, useState, useMemo } from 'react'
const _ = require('lodash')
import Spacer from 'react-spacer'
import SearchResults from './SearchResults'
import { AutoCompleteArea, ChipStatus, SelectItems } from './search.styled'

import {
  checkVisible,
  getPath,
  getPlaceholder,
  getTypeFetch,
  specialities,
  treatments,
} from '../helper/globalSearchHelper'
import {
  loadSearchHospital,
  loadSearchDoctor,
} from '@/redux/actions/searchAction'
import { useRouter } from 'next/router'
import {
  fetchDefaultOptions,
  fetchSelectLookup,
} from '@/components/helper/fetchSelectLookup'
import {
  GlobalSearchWrapper,
  SearchColumn,
} from '../Condition/globalSearch.styled'
import BackLink from '../BackLink'
import MobileMultipleSearch from '../Condition/MobileMultipleSearch'
import SearchStatus from '../SearchStatus'
import { fetchJSON } from '@/utils/apiCalls'
import appConfig from '@/utils/appConfig'
import { getLinks } from './getLinks'
import { handleSearchTypes } from './handleSearchTypes'
import FilterChips from './FilterChips'

const Search = ({ ...props }) => {
  let {
    search,
    setSearch,
    loading,
    searchResult,
    searchDoctorResult,
    dispatch,
    type,
    count,
    pagination,
    qid,
    filters,
    setFilters,
    defaultSearchOptions,
    auth,
  } = props
  let { value } = type
  const router = useRouter()
  const [resultType, setResultType] = useState('')
  const [defaultValue, setDefaultValue] = useState(value)
  let [activeUrl, setActiveUrl] = useState('specialities')
  const [hospitalResults, setHospitalResults] = useState([])
  const [doctorResults, setDoctorResults] = useState([])
  // const [selectedId, setSelectedId] = useState(qid)

  const links = useMemo(() => {
    return getLinks(resultType, defaultValue)
  }, [resultType, defaultValue])

  let { start, page } = pagination

  useEffect(() => {
    if (router.query.type) {
      setResultType(router.query.type)
    }
    activeUrl =
      activeUrl === 'speciality' || activeUrl === 'specialities'
        ? 'specialitie'
        : activeUrl
    // For lookup doctors and hospitals with selectedId
    if (qid && !loading) {
      fetchJSON(
        `${appConfig.socketURL}/hospitals?${activeUrl}s=${qid}&view=search&_start=0&_limit=-1`
      ).then((value) => {
        if (value.length) {
          const results = value.map((hospital) => ({
            label: hospital.Name,
            value: hospital.id,
            city: hospital.City,
          }))

          setHospitalResults(results)
        }
      })
      fetchJSON(`${appConfig.socketURL}/doctors?${activeUrl}s=${qid}`).then(
        (value) => {
          if (value.length) {
            console.log('fetchJSON', value)
            const results = value.map((doctor) => ({
              label: doctor.Name,
              value: doctor.id,
            }))
            setDoctorResults(results)
          }
        }
      )
    }
  }, [qid, loading])

  useEffect(() => {
    if (activeUrl !== '' || filters.length) {
      if (resultType === 'Hospital' || resultType === 'TopHospital') {
        if (defaultValue !== '') {
          dispatch(
            loadSearchHospital(
              getPath(activeUrl),
              filters || [{ key: qid }],
              start,
              search
            )
          )
        } else {
          dispatch(loadSearchHospital(getPath(activeUrl), [], start, search))
        }
      } else if (resultType === 'Doctor') {
        if (defaultValue !== '') {
          dispatch(
            loadSearchDoctor(
              getPath(activeUrl),
              filters || [{ key: qid }],
              start,
              search
            )
          )
        } else {
          dispatch(loadSearchDoctor(getPath(activeUrl), [], start, search))
        }
      }
    } else {
      // For Drawer Nav Get Hospital and doctors Only
      resultType === 'TopHospital' && value === 'All' && qid === ''
        ? dispatch(
            loadSearchHospital(getPath(activeUrl), filters, start, search)
          )
        : null
    }
  }, [start, filters, defaultValue, resultType, activeUrl, search])

  const handleSearch = (e, value) => {
    if (resultType) {
      handleSearchTypes(router, e, value, resultType)
    }
  }

  // Filtered Titles Status
  let allKeys =
    filters &&
    filters.map((e) => {
      if (e && e?.label) {
        return e?.label
      }
    })
  var filtered = allKeys.filter(function (el) {
    return el != null
  })
  let titles = filtered.join(', ')

  return (
    <>
      <Col span={21} push={1}>
        <BackLink myLinks={links} type="mobile">
          {(search[0]?.value !== '' ||
            search[1]?.value !== '' ||
            search[2]?.key !== '' ||
            search[3]?.key !== '' ||
            search[5]?.key !== '' ||
            search[6]?.key !== '' ||
            search[7]?.key ||
            search[8]?.key) && (
            <FilterChips
              search={search}
              changeSearch={setSearch}
              type={resultType}
            />
          )}
        </BackLink>
        <GlobalSearchWrapper
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          {getSearchByActive(
            router,
            hospitalResults,
            doctorResults,
            resultType,
            activeUrl,
            defaultValue,
            handleSearch,
            fetchSelectLookup,
            treatments,
            specialities,
            defaultSearchOptions
          )}
        </GlobalSearchWrapper>
      </Col>

      {/* Link Status For Page */}

      <BackLink myLinks={links} type="desktop">
        {(search[0]?.value !== '' ||
          search[1]?.value !== '' ||
          search[2]?.key !== '' ||
          search[3]?.key !== '' ||
          search[5]?.key !== '' ||
          search[6]?.key !== '' ||
          search[7]?.key ||
          search[8]?.key) && (
          <FilterChips
            search={search}
            changeSearch={setSearch}
            type={resultType}
          />
        )}
      </BackLink>

      {/* Mobile UI Search Engine */}
      <MobileMultipleSearch
        resultType={resultType}
        activeUrl={activeUrl}
        defaultValue={defaultValue}
        handleSearch={handleSearch}
        treatments={treatments}
        specialities={specialities}
        defaultSearchOptions={defaultSearchOptions}
      />
      <Spacer height="24px" />

      {/* Titles, Filter Panel & Slider  */}

      <SearchResults
        count={count}
        search={search}
        setSearch={setSearch}
        hospitalResult={searchResult}
        doctorResult={searchDoctorResult}
        resultType={resultType}
        searchKey={getPath(activeUrl)}
        hospitalResults={hospitalResults}
        selectedId={qid}
        auth={auth}
        defaultValue={defaultValue}
        {...props}
      >
        <SearchStatus
          count={count}
          defaultValue={defaultValue}
          setDefaultValue={setDefaultValue}
          resultType={resultType}
          setFilters={setFilters}
          titles={titles}
          type={type}
          {...props}
        />
      </SearchResults>

      {/* Pagination */}
      <Col push={12}>
        <Spacer height={10} />
      </Col>
    </>
  )
}

const getSearchByActive = (
  router,
  hospitalResults,
  doctorResults,
  resultType,
  activeUrl,
  defaultValue,
  handleSearch,
  fetchSelectLookup,
  treatments,
  specialities,
  defaultSearchOptions
) => {
  // For default input search
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

  //Search enter actions
  const handleKeyDown = (event, active, type) => {
    if (event.key === 'Enter') {
      // console.log('do validate', event.target.value, active, type)
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

  switch (activeUrl) {
    case 'speciality':
    case 'specialities':
      return (
        specialities.length &&
        specialities.map((speciality, key) => (
          <SearchColumn
            key={key}
            span={speciality.span}
            border={speciality.border}
          >
            {/* <SearchInputWrapper active=""> */}
            {speciality.flag === 'hospital' ? (
              <SelectItems
                size="large"
                notFoundContent={hospitalResults.length === 0 && 'loading ...'}
                disabled={checkVisible(speciality, resultType)}
                placeholder={getPlaceholder(
                  speciality,
                  defaultValue,
                  resultType
                )}
                style={{
                  width: '95%',
                }}
                onChange={(e) =>
                  router.push({
                    pathname: `/hospital`,
                    query: {
                      id: `${e}`,
                      type: 'Hospital',
                    },
                  })
                }
                options={hospitalResults}
                dropdownAlign={{
                  points: ['tl', 'bl'], // align dropdown bottom-left to top-left of input element
                  offset: [-100, 5], // align offset
                  overflow: {
                    adjustX: 1,
                    adjustY: 2, // do not auto flip in y-axis
                  },
                }}
                dropdownStyle={{ minWidth: '30%' }}
              />
            ) : speciality.flag === 'doctor' ? (
              <SelectItems
                size="large"
                notFoundContent={doctorResults.length === 0 && 'loading ...'}
                disabled={checkVisible(speciality, resultType)}
                placeholder={getPlaceholder(
                  speciality,
                  defaultValue,
                  resultType
                )}
                style={{
                  width: '95%',
                }}
                onChange={(e) =>
                  router.push({
                    pathname: `/doctor`,
                    query: {
                      id: `${e}`,
                      type: 'Doctor',
                    },
                  })
                }
                options={doctorResults}
                dropdownAlign={{
                  points: ['tl', 'bl'], // align dropdown bottom-left to top-left of input element
                  offset: [-100, 5], // align offset
                  overflow: {
                    adjustX: 1,
                    adjustY: 2, // do not auto flip in y-axis
                  },
                }}
                dropdownStyle={{ minWidth: '28%' }}
              />
            ) : (
              <AutoCompleteArea
                values={getTypeFetch(speciality, defaultValue, activeUrl)}
                placeholder={getPlaceholder(
                  speciality,
                  defaultValue,
                  resultType
                )}
                allowClear
                disabled={checkVisible(speciality, resultType)}
                style={{ border: '1 px solid #fff' }}
                fetchOptions={(e) => fetchSelectLookup(e, speciality)}
                searchDispatch={(e) => handleSearch(e, speciality)}
                datasourceitem={fetchDefaultOptions(
                  defaultSearchOptions,
                  speciality.type
                )}
                dropdownAlign={{
                  points: ['tl', 'bl'], // align dropdown bottom-left to top-left of input element
                  offset: [-100, 5], // align offset
                  overflow: {
                    adjustX: 1,
                    adjustY: 2, // do not auto flip in y-axis
                  },
                }}
                onSelect={(e) => onSelect(e, speciality.type, resultType)}
                onKeyDown={(e) => handleKeyDown(e, speciality.type, resultType)}
                dropdownStyle={{ minWidth: '30%' }}
              />
            )}
            {/* </SearchInputWrapper> */}
          </SearchColumn>
        ))
      )
  }
}
export default memo(Search)
