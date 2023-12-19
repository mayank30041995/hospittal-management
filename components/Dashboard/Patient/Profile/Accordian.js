import React from 'react'
import {
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
  TabStatus,
  TabStatusPara,
  TabStatusText,
  TextSwitch,
  TopNavFlex,
  TopNavSection,
} from '../../dashboard.styled'
import Spacer from 'react-spacer'
import { Avatar, Col, Row } from 'antd'
import { DownOutlined, EnvironmentOutlined } from '@ant-design/icons'
import { useState } from 'react'
import moment from 'moment'
function Accordian({ setDrawer, showConfirm, user, order }) {
  const [collapse, setCollapse] = useState(false)
  // console.log('AccordianAccordianAccordian', order)
  return (
    <div>
      <LayerInfoCardStart span={24} onClick={() => setCollapse(!collapse)}>
        <LayerInfoSectionOne>
          <Row>
            <LayerInfoSectionParagraph>
              <Avatar size={23} src={order?.Bookings[0].DrImage}>
                U
              </Avatar>{' '}
              &emsp;
              <LayerInfoSectionOutRow>
                <LayerInfoSectionParagraphOuter>
                  {order?.Bookings[0].DrName.length > 25
                    ? `${order?.Bookings[0].DrName.slice(0, 25)}...`
                    : order?.Bookings[0].DrName}
                </LayerInfoSectionParagraphOuter>

                <LayerInfoSectionParagraphInner>
                  {moment(order.Bookings[0].BookingTime).format(
                    'dddd  Do, MMM'
                  )}
                </LayerInfoSectionParagraphInner>
              </LayerInfoSectionOutRow>
            </LayerInfoSectionParagraph>
          </Row>
          {order.Status === 'Completed' ? (
            <LayerInfoSectionStatusOK>Confirmed</LayerInfoSectionStatusOK>
          ) : (
            <LayerInfoSectionStatusFail>Pending</LayerInfoSectionStatusFail>
          )}
        </LayerInfoSectionOne>
      </LayerInfoCardStart>
      {collapse && (
        <LayerInfoCard span={24}>
          <Col>
            <LayerInfoSectionOne>
              <LayerInfoSectionTitle level={5}>
                {moment(order.Bookings[0].BookingTime).format('dddd  Do, MMM')}
              </LayerInfoSectionTitle>
              {order.Status === 'Completed' ? (
                <LayerInfoSectionStatusOK>Confirmed</LayerInfoSectionStatusOK>
              ) : (
                <LayerInfoSectionStatusFail>Pending</LayerInfoSectionStatusFail>
              )}
            </LayerInfoSectionOne>
            <Col>
              <LayerInfoSectionTwo>
                <LayerInfoSectionParagraph>
                  <Avatar src="/clock.png" size={18} />
                  &emsp;
                  <LayerInfoSectionParagraphInner>
                    {moment(order.Bookings[0].BookingTime).format('LT')} -
                    {moment(order.Bookings[0].BookingTime)
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
                  <Avatar size={23} src={order?.Bookings[0].DrImage}>
                    U
                  </Avatar>
                  &emsp;
                  <LayerInfoSectionParagraphInner>
                    {order?.Bookings[0].DrName.length > 18
                      ? `${order?.Bookings[0].DrName.slice(0, 18)}...`
                      : order?.Bookings[0].DrName}{' '}
                    |{' '}
                    {order?.Bookings[0].DrDesignation.length > 15
                      ? `${order?.Bookings[0].DrDesignation.slice(0, 15)}...`
                      : order?.Bookings[0].DrDesignation}
                  </LayerInfoSectionParagraphInner>
                </LayerInfoSectionParagraph>
              </LayerInfoSectionTwo>
              <Spacer height={20} />
              <LayerInfoSectionOut>
                <LayerInfoSectionOutParagraph onClick={() => setDrawer(true)}>
                  Reschedule Appointment
                </LayerInfoSectionOutParagraph>{' '}
                |
                <LayerInfoSectionOutParagraph
                  onClick={() => showConfirm(order.id)}
                >
                  Cancel Appointment
                </LayerInfoSectionOutParagraph>
              </LayerInfoSectionOut>
            </Col>
          </Col>
        </LayerInfoCard>
      )}
    </div>
  )
}

export default Accordian
