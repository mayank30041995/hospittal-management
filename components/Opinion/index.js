import React, { useEffect, useMemo } from 'react'
import BackLink from '../BackLink'
import { Button, Col, Divider, Rate, Row } from 'antd'
import { SliderImg } from '../Search/search.styled'
import { Typography } from 'antd'
import Spacer from 'react-spacer'
import AboutUs from '../Doctor/AboutUs'
import { formOne, formThree, formTwo, step } from '@/redux/actions/appAction'
import { useDispatch, useSelector } from 'react-redux'

import { useState } from 'react'
// import Payment from './Steps/Payment'
import {
  ButtonSubmit,
  CardBlock,
  CardImage,
  CardInfo,
  CardText,
  CardTitle,
  ContainerBody,
  FormGroupWrap,
  TextContainer,
} from './opinion.styled'
import DetailsForm from '../Consult/Steps/DetailsForm'
import OpinionForm from './OpinionForm'
import FileUpload from '../FileUpload'
import { HideDisplayMobile } from '../Dashboard/dashboardmobile.styled'
import { getLinks } from './getLinks'
const _ = require('lodash')
const { Title, Text, Link } = Typography

function Opinion({ user, doctors, loading, error, count, ...props }) {
  console.log('doctorsConsult', doctors, loading)
  const [billingAddress, setBillingAddress] = useState({})
  const dispatch = useDispatch()

  const [selectedFile, setSelectedFile] = useState()
  const [isFilePicked, setIsFilePicked] = useState(false)

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0])
    setIsFilePicked(true)
  }

  // const handleSubmission = () => {}
  let {
    Name,
    Pictures,
    Address,
    Experience,
    Department,
    specialities,
    hospital,
    Rating = 5,
    googleRating = 5,
  } = doctors.length && doctors[0]

  const links = useMemo(() => {
    return getLinks(doctors)
  }, [doctors])

  const renderSwitch = (param) => {
    console.log('renderSwitch:', param)
    switch (param) {
      case 1:
      case 5:
        return <OpinionForm user={user} doctors={doctors} {...props} />
    }
  }

  return (
    <ContainerBody>
      <BackLink myLinks={links} type="mobile" />
      <BackLink myLinks={links} type="desktop" />
      <FormGroupWrap>
        <Col flex={1} style={{ width: '55%' }}>
          {/* For width change*/}
          <CardInfo>
            <Row>
              <CardBlock>
                {Pictures && Pictures.length ? (
                  <CardImage
                    src={Pictures[0]?.url || '/doctor_example.jpg'}
                    alt="/practitioners.png"
                  />
                ) : (
                  <CardImage
                    src="/doctor_example.jpg"
                    alt="/practitioners.png"
                  />
                )}
              </CardBlock>
              <TextContainer span={12}>
                <CardTitle level={4}>{Name}</CardTitle>
                <CardText type="secondary">
                  {hospital && hospital?.Name}
                </CardText>

                <CardText type="secondary">{Address}</CardText>
                <Row>
                  <Col>
                    <CardText>Experience: {Experience} Years</CardText>
                  </Col>
                  <Spacer width={12} />
                  <Col>
                    <CardText>Department: {Department}</CardText>
                  </Col>
                </Row>
                {specialities && specialities.length > 0 && (
                  <Col>
                    <HideDisplayMobile>
                      <CardText>
                        Specialisation:{' '}
                        {specialities[0].Desciption.slice(0, 60)}
                        ...
                      </CardText>
                    </HideDisplayMobile>
                  </Col>
                )}
                <Col>
                  <HideDisplayMobile>
                    <CardText>
                      Google Ratings: <Rate allowHalf disabled value={Rating} />
                    </CardText>
                  </HideDisplayMobile>
                </Col>
              </TextContainer>
            </Row>
          </CardInfo>
          <Row justify="space-between">
            <Col style={{ width: '90vh' }}>{renderSwitch(props.step)}</Col>
            <HideDisplayMobile>
              <Col style={{ marginTop: '30px' }}>
                <FileUpload
                  selectedFile={selectedFile}
                  isFilePicked={isFilePicked}
                  setIsFilePicked={setIsFilePicked}
                  changeHandler={changeHandler}
                />
              </Col>
            </HideDisplayMobile>
          </Row>
        </Col>
      </FormGroupWrap>
    </ContainerBody>
  )
}

export default Opinion
