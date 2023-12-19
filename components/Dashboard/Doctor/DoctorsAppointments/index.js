import {
  Avatar,
  Button,
  Checkbox,
  Col,
  Divider,
  Empty,
  Form,
  Input,
  Row,
  Typography,
} from 'antd'
import Spacer from 'react-spacer'
import { useDispatch, useSelector } from 'react-redux'
import { step } from '@/redux/actions/appAction'
import { formOne } from '@/redux/actions/appAction'
import Router from 'next/router'
import { PlusOutlined } from '@ant-design/icons'
const _ = require('lodash')

import {
  AccptedParagraph,
  BodyTitle,
  CardCountTextTopMobile,
  CardParagraph,
  CardStatusFail,
  CardStatusOk,
  CardTitle,
  CardWrap,
  CellOne,
  ChannelHead,
  EmptyText,
  FileAddSection,
  FileAddSectionAdd,
  FormGroup,
  FormLabel,
  GridContainer,
  LayerInfoSectionStatusFail,
  LayerInfoSectionStatusOK,
  LayerInfoSectionTitle,
  ListText,
  RightInfoCard,
  SelectAreaGlobal,
  SubmitForm,
  TabArea,
  TabBlock,
  TabStatus,
  TabStatusPara,
  TabStatusText,
  Table,
  TableDataCell,
  TableHead,
  TableHeader,
  TableRow,
  TopNavFlex,
  VerticalDivider,
} from '../../dashboard.styled'
import { useState } from 'react'
import moment from 'moment'
import { useEffect } from 'react'
import { UserOutlined, SearchOutlined } from '@ant-design/icons'
import { HideDisplay, HideDisplayMobile } from '../../dashboardmobile.styled'
import MobileAppointmentList from '../MobileAppointmentList'
import { loadBookingOrderByStatus } from '@/redux/actions/dashboardAction'
const { Title, Text, Paragraph } = Typography
import useDeviceSize from '@/components/helper/useDeviceSize'

