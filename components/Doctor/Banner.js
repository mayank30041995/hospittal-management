import React from 'react'
import { Col, Divider, Rate, Row, Skeleton } from 'antd'
import { Space, Typography } from 'antd'
import { ExpandAltOutlined } from '@ant-design/icons'
import { ButtonWrapper, NavImage } from '../NavLayout/module.styled'
import Spacer from 'react-spacer'
import {
  BannerWrapper,
  ColAreaWrap,
  ColBtn,
  ColButtonWrapper,
  LinkChat,
  MainText,
  MainTitle,
  ProfileImg,
  ProfileRow,
} from './doctor.styled'
import Router from 'next/router'
import { ButtonWrapperBlock, LinkDecoration } from '../Search/search.styled'
const { Link } = Typography

let fullWidth = { width: '100%', borderRadius: '8px' }
let img_style = { width: '14em', height: '18em', objectFit: 'cover' }
const responsive = { xs: 8, sm: 16, md: 24, lg: 32 }

function Banner({ doctors }) {
  let {
    _id,
    Address,
    Experience,
    Department,
    Name,
    Designation,
    Rating,
    Pictures,
    hospital,
  } = doctors.length && doctors[0]
  return (
    <React.Fragment>
      {mobileBanner(doctors, Router)}
      <BannerWrapper
        flex="true"
        justify="space-between"
        align="center"
        gutter={{
          ...responsive,
        }}
        style={{ alignItems: 'center', marginTop: '10vh' }}
      >
        <Row style={{ width: '45em' }}>
          {Pictures && Pictures.length ? (
            <Col className="gutter-row">
              <NavImage
                src={Pictures[0].url}
                alt="hosplan_logo"
                style={{ ...img_style }}
              />
            </Col>
          ) : (
            <Col className="gutter-row">
              <NavImage
                src="doctor_example.jpg"
                alt="hosplan_logo"
                style={{ ...img_style }}
              />
            </Col>
          )}

          <Col className="gutter-row" push={1} span={16}>
            <Col>
              {Name ? (
                <MainTitle level={3} className="name_title">
                  {Name}
                </MainTitle>
              ) : (
                <Skeleton.Button
                  active={true}
                  size="large"
                  shape="default"
                  block={true}
                  style={{ marginTop: '25px', height: '8em' }}
                />
              )}
            </Col>
            <Col>
              <MainText className="desc_text">{hospital?.Name || ''}</MainText>
            </Col>
            <Col>
              <MainText className="desc_text">{Address || ''}</MainText>
            </Col>
            {/* <Col>
            <Text style={{ fontSize: '22px', color: '#306FB2' }}>
              Sarita Vihar Delhi Mathura Road, New Delhi - 110076
            </Text>
          </Col> */}
            {/* <Col>
            <Row align-items="end"> */}
            <Col>
              {Experience ? (
                <MainText className="desc_text" payload={Experience}>
                  Experience: {Experience || ''} Years
                </MainText>
              ) : (
                <></>
              )}
            </Col>
            <Spacer width={15} />
            <Col>
              {Department && (
                <MainText className="desc_text">
                  Department: {Department}
                </MainText>
              )}
            </Col>
            {/* </Row>
          </Col> */}
            <Col>
              <MainText className="desc_text">
                Specialisation: {Designation}
              </MainText>
            </Col>
            <Col>
              <MainText className="desc_text">
                Google Ratings:
                {Rating && <Rate allowHalf disabled defaultValue={Rating} />}
              </MainText>
            </Col>
          </Col>
        </Row>
        <Row>
          <ButtonWrapperBlock align="center">
            <LinkDecoration>
              <Link href="/" target="_blank">
                Start Live Chat Now <ExpandAltOutlined />
              </Link>
            </LinkDecoration>
            <Spacer height={20} />
            <Row align="center" justify="space-between">
              <Col>
                <ButtonWrapper
                  colors="primary"
                  size="large"
                  onClick={() =>
                    Router.push({
                      pathname: `/opinion/${_id}`,
                    })
                  }
                  style={{ width: '25vh' }}
                >
                  Get Opinion
                </ButtonWrapper>
              </Col>

              <Col>
                <ButtonWrapper
                  colors="primary"
                  size="large"
                  onClick={() =>
                    Router.push({
                      pathname: `/consult/${_id}`,
                    })
                  }
                  style={{ width: '25vh' }}
                >
                  Tele-Consult
                </ButtonWrapper>
              </Col>
            </Row>
            <Spacer height={10} />
            <Col>
              <ButtonWrapper
                colors="primary"
                size="large"
                style={{ ...fullWidth }}
                onClick={() =>
                  Router.push({
                    pathname: `/consult/${_id}`,
                  })
                }
              >
                Book an Appointment
              </ButtonWrapper>
            </Col>
          </ButtonWrapperBlock>
        </Row>
      </BannerWrapper>
    </React.Fragment>
  )
}

