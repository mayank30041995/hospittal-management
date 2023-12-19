import { Col, Row, Typography } from 'antd'
import { memo, useEffect, useState } from 'react'
const _ = require('lodash')
import Spacer from 'react-spacer'
import { SearchOutlined } from '@ant-design/icons'
import SearchResults from './SearchResults'
import { MessageTitle, SearchWrapper, Span } from './search.styled'
import SelectGroup from '../Select/SelectGroup'
import appConfig from '@/utils/appConfig'
import {
  loadDoctor,
  loadSearchHospital,
  loadSearchDoctor,
} from '@/redux/actions/searchAction'
import { ButtonWrapper } from '../NavLayout/module.styled'
import { useRouter } from 'next/router'
import { fetchSearchJSON } from '@/utils/apiCalls'

const { Title, Text } = Typography
let fullWidth = { width: '100%' }
const provinceData = ['Doctor']
const selectTypes = {
  Hospital: ['Doctor', 'Speciality'],
  Doctor: ['Doctor', 'Speciality'],
}

const Search = ({ ...props }) => {
  let {
    doctors,
    searchDoctorResult,
    dispatch,
    type,
    count,
    pagination,
    qid,
    filters,
    setFilters,
  } = props
  let { value } = type
  const [selection, setSelection] = useState(selectTypes[provinceData[0]])
  const [resultType, setResultType] = useState(selectTypes[provinceData[0]][0])
  const [options, setOptions] = useState([])
  const router = useRouter()
  const specialised = {
    key: qid,
    value: value,
    label: value,
  }

  console.log('router.query', resultType, filters, qid)
  useEffect(() => {
    if (resultType === 'Doctor' && qid) {
      dispatch(loadDoctor(filters || [{ key: qid }]))
    } else if (resultType === 'Hospital' && qid) {
      dispatch(loadSearchHospital([{ key: qid }]))
    }
  }, [filters, resultType])

  async function fetchUserList() {
    return fetchSearchJSON(`${appConfig.socketURL}/doctors`).then(
      (body) =>
        body.length > 0 &&
        body?.map((user) => {
          return {
            label: `${user.Name}`,
            value: user.Name,
            key: user.id,
          }
        })
    )
  }

  const onSecondChange = (value) => {
    setResultType(value)
  }
  const fetchApiLookup = async () => {
    const fetchLookup = await fetchUserList()

    setOptions([...options, ...fetchLookup])
    console.log('fetchUserList', fetchLookup)
  }

  useEffect(() => {
    fetchApiLookup()
  }, [])

  const handleChange = (value, key) => {
    let ids = [...key, specialised]
    var newArray = ids.filter((value) => Object.keys(value).length !== 0)

    console.log('handleChange', key, newArray, specialised)
    var newSelectFilter = newArray.filter(
      (value) => JSON.stringify(value) !== '{}'
    )
    if (key && key.length <= 0) {
      setFilters([])
    } else {
      setFilters(newSelectFilter)
    }
  }

  // Filtered Titles
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
      <SearchWrapper>
        <Col flex="100px">
          <SelectGroup
            size="large"
            style={{
              width: '19vh',
            }}
            value={resultType}
            onChange={onSecondChange}
            options={selection.map((city) => ({
              label: city,
              value: city,
            }))}
          />
        </Col>
        <Spacer width={8} />
        <Col flex="auto">
          <SelectGroup
            mode="tags"
            style={{
              width: '100%',
            }}
            size="large"
            showArrow={true}
            // value={specialised}
            defaultValue={specialised}
            placeholder="Search for Specialised  Doctors"
            onChange={handleChange}
            tokenSeparators={[',']}
            options={options}
            suffixIcon={<SearchOutlined />}
          />
        </Col>
      </SearchWrapper>
      <Spacer height="24px" />
      <SearchResults doctorResult={doctors} resultType={resultType} {...props}>
        <MessageTitle>
          <Title type="primary" level={5}>
            <Span className="title_msg">Showing</Span> “
            {titles !== '' ? titles : type.value}”{' '}
            <Span className="title_msg">
              from {count || 0} {resultType}s
            </Span>
          </Title>
          <Text type="secondary">
            Use filters on the left hand side for location, google ratings, fees
            and more.
          </Text>
        </MessageTitle>
      </SearchResults>
      <Col push={12}>
        <Row>
          <Col>
            <ButtonWrapper
              colors="primary"
              size="large"
              style={{ ...fullWidth }}
              disabled={true}
              // onClick={() => handleChange(pagination.start)}
            >
              Previous
            </ButtonWrapper>
          </Col>
          <Spacer width={10} />
          <Col>
            <ButtonWrapper
              colors="primary"
              size="large"
              style={{ ...fullWidth }}
              disabled={true}
              // onClick={() => handleChange(pagination.start)}
            >
              Next
            </ButtonWrapper>
          </Col>
        </Row>
        <Spacer height={10} />
      </Col>
    </>
  )
}
export default memo(Search)
