import React, { memo } from 'react'
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
import { cities, searches } from '../Search/cities'
import { drawerFilter } from '@/redux/actions/appAction'

function CityFilter({ dispatch, type, searchResult, qid, ...props }) {
  const [idSelect, setIdSelect] = useState('')
  const [allCities, setAllCities] = useState(cities)
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

  let getStyle = (city) => ({
    border: idSelect === city.key ? '2px solid #4096ff' : 'none',
  })
  const onSearch = (searchVal, type) => {
    setLoading(true)

    if (searchVal.length > 0) {
      const filterBySearch = cities.filter((item) => {
        if (item.value.toLowerCase().includes(searchVal.trim().toLowerCase())) {
          return item
        }
      })
      setLoading(false)
      setAllCities(filterBySearch)
    } else {
      setLoading(false)
      setAllCities(cities)
    }
  }
  return (
    <>
      <ColContainer span={24}>
        <SearchText
          size="medium"
          bordered={false}
          placeholder="Search a city"
          onChange={(e) => onSearch(e.target.value, 'name')}
        />
        {allCities.slice(0, 3).map((city, i) => (
          <FilterItem
            justify="space-between"
            key={i}
            style={getStyle(city)}
            onClick={(e) => {
              e.stopPropagation()
              let value = {
                label: `${city.value}`,
                value: city.value,
                key: city.key,
                title: 'city',
              }
              setSearch([
                ...searches.slice(0, 1),
                { ...searches[1], ...value },
                ...searches.slice(1 + 1),
              ])
              dispatch(drawerFilter({ drawer: false, filterType: '' }))
              setIdSelect(city.key)
            }}
          >
            {city.label} <PlusOutlined />
          </FilterItem>
        ))}
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
          }}
        >
          Apply
        </ButtonWrapper>
      </Col>
    </>
  )
}

export default CityFilter