const mobileBanner = (doctors) => {
  let {
    _id,
    Address,
    Experience,
    Department,
    Name,
    hospital,
    Designation,
    Education,
    Rating,
    Pictures,
  } = doctors.length && doctors[0]
  return (
    <>
      <ProfileRow>
        <Col>
          {Pictures ? (
            <ProfileImg
              // src="hospital.png"
              src={Pictures[0]?.url || 'doctor_example.jpg'}
              alt="doctor_example.jpg"
            />
          ) : (
            <ProfileImg src="doctor_example.jpg" alt="doctor_example.jpg" />
          )}
        </Col>
        <ColAreaWrap className="gutter-row" push={1}>
          <Col>
            {Name ? (
              <MainTitle level={4} className="name_title">
                {Name}
              </MainTitle>
            ) : (
              <Skeleton.Button
                active={true}
                size="medium"
                shape="default"
                block={true}
                style={{ marginTop: '25px', width: '30vh' }}
              />
            )}
          </Col>
          <Col>
            {Education ? (
              <MainText className="desc_text">Education: {Education}</MainText>
            ) : (
              <Skeleton.Button
                active={true}
                size="medium"
                shape="default"
                block={true}
                style={{ width: '30vh' }}
              />
            )}
          </Col>
          <Col>
            {Department ? (
              <MainText className="desc_text">{Department}</MainText>
            ) : (
              <Skeleton.Button
                active={true}
                size="medium"
                shape="default"
                block={true}
                style={{ width: '30vh' }}
              />
            )}
          </Col>
          <Col>
            {Experience && (
              <MainText className="desc_text">
                Experience: {Experience} Years
              </MainText>
            )}
          </Col>
          <Col>
            {hospital && (
              <MainText className="desc_text">{hospital.Name} </MainText>
            )}
          </Col>
          <Col>
            <MainText className="desc_text">
              Google Ratings:
              {Rating && <> {Rating} ⭐</>}
            </MainText>
          </Col>
        </ColAreaWrap>
      </ProfileRow>
      <ColButtonWrapper className="gutter-row">
        <Spacer height={10} />
        <Col align="center">
          <Row justify="space-between">
            <ColBtn>
              <ButtonWrapper
                colors="primary"
                size="large"
                style={{ ...fullWidth }}
                onClick={() =>
                  Router.push({
                    pathname: `/opinion/${_id}`,
                  })
                }
              >
                Get Opinion
              </ButtonWrapper>
            </ColBtn>

            <ColBtn>
              <ButtonWrapper
                colors="primary"
                size="large"
                style={{ ...fullWidth }}
                onClick={() =>
                  Router.push({
                    pathname: `/consult/${_id}`,
                  })
                }
              >
                Tele-Consult
              </ButtonWrapper>
            </ColBtn>
          </Row>
          <Spacer height={5} />

          <ButtonWrapper
            colors="primary"
            size="large"
            style={{ ...fullWidth }}
            onClick={() =>
              Router.push({
                pathname: `/consult/${_id}`,
              })
            }
          >
            Book an Appointment
          </ButtonWrapper>
          <Spacer height={20} />
          <LinkChat href="/" target="_blank">
            <span style={{ textDecoration: 'underline' }}>
              Start Live Chat Now
            </span>
            &nbsp; <ExpandAltOutlined />
          </LinkChat>
          <Spacer height={20} />
        </Col>
      </ColButtonWrapper>
    </>
  )
}

export default Banner
