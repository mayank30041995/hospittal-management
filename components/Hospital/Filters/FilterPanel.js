import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { Col, Divider, Row, Typography, Checkbox } from 'antd'
const { Text, Link, Title } = Typography
import { CloseOutlined } from '@ant-design/icons'
import {
  AutocompleteSelectArea,
  AutocompleteSelectFilter,
  CheckboxGroup,
  FilterElement,
  FilterPanelWrapper,
  SearchText,
  SwitchToggle,
  TextSearch,
} from '../hospital.styled'
import Spacer from 'react-spacer'
import { FilterText } from '../../Search/search.styled'
import { ButtonSubmit } from '../../Register/register.styled'
const _ = require('lodash')

function FilterPanel({
  switchToggle,
  onSubmitFilter,
  setSwitchToggle,
  specialities,
  globalFilterdDoctors,
  filterPayload,
}) {
  const [experiences, setExperiences] = useState([])
  const [ratings, setRatings] = useState([])
  const [prices, setPrices] = useState([])

  const onChange = (checkedValues, type) => {
    const checkedNew = [...checkedValues]

    let largest = checkedNew.sort((a, b) => a - b)[checkedNew.length - 1] || 0
    let from = largest - 5
    var range = [from, largest]

    if (type === 'Experience') {
      setExperiences(
        () => checkedNew.length > 0 && [checkedNew[0] - 5, ...checkedNew]
      )
      // dispatch(loadHospitalDoctors(id, type, checkedNew.slice(-1)[0]))
    } else if (type === 'Rating') {
      setRatings(() => [...checkedNew])
      // dispatch(loadHospitalDoctors(id, type, checkedNew.slice(-1)[0]))
    } else if (type === 'Price') {
      setPrices(() => [...checkedNew])
    }
  }

  const allSpecialities = useMemo(() => {
    return specialities?.length
      ? specialities.map((speciality) => ({
          label: `${speciality.name}`,
          value: speciality.name,
          key: speciality.id,
        }))
      : []
  }, [specialities])

  const [options, setOptions] = useState([])
  let { experience, rating, price } = useMemo(
    () => !_.isEmpty(filterPayload) && filterPayload,
    [filterPayload]
  )
  let experNew = useMemo(
    () => (experience && experience.length > 0 ? experience.slice(1) : []),
    [experience]
  )

  useEffect(() => {
    if (allSpecialities.length) {
      let all = [...allSpecialities]
      setOptions(all)
    }
  }, [])

  const setSearch = (e) => {
    const filteredSpeciality = [...allSpecialities].filter((items) => {
      if (e) {
        return (
          items.value.toLowerCase().includes(e.value.toLowerCase()) ||
          items.value.toLowerCase().includes(e.value.toLowerCase())
        )
      }
    })
    setOptions(filteredSpeciality)

    if (e?.key && e?.value) {
      globalFilterdDoctors(e)
    } else {
      globalFilterdDoctors(e, 'all')
    }
  }

  const ExperienceOptions = [
    {
      label: `Under 5 years`,
      value: 5,
    },
    {
      label: '5 to 10 years',
      value: 10,
    },
    {
      label: '10 to 15 years',
      value: 15,
    },
    {
      label: '15 years & above',
      value: 30,
    },
  ]

  const googleRatingsOptions = [
    {
      label: '⭐4 & Above',
      value: 4,
    },
    {
      label: '⭐3 & Above',
      value: 3,
    },
    {
      label: '⭐2 & Above',
      value: 2,
    },
    {
      label: '⭐ 1 & Above',
      value: 1,
    },
  ]
  const availableItems = [
    {
      label: 'Available for Video Consultation',
      value: 2,
    },
    {
      label: 'Available for Phone Call now',
      value: 1,
    },
  ]

  const consultationFeeOptions = [
    {
      label: '0-250',
      value: 0,
    },
    {
      label: '250-500',
      value: 250,
    },
    {
      label: '500-1000',
      value: 500,
    },
    {
      label: '1000+',
      value: 5000,
    },
  ]

  return (
    <>
      {switchToggle && (
        <SwitchToggle>
          <FilterElement>
            <TextSearch> Search by specialisation</TextSearch>
            <CloseOutlined
              size="large"
              onClick={() => setSwitchToggle(false)}
            />
          </FilterElement>
          <FilterElement>
            <AutocompleteSelectFilter
              placeholder="Search Doctor by specialisation"
              allowClear
              style={{ border: 'none' }}
              // fetchOptions={(e) => fetchSelectLookup(e, active)}
              fetchOptions={async () => await options}
              searchDispatch={(e) => setSearch(e)}
            />
          </FilterElement>
          <Spacer height={15} />
          <div>
            <Row justify="space-around" align="center">
              <FilterPanelWrapper>
                <Title level={5}>Experience</Title>
                <CheckboxGroup
                  style={{
                    display: 'flow-root',
                    width: '20rem',
                    textAlign: 'end',
                  }}
                  options={ExperienceOptions}
                  defaultValue={[...experNew]}
                  onChange={(e) => onChange(e, 'Experience')}
                />
              </FilterPanelWrapper>
              <FilterPanelWrapper>
                <Title level={5}>Google Ratings</Title>
                <Checkbox.Group
                  style={{
                    display: 'flow-root',
                    width: '20rem',
                    textAlign: 'end',
                  }}
                  options={googleRatingsOptions}
                  defaultValue={[...(rating ? rating : [])]}
                  onChange={(e) => onChange(e, 'Rating')}
                />
              </FilterPanelWrapper>

              <FilterPanelWrapper>
                <Title level={5}>Consultation Fee</Title>
                <Checkbox.Group
                  style={{
                    display: 'flow-root',
                    width: '16rem',
                    textAlign: 'end',
                  }}
                  options={consultationFeeOptions}
                  defaultValue={[...(price ? price : [])]}
                  onChange={(e) => onChange(e, 'Price')}
                />
              </FilterPanelWrapper>
            </Row>
            <Row justify="space-between" style={{ padding: '32px 2% 0' }}>
              <Row>
                <Col>
                  <Checkbox.Group
                    style={{ display: 'contents', width: '50vh' }}
                    options={availableItems}
                    defaultValue={[15]}
                    onChange={(e) => onChange(e, 'Rating')}
                  />
                </Col>
              </Row>
              <Col span={3}>
                <ButtonSubmit
                  style={{ background: '#06509F' }}
                  size="large"
                  onClick={(e) => {
                    onSubmitFilter(e, experiences, ratings, prices)
                    setSwitchToggle(false)
                  }}
                >
                  APPLY FILTER
                </ButtonSubmit>
              </Col>
            </Row>
          </div>
        </SwitchToggle>
      )}
    </>
  )
}

export default memo(FilterPanel)
