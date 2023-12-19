import { Button, Typography, Col, Modal, Row, Avatar } from 'antd'
import { useEffect } from 'react'
import { useState } from 'react'
import { CheckCircleOutlined, UserOutlined } from '@ant-design/icons'
import { step } from '@/redux/actions/appAction'
import { useDispatch } from 'react-redux'
import { StatusModel } from '../Consult/consult.styled'
import {
  DetailsModel,
  DetailsModelRow,
  DetailsModelWrapper,
} from './opinion.styled'
import Spacer from 'react-spacer'
import moment from 'moment'
import { ButtonWrapper } from '../NavLayout/module.styled'
import Router from 'next/router'

const { Title, Text } = Typography

const BillingSuccessModel = ({ status, setStatus, doctors, bookingOrders }) => {
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)
  let {
    id,
    Name,
    hospital,
    Pictures,
    googleRating = 5,
  } = doctors.length && doctors[0]
  useEffect(() => {
    if (!isModalOpen && status) {
      setIsModalOpen(true)
    }

    // setTimeout(() => {
    //   setIsModalOpen(false)
    //   setStatus(false)
    // }, [8000])
  }, [status])
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    dispatch(step(1))
    setIsModalOpen(false)
  }
  return (
    <div>
      <Row>
        <Col style={{ display: 'grid' }}>
          {isModalOpen && (
            <StatusModel
              //   title="Select a Date and Time Slot for Appointment booking according to your preference"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              closable={false}
              okText="SAVE"
              footer={null}
              width={700}
            >
              <DetailsModelWrapper>
                <CheckCircleOutlined
                  style={{ fontSize: '35px', color: '#1286F1' }}
                />
                <Text
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    color: '#1286F1',

                    fontSize: '18px',
                  }}
                >
                  Reports Recieved
                </Text>
                <Text
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    color: '#1286F1',
                    fontSize: '16px',
                    margin: 5,
                  }}
                >
                  We’ll get back to you shortly
                </Text>
                <DetailsModelRow>
                  <DetailsModel>
                    <Text strong>Order Details</Text>
                    <Spacer height={16} />
                    <Row justify="center">
                      <Avatar
                        src={(Pictures?.length && Pictures[0]?.url) || ''}
                        size={40}
                      />
                      &ensp;
                      <div style={{ display: 'grid', textAlign: 'start' }}>
                        <Text
                          style={{
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            color: '#1286F1',
                            fontSize: '14px',
                            margin: 0,
                          }}
                        >
                          {Name}
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            color: '#1286F1',
                            fontSize: '12px',
                            margin: 0,
                          }}
                        >
                          {hospital?.Name}
                        </Text>
                      </div>
                    </Row>
                    <Spacer height={16} />
                    <Row justify="center" align="center">
                      <Col>
                        <Text
                          style={{
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            color: '#000',
                            fontSize: '14px',
                            margin: 0,
                          }}
                        >
                          Date of Booking
                        </Text>
                      </Col>
                      <Spacer width={65} />
                      <Col>
                        <Text
                          style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            color: '#000',
                            fontSize: '12px',
                            margin: 0,
                          }}
                        >
                          {moment().format('MMM Do YY')}
                        </Text>
                      </Col>
                    </Row>
                    <Row justify="center">
                      <Col>
                        <Text
                          style={{
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            color: '#000',
                            fontSize: '14px',
                            margin: 0,
                          }}
                        >
                          Appointment Type
                        </Text>
                      </Col>
                      <Spacer width={65} />
                      <Col>
                        <Text
                          style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            color: '#000',
                            fontSize: '12px',
                            margin: 0,
                          }}
                        >
                          FREE OPINION
                        </Text>
                        <Spacer height={16} />
                      </Col>
                    </Row>
                  </DetailsModel>
                </DetailsModelRow>

                <DetailsModelRow>
                  <DetailsModel>
                    <Text strong>Patient Details</Text>
                    <Spacer height={16} />

                    <Row justify="start" align="center">
                      <Col span={12}>
                        <Text
                          style={{
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            color: '#000',
                            fontSize: '14px',
                            margin: 0,
                          }}
                        >
                          Name
                        </Text>
                      </Col>

                      <Col span={12}>
                        <Text
                          style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            color: '#000',
                            fontSize: '12px',
                          }}
                        >
                          {bookingOrders?.patientName}
                        </Text>
                      </Col>
                      <Col span={12}>
                        <Text
                          style={{
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            color: '#000',
                            fontSize: '14px',
                            margin: 0,
                          }}
                        >
                          Age
                        </Text>
                      </Col>

                      <Col span={12}>
                        <Text
                          style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            color: '#000',
                            fontSize: '12px',
                            margin: 0,
                          }}
                        >
                          {bookingOrders.age}
                        </Text>
                      </Col>

                      <Col span={12}>
                        <Text
                          style={{
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            color: '#000',
                            fontSize: '14px',
                            margin: 0,
                          }}
                        >
                          Phone Number
                        </Text>
                      </Col>

                      <Col span={12}>
                        <Text
                          style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            color: '#000',
                            fontSize: '12px',
                            margin: 0,
                          }}
                        >
                          +1453463656
                        </Text>
                        <Spacer height={16} />
                      </Col>
                    </Row>
                  </DetailsModel>
                </DetailsModelRow>
              </DetailsModelWrapper>
              <ButtonWrapper
                colors="primary"
                size="medium"
                style={{ width: '60%', borderRadius: '4px' }}
                onClick={() => {
                  Router.push('/')
                }}
              >
                Back to HomePage
              </ButtonWrapper>
            </StatusModel>
          )}
        </Col>
      </Row>
    </div>
  )
}
export default BillingSuccessModel
