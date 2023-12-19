import React from 'react'
import ProfileInfo from './ProfileInfo'
import Spacer from 'react-spacer'
import { Modal, Avatar, Button, Col, Row, Space, Typography } from 'antd'
import { ExclamationCircleFilled, EnvironmentOutlined } from '@ant-design/icons'
import {
  EmptyText,
  LayerInfoCard,
  LayerInfoCardStart,
  LayerInfoSectionOne,
  LayerInfoSectionOut,
  LayerInfoSectionOutParagraph,
  LayerInfoSectionOutRow,
  LayerInfoSectionParagraph,
  LayerInfoSectionParagraphInner,
  LayerInfoSectionParagraphOuter,
  LayerInfoSectionStatusFail,
  LayerInfoSectionStatusOK,
  LayerInfoSectionTitle,
  LayerInfoSectionTwo,
  ProfileInfoCard,
  RightInfoCard,
  RightInfoCardVariant,
  TabStatus,
  TabStatusPara,
  TabStatusText,
  TextSwitch,
  TopNavFlex,
  TopNavSection,
} from '../../dashboard.styled'
import { useState } from 'react'
import Reports from './Reports'
import Accordian from './Accordian'
import moment from 'moment'
import { useEffect } from 'react'
import {
  cancelBookingOrder,
  loadBookingOrderByStatus,
} from '@/redux/actions/dashboardAction'
import {
  HideDisplay,
  HideDisplayContents,
  HideDisplayMobile,
} from '../../dashboardmobile.styled'
import DateAppointment from '../../../Consult/Modals/DateAppointment'
import { useDispatch } from 'react-redux'
const { Title, Text, Paragraph } = Typography

