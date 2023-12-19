import React from 'react'
import { Typography } from 'antd'
import {
  ChipStatus,
  MessageTitle,
  SearchStatusText,
  Span,
  Status,
} from '../Search/search.styled'
import { CloseOutlined } from '@ant-design/icons'
import Spacer from 'react-spacer'
const { Title, Text } = Typography

function SearchStatus({
  count,
  defaultValue,
  setDefaultValue,
  resultType,
  setFilters,
  titles,
  type,
  ...props
}) {
  return (
    <MessageTitle>
      {/*  */}
      <Title type="primary" level={5}>
        {defaultValue !== '' ? (
          <Status>
            {!props?.loading ? (
              <>
                {count !== 0 ? (
                  <>
                    <Span className="title_msg">We found</Span> &ensp;
                    <Span className="title_msg">
                      {count} {resultType}&apos;s for &ensp;
                    </Span>
                  </>
                ) : (
                  <>
                    <Span className="title_msg">
                      No {resultType}&apos;s Found For
                    </Span>{' '}
                  </>
                )}
                <Spacer width={8} />
                <ChipStatus>
                  <p>
                    {titles !== ''
                      ? titles?.slice(0, 45)
                      : type.value?.slice(0, 45)}
                  </p>{' '}
                  &ensp;
                  <CloseOutlined
                    onClick={() => {
                      setDefaultValue('')
                      setFilters([])
                    }}
                  />
                </ChipStatus>
              </>
            ) : (
              <Span className="title_msg">Searching for Results...</Span>
            )}
          </Status>
        ) : (
          <>
            {!props?.loading ? (
              <>
                {count !== 0 ? (
                  <>
                    <Span className="title_msg">Showing</Span> “All”{' '}
                    <Span className="title_msg">
                      with {count} {resultType}&apos;s
                    </Span>{' '}
                  </>
                ) : (
                  <>
                    <Span className="title_msg">
                      No {resultType}&apos;s Found For
                    </Span>{' '}
                  </>
                )}
              </>
            ) : (
              <Span className="title_msg">Searching for Results...</Span>
            )}
          </>
        )}
      </Title>
      <SearchStatusText type="secondary">
        Use filters on the left hand side for location, google ratings, fees and
        more.
      </SearchStatusText>
    </MessageTitle>
  )
}

export default SearchStatus
