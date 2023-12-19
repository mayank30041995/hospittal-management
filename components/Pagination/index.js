import { Col, Row, Spin } from 'antd'
import React from 'react'
import { useRouter } from 'next/router'
import { ButtonWrapper, PageWrapper } from '../NavLayout/module.styled'
import Spacer from 'react-spacer'
import { useSelector } from 'react-redux'

function Pagination({
  page,
  start,
  count,
  previousPage,
  nextPage,
  dispatch,
  fullWidth,
}) {
  const router = useRouter()
  const { loading } = useSelector((state) => state.search)
  return (
    <PageWrapper>
      {/* {count % 10 === 0 ? (
        <p style={{ fontFamily: 'Inter' }}>
          {page} of {Math.floor(count / 10)} &nbsp;
        </p>
      ) : (
        <p style={{ fontFamily: 'Inter' }}>
          {page} of {Math.floor(count / 10) + 1} &nbsp;
        </p>
      )}
      <Col> */}
      {/* <ButtonWrapper
          // disabled={start < count ? false : true}
          disabled={page <= Math.floor(count / 10) ? false : true}
          onClick={() => {
            dispatch(nextPage(start))
          }}
          loading={loading}
        >
          Load More...
        </ButtonWrapper>
        {loading && <Spin />} */}
      {/* <ButtonWrapper
          colors="primary"
          size="medium"
          disabled={start === 0 ? true : false}
          style={{ ...fullWidth, borderRadius: '4px' }}
          onClick={() => {
            dispatch(previousPage(start))
            window.scroll({
              top: 1,
            })
          }}
        >
          Previous
        </ButtonWrapper>
      </Col>
      <Spacer width={10} />
      <Col>
        <ButtonWrapper
          colors="primary"
          size="medium"
          style={{ ...fullWidth, borderRadius: '4px' }}
          disabled={start + 1 * 10 < count ? false : true}
          onClick={() => {
            dispatch(nextPage(start))
            window.scroll({
              top: 1,
            })
          }}
        >
          Next
        </ButtonWrapper> */}
      {/* </Col> */}
    </PageWrapper>
  )
}

export default Pagination
