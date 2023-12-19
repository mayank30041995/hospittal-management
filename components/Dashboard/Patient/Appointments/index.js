import { Avatar, Col, Divider, Row, Typography, Modal } from 'antd'
import Spacer from 'react-spacer'

import { ExclamationCircleFilled, EnvironmentOutlined } from '@ant-design/icons'
const _ = require('lodash')

import {
  CardParagraph,
  CardStatusFail,
  CardStatusOk,
  CardTitle,
  CardWrap,
  ChannelHead,
  EmptyText,
  EmptyTextMsg,
  LayerInfoCard,
  LayerInfoSectionOne,
  LayerInfoSectionOut,
  LayerInfoSectionOutParagraph,
  LayerInfoSectionParagraph,
  LayerInfoSectionParagraphInner,
  LayerInfoSectionStatusFail,
  LayerInfoSectionStatusOK,
  LayerInfoSectionTitle,
  LayerInfoSectionTwo,
  RightInfoCard,
  TabArea,
  TabBlock,
  TabStatus,
  TabStatusPara,
  TabStatusText,
  TabWrap,
  TopNavFlex,
  TopNavSection,
  VerticalDivider,
} from '../../dashboard.styled'
import { useEffect, useState } from 'react'
import moment from 'moment'
import Accordian from '../Profile/Accordian'
import { HideDisplay, MobileFormGroup } from '../../dashboardmobile.styled'
import {
  cancelBookingOrder,
  loadBookingOrderByStatus,
} from '@/redux/actions/dashboardAction'
import DateAppointment from '../../../Consult/Modals/DateAppointment'
import { useDispatch } from 'react-redux'

const { Title, Text } = Typography

const Appointments = ({ user, children, isLoggedIn, ...props }) => {
  const dispatch = useDispatch()
  const [active, setActive] = useState(true)
  const [drawer, setDrawer] = useState(false)
  const { confirm } = Modal
  const tabs = [
    {
      id: 1,
      name: 'Upcoming',
      label: 'Upcoming',
      active: true,
    },
    {
      id: 2,
      name: 'Past',
      label: 'Past',
      active: false,
    },
  ]

  const [tabStatus, setTabStatus] = useState(tabs)

  const tabFormat = (tabStatus, tabid) => {
    const actives = tabStatus.map((el) =>
      el.active ? { ...el, active: false } : el
    )

    const updated = actives.map((active) =>
      active.id === tabid ? { ...active, active: true } : active
    )
    return updated
  }

  useEffect(() => {
    if (!tabStatus[1].active) {
      props.dispatch(loadBookingOrderByStatus(user.id, 'Progress'))
    } else {
      props.dispatch(loadBookingOrderByStatus(user.id, 'Completed'))
    }
  }, [tabStatus[1].active, active])

  useEffect(() => {
    if (active) {
      props.dispatch(loadBookingOrderByStatus(user.id, 'Progress'))
    } else {
      props.dispatch(loadBookingOrderByStatus(user.id, 'Completed'))
    }
  }, [active])

  const showConfirm = (id) => {
    confirm({
      title: 'Do you want to cancel this appointment?',
      icon: <ExclamationCircleFilled />,
      content: `Note: This action will halt's your booking appointment.`,
      okText: 'Yes',
      cancelText: 'No',
      onOk() {
        console.log('OK')
        dispatch(cancelBookingOrder(id))
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }

  return (
    <Col>
      <ChannelHead>{children}</ChannelHead>
      {drawer && <DateAppointment setDrawer={setDrawer} {...props} />}
      {/* For Mobile */}
      <HideDisplay>
        <TopNavSection justify="space-between" style={{ alignItems: 'start' }}>
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
                    {props.bookingOrder[0].Status !== 'Completed' ? (
                      <LayerInfoSectionStatusFail>
                        Pending
                      </LayerInfoSectionStatusFail>
                    ) : (
                      <LayerInfoSectionStatusOK>
                        Confirmed
                      </LayerInfoSectionStatusOK>
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
                          {moment(
                            props.bookingOrder[0]?.Bookings[0].BookingTime
                          )
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
                          {user?.hospital?.Name}
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
                      </LayerInfoSectionOutParagraph>
                      <LayerInfoSectionOutParagraph
                        onClick={() => showConfirm(props.bookingOrder[0].id)}
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
                ))}
          </RightInfoCard>
        </TopNavSection>
      </HideDisplay>
      {/* For Desktop */}
      <TabWrap>
        <TabArea>
          {tabStatus.map((tab) => (
            <TabBlock
              active={tab.active}
              key={tab.id}
              value={tab.name}
              name={tab.name}
              onClick={() => {
                const newTabs = tabFormat(tabStatus, tab.id)
                setTabStatus(newTabs)
              }}
            >
              {tab.label}
            </TabBlock>
          ))}
        </TabArea>
      </TabWrap>

      <Row>
        {props.bookingOrder.length ? (
          <>
            {props.bookingOrder.map((book, i) => (
              <CardWrap key={i}>
                <CardTitle level={5}>{book.Bookings[0].DrName}</CardTitle>
                <CardParagraph>{book.Bookings[0].DrDesignation}</CardParagraph>
                <Row justify="space-between">
                  <CardParagraph>
                    {moment(book?.Bookings[0].BookingTime).format(
                      'dddd  Do, MMM'
                    )}
                  </CardParagraph>
                  <CardParagraph>
                    {moment(book?.Bookings[0].BookingTime).format('LT')}-
                    {moment(book?.Bookings[0].BookingTime)
                      .add(30, 'minutes')
                      .format('LT')}
                  </CardParagraph>
                </Row>
                <CardParagraph underline="true">
                  {user?.hospital?.Name}
                </CardParagraph>
                {book.Status === 'Completed' ? (
                  <CardStatusOk>Confirmed</CardStatusOk>
                ) : (
                  <CardStatusFail>Pending</CardStatusFail>
                )}
                <Divider style={{ margin: '14px' }} />
                <Row justify="space-between">
                  <CardParagraph
                    style={{ fontSize: '11px', cursor: 'pointer' }}
                    onClick={() => showConfirm(book.id)}
                  >
                    Cancel Appointment
                  </CardParagraph>
                  <VerticalDivider />
                  <CardParagraph
                    style={{ fontSize: '11px', cursor: 'pointer' }}
                    onClick={() => setDrawer(true)}
                  >
                    Reschedule Appointment
                  </CardParagraph>
                </Row>
                <Divider style={{ margin: '10px' }} />
              </CardWrap>
            ))}
          </>
        ) : (
          <EmptyTextMsg justify="center">
            <Col>
              <Text strong>No Appointments</Text>
            </Col>
          </EmptyTextMsg>
        )}
      </Row>
    </Col>
  )
}

export default Appointments
