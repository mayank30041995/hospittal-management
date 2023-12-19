import React from 'react'
import {
  AutocompleteWrap,
  FilterMobileRow,
  FilterMobileSelects,
} from '../../Search/search.styled'

function FilterPanelMobile() {
  return (
    <FilterMobileRow>
      <FilterMobileSelects span={6}>
        <AutocompleteWrap
          placeholder="Experience"
          allowClear
          showArrow
          size="small"
          //   fetchOptions={(e) => fetchSelectLookup(e, 'Hospital')}
          //   searchDispatch={(e) => {
          //     if (e?.title === 'hospital' && e?.key) {
          //       setSearch([
          //         ...search.slice(0, 0),
          //         { ...search[0], ...e },
          //         ...search.slice(0 + 1),
          //       ])
          //     }
          //   }}
        />
      </FilterMobileSelects>
      <FilterMobileSelects span={6}>
        <AutocompleteWrap
          placeholder="Ratings"
          size="small"
          allowClear
          showArrow
        />
      </FilterMobileSelects>
      <FilterMobileSelects span={6}>
        <AutocompleteWrap
          placeholder="Consultation Fee"
          size="small"
          allowClear
          showArrow
        />
      </FilterMobileSelects>
    </FilterMobileRow>
  )
}

export default FilterPanelMobile
