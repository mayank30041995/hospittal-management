import React, { useCallback, useEffect, useState } from 'react'
import { Col, Input, Radio, Row, Space } from 'antd'
import Spacer from 'react-spacer'
import {
  CiCircleFilled,
  UpCircleOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from '@ant-design/icons'
import { RateIt, RateRow } from './search.styled'

const Rating = ({ search, handleSearch, loading, setLoading }) => {
  const [value, setValue] = useState(5)

  const onChange = (e) => {
    setLoading(true)
    setValue(e.target.value)
  }

  useEffect(() => {
    if (loading) {
      handleSearch([
        ...search.slice(0, 3),
        { ...search[3], value: value, key: 'rate' },
        ...search.slice(3 + 1),
      ])
      setTimeout(() => {
        setLoading(false)
      }, [2000])
    }
  }, [loading, value])
  return (
    <Row justify="start">
      <Radio.Group
        onChange={onChange}
        value={search[3].value === '0' ? 5 : value}
      >
        <Spacer height={10} />

        <Space direction="vertical" style={{ alignItems: 'flex-start' }}>
          <Radio value={5}>
            <RateRow>
              <Col>
                <RateIt value={10} count={5} defaultValue={5} disabled />
              </Col>
            </RateRow>
          </Radio>
          <Radio value={4}>
            <RateRow>
              <Col>
                <RateIt value={10} count={4} defaultValue={5} disabled />
              </Col>
              <Col>
                <span>{'&up'}</span>
              </Col>
            </RateRow>
          </Radio>
          <Radio value={3}>
            <RateRow>
              <Col>
                <RateIt value={10} count={3} defaultValue={5} disabled />
              </Col>
              <Col>
                <span>{'&up'}</span>
              </Col>
            </RateRow>
          </Radio>
          <Radio value={2}>
            <RateRow>
              <Col>
                <RateIt value={10} count={2} defaultValue={5} disabled />
              </Col>
              <Col>
                <span>{'&up'}</span>
              </Col>
            </RateRow>
          </Radio>
          <Radio value={1}>
            <RateRow>
              <Col>
                <RateIt value={10} count={1} defaultValue={5} disabled />
              </Col>
              <Col>
                <span>{'&up'}</span>
              </Col>
              {/* <div class="circle" />
              <div class="circleC" />
              <div class="circleC" />
              <div class="circleC" /> <div class="circleC" /> &emsp;{' '}
              <span>{'&up;'}</span> */}
            </RateRow>
          </Radio>
          {/* <Radio value={4}>
        
          {value === 4 ? (
            <Input
              style={{
                width: 100,
                marginLeft: 10,
              }}
            />
          ) : null}
        </Radio> */}
        </Space>
      </Radio.Group>
    </Row>
  )
}
export default Rating
