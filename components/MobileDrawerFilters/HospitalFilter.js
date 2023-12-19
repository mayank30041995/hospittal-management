import React from 'react'
import {
  ColContainer,
  DrawerContainer,
  FilterItem,
  SearchText,
} from './drawer.styled'
const _ = require('lodash')
import { Col, Row } from 'antd'
import { PlusOutlined, CloseOutlined } from '@ant-design/icons'
import { ButtonWrapper } from '../NavLayout/module.styled'
import { fetchSearchJSON } from '@/utils/apiCalls'
import appConfig from '@/utils/appConfig'
import { useState } from 'react'
import { useEffect } from 'react'
import {
  loadSearchDoctor,
  loadSearchHospital,
} from '@/redux/actions/searchAction'
import { getPath } from '../helper/globalSearchHelper'
import { drawerFilter } from '@/redux/actions/appAction'
import { searches } from '../Search/cities'

function HospitalFilter({ dispatch, type, searchResult, qid, ...props }) {
  const [idSelect, setIdSelect] = useState('')
  const [resultsHospital, setResultsHospital] = useState([])
  const [loading, setLoading] = useState(true)
  const {
    activeUrl,
    filters,
    pagination,
    resultType,
    pageType,
    search,
    setSearch,
  } = props

  useEffect(() => {
    if (searchResult.length) {
      setLoading(false)
      setResultsHospital(searchResult)
    }
  }, [])

  const onSearch = (searchVal, type) => {
    setLoading(true)

    if (searchVal.length > 0) {
      return fetchSearchJSON(
        `${appConfig.socketURL}/hospitals?${pageType}=${qid}&_start=0&_limit=3&[Name_contains]=${searchVal}`
      ).then((body) => {
        setLoading(false)
        setResultsHospital(body)
      })
    } else {
      setLoading(false)
      setResultsHospital(searchResult)
    }
  }
  let debounce_fun = _.debounce(function (e, type) {
    onSearch(e, type)
  }, 1000)

  let getStyle = (result) => ({
    border: idSelect === result._id ? '2px solid #4096ff' : 'none',
  })

  return (
    <>
      <ColContainer span={24}>
        <SearchText
          size="medium"
          bordered={false}
          placeholder="Search a hospital"
          onChange={(e) => debounce_fun(e.target.value, 'hospital')}
        />
        {loading ? (
          <span style={{ marginLeft: '22px', color: '#09509F' }}>
            Loading...
          </span>
        ) : (
          <>
            {resultsHospital &&
              resultsHospital.length > 0 &&
              resultsHospital?.slice(0, 3)?.map((result, i) => {
                let { id, Name } = result
                return (
                  <FilterItem
                    justify="space-between"
                    key={id}
                    onClick={(e) => {
                      e.stopPropagation()
                      let value = {
                        label: `${result.Name}`,
                        value: result.Name,
                        key: result._id,
                        title: 'hospital',
                      }

                      setSearch([{ ...searches[0], ...value }])
                      dispatch(drawerFilter({ drawer: false, filterType: '' }))
                      setIdSelect(result._id)
                    }}
                    style={getStyle(result)}
                  >
                    {Name?.length > 45 ? `${Name?.slice(0, 38)}...` : Name}
                    {idSelect !== result._id ? (
                      <PlusOutlined />
                    ) : (
                      <CloseOutlined
                        onClick={(e) => {
                          e.stopPropagation()
                          setIdSelect('')
                        }}
                      />
                    )}
                  </FilterItem>
                )
              })}
          </>
        )}
      </ColContainer>
      <Col span={24}>
        <ButtonWrapper
          colors="primary"
          style={{ margin: '8px 21px', width: '88%' }}
          onClick={() => {
            if (
              (resultType === 'Hospital' || resultType === 'TopHospital') &&
              qid
            ) {
              dispatch(
                loadSearchHospital(pageType, filters, pagination.start, search)
              )
            } else if (resultType === 'Doctor' && qid) {
              dispatch(
                loadSearchDoctor(pageType, filters, pagination.start, search)
              )
            }
            // dispatch(drawerFilter({ drawer: false, filterType: '' }))
          }}
        >
          Apply
        </ButtonWrapper>
      </Col>
    </>
  )
}

export default HospitalFilter