const DoctorsAppointments = ({ user, children, isLoggedIn, ...props }) => {
  const [active, setActive] = useState(true)
  const [domLoaded, setDomLoaded] = useState(false)
  const [appointment, setAppointment] = useState(props.bookingOrder)
  const [sort, setSort] = useState('')
  const dispatch = useDispatch()
  const [width, height] = useDeviceSize()

  const tabs = [
    {
      id: 1,
      name: 'Today’s Appointments',
      label: 'Today’s Appointments',
      active: true,
    },
    {
      id: 2,
      name: 'Upcoming',
      label: 'Upcoming',
      active: false,
    },
    {
      id: 3,
      name: 'Past',
      label: 'Past',
      active: false,
    },
  ]

  const [tabStatus, setTabStatus] = useState(tabs)

  useEffect(() => {
    setDomLoaded(true)
    if (props.bookingOrder.length) {
      setAppointment(props.bookingOrder)
    } else {
      setAppointment(props.bookingOrder)
    }
  }, [props.bookingOrder])

  useEffect(() => {
    // Check for Mobile or small devices
    if (width < 600 && navigator.userAgentData.mobile) {
      if (active) {
        props.dispatch(loadBookingOrderByStatus(user.id, 'Progress', sort))
      } else {
        props.dispatch(loadBookingOrderByStatus(user.id, 'Completed', sort))
      }
    }
  }, [active, sort])

  useEffect(() => {
    if (width > 600) {
      if (tabStatus[0].active) {
        props.dispatch(loadBookingOrderByStatus(user.id, 'Waiting', sort))
      } else if (tabStatus[1].active) {
        props.dispatch(loadBookingOrderByStatus(user.id, 'Progress', sort))
      } else if (tabStatus[2].active) {
        props.dispatch(loadBookingOrderByStatus(user.id, 'Completed', sort))
      }
    }
  }, [tabStatus, width, sort])

  const tabFormat = (tabStatus, tabid) => {
    const actives = tabStatus.map((el) =>
      el.active ? { ...el, active: false } : el
    )

    const updated = actives.map((active) =>
      active.id === tabid ? { ...active, active: true } : active
    )
    return updated
  }
  const onSearch = (searchVal) => {
    if (props.bookingOrder.length) {
      const bookingOrder = [...props.bookingOrder]

      if (searchVal === '') {
        setAppointment(bookingOrder)
        return
      }
      const filterBySearch = bookingOrder.filter((item) => {
        if (
          item.doctorSlug.toLowerCase().includes(searchVal.trim().toLowerCase())
        ) {
          return item
        }
      })
      setAppointment(filterBySearch)
    }
  }

  const handleChangeAppointment = (value) => {
    setSort(value)
  }

  return (
    <Col>
      <ChannelHead style={{ padding: '5px 10% 5px 4%' }}>
        <Col>
          <BodyTitle level={3}>Appointments</BodyTitle>
        </Col>
        <Col>
          <HideDisplayMobile>
            <SelectAreaGlobal
              size="large"
              defaultValue="Sort By"
              style={{
                width: 150,
                background: '#FFF',
              }}
              onChange={handleChangeAppointment}
              options={[
                {
                  value: 'doctor',
                  label: 'Name',
                },
                {
                  value: 'createdAt',
                  label: 'Date',
                },
              ]}
            />
          </HideDisplayMobile>
        </Col>
      </ChannelHead>

      <Row style={{ padding: '2% 0', alignItems: 'baseline' }}>
        <TabArea style={{ width: '88%' }}>
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
      </Row>
      <GridContainer>
        {mobileLists(active, setActive, onSearch, appointment, props)}
      </GridContainer>
      <Row>
        <Col span={22} style={{ marginLeft: '3%' }}>
          {props.bookingOrder.length > 0 ? (
            <Table>
              <TableHeader>
                <TableHead>Name</TableHead>
                <TableHead>Consultation Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Reports</TableHead>
              </TableHeader>
              <Spacer height={12} />
              {props.bookingOrder.map((book, i) => {
                let { DrName, DrImage, DrDesignation } = book.Bookings[0]
                return (
                  <tbody style={{ textAlign: 'center' }} key={i}>
                    <TableRow>
                      <TableDataCell style={{ width: '15vh' }}>
                        <CellOne>
                          <Avatar
                            shape="circle"
                            src={DrImage}
                            size={42}
                            icon={<UserOutlined />}
                          />
                          &nbsp;{' '}
                          <ListText>
                            {DrName.length > 17
                              ? `${DrName.slice(0, 17)}...`
                              : DrName}
                          </ListText>
                        </CellOne>
                      </TableDataCell>
                      <TableDataCell style={{ width: '15vh' }}>
                        {DrDesignation.length > 26
                          ? `${DrDesignation.slice(0, 26)}...`
                          : DrDesignation}
                      </TableDataCell>
                      <TableDataCell>
                        {moment(book?.Bookings[0].BookingTime).format(
                          'dddd  Do, MMMM'
                        )}
                      </TableDataCell>
                      <TableDataCell>
                        {moment(book?.Bookings[0].BookingTime).format('LT')}-
                        {moment(book?.Bookings[0].BookingTime)
                          .add(30, 'minutes')
                          .format('LT')}
                      </TableDataCell>
                      <TableDataCell>
                        <CellOne>
                          <Avatar
                            shape="square"
                            src="/pdf.png"
                            size={42}
                            icon={<UserOutlined />}
                          />
                          &nbsp; <b>PDF</b>
                        </CellOne>
                      </TableDataCell>
                    </TableRow>
                    <Spacer height={12} />
                  </tbody>
                )
              })}
            </Table>
          ) : (
            <Row justify="center" style={{ margin: '10% 40%' }}>
              <Col>
                <HideDisplayMobile>
                  <Text strong>No Appointments</Text>
                </HideDisplayMobile>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Col>
  )
}

const mobileLists = (active, setActive, onSearch, appointment, props) => {
  return (
    <HideDisplay>
      <CardCountTextTopMobile strong>Appointment’s List</CardCountTextTopMobile>
      <RightInfoCard span={10} style={{ minWidth: '92%', marginTop: '15px' }}>
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

        <Row style={{ padding: '5px' }}>
          <Input
            bordered={false}
            placeholder="Search By Patient Name"
            onChange={(e) => onSearch(e.target.value)}
            suffix={
              <SearchOutlined
                style={{
                  color: 'rgba(0,0,0,.45)',
                }}
              />
            }
            style={{
              width: '100%',
              background: '#F7F7F7',
              borderRadius: '9px',
              height: '8vh',
            }}
          />
        </Row>
        {appointment && appointment.length > 0 ? (
          appointment.map((order, i) => (
            <MobileAppointmentList order={order} key={i} />
          ))
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="No Appointments"
          />
        )}
      </RightInfoCard>
    </HideDisplay>
  )
}

export default DoctorsAppointments
