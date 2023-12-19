import React from 'react'
import { CloseOutlined } from '@ant-design/icons'
import { ChipStatus } from './search.styled'
import { searches } from './cities'
import { useDispatch } from 'react-redux'
import { filterActions } from '@/redux/actions/appAction'
import { refreshApp } from '@/redux/actions/searchAction'

function FilterChips({ search, changeSearch, type }) {
  const dispatch = useDispatch()
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      Filters Applied &ensp;
      {search[0]?.label && (
        <ChipStatus>
          <p>{search[0]?.label}</p>
          &ensp;
          <CloseOutlined
            onClick={() =>
              changeSearch((prevSearch) => {
                // console.log('prevSearch1', prevSearch)
                var foundIndex = prevSearch.findIndex(
                  (event) => event.value == 'hospital'
                )
                prevSearch[foundIndex] = {
                  key: '',
                  value: '',
                  title: 'hospital',
                  label: '',
                }
                dispatch(refreshApp())
                return [...search]
              })
            }
          />
        </ChipStatus>
      )}
      &ensp;
      {search[1]?.value && (
        <ChipStatus>
          <p>{search[1]?.key}</p>
          &ensp;
          <CloseOutlined
            onClick={() =>
              changeSearch((prevSearch) => {
                // console.log('prevSearch1', prevSearch)
                var foundIndex = prevSearch.findIndex(
                  (event) => event.value == 'city'
                )
                prevSearch[foundIndex] = {
                  key: '',
                  value: '',
                  title: 'city',
                  label: '',
                }
                dispatch(refreshApp())
                return [...search]
              })
            }
          />
        </ChipStatus>
      )}
      &ensp;
      {search[2]?.key && (
        <ChipStatus>
          <p>
            {search[2]?.value} {search[2]?.key}
          </p>
          &ensp;
          <CloseOutlined
            onClick={() =>
              changeSearch((prevSearch) => {
                // console.log('prevSearch1', prevSearch)
                var foundIndex = prevSearch.findIndex(
                  (event) => event.value == 'sort'
                )
                prevSearch[foundIndex] = {
                  key: '',
                  value: '',
                  title: 'sort',
                  name: 'Name',
                  label: '',
                }
                dispatch(refreshApp())
                return [...search]
              })
            }
          />
        </ChipStatus>
      )}{' '}
      &ensp;
      {search[3]?.key && (
        <ChipStatus>
          <p>
            {search[3]?.title} {search[3]?.value}
          </p>
          &ensp;
          <CloseOutlined
            onClick={() =>
              changeSearch((prevSearch) => {
                // console.log('prevSearch1', prevSearch)
                var foundIndex = prevSearch.findIndex(
                  (event) => event.value == search[3]?.value
                )
                prevSearch[foundIndex] = {
                  key: '',
                  value: '0',
                  title: 'Rating',
                  name: 'Rating',
                }
                dispatch(refreshApp())
                return [...search]
              })
            }
          />
        </ChipStatus>
      )}
      &ensp;
      {search[5]?.key && (
        <ChipStatus>
          <p>{search[5]?.value}</p>
          &ensp;
          <CloseOutlined
            onClick={() =>
              changeSearch((prevSearch) => {
                // console.log('prevSearch1', prevSearch)
                var foundIndex = prevSearch.findIndex(
                  (event) => event.value == 'Experience'
                )
                prevSearch[foundIndex] = {
                  key: '',
                  value: [],
                  title: 'Experience',
                  name: 'Experience',
                }
                dispatch(refreshApp())
                return [...search]
              })
            }
          />
        </ChipStatus>
      )}
      &ensp;
      {search[6]?.key && (
        <ChipStatus>
          <p>{search[6]?.value}</p>
          &ensp;
          <CloseOutlined
            onClick={() =>
              changeSearch((prevSearch) => {
                // console.log('prevSearch1', prevSearch)
                var foundIndex = prevSearch.findIndex(
                  (event) => event.value == 'Price'
                )
                prevSearch[foundIndex] = {
                  key: '',
                  value: [],
                  title: 'Price',
                  name: 'Price',
                }
                dispatch(refreshApp())
                return [...search]
              })
            }
          />
        </ChipStatus>
      )}
      &ensp;
      {search[7]?.key && (
        <ChipStatus>
          <p>{search[7]?.title}</p>
          &ensp;
          <CloseOutlined
            onClick={() =>
              changeSearch((prevSearch) => {
                // console.log('prevSearch1', prevSearch)
                var foundIndex = prevSearch.findIndex(
                  (event) => event.value == search[7]?.value
                )
                prevSearch[foundIndex] = {
                  key: '',
                  value: '',
                  title: '',
                  name: 'OnPhone',
                }
                dispatch(refreshApp())
                return [...search]
              })
            }
          />
        </ChipStatus>
      )}
      &ensp;
      {search[8]?.key && (
        <ChipStatus>
          <p>{search[8]?.title}</p>
          &ensp;
          <CloseOutlined
            onClick={() =>
              changeSearch((prevSearch) => {
                // console.log('prevSearch1', prevSearch)
                var foundIndex = prevSearch.findIndex(
                  (event) => event.value == true
                )
                // const data = {
                //   key: false,
                //   value: false,
                //   title: 'OnVideo',
                //   label: 'OnVideo',
                // }
                // dispatch(filterActions({ onVideo: false }))
                // changeSearch([
                //   ...search.slice(0, 8),
                //   { ...search[8], ...data },
                //   ...search.slice(8 + 1),
                // ])

                prevSearch[foundIndex] = {
                  key: '',
                  value: '',
                  title: '',
                  name: 'OnVideo',
                }
                dispatch(refreshApp())
                return [...search]
              })
            }
          />
        </ChipStatus>
      )}
    </div>
  )
}

export default FilterChips
