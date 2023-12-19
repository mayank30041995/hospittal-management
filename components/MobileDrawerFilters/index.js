import React, { memo, useState } from 'react'
import {
  ColContainer,
  DrawerContainer,
  FilterItem,
  SearchText,
} from './drawer.styled'
import { Col, Row } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
// import { ButtonWrapper } from '../NavLayout/module.styled'
import HospitalFilter from './HospitalFilter'
import CityFilter from './CityFilter'
import RatingFilter from './RatingFilter'

const MobileDrawerFilters = ({
  dispatch,
  searchResult,
  type,
  qid,
  ...props
}) => {
  let { search, setSearch } = props
  switch (type) {
    case 'city':
      return (
        <DrawerContainer>
          <CityFilter
            search={search}
            setSearch={setSearch}
            dispatch={dispatch}
            searchResult={searchResult}
            qid={qid}
            {...props}
          />
        </DrawerContainer>
      )
    case 'hospital':
      return (
        <DrawerContainer>
          <HospitalFilter
            search={search}
            setSearch={setSearch}
            dispatch={dispatch}
            searchResult={searchResult}
            qid={qid}
            {...props}
          />
        </DrawerContainer>
      )
    case 'rating':
      return (
        <DrawerContainer>
          <RatingFilter
            search={search}
            setSearch={setSearch}
            dispatch={dispatch}
            searchResult={searchResult}
            qid={qid}
            {...props}
          />
        </DrawerContainer>
      )

    default:
      return ''
  }
}

export default memo(MobileDrawerFilters)
