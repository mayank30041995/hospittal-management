import React from 'react'
import { Col, Rate, Row, Typography, Empty, Spin } from 'antd'
import Spacer from 'react-spacer'
import { NavImage, NavImageSection } from '../NavLayout/module.styled'
import Carousel from './Carousel'
import { useRouter } from 'next/router'
import {
  BannerImg,
  BannerRowTitles,
  CardWrapper,
  DescriptionBlock,
  ParagraphText,
  ParagraphTextDesktop,
  ParagraphTextMobile,
  RateStatus,
  TitleText,
} from './search.styled'

function HospitalResults({
  loader,
  search,
  hospitalResult,
  type,
  selectedId,
  auth,
  defaultValue,
}) {
  const router = useRouter()

  if (!loader && hospitalResult.length === 0) {
    return <Empty description="No Hospital's Found" />
  }
  return (
    <>
      {hospitalResult.length > 0 &&
        hospitalResult.map((item, key) => {
          let {
            _id,
            Name,
            Address,
            Rating = 1,
            doctors,
            Beds = 0,
            EstablishedYear,
          } = item

          return (
            <div key={key}>
              {type === 'TopHospital' && (
                <>
                  <CardWrapper
                    onClick={() =>
                      router.push({
                        pathname: `/hospital`,
                        query: {
                          id: `${_id}`,
                          type: 'Hospital',
                        },
                      })
                    }
                  >
                    <BannerRowTitles>
                      {item.Pictures ? (
                        <BannerImg
                          // src="hospital.png"
                          src={item.Pictures[0]?.url || 'hospital.png'}
                          alt="hosplan_logo"
                          width={180}
                          style={{ objectFit: 'cover', borderRadius: '12px' }}
                        />
                      ) : (
                        <BannerImg
                          src="hospital.png"
                          alt="hosplan_logo"
                          style={{ maxWidth: '95%', borderRadius: '12px' }}
                        />
                      )}
                      <Spacer width={10} />
                      <DescriptionBlock>
                        <TitleText level={3} banner="true">
                          {Name}
                        </TitleText>
                        <ParagraphTextDesktop>
                          Established In: {EstablishedYear} | No of Beds: {Beds}
                        </ParagraphTextDesktop>
                        <ParagraphTextMobile>
                          Established In: {EstablishedYear}
                        </ParagraphTextMobile>
                        <ParagraphTextMobile>
                          No of Beds: {Beds}
                        </ParagraphTextMobile>
                        <Spacer width={10} />
                        <RateStatus banner="true">
                          Google Ratings:{' '}
                          <Rate allowHalf disabled defaultValue={Rating} />
                        </RateStatus>
                      </DescriptionBlock>
                    </BannerRowTitles>
                    <Col style={{ display: 'grid' }}>
                      <NavImageSection
                        src="map.png"
                        alt="hosplan_logo"
                        height={100}
                        style={{ maxWidth: '90%', borderRadius: '12px' }}
                        hide
                      />
                      <Spacer height={5} />
                      <NavImageSection
                        src="directions.png"
                        alt="hosplan_logo"
                        style={{ maxWidth: '90%', borderRadius: '12px' }}
                        hide
                      />
                    </Col>
                  </CardWrapper>
                  <Spacer height={20} />
                </>
              )}

              {type !== 'TopHospital' && (
                <Carousel
                  hospitalName={Name}
                  hospitalId={_id}
                  selectedId={selectedId}
                  search={search}
                  auth={auth}
                  hospitalResult={hospitalResult}
                  item={item}
                  loader={loader}
                  defaultValue={defaultValue}
                />
              )}
            </div>
          )
        })}
    </>
  )
}

export default HospitalResults
