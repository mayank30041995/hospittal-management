import React from 'react'
import { Select } from 'antd'

function SelectGroup({ value, onChange, options, ...rest }) {
  return (
    <Select {...rest} value={value} onChange={onChange} options={options} />
  )
}

export default SelectGroup
