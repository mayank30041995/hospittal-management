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
import { rating, searches } from '../Search/cities'
import { drawerFilter } from '@/redux/actions/appAction'

function RatingFilter({ dispatch, type, searchResult, qid, ...props }) {
  const [idSelect, setIdSelect] = useState('')
  const [allRating, setAllRating] = useState(rating)
  const [loading, setLoading] = useState(true)
  const {
    activeUrl,
    filters,
    pagination,
    resultType,
    pageTyp,
    search,
    setSearch,
  } = props

  let getStyle = (rate) => ({
    border: idSelect === rate.key ? '2px solid #4096ff' : 'none',
  })
  const onSearch = (searchVal, type) => {
    setLoading(true)

    if (searchVal.length > 0) {
      const filterBySearch = rating.filter((item) => {
        if (item.value.toLowerCase().includes(searchVal.trim().toLowerCase())) {
          return item
        }
      })
      setLoading(false)
      setAllRating(filterBySearch)
    } else {
      setLoading(false)
      setAllRating(rating)
    }
  }
  return (
    <>
      <ColContainer span={24}>
        <SearchText
          size="medium"
          bordered={false}
          placeholder="Search a rate"
          onChange={(e) => onSearch(e.target.value, 'name')}
        />
        {allRating.slice(0, 3).map((rate, i) => (
          <FilterItem
            justify="space-between"
            key={i}
            style={getStyle(rate)}
            onClick={(e) => {
              e.stopPropagation()
              let value = {
                label: `${rate.value}`,
                value: rate.value,
                key: rate.key,
                title: 'rate',
              }

              setSearch([
                ...searches.slice(0, 3),
                { ...searches[3], ...value },
                ...searches.slice(3 + 1),
              ])
              dispatch(drawerFilter({ drawer: false, filterType: '' }))
              setIdSelect(rate.key)
            }}
          >
            {rate.label} <PlusOutlined />
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
            // dispatch(drawerFilter({ drawer: false, filterType: '' }))
          }}
        >
          Apply
        </ButtonWrapper>
      </Col>
    </>
  )
}

export default RatingFilter