function Cards({ user, ...props }) {
  const dispatch = useDispatch()
  const [active, setActive] = useState(true)
  const [drawer, setDrawer] = useState(false)
  const [ids, setIds] = useState('')
  const { confirm } = Modal
  const showConfirm = (id) => {
    confirm({
      title: 'Do you want to cancel this appointment?',
      icon: <ExclamationCircleFilled />,
      content: `Note: This action will halt's your booking appointment.`,
      okText: 'Yes',
      cancelText: 'No',
      onOk() {
        console.log('OKs', id)
        dispatch(cancelBookingOrder(id))
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }

  useEffect(() => {
    if (active) {
      props.dispatch(loadBookingOrderByStatus(user.id, 'Progress'))
    } else {
      props.dispatch(loadBookingOrderByStatus(user.id, 'Completed'))
    }
  }, [active])

  return (
    <TopNavSection justify="space-between" style={{ alignItems: 'start' }}>
      {drawer && <DateAppointment setDrawer={setDrawer} {...props} />}
      <ProfileInfoCard span={14}>
        <ProfileInfo user={user} {...props} />
        <Spacer height={18} />
        <Reports user={user} {...props} />
      </ProfileInfoCard>
      {/* For Desktop */}

      <RightInfoCardVariant span={10}>
        <Text
          style={{
            fontFamily: 'Inter',
            fontWeight: 500,
            margin: '0 0 10px 13px',
          }}
        >
          Appointments
        </Text>
        <Spacer height={6} />
        <RightInfoCard>
          <TopNavFlex justify="space-between">
            {active ? (
              <Col span={12}>
                <TabStatus>
                  <TabStatusText>Upcoming </TabStatusText>
                </TabStatus>
              </Col>
            ) : (
              <Col
                span={12}
                onClick={() => {
                  setActive(true)
                }}
                style={{ height: '4vh' }}
              >
                <TabStatusPara> Upcoming</TabStatusPara>
              </Col>
            )}
            {!active ? (
              <Col span={12}>
                <TabStatus>
                  <TabStatusText>Past </TabStatusText>
                </TabStatus>
              </Col>
            ) : (
              <Col
                span={12}
                onClick={() => {
                  setActive(false)
                }}
                style={{ height: '4vh' }}
              >
                <TabStatusPara>Past</TabStatusPara>
              </Col>
            )}
          </TopNavFlex>
          {props.bookingOrder.length > 0 ? (
            <LayerInfoCard span={24}>
              <Col>
                <LayerInfoSectionOne>
                  <LayerInfoSectionTitle level={5}>
                    {/* Monday, 24th April */}
                    {moment(
                      props.bookingOrder[0]?.Bookings[0].BookingTime
                    ).format('dddd  Do, MMM')}
                  </LayerInfoSectionTitle>
                  {props.bookingOrder[0].Status === 'Completed' ? (
                    <LayerInfoSectionStatusOK>
                      Confirmed
                    </LayerInfoSectionStatusOK>
                  ) : (
                    <LayerInfoSectionStatusFail>
                      Pending
                    </LayerInfoSectionStatusFail>
                  )}
                </LayerInfoSectionOne>
                <Col>
                  <LayerInfoSectionTwo>
                    <LayerInfoSectionParagraph>
                      <Avatar src="/clock.png" size={18} />
                      &emsp;
                      <LayerInfoSectionParagraphInner>
                        {moment(
                          props.bookingOrder[0]?.Bookings[0].BookingTime
                        ).format('LT')}{' '}
                        -
                        {moment(props.bookingOrder[0]?.Bookings[0].BookingTime)
                          .add(30, 'minutes')
                          .format('LT')}
                      </LayerInfoSectionParagraphInner>
                    </LayerInfoSectionParagraph>
                  </LayerInfoSectionTwo>
                  <LayerInfoSectionTwo>
                    <LayerInfoSectionParagraph
                    // style={{ borderBottom: '1px solid' }}
                    >
                      <EnvironmentOutlined style={{ fontSize: '15px' }} />
                      &emsp;&nbsp;
                      <LayerInfoSectionParagraphInner
                        style={{ textDecoration: 'underline' }}
                      >
                        {user?.hospital?.Name?.length > 42
                          ? `${user?.hospital?.Name.slice(0, 42)}...`
                          : user?.hospital?.Name}
                      </LayerInfoSectionParagraphInner>
                    </LayerInfoSectionParagraph>
                  </LayerInfoSectionTwo>
                  <LayerInfoSectionTwo>
                    <LayerInfoSectionParagraph>
                      <Avatar
                        size={23}
                        src={props.bookingOrder[0]?.Bookings[0].DrImage}
                      >
                        U
                      </Avatar>{' '}
                      &emsp;
                      <LayerInfoSectionParagraphInner>
                        {props.bookingOrder[0]?.Bookings[0].DrName}
                        &nbsp; | &nbsp;
                        {props.bookingOrder[0]?.Bookings[0].DrDesignation}
                      </LayerInfoSectionParagraphInner>
                    </LayerInfoSectionParagraph>
                  </LayerInfoSectionTwo>
                  <Spacer height={20} />
                  <LayerInfoSectionOut>
                    <LayerInfoSectionOutParagraph
                      onClick={() => setDrawer(true)}
                    >
                      Reschedule Appointment
                    </LayerInfoSectionOutParagraph>{' '}
                    |
                    <LayerInfoSectionOutParagraph
                      onClick={() => {
                        showConfirm(props.bookingOrder[0].id)
                      }}
                    >
                      Cancel Appointment
                    </LayerInfoSectionOutParagraph>
                  </LayerInfoSectionOut>
                </Col>
              </Col>
            </LayerInfoCard>
          ) : (
            <Row justify="center">
              <EmptyText>
                <Text strong>No Appointments</Text>
              </EmptyText>
            </Row>
          )}
          {props.bookingOrder.length > 0 &&
            props.bookingOrder
              .slice(1, props.bookingOrder.length)
              .map((order, i) => (
                <Accordian
                  key={i}
                  setDrawer={setDrawer}
                  showConfirm={showConfirm}
                  user={user}
                  order={order}
                />
              ))}{' '}
        </RightInfoCard>
      </RightInfoCardVariant>

      {/* For Mobile */}
      <HideDisplayContents>
        <RightInfoCard span={10}>
          <TopNavFlex justify="space-between">
            {active ? (
              <Col span={12}>
                <TabStatus>
                  <TabStatusText>Upcoming </TabStatusText>
                </TabStatus>
              </Col>
            ) : (
              <Col
                span={12}
                onClick={() => {
                  setActive(true)
                }}
                style={{ height: '4vh' }}
              >
                <TabStatusPara> Upcoming</TabStatusPara>
              </Col>
            )}
            {!active ? (
              <Col span={12}>
                <TabStatus>
                  <TabStatusText>Past </TabStatusText>
                </TabStatus>
              </Col>
            ) : (
              <Col
                span={12}
                onClick={() => {
                  setActive(false)
                }}
                style={{ height: '4vh' }}
              >
                <TabStatusPara>Past</TabStatusPara>
              </Col>
            )}
          </TopNavFlex>
          {props.bookingOrder.length > 0 ? (
            <LayerInfoCard span={24}>
              <Col>
                <LayerInfoSectionOne>
                  <LayerInfoSectionTitle level={5}>
                    {/* Monday, 24th April */}
                    {moment(
                      props.bookingOrder[0]?.Bookings[0].BookingTime
                    ).format('dddd  Do, MMM')}
                  </LayerInfoSectionTitle>
                  {props.bookingOrder[0].Status === 'Completed' ? (
                    <LayerInfoSectionStatusOK>
                      Confirmed
                    </LayerInfoSectionStatusOK>
                  ) : (
                    <LayerInfoSectionStatusFail>
                      Pending
                    </LayerInfoSectionStatusFail>
                  )}
                </LayerInfoSectionOne>
                <Col>
                  <LayerInfoSectionTwo>
                    <LayerInfoSectionParagraph>
                      <Avatar src="/clock.png" size={18} />
                      &emsp;
                      <LayerInfoSectionParagraphInner>
                        {moment(
                          props.bookingOrder[0]?.Bookings[0].BookingTime
                        ).format('LT')}{' '}
                        -
                        {moment(props.bookingOrder[0]?.Bookings[0].BookingTime)
                          .add(30, 'minutes')
                          .format('LT')}
                      </LayerInfoSectionParagraphInner>
                    </LayerInfoSectionParagraph>
                  </LayerInfoSectionTwo>
                  <LayerInfoSectionTwo>
                    <LayerInfoSectionParagraph
                    // style={{ borderBottom: '1px solid' }}
                    >
                      <EnvironmentOutlined style={{ fontSize: '15px' }} />
                      &emsp;&nbsp;
                      <LayerInfoSectionParagraphInner
                        style={{ textDecoration: 'underline' }}
                      >
                        {user?.hospital?.Name?.length > 42
                          ? `${user?.hospital?.Name.slice(0, 42)}...`
                          : user?.hospital?.Name}
                      </LayerInfoSectionParagraphInner>
                    </LayerInfoSectionParagraph>
                  </LayerInfoSectionTwo>
                  <LayerInfoSectionTwo>
                    <LayerInfoSectionParagraph>
                      <Avatar
                        size={23}
                        src={props.bookingOrder[0]?.Bookings[0].DrImage}
                      >
                        U
                      </Avatar>{' '}
                      &emsp;
                      <LayerInfoSectionParagraphInner>
                        {props.bookingOrder[0]?.Bookings[0].DrName} |{' '}
                        {props.bookingOrder[0].Bookings[0].DrDesignation
                          .length > 15
                          ? `${props.bookingOrder[0].Bookings[0].DrDesignation.slice(
                              0,
                              15
                            )}...`
                          : props.bookingOrder[0].Bookings[0].DrDesignation}
                      </LayerInfoSectionParagraphInner>
                    </LayerInfoSectionParagraph>
                  </LayerInfoSectionTwo>
                  <Spacer height={20} />
                  <LayerInfoSectionOut>
                    <LayerInfoSectionOutParagraph
                      onClick={() => setDrawer(true)}
                    >
                      Reschedule Appointment
                    </LayerInfoSectionOutParagraph>{' '}
                    |
                    <LayerInfoSectionOutParagraph
                      onClick={() => {
                        showConfirm(props.bookingOrder[0].id)
                      }}
                    >
                      Cancel Appointment
                    </LayerInfoSectionOutParagraph>
                  </LayerInfoSectionOut>
                </Col>
              </Col>
            </LayerInfoCard>
          ) : (
            <Row justify="center">
              <EmptyText>
                <Text strong>No Appointments</Text>
              </EmptyText>
            </Row>
          )}
          {props.bookingOrder.length > 0 &&
            props.bookingOrder
              .slice(1, props.bookingOrder.length)
              .map((order, i) => (
                <Accordian
                  key={i}
                  setDrawer={setDrawer}
                  showConfirm={showConfirm}
                  user={user}
                  order={order}
                />
              ))}{' '}
        </RightInfoCard>
      </HideDisplayContents>
    </TopNavSection>
  )
}

export default Cards
