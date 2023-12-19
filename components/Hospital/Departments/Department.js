import React, { useEffect } from 'react'
import {
  ParagraphAreaText,
  SearchSlides,
  TextAreaWrapper,
  WrittenTextColumn,
} from '../hospital.styled'
import Spacer from 'react-spacer'
import FilterNav from '../Filters/FilterNav'
import Carousel from './Carousel'
import { Typography } from 'antd'
import { DownOutlined, SearchOutlined, UpOutlined } from '@ant-design/icons'
import { memo } from 'react'
import { useState } from 'react'
const { Title } = Typography

function Department({ ...props }) {
  const [searchValues, setSearchValues] = useState('')
  let {
    key,
    name,
    Desciption,
    switchFilters,
    onSubmitFilter,
    globalFilterdDoctors,
    specialities,
    doctors,
    hospitalName,
    searchTexts,
    onSearch,
  } = props

  useEffect(() => {
    if (searchTexts.length > 0) {
      setSearchValues(searchTexts)
    }
  }, [searchTexts])

  return (
    <div key={key}>
      <TextAreaWrapper justify="flex-start" align="flex-start">
        <WrittenTextColumn>
          <Title level={4}>{name}</Title>
        </WrittenTextColumn>
        <WrittenTextColumn>
          <ParagraphAreaText>{Desciption}</ParagraphAreaText>
        </WrittenTextColumn>
      </TextAreaWrapper>
      <FilterNav
        switchFilters={switchFilters}
        onSubmitFilter={onSubmitFilter}
        globalFilterdDoctors={globalFilterdDoctors}
        specialities={specialities}
      />
      <SearchSlides
        size="large"
        placeholder={`Search for ${name} Doctors by name`}
        onChange={(e) => onSearch(e.target.value)}
        suffix={
          <SearchOutlined
            style={{
              color: 'rgba(0,0,0,.45)',
            }}
          />
        }
      />
      <Carousel
        doctors={doctors}
        hospitalName={hospitalName}
        searchValues={searchValues}
      />
      <Spacer height={8} />
    </div>
  )
}

export default memo(Department)
