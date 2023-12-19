import React from 'react'

import { LayoutWrapperBanner, NavImage } from '../../NavLayout/module.styled'
import { FilterTitle } from '../Banner/search.styled'
import { Card } from './module.filter'
import Spacer from 'react-spacer'

export default function SearchBanner() {
  return (
    <LayoutWrapperBanner justify="center">
      <Card className="cardContent">
        <NavImage
          src="practitioners.png"
          alt="hosplan_logo"
          width={120}
          height={65}
        />
        <FilterTitle level={5}>
          Curated list of expert practitioners
        </FilterTitle>
      </Card>
      <Card className="cardSearch">
        <Spacer height="9%" />
        <NavImage src="search.png" alt="hosplan_logo" width={50} height={45} />
        <Spacer height="8%" />
        <FilterTitle level={5}>
          Search By Condition, Treatment, Doctor, Hospital
        </FilterTitle>
      </Card>
      <Card className="rateIt">
        <Spacer height="10%" />
        <NavImage src="rate.png" alt="hosplan_logo" width={190} height={45} />
        <Spacer height="7%" />
        <FilterTitle level={5} push={1}>
          Filter by ratings, experience, fee, and more.
        </FilterTitle>
      </Card>
    </LayoutWrapperBanner>
  )
}
