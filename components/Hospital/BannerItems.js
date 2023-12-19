import React, { memo, useEffect, useMemo, useState } from 'react'
import hmeImg from '@/public/banner.png'
import { Col, Row, Skeleton, Layout, Rate } from 'antd'
import Spacer from 'react-spacer'
import { useRouter } from 'next/router'
import {
  AutocompleteSelectArea,
  Banner,
  BannerImg,
  BannerText,
  InfoMobileRow,
  LayoutWrapper,
  MobileBannerRow,
  TextArea,
  TextBannerCol,
  TitleArea,
} from './hospital.styled'
import { fetchSearchJSON } from '@/utils/apiCalls'
import appConfig from '@/utils/appConfig'
import { useDispatch, useSelector } from 'react-redux'
import { loadHospitalDoctors } from '@/redux/actions/searchAction'
import { fetchDefaultOptions } from '@/components/helper/fetchSelectLookup'
const _ = require('lodash')

const headerStyle = {
  backgroundImage: `url(${hmeImg})`,
}

function BannerItems({
  hospitalDetails,
  globalFilterdDoctors,
  saved,
  setSaved,
  debounce_fun,
}) {
  const [options, setOptions] = useState([])
  let dispatch = useDispatch()
  const defaultSearchOptions = useSelector(
    (state) => state.app?.defaultSearchOptions
  )
  const router = useRouter()
  const {
    id,
    Name,
    Address,
    Beds,
    EstablishedYear,
    NABH,
    JCI,
    Pictures,
    Rating,
    googleRating,
    specialities,
    treatments,
    conditions,
    doctors = [],
    Geo,
  } = hospitalDetails

  const searchDefault = async (e) => {
    let updatedList = []
    const response = await fetchSearchJSON(
      `${
        appConfig.socketURL
      }/home/search?q=${e?.toLowerCase()}&cat=fordocs&limit=50`
    )
      .then(
        (body) =>
          body?.length > 0 &&
          body?.map((data) => ({
            label: (
              <>
                <div>{data.label}</div>
                <div className="desc_search">{data.category}</div>
              </>
            ),
            value: data.label,
            key: data.id,
            title: data.category,
          }))
      )
      .catch((err) => {
        console.log('error', err)
        return []
      })
    updatedList =
      doctors.length > 0 &&
      doctors.filter(
        (item) => item.Name.toLowerCase().indexOf(e.toLowerCase()) !== -1
      )
    const allDoctors = updatedList.map((list, i) => ({
      label: (
        <>
          <div>{list.Name}</div>
          <div className="desc_search">{'doctor'}</div>
        </>
      ),
      value: list.Name,
      key: list.id,
      title: 'doctor',
    }))
    console.log('setSearch2', response, allDoctors)
    if (response.length > 0) {
      return [...response, ...allDoctors]
    } else {
      return allDoctors
    }
  }

  const setSearchByType = (e) => {
    debounce_fun(e, 'banner')
  }
  const handleSelect = async (e) => {
    console.log('setSearchByType', e)
  }

  return (
    <React.Fragment>
      {Pictures && Pictures.length > 0 ? (
        <BannerImg src={Pictures[0]?.url} alt="banner" style={headerStyle} />
      ) : (
        <BannerImg src="banner.png" alt="banner" style={headerStyle} />
      )}
      {MobileBanner(
        hospitalDetails,
        options,
        setSearchByType,
        searchDefault,
        defaultSearchOptions
      )}
      <Banner>
        <BannerText>
          {!_.isEmpty(hospitalDetails) ? (
            <TitleArea level={2} className="hospital_title">
              {Name}
            </TitleArea>
          ) : (
            <Skeleton.Input
              size="small"
              active
              style={{ background: '#c1c1c1' }}
            />
          )}
          <Col>
            {!_.isEmpty(hospitalDetails) ? (
              <TextArea type="secondary" className="head_text_title">
                {Address}
              </TextArea>
            ) : (
              <>
                <Spacer height={10} />
                <Skeleton
                  size="small"
                  active
                  paragraph={{
                    rows: 1,
                  }}
                  style={{ background: '#c1c1c1' }}
                />
              </>
            )}
          </Col>
          <Spacer height={10} />
          <Col>
            <TextArea type="secondary" className="head_text">
              <Col>
                <TextArea type="secondary" className="head_text_rate">
                  Google Ratings:
                </TextArea>
                <Rate
                  allowHalf
                  disabled
                  value={Rating}
                  defaultValue={Rating}
                  // onChange={(e) => console.log(e)}
                />
              </Col>
            </TextArea>
          </Col>
        </BannerText>

        <Col>
          <Spacer height={50} />
          <Row>
            <Col>
              <TextArea type="secondary" className="head_text">
                ◦  Established In: {EstablishedYear || ''}
              </TextArea>

              <Spacer height={25} />

              <TextArea type="secondary" className="head_text">
                {NABH ? '◦  NABH Accredited' : ''}
              </TextArea>
            </Col>
            <Spacer width={50} />
            <Col>
              <TextArea type="secondary" className="head_text">
                ◦  Number of Beds: {Beds || 0}
              </TextArea>

              <Spacer height={25} />

              <TextArea type="secondary" className="head_text">
                {JCI ? '◦  JCI Accredited' : ''}
              </TextArea>
            </Col>
          </Row>
        </Col>
        {/* <Spacer height={10} /> */}
        <AutocompleteSelectArea
          placeholder="Search"
          allowClear
          style={{ border: 'none' }}
          fetchOptions={(e) => searchDefault(e)}
          searchDispatch={(e) => setSearchByType(e)}
          values={saved?.value}
          datasourceitem={fetchDefaultOptions(
            defaultSearchOptions,
            'speciality'
          )}
          // fetchOptions={async () => await options}
          // onSelect={(e) => handleSelect(e)}
        />
      </Banner>
    </React.Fragment>
  )
}

