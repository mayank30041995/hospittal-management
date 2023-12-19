import { AutoComplete, Select, Spin } from 'antd'
import debounce from 'lodash/debounce'
import { useEffect, useMemo, useRef, useState } from 'react'
import { CloseOutlined } from '@ant-design/icons'
const Option = AutoComplete.Option
function DebounceSelect({ fetchOptions, debounceTimeout = 800, ...props }) {
  const [fetching, setFetching] = useState(false)
  const [options, setOptions] = useState([])
  const fetchRef = useRef(0)
  const { datasourceitem } = props
  const debounceFetcher = useMemo(() => {
    const loadOptions = (value) => {
      fetchRef.current += 1
      const fetchId = fetchRef.current
      setOptions([])
      setFetching(true)
      fetchOptions(value)
        .then((newOptions) => {
          if (fetchId !== fetchRef.current) {
            // for fetch callback order
            return
          }
          // console.log('newOptions', newOptions, datasourceitem)
          if (newOptions === false) {
            // setOptions([{ label: value, value: value }])
            setFetching(false)
          } else {
            if (newOptions && newOptions.length > 0) {
              setOptions(newOptions)
              setFetching(false)
            } else {
              setFetching(false)
            }
          }
        })
        .catch((err) => console.log(err))
    }

    return debounce(loadOptions, debounceTimeout)
  }, [fetchOptions, debounceTimeout])

  return (
    <AutoComplete
      size="large"
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      // options={options}
      options={options?.length > 0 ? options : fetching ? [] : datasourceitem}
    />
  )
} // Usage of DebounceSelect

const AutocompleteSelect = ({
  values,
  fetchOptions,
  searchDispatch,
  mode,
  style,
  ...props
}) => {
  const [value, setValue] = useState([])

  useEffect(() => {
    if (values !== '') {
      setValue(values)
    }
  }, [values])

  return (
    <>
      <DebounceSelect
        mode={mode || 'multiple'}
        // defaultActiveFirstOption={true}
        value={value}
        fetchOptions={fetchOptions}
        onChange={(newValue) => {
          setValue(newValue)
          searchDispatch && searchDispatch(newValue)
        }}
        style={{
          width: '100%',
          border: '1px solid #128C01',
          fontFamily: 'Inter',
          borderRadius: '10px',

          ...style,
        }}
        {...props}
      />
    </>
  )
}

export default AutocompleteSelect
