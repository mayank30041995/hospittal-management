import { Button, Col, Row, Typography } from 'antd'
import { memo, useEffect, useState } from 'react'
import Spacer from 'react-spacer'
import SearchResults from '../Search/SearchResults'
import {
  AutoCompleteArea,
  ChipStatus,
  SelectItems,
} from '../Search/search.styled'
import {
  checkVisible,
  conditions,
  getPath,
  getPlaceholder,
  getTypeFetch,
  specialities,
  treatments,
} from '../helper/globalSearchHelper'
import {
  loadSearchHospital,
  loadSearchDoctor,
  nextPage,
  previousPage,
  refreshApp,
} from '@/redux/actions/searchAction'
import { useRouter } from 'next/router'
import { fetchJSON } from '@/utils/apiCalls'
import appConfig from '@/utils/appConfig'
import {
  fetchDefaultOptions,
  fetchSelectLookup,
} from '@/components/helper/fetchSelectLookup'
import { GlobalSearchWrapper, SearchColumn } from './globalSearch.styled'
import BackLink from '../BackLink'
import { PlusOutlined, CloseOutlined } from '@ant-design/icons'
import MobileMultipleSearch from './MobileMultipleSearch'
import SearchStatus from '../SearchStatus'
import Pagination from '../Pagination'
import { getLinks } from '../Search/getLinks'
import { useMemo } from 'react'
import { handleSearchTypes } from '../Search/handleSearchTypes'
import FilterChips from '../Search/FilterChips'
let fullWidth = { width: '100%' }

const Condition = ({ ...props }) => {
  const router = useRouter()
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
  const { speciality } = router.query
  const [resultType, setResultType] = useState('')
  const [defaultValue, setDefaultValue] = useState(value)
  let [activeUrl, setActiveUrl] = useState('condition')
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
    if (speciality) {
      fetchJSON(
        `${
          appConfig.socketURL
        }/hospitals?${'specialities'}=${speciality}&view=search&_start=0&_limit=100`
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
      fetchJSON(
        `${appConfig.socketURL}/doctors?${'specialities'}=${speciality}`
      ).then((value) => {
        if (value.length) {
          console.log('fetchJSON', value)
          const results = value.map((doctor) => ({
            label: doctor.Name,
            value: doctor.id,
          }))
          setDoctorResults(results)
        }
      })
    } else if (qid && !loading) {
      fetchJSON(
        `${appConfig.socketURL}/hospitals?${activeUrl}s=${qid}&view=search&_start=0&_limit=100`
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
  }, [qid, router, activeUrl, loading, speciality])

  useEffect(() => {
    if (speciality) {
      if (resultType === 'Hospital' || resultType === 'TopHospital') {
        if (defaultValue !== '') {
          dispatch(
            loadSearchHospital(
              getPath('specialities'),
              [{ key: speciality }],
              start,
              search
            )
          )
        } else {
          dispatch(
            loadSearchHospital(getPath('specialities'), [], start, search)
          )
        }
      } else if (resultType === 'Doctor') {
        if (defaultValue !== '') {
          dispatch(
            loadSearchDoctor(
              getPath('specialities'),
              [{ key: speciality }],
              start,
              search
            )
          )
        } else {
          dispatch(loadSearchDoctor(getPath('specialities'), [], start, search))
        }
      }
    } else if (
      qid &&
      activeUrl !== '' &&
      (filters.length || defaultValue === '')
    ) {
      if (resultType === 'Hospital' || resultType === 'TopHospital') {
        dispatch(
          loadSearchHospital(
            getPath(activeUrl),
            filters || [{ key: qid }],
            start,
            search
          )
        )
      } else if (resultType === 'Doctor') {
        dispatch(
          loadSearchDoctor(
            getPath(activeUrl),
            filters || [{ key: qid }],
            start,
            search
          )
        )
      }
    }
  }, [start, filters, activeUrl, resultType, search, speciality])

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

  const handleSearch = (e, value) => {
    if (resultType) {
      handleSearchTypes(router, e, value, resultType)
    }
  }

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
            <FilterChips search={search} changeSearch={setSearch} />
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
          <FilterChips search={search} changeSearch={setSearch} />
        )}
      </BackLink>
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
        search={search}
        setSearch={setSearch}
        hospitalResult={searchResult}
        doctorResult={searchDoctorResult}
        resultType={resultType}
        searchKey={getPath(activeUrl)}
        hospitalResults={hospitalResults}
        selectedId={qid}
        auth={auth}
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
        <Pagination
          page={page}
          start={start}
          count={count}
          previousPage={previousPage}
          nextPage={nextPage}
          dispatch={dispatch}
          fullWidth={fullWidth}
        />
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
    case 'condition':
      return (
        conditions.length &&
        conditions.map((condition, key) => (
          <SearchColumn
            key={key}
            span={condition.span}
            border={condition.border}
          >
            {' '}
            {/* <SearchInputWrapper active=""> */}{' '}
            {condition.flag === 'hospital' ? (
              <SelectItems
                size="large"
                notFoundContent={hospitalResults.length === 0 && 'loading ...'}
                disabled={checkVisible(condition, resultType)}
                placeholder={getPlaceholder(
                  condition,
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
            ) : condition.flag === 'doctor' ? (
              <SelectItems
                size="large"
                notFoundContent={doctorResults.length === 0 && 'loading ...'}
                disabled={checkVisible(condition, resultType)}
                placeholder={getPlaceholder(
                  condition,
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
                values={getTypeFetch(condition, defaultValue, activeUrl)}
                placeholder={getPlaceholder(
                  condition,
                  defaultValue,
                  resultType
                )}
                allowClear
                disabled={checkVisible(condition, resultType)}
                style={{ border: '1 px solid #fff' }}
                fetchOptions={(e) => fetchSelectLookup(e, condition)}
                searchDispatch={(e) => handleSearch(e, condition)}
                datasourceitem={fetchDefaultOptions(
                  defaultSearchOptions,
                  condition.type
                )}
                dropdownAlign={{
                  points: ['tl', 'bl'], // align dropdown bottom-left to top-left of input element
                  offset: [-100, 5], // align offset
                  overflow: {
                    adjustX: 1,
                    adjustY: 2, // do not auto flip in y-axis
                  },
                }}
                onSelect={(e) => onSelect(e, condition.type, resultType)}
                onKeyDown={(e) => handleKeyDown(e, condition.type, resultType)}
                dropdownStyle={{ minWidth: '30%' }}
              />
            )}
            {/* </SearchInputWrapper> */}
          </SearchColumn>
        ))
      )
  }
}

export default memo(Condition)
