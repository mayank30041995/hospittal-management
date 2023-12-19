import React, { memo, useState } from 'react'
import { Col, Divider, Row, Typography } from 'antd'
import {
  FilterArea,
  FilterAreaColumn,
  FilterCol,
  FilterWrapperRow,
  NavArea,
  RowFilter,
} from '../hospital.styled'
import Spacer from 'react-spacer'
import { NavImage } from '../../NavLayout/module.styled'
import FilterPanel from './FilterPanel'
import { HideDisplayMobile } from '../../Dashboard/dashboardmobile.styled'
const { Text, Link } = Typography

function FilterNav({
  onSubmitFilter,
  specialities,
  globalFilterdDoctors,
  filterPayload,
}) {
  const [switchToggle, setSwitchToggle] = useState(false)

  return (
    <HideDisplayMobile>
      <Spacer height={24} />
      <FilterWrapperRow justify="center" align="start">
        <FilterArea flex="150px">
          <Text
            style={{ fontSize: '16px', fontWeight: 500, fontFamily: 'Inter' }}
          >
            All Filters
          </Text>
        </FilterArea>
        <Spacer width="10px" />
        <FilterAreaColumn flex="auto">
          <RowFilter align="center" onClick={() => setSwitchToggle(true)}>
            <FilterCol>
              <Col style={{ display: 'grid', placeItems: 'center' }}>
                <NavImage src="experience.png" alt="hosplan_logo" />

                <Text>Experience</Text>
              </Col>
            </FilterCol>
            <FilterCol>
              <Col style={{ display: 'grid', placeItems: 'center' }}>
                <NavImage src="ratings.png" alt="hosplan_logo" />

                <Text>Ratings</Text>
              </Col>
            </FilterCol>
            <FilterCol>
              <Col style={{ display: 'grid', placeItems: 'center' }}>
                <NavImage src="consultationFee.png" alt="hosplan_logo" />

                <Text>Consultation Fee</Text>
              </Col>
            </FilterCol>
          </RowFilter>
        </FilterAreaColumn>
      </FilterWrapperRow>
      <Spacer height="15px" />
      <FilterPanel
        switchToggle={switchToggle}
        onSubmitFilter={onSubmitFilter}
        setSwitchToggle={setSwitchToggle}
        specialities={specialities}
        globalFilterdDoctors={globalFilterdDoctors}
        filterPayload={filterPayload}
      />
    </HideDisplayMobile>
  )
}

export default memo(FilterNav)