const MobileBanner = (
  hospitalDetails,
  options,
  setSearchByType,
  searchDefault,
  defaultSearchOptions
) => {
  const router = useRouter()
  const {
    Name,
    Address,
    Beds,
    NABH,
    JCI,
    EstablishedYear,
    Rating,
    googleRating,
    doctors = [],
    Geo,
  } = hospitalDetails

  return (
    <MobileBannerRow>
      <Col>
        {!_.isEmpty(hospitalDetails) ? (
          <TitleArea level={5} className="hospital_title">
            {Name}
          </TitleArea>
        ) : (
          <Skeleton.Input
            size="small"
            active
            style={{ background: '#c1c1c1', width: '50vh' }}
          />
        )}
      </Col>
      <Col>
        {!_.isEmpty(hospitalDetails) ? (
          <TextArea type="secondary" className="head_text">
            {Address}
          </TextArea>
        ) : (
          <>
            <Spacer height={10} />
            <Skeleton
              size="small"
              active
              paragraph={{
                rows: 1,
              }}
              style={{ background: '#c1c1c1', width: '50vh' }}
            />
          </>
        )}

        <AutocompleteSelectArea
          placeholder="Search"
          style={{ border: 'none' }}
          size="medium"
          allowClear
          fetchOptions={(e) => searchDefault(e)}
          datasourceitem={fetchDefaultOptions(
            defaultSearchOptions,
            'speciality'
          )}
          searchDispatch={(e) => setSearchByType(e)}
        />
      </Col>

      <InfoMobileRow justify="space-between">
        <TextBannerCol span={12}>
          <TextArea type="secondary" className="head_text">
            ◦  Established In: {EstablishedYear || ''}
          </TextArea>
        </TextBannerCol>
        <TextBannerCol span={12}>
          <TextArea type="secondary" className="head_text">
            {NABH ? '◦  NABH Accredited' : ''}
          </TextArea>
        </TextBannerCol>
        <TextBannerCol span={12}>
          <TextArea type="secondary" className="head_text">
            ◦  Number of Beds: {Beds || 0}
          </TextArea>
        </TextBannerCol>
        <TextBannerCol span={12}>
          <TextArea type="secondary" className="head_text">
            {JCI ? '◦  JCI Accredited' : ''}
          </TextArea>
        </TextBannerCol>
      </InfoMobileRow>
    </MobileBannerRow>
  )
}

export default memo(BannerItems)
