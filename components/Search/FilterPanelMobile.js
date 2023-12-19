import React from 'react'
import appConfig from '@/utils/appConfig'
import {
  AutocompleteWrap,
  FilterMobileRow,
  FilterMobileSelects,
} from './search.styled'
import { DownOutlined } from '@ant-design/icons'

import { cities, sort } from './cities'
import { useRouter } from 'next/router'
import {
  loadSearchDoctor,
  loadSearchHospital,
} from '@/redux/actions/searchAction'
import { useEffect } from 'react'
import { useState } from 'react'
import { drawerFilter } from '@/redux/actions/appAction'

function FilterPanelMobile({
  searchResult,
  search,
  setSearch,
  resultType,
  ...props
}) {
  const [toggle, setToggle] = useState(false)
  const router = useRouter()
  // Lookup For Hospitals
  async function fetchSelectLookup(username, value) {
    if (username && value === 'Hospital') {
      return fetch(
        `${
          appConfig.socketURL
        }/home/search?q=${username.toLowerCase()}&cat=${value}&limit=-1`
      )
        .then((response) => response.json())
        .then(
          (body) =>
            body.length > 0 &&
            body.map((user) => {
              return {
                label: `${user.label}`,
                value: user.label,
                key: user.id,
                title: 'hospital',
              }
            })
        )
    } else if (value === 'sort') {
      return sort
    } else {
      return cities
    }
  }

  // console.log('selected2', search, router)

  let block = router.pathname === '/doctor'

  const findByTypes = (resultType) => {
    // console.log('selected3', value)
    switch (resultType) {
      case 'Hospital':
        return props.dispatch(
          loadSearchHospital(
            props.searchKey,
            props.filters,
            props.pagination.start,
            search
          )
        )
      case 'TopHospital':
        return props.dispatch(
          loadSearchHospital(
            props.searchKey,
            props.filters,
            props.pagination.start,
            search
          )
        )
      case 'Doctor':
        return props.dispatch(
          loadSearchDoctor(
            props.searchKey,
            props.filters,
            props.pagination.start,
            search
          )
        )

      default:
        return props.dispatch(
          loadSearchHospital(
            props.searchKey,
            props.filters,
            props.pagination.start,
            search
          )
        )
    }
  }

  useEffect(() => {
    const validate = search.find(
      (item) => item.key !== '' && item.key !== undefined
    )
    if (toggle && validate) {
      console.log('selected2search', search, validate)
      findByTypes(resultType)
    }
  }, [search, toggle])

  const saveSelected = (value) => {
    console.log('selected', value)
    // Find Hospital By ID
    // if (value?.title === 'hospital' && value?.key) {
    //   setSearch([
    //     ...search.slice(0, 0),
    //     { ...search[0], ...value },
    //     ...search.slice(0 + 1),
    //   ])
    // }
    setToggle(true)
    //City Filters
    if (value?.title === 'city' && value?.key) {
      console.log('selected1', value)
      setSearch([
        ...search.slice(0, 1),
        { ...search[1], ...value },
        ...search.slice(1 + 1),
      ])
    } else {
      console.log('selected2', value)
      // setSearch([
      //   ...search.slice(0, 1),
      //   { ...search[1], ...value },
      //   ...search.slice(1 + 1),
      // ])
      // findByTypes(resultType)
    }
    // sort ASC & DESC
    if (value?.title === 'sort') {
      setSearch([
        ...search.slice(0, 2),
        { ...search[2], ...value },
        ...search.slice(2 + 1),
      ])
    }
  }

  return (
    <FilterMobileRow>
      <FilterMobileSelects
        onClick={() =>
          props.dispatch(drawerFilter({ drawer: true, filterType: 'city' }))
        }
      >
        <span>Select a city</span>{' '}
        <DownOutlined style={{ fontSize: '8px', padding: '6px' }} />
      </FilterMobileSelects>
      <FilterMobileSelects
        onClick={() =>
          props.dispatch(drawerFilter({ drawer: true, filterType: 'hospital' }))
        }
      >
        <span>Select a hospital</span>{' '}
        <DownOutlined style={{ fontSize: '8px', padding: '6px' }} />
      </FilterMobileSelects>
      <FilterMobileSelects
        onClick={() =>
          props.dispatch(drawerFilter({ drawer: true, filterType: 'rating' }))
        }
      >
        <span>Ratings</span>{' '}
        <DownOutlined style={{ fontSize: '8px', padding: '6px' }} />
      </FilterMobileSelects>
      {/* <FilterMobileSelects>
        <AutocompleteWrap
          placeholder="Select a city"
          allowClear
          showArrow
          size="small"
          // disabled={block}
          fetchOptions={(e) => fetchSelectLookup(e, 'cities')}
          searchDispatch={(e) => saveSelected(e)}
        />
      </FilterMobileSelects>
      <FilterMobileSelects>
        <AutocompleteWrap
          placeholder="Select a hospital"
          allowClear
          showArrow
          size="small"
          fetchOptions={(e) => fetchSelectLookup(e, 'Hospital')}
          searchDispatch={(e) => {
            if (e?.title === 'hospital' && e?.key) {
              setSearch([
                ...search.slice(0, 0),
                { ...search[0], ...e },
                ...search.slice(0 + 1),
              ])
            }
          }}
        />
      </FilterMobileSelects> */}
      {/* <FilterMobileSelects>
        <AutocompleteWrap
          placeholder="Ratings"
          allowClear
          size="small"
          // disabled={block}
          fetchOptions={(e) => fetchSelectLookup(e, 'cites')}
          searchDispatch={(e) => saveSelected(e)}
        />
      </FilterMobileSelects> */}
    </FilterMobileRow>
  )
}

export default FilterPanelMobile
