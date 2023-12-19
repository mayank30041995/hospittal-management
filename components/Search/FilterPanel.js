import React, { memo, useState } from 'react'
import { Checkbox, Col, Rate, Row, Slider, Spin, Typography } from 'antd'
const { Text } = Typography
import { CloseOutlined } from '@ant-design/icons'
import Spacer from 'react-spacer'
import { useSelector, useDispatch } from 'react-redux'
import {
  PanelFilterWrapper,
  FilterText,
  SelectGroupSort,
  RateColumn,
  RateIt,
  SelectGroupOther,
} from './search.styled'
import { cities, sort } from './cities'
import { useRouter } from 'next/router'
import { filterActions } from '@/redux/actions/appAction'
import Rating from './Rating'
import { useEffect } from 'react'
import { refreshApp } from '@/redux/actions/searchAction'

function FilterPanel({
  searchResult,
  search,
  setSearch,
  resultType,
  setEnable,
  ...props
}) {
  const [loading, setLoading] = useState(false)
  const [defaultHospitals, setDefaultHospitals] = useState([])
  const [myPhone, setMyPhone] = useState(false)
  const [myVideo, setMyVideo] = useState(false)
  const router = useRouter()
  const { onVideo, onPhone } = useSelector((state) => state.app.filters)
  let block = router.pathname === '/doctor'
  const dispatch = useDispatch()
  const saveSelected = (value) => {
    //City Filters
    if (value.title === 'city' && value.key) {
      setSearch([
        ...search.slice(0, 1),
        { ...search[1], ...value },
        ...search.slice(1 + 1),
      ])
      dispatch(refreshApp())
      const filterSelectedCategoryOptions = () => {
        return (
          props.hospitalResults &&
          props.hospitalResults.length > 0 &&
          props.hospitalResults.filter((item) => item.city?.includes(value.key))
        )
      }
      setDefaultHospitals(filterSelectedCategoryOptions)
    } else if (value.title === 'city' && !value.key) {
      value.key = ''
      value.value = ''
      setSearch([
        ...search.slice(0, 1),
        { ...search[1], ...value },
        ...search.slice(1 + 1),
      ])
      dispatch(refreshApp())
      setDefaultHospitals(props.hospitalResults)
    }
    // sort ASC & DESC
    if (value.title === 'sort' && value.key) {
      setSearch([
        ...search.slice(0, 2),
        { ...search[2], ...value },
        ...search.slice(2 + 1),
      ])
      dispatch(refreshApp())
    } else if (value.title === 'sort' && !value.key) {
      value.key = ''
      value.value = ''
      setSearch([
        ...search.slice(0, 2),
        { ...search[2], ...value },
        ...search.slice(2 + 1),
      ])
      dispatch(refreshApp())
    }
    if (value.title === 'hospital' && value.key) {
      // Hospital

      setSearch([
        ...search.slice(0, 0),
        { ...search[0], ...value },
        ...search.slice(0 + 1),
      ])
      dispatch(refreshApp())
    } else if (value.title === 'hospital' && !value.key) {
      value.key = ''
      value.value = ''
      setSearch([
        ...search.slice(0, 0),
        { ...search[0], ...value },
        ...search.slice(0 + 1),
      ])
      dispatch(refreshApp())
    } else if (value.title === 'Experience' && value.key) {
      setSearch([
        ...search.slice(0, 5),
        { ...search[5], ...value },
        ...search.slice(5 + 1),
      ])
      dispatch(refreshApp())
    } else if (value.title === 'Price' && value.key) {
      setSearch([
        ...search.slice(0, 6),
        { ...search[6], ...value },
        ...search.slice(6 + 1),
      ])
      dispatch(refreshApp())
    } else if (
      (value.title === 'onVideo' || value.title === 'onPhone') &&
      value.key
    ) {
      setSearch([
        ...search.slice(0, 7),
        { ...search[7], ...value },
        ...search.slice(7 + 1),
      ])
      dispatch(refreshApp())
    }
  }

  useEffect(() => {
    props.dispatch(filterActions({ onVideo: myVideo }))
    props.dispatch(filterActions({ onPhone: myPhone }))
  }, [myPhone, myVideo])

  const debounce_fun = _.debounce(function (action, type, value) {
    // console.log('debounce_fun', onVideo, onPhone)
    if (type === 'experience') {
      props.dispatch(action({ experience: value }))
    } else if (type === 'fee') {
      props.dispatch(action({ fee: value }))
    }
  }, 500)

  const debounce_fun_doctor = _.debounce(function (action, type, value) {
    if (type === 'experience') {
      saveSelected({
        key: value,
        value: 'Experience',
        title: 'Experience',
        label: 'Experience',
      })
    } else if (type === 'fee') {
      saveSelected({
        key: value,
        value: 'Price',
        title: 'Price',
        label: 'Price',
      })
    }
  }, 500)

  const applySortDefValue = {
    ...(search[2]?.label && { value: `${search[2].title} ${search[2].key}` }),
  }
  const applyHospitalDefValue = {
    ...(search[0]?.label && { value: `${search[0]?.label}` }),
  }

  const applyCityDefValue = {
    ...(search[1]?.key && { value: `${search[1]?.key}` }),
  }

  return (
    <PanelFilterWrapper align="-webkit-center">
      <Spacer height={20} />
      <Row justify="space-between" style={{ alignItems: 'center' }}>
        <Text strong>Filters</Text>
        <Spacer width={10} />
        <Col span={12}>
          <SelectGroupSort
            placeholder="Sort by"
            allowClear
            onChange={(e) =>
              saveSelected({
                key: e,
                value: 'sort',
                title: 'sort',
                label: 'sort',
              })
            }
            {...applySortDefValue}
            options={sort}
            disabled={block}
            size="medium"
            style={{
              width: '110px',
            }}
            dropdownAlign={{
              // points: ['tl', 'bl'], // align dropdown bottom-left to top-left of input element
              offset: [-35, 5], // align offset
              overflow: {
                adjustX: 1,
                adjustY: 2, // do not auto flip in y-axis
              },
            }}
            dropdownStyle={{ minWidth: '15%' }}
          />
        </Col>
        <Spacer width={30} />
        <Col>
          <CloseOutlined size="large" onClick={() => setEnable(false)} />
        </Col>
      </Row>
      <Spacer height={50} />
      <Row>
        <Col>
          <SelectGroupOther
            placeholder="Select a hospital"
            disabled={block}
            allowClear
            showArrow
            {...applyHospitalDefValue}
            options={
              defaultHospitals.length > 0
                ? defaultHospitals
                : props.hospitalResults
            }
            onChange={(e) => {
              const result = props.hospitalResults.find(
                (hos) => hos.value === e
              )
              const label = result && result.label
              saveSelected({
                key: e,
                value: 'hospital',
                title: 'hospital',
                label: label,
              })
            }}
            size="large"
          />
          <Spacer height={20} />
          <SelectGroupOther
            placeholder="Select a cities"
            allowClear
            showArrow
            disabled={block}
            size="large"
            {...applyCityDefValue}
            options={cities}
            onChange={(e) =>
              saveSelected({
                key: e,
                value: 'city',
                title: 'city',
                label: 'city',
              })
            }
          />
        </Col>
      </Row>
      <Spacer height={40} />
      <Row justify="start">
        <Col>
          <Text
            style={{
              fontFamily: 'Inter',
              display: 'flex',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            {resultType}’s Google Rating ({search && search[3]?.value}) &emsp;{' '}
            {loading && <Spin size="small" />}
          </Text>
        </Col>

        <Col style={{ width: '100%' }}>
          <Rating
            search={search}
            handleSearch={setSearch}
            loading={loading}
            setLoading={setLoading}
          />
        </Col>
      </Row>
      <Spacer height={5} />

      {/* <RateColumn>
        <RateIt
          value={10}
          count={5}
          defaultValue={5}
          onChange={(e) =>
            setSearch([
              ...search.slice(0, 3),
              { ...search[3], value: e, key: 'rate' },
              ...search.slice(3 + 1),
            ])
          }
        />
      </RateColumn> */}
      {/* <RateColumn>
        <RateIt
          value={10}
          count={4}
          defaultValue={4}
          onChange={(e) =>
            setSearch([
              ...search.slice(0, 3),
              { ...search[3], value: e, key: 'rate' },
              ...search.slice(3 + 1),
            ])
          }
        />
      </RateColumn>
      <RateColumn>
        <RateIt
          value={10}
          count={3}
          defaultValue={3}
          onChange={(e) =>
            setSearch([
              ...search.slice(0, 3),
              { ...search[3], value: e, key: 'rate' },
              ...search.slice(3 + 1),
            ])
          }
        />
      </RateColumn>
      <RateColumn>
        <RateIt
          value={10}
          count={2}
          defaultValue={2}
          onChange={(e) =>
            setSearch([
              ...search.slice(0, 3),
              { ...search[3], value: e, key: 'rate' },
              ...search.slice(3 + 1),
            ])
          }
        />
      </RateColumn>
      <RateColumn>
        <RateIt
          value={10}
          count={1}
          defaultValue={1}
          onChange={(e) =>
            setSearch([
              ...search.slice(0, 3),
              { ...search[3], value: e, key: 'rate' },
              ...search.slice(3 + 1),
            ])
          }
        />
      </RateColumn> */}

      <Spacer height={30} />
      <Row justify="start">
        <Col>
          <FilterText>Consultation Fee (0, 5000)</FilterText>
        </Col>
      </Row>
      <Spacer height={18} />
      <Col>
        <Slider
          min={0}
          max={5000}
          range
          defaultValue={[0, 3000]}
          onChange={(e) =>
            resultType === 'Doctor' // Fetch api in case of page (Doctor)
              ? debounce_fun_doctor(filterActions, 'fee', e)
              : debounce_fun(filterActions, 'fee', e)
          }
        />
      </Col>
      <Spacer height={10} />
      <Row justify="start">
        <Col>
          <FilterText>Experience (0, 50)</FilterText>
        </Col>
      </Row>
      <Spacer height={18} />
      <Col>
        <Slider
          min={0}
          max={50}
          range
          defaultValue={[0, 30]}
          onChange={(e) =>
            resultType === 'Doctor' // Fetch api in case of page (Doctor)
              ? debounce_fun_doctor(filterActions, 'experience', e, resultType)
              : debounce_fun(filterActions, 'experience', e, resultType)
          }
        />
      </Col>
      <Spacer height={20} />
      <Row justify="space-between">
        <Col>
          <FilterText>Available for Video Conference</FilterText>
        </Col>

        <Col>
          <Checkbox
            defaultChecked={false}
            // checked={onVideo}
            // defaultChecked={false}
            checked={search[7].value}
            onClick={(e) => {
              const data = {
                key: e.target.checked,
                value: e.target.checked,
                title: 'OnVideo',
                label: 'OnVideo',
              }
              setMyVideo(e.target.checked)
              setSearch([
                ...search.slice(0, 7),
                { ...search[7], ...data },
                ...search.slice(7 + 1),
              ])
              dispatch(refreshApp())
            }}
          />
        </Col>
      </Row>
      <Spacer height={20} />
      <Row justify="space-between">
        <Col>
          <FilterText>Available for Phone Call</FilterText>
        </Col>
        <Spacer width={20} />{' '}
        <Col>
          <Checkbox
            defaultChecked={false}
            // checked={onPhone}
            // defaultChecked={false}
            checked={search[8].value}
            onClick={
              (e) => {
                const data = {
                  key: e.target.checked,
                  value: e.target.checked,
                  title: 'OnPhone',
                  label: 'OnPhone',
                }
                setMyPhone(e.target.checked)
                setSearch([
                  ...search.slice(0, 8),
                  { ...search[8], ...data },
                  ...search.slice(8 + 1),
                ])
                dispatch(refreshApp())
              }
              // props.dispatch(filterActions({ onPhone: onPhone, fee: 0 }))
            }
          />
        </Col>
      </Row>
      <Spacer height={20} />
      {/* <Row justify="space-between">
        <Col>
          <FilterText>Male Doctors</FilterText>
        </Col>
        <Spacer width={20} />{' '}
        <Col>
          <Checkbox value="A" />
        </Col>
      </Row>
      <Spacer height={20} />
      <Row justify="space-between">
        <Col>
          <FilterText>Female Doctors</FilterText>
        </Col>
        <Spacer width={20} />{' '}
        <Col>
          <Checkbox value="B" />
        </Col>
      </Row> */}
    </PanelFilterWrapper>
  )
}

export default memo(FilterPanel)
