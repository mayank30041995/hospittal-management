import React, { useEffect } from 'react'
import BackLink from '../BackLink'
import { Button, Col, Divider, Rate, Row } from 'antd'
import { SliderImg } from '../Search/search.styled'
import { Typography } from 'antd'
import Spacer from 'react-spacer'
import { UploadOutlined, DeleteOutlined } from '@ant-design/icons'
import DetailsForm from './Steps/DetailsForm'
import Appointment from './Steps/Appointment'
import AboutUs from '../Doctor/AboutUs'
import { formOne, formThree, formTwo, step } from '@/redux/actions/appAction'
import { useDispatch, useSelector } from 'react-redux'
import ConsultationDetails from './Cards/ConsultationDetails'
import BillingDetails from './Cards/BillingDetalils'
import { useState } from 'react'
import Payment from './Steps/Payment'
import {
  ButtonSubmit,
  CardBlock,
  CardImage,
  CardInfo,
  CardInfoRow,
  CardText,
  CardTitle,
  ContainerBody,
  Label,
} from './consult.styled'
import FileUpload from '../FileUpload'
import {
  HideDisplayContents,
  HideDisplayMobile,
} from '../Dashboard/dashboardmobile.styled'
import PaymentStatus from './Steps/PaymentStatus'
import { useMemo } from 'react'
import { getLinks } from './getLinks'
const _ = require('lodash')
const { Title, Text, Link } = Typography

function Consult({ doctors, loading, error, count, ...props }) {
  console.log('doctorsConsult', doctors, loading)
  const [billingAddress, setBillingAddress] = useState({})
  const [selectedFile, setSelectedFile] = useState()
  const [isFilePicked, setIsFilePicked] = useState(false)

  const dispatch = useDispatch()
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

  useEffect(() => {
    if (props.step !== 1) {
      dispatch(step(1))
      dispatch(formOne({}))
      dispatch(formTwo({}))
      dispatch(formThree({}))
    }
  }, [])

  const renderSwitch = (param) => {
    console.log('renderSwitch:', param)
    switch (param) {
      case 1:
        return <DetailsForm {...props} />
      case 2:
      case 3:
        return <Appointment {...props} />
      case 4:
        return <Payment doctors={doctors} {...props} />
      case 5:
        return <PaymentStatus doctors={doctors} {...props} />
      default:
        return <DetailsForm {...props} />
    }
  }
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0])
    setIsFilePicked(true)
  }
  return (
    <ContainerBody>
      <BackLink myLinks={links} type="mobile" />
      <BackLink myLinks={links} type="desktop" />

      <CardInfoRow>
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
                    alt="practitioners.png"
                  />
                )}
              </CardBlock>
              <Col span={12} style={{ marginLeft: '15px' }}>
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
              </Col>
            </Row>
          </CardInfo>
          {/* <Col style={{ padding: '0 5% 0 5%' }}>
           
          </Col> */}
          {/* <Row justify="space-between"> */}

          <Col>{renderSwitch(props.step)}</Col>

          {/* </Row> */}
        </Col>

        {/*  */}
        <Col flex={10}>
          <ConsultationDetails doctors={doctors} {...props} />
          {props.step === 1 && (
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
          )}

          {(props.step === 4 || props.step === 5) && (
            <BillingDetails doctors={doctors} {...props} />
          )}
          {(props.step === 2 || props.step === 3) && (
            <Col align="center">
              <ButtonSubmit
                type="primary"
                htmlType="submit"
                size="large"
                onClick={() => dispatch(step(3))}
              >
                PROCEED TO ADD BILLING ADDRESS
              </ButtonSubmit>
            </Col>
          )}
        </Col>
      </CardInfoRow>

      <Col style={{ marginTop: '100px' }}>
        <AboutUs doctors={doctors} loading={loading} />
      </Col>
    </ContainerBody>
  )
}

export default Consult
