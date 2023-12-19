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
  HospitalStatusConfirmed,
  HospitalStatusPending,
  LayerInfoSectionStatusFail,
  LayerInfoSectionStatusOK,
  LayerInfoSectionTitle,
  ListText,
  RightInfoCard,
  SearchText,
  SelectArea,
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
} from '../dashboard.styled'
import { useState } from 'react'
import moment from 'moment'
import { useEffect } from 'react'
import { UserOutlined, SearchOutlined } from '@ant-design/icons'
import { loadBookingOrderByStatus } from '@/redux/actions/dashboardAction'
import {
  HideDisplay,
  HideDisplayContents,
  HideDisplayMobile,
} from '../dashboardmobile.styled'
import MobileAppointmentList from '../Doctor/MobileAppointmentList'
const { Title, Text, Paragraph } = Typography

const HospitalAppointments = ({ user, children, isLoggedIn, ...props }) => {
  const [active, setActive] = useState(true)
  const [domLoaded, setDomLoaded] = useState(false)
  const [appointment, setAppointment] = useState(props.bookingOrder)
  const dispatch = useDispatch()
  const onFinish = (values) => {
    console.log('Success:', values)
    if (isLoggedIn) {
      dispatch(step(2))
      dispatch(formOne(values))
    } else {
      Router.push({
        pathname: '/login',
      })
    }
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

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
  }, [])

  useEffect(() => {
    if (props.bookingOrder.length > 0) {
      setAppointment(props.bookingOrder)
    } else {
      setAppointment(props.bookingOrder)
    }
  }, [props.bookingOrder])

  useEffect(() => {
    if (tabStatus[0].active) {
      props.dispatch(loadBookingOrderByStatus(user.id, 'Waiting'))
    } else if (tabStatus[1].active) {
      props.dispatch(loadBookingOrderByStatus(user.id, 'Progress'))
    } else if (tabStatus[2].active) {
      props.dispatch(loadBookingOrderByStatus(user.id, 'Completed'))
    }
  }, [tabStatus])

  const tabFormat = (tabStatus, tabid) => {
    const actives = tabStatus.map((el) =>
      el.active ? { ...el, active: false } : el
    )

    const updated = actives.map((active) =>
      active.id === tabid ? { ...active, active: true } : active
    )
    return updated
  }

  const onSearch = (searchVal, type) => {
    if (props.bookingOrder.length) {
      const bookingOrder = [...props.bookingOrder]
      if (type === 'department') {
        const filterBySearch = bookingOrder.filter((item) => {
          if (
            item.Bookings[0].DrDesignation.toLowerCase().includes(
              searchVal.trim().toLowerCase()
            )
          ) {
            return item
          }
        })
        setAppointment(filterBySearch)
      }
    }
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }

  return (
    <>
      <HideDisplayMobile>
        <Col>
          <ChannelHead>{children}</ChannelHead>
          <GridContainer style={{ width: '86%' }}>
            <SearchText
              size="large"
              bordered={false}
              placeholder="Search By Department"
              onChange={(e) => onSearch(e.target.value, 'department')}
            />
          </GridContainer>
          <Row style={{ padding: '2% 3%', alignItems: 'baseline' }}>
            <TabArea
              style={{
                width: '93%',
                justifyContent: 'space-between',
              }}
            >
              {tabStatus.map((tab) => (
                <TabBlock
                  style={{ marginLeft: '10px' }}
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

              <SelectArea
                size="large"
                defaultValue="View By"
                style={{
                  width: 150,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: 'name',
                    label: 'Name',
                  },
                  {
                    value: 'department',
                    label: 'Department',
                  },
                ]}
              />
            </TabArea>
          </Row>

          <Row>
            <Col span={22} style={{ marginLeft: '3%' }}>
              {appointment.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableHead style={{ width: '12vh' }}>Name</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Appointment Date</TableHead>
                    <TableHead> Fees</TableHead>
                    <TableHead>Status</TableHead>
                  </TableHeader>
                  <Spacer height={12} />
                  {appointment.map((book, i) => {
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
                          <TableDataCell style={{ width: '18vh' }}>
                            {DrDesignation.length > 25
                              ? `${DrDesignation.slice(0, 25)}...`
                              : DrDesignation}
                          </TableDataCell>
                          <TableDataCell>
                            {moment(book.createdAt).add(10, 'days').calendar()}
                          </TableDataCell>
                          <TableDataCell>
                            <b>₹ {book.TotalAmount}/-</b>
                          </TableDataCell>
                          <TableDataCell>
                            {book.Status !== 'Completed' ? (
                              <HospitalStatusPending>
                                Pending
                              </HospitalStatusPending>
                            ) : (
                              <HospitalStatusConfirmed>
                                Completed
                              </HospitalStatusConfirmed>
                            )}
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
                    <Text
                      strong
                      style={{
                        fontFamily: 'Inter',
                      }}
                    >
                      No Appointments
                    </Text>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
        </Col>
      </HideDisplayMobile>
      <GridContainer>
        {mobileLists(active, setActive, onSearch, appointment, props)}
      </GridContainer>
    </>
  )
}

const mobileLists = (active, setActive, onSearch, appointment, props) => {
  return (
    <HideDisplay>
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

export default HospitalAppointments
