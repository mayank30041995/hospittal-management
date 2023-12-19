import { Col, Row, Skeleton, Empty, Spin } from 'antd'
import Spacer from 'react-spacer'
import styles from '@/styles/Home.module.css'
import React from 'react'
import {
  AutocompleteWrap,
  FilterMobileRow,
  FilterMobileSelects,
  LoaderContainer,
  ScrollBar,
  SearchContent,
  Span,
} from './search.styled'
import Panel from './Panel'
import { renderByType } from './typeRender'
import FilterPanel from './FilterPanel'
import { memo, useState } from 'react'
import { ScrollWrap } from '../Hospital/hospital.styled'
import FilterPanelMobile from './FilterPanelMobile'
import { HideDisplay } from '../Dashboard/dashboardmobile.styled'
import { useRef } from 'react'
import { nextPage } from '@/redux/actions/searchAction'

const SearchResults = ({
  children,
  count,
  search,
  setSearch,
  hospitalResult,
  doctorResult,
  resultType,
  searchResult,
  selectedId,
  ...props
}) => {
  let { error, loader, auth, dispatch, pagination, defaultValue } = props
  const [enable, setEnable] = useState(false)
  const listInnerRef = useRef()

  let { start, page } = pagination
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current
      if (
        Math.ceil(scrollTop + clientHeight + 2) >= Math.ceil(scrollHeight / 1.2)
      ) {
        if (page <= Math.floor(count / 10)) {
          dispatch(nextPage(start))
        }
        return
      }
    }
  }
  return (
    <>
      <Row>
        {/* Filter Panel for Mobile*/}
        <HideDisplay>
          <Span> &nbsp; Filters</Span>
        </HideDisplay>
        <ScrollWrap>
          <FilterPanelMobile
            searchResult={searchResult}
            search={search}
            setSearch={setSearch}
            resultType={resultType}
            {...props}
          />
        </ScrollWrap>
        {/* Filter Panel */}
        {!enable ? (
          <>
            <Panel setEnable={setEnable} />
            <Spacer width={30} />
          </>
        ) : (
          <FilterPanel
            searchResult={searchResult}
            search={search}
            setSearch={setSearch}
            resultType={resultType}
            setEnable={setEnable}
            {...props}
          />
        )}

        <SearchContent enable="true">
          <ScrollBar
            className={styles.main}
            // key={user._id}
            onScroll={onScroll}
            ref={listInnerRef}
            style={{
              paddingBottom: '20px',
              width: '102%',
              height: '55rem',
            }}
          >
            {/* Filter Titles */}
            {children}
            <Spacer height={20} />
            {/* Filter Items */}
            {error && <Empty description={error || 'No Data'} />}
            {/* {!hospitalResult.length && <Empty description={error || 'No Data'} />} */}
            {loader && (
              <LoaderContainer>
                <Spin size="large" />
              </LoaderContainer>
            )}
            {renderByType(
              loader,
              search,
              resultType,
              hospitalResult,
              doctorResult,
              selectedId,
              enable,
              auth,
              defaultValue
            )}
          </ScrollBar>
        </SearchContent>
      </Row>
    </>
  )
}
export default memo(SearchResults)
