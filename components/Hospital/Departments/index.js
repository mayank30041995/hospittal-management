import { Col, Row, Typography } from 'antd'
import React, { memo } from 'react'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import { DepartmentBtn } from '../hospital.styled'
import { useState } from 'react'
import { useEffect } from 'react'
import Department from './Department'
import { useCallback } from 'react'
const { Title } = Typography
function Departments({
  doctors,
  hospitalName,
  specialities,
  globalFilterdDoctors,
}) {
  const [searchValues, setSearchValues] = useState('')
  const [filteredDoctors, setFilteredDoctors] = useState([])
  const [allDoctors, setAllDoctors] = useState([])

  const onSearch = useCallback((value) => {
    setSearchValues(value)
  }, [])

  useEffect(() => {
    if (doctors?.length) {
      setFilteredDoctors(doctors)
    }
  }, [doctors?.length])

  const switchFilters = (checkedValues, type) => {
    const checkedNew = [...checkedValues]
    let largest = checkedNew.sort((a, b) => a - b)[checkedNew.length - 1] || 0
    let from = largest - 5
    var range = { min: from, max: largest }

    var res = doctors.filter(function (o) {
      if (type === 'Experience') {
        return o.Experience <= range.max && o.Experience >= range.min
      } else if (type === 'Rating') {
        return o.Rating <= range.max && o.Rating >= range.min
      } else if (type === 'Price') {
        return o.Price <= range.max && o.Price >= range.min
      }
    })
    if (res.length) {
      //  setFilteredDoctors(allDoctors)
      setAllDoctors(res)
    } else {
      setAllDoctors([])
    }
  }

  const onSubmitFilter = () => {
    setFilteredDoctors(allDoctors)
  }

  const deptAll = (
    <div>
      {specialities &&
        specialities.length > 0 &&
        specialities.slice(0, 5).map((speciality, i) => {
          let { name, Desciption } = speciality
          return (
            <Department
              key={i}
              name={name}
              Desciption={Desciption}
              switchFilters={switchFilters}
              onSubmitFilter={onSubmitFilter}
              globalFilterdDoctors={globalFilterdDoctors}
              specialities={specialities}
              doctors={filteredDoctors}
              hospitalName={hospitalName}
              searchTexts={searchValues}
              onSearch={onSearch}
            />
          )
        })}
    </div>
  )

  const dept = (
    <div>
      {specialities &&
        specialities.length > 0 &&
        specialities.slice(0, 2).map((speciality, i) => {
          let { name, Desciption } = speciality
          return (
            <Department
              key={i}
              name={name}
              Desciption={Desciption}
              switchFilters={switchFilters}
              onSubmitFilter={onSubmitFilter}
              globalFilterdDoctors={globalFilterdDoctors}
              specialities={specialities}
              doctors={filteredDoctors}
              hospitalName={hospitalName}
              searchTexts={searchValues}
              onSearch={onSearch}
            />
          )
        })}
    </div>
  )
  const [all, setAll] = useState(false)
  return (
    <div>
      {all ? deptAll : dept}
      <Row justify="center" style={{ marginTop: '12px' }}>
        <DepartmentBtn onClick={() => setAll(!all)}>
          VIEW {all ? 'LESS' : 'ALL'} DEPARTMENTS &nbsp;
          {all ? <UpOutlined /> : <DownOutlined />}
        </DepartmentBtn>
      </Row>
    </div>
  )
}

export default memo(Departments)
