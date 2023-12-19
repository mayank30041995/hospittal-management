import { Avatar, Col, Divider, Empty, Form, Input, Row, Typography } from 'antd'
const { Search } = Input
import React, { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {
  CardContext,
  CardCountText,
  CardCountTextTop,
  CardCountTextTopMobile,
  CardCountTitle,
  CardLayout,
  CardWrapper,
  CellOne,
  DashboardCard,
  GridContainer,
  ListText,
  MainTitle,
  SubmitForm,
  TabArea,
  TabBlock,
  Table,
  TableDataCell,
  TableHead,
  TableHeader,
  TableHeaderEmpty,
  TableRow,
  TopNavFlex,
} from '../dashboard.styled'
import {
  HideDisplay,
  HideDisplayContents,
  HideDisplayFlex,
  HideDisplayMobile,
} from '../dashboardmobile.styled'
import {
  UserOutlined,
  SearchOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons'

import Spacer from 'react-spacer'
import moment from 'moment'
import {
  loadBookingOrderByStatus,
  loadProfilePatientList,
} from '@/redux/actions/dashboardAction'
import useDeviceSize from '@/components/helper/useDeviceSize'
import HomepageMobile from './HomepageMobile'
import { fetchJSON, fetchSearchJSON } from '@/utils/apiCalls'
import appConfig from '@/utils/appConfig'
import { useRouter } from 'next/router'

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

function HomePage({ user, ...props }) {
  const listInnerRef = useRef()
  const [active, setActive] = useState(true)
  const [status, setStatus] = useState('')
  const [appointment, setAppointment] = useState(props.bookingOrder)
  // const [all_booking, setAll_booking] = useState([])
  const [domLoaded, setDomLoaded] = useState(false)
  const router = useRouter()
  const [tabStatus, setTabStatus] = useState(tabs)
  const [width, height] = useDeviceSize()
  let revenue_ammount = user.booking_orders.map((val) => val.TotalAmount)
  const { patients, loadingDashboard } = props
  let total_revenue =
    (revenue_ammount.length &&
      revenue_ammount.reduce((previousValue, currentValue) =>
        previousValue !== 'NaN' && currentValue !== 'NaN'
          ? Number(previousValue) + Number(currentValue)
          : 0
      )) ||
    0

  const { Doctor, Doctors } = user

  useEffect(() => {
    var today = new Date()
    var curHr = today.getHours()
    //
    if (curHr < 12) {
      setStatus('Good Morning')
    } else if (curHr < 17) {
      setStatus('Good Afternoon')
    } else {
      setStatus('Good Evening')
    }
    setDomLoaded(true)
    props.dispatch(loadProfilePatientList(user._id))
    if (props.bookingOrder.length) {
      setAppointment(props.bookingOrder)
    } else {
      setAppointment(props.bookingOrder)
    }
  }, [props.bookingOrder])

  useEffect(() => {
    // console.log('tabStatus', tabStatus, width)
    if (width > 600) {
      if (tabStatus[0].active) {
        props.dispatch(loadBookingOrderByStatus(user.id, 'Waiting'))
      } else if (tabStatus[1].active) {
        props.dispatch(loadBookingOrderByStatus(user.id, 'Progress'))
      } else if (tabStatus[2].active) {
        props.dispatch(loadBookingOrderByStatus(user.id, 'Completed'))
      }
    }
  }, [tabStatus, width])

  const tabFormat = (tabStatus, tabid) => {
    const actives = tabStatus.map((el) =>
      el.active ? { ...el, active: false } : el
    )

    const updated = actives.map((active) =>
      active.id === tabid ? { ...active, active: true } : active
    )
    return updated
  }
  // console.log('appointment',  user.booking_orders)

  // useEffect(() => {
  //   fetchJSON(`${appConfig.searchBookingOrderUrl}?user=${user.id}`)
  //     .then((value) => {
  //       setAll_booking(value)
  //     })
  //     .catch((err) => {
  //       setAll_booking([])
  //       console.log(err)
  //     })
  // }, [user.id])

  const cardData = [
    {
      id: 1,
      name: 'Personal Visit',
      label: 'Personal Visit',
      src: '/files.png',
      total:
        user.booking_orders.length > 0
          ? user.booking_orders.filter((e) => e.Status === 'Waiting').length
          : 0,
    },
    {
      id: 2,
      name: 'Tele-Consult',
      label: 'Tele-Consult',
      src: '/video.png',
      total: 0,
    },
    {
      id: 3,
      name: 'Rescheduled',
      label: 'Rescheduled',
      src: '/rescheduled.png',
      total:
        user.booking_orders.length > 0
          ? user.booking_orders.filter((e) => e.Status === 'Completed').length
          : 0,
    },
    {
      id: 4,
      name: 'Total Patients',
      label: 'Total Patients',
      src: '/patients.png',
      total: patients.length || 0,
    },
    {
      id: 5,
      name: 'Today’s Revenue',
      label: 'Today’s Revenue',
      src: '/revenue.png',
      total: total_revenue,
    },
  ]

  const onSearch = (searchVal) => {
    if (props.bookingOrder.length) {
      const bookingOrder = [...props.bookingOrder]
      console.log('bookingOrder', searchVal, bookingOrder)

      if (searchVal === '') {
        setAppointment(bookingOrder)
        return
      }
      const filterBySearch = bookingOrder.filter((item) => {
        if (
          item.doctorSlug
            ?.trim()
            .toLowerCase()
            .includes(searchVal.trim().toLowerCase())
        ) {
          return item
        }
      })
      setAppointment(filterBySearch)
    }
  }
  console.log('appointment', appointment, user)

  return (
    <GridContainer>
      <div>
        <CardCountTextTop strong status={true}>
          {status}
        </CardCountTextTop>
        <MainTitle level={2} style={{ margin: 0 }}>
          {user ? user?.name : ''}
        </MainTitle>
      </div>
      <Spacer height={26} />
      <Row justify="space-between">
        <CardCountTextTop strong>Today’s Appointments</CardCountTextTop>
        <HideDisplayMobile>
          {props.type === 'partner' && (
            <SubmitForm
              type="primary"
              htmlType="submit"
              size="large"
              style={{ marginRight: '4em' }}
              // disabled={loading ? true : false}
              onClick={() => router.push('/patientDetails')}
            >
              Add a Patient
            </SubmitForm>
          )}
        </HideDisplayMobile>
      </Row>
      <HideDisplayFlex>
        {props.type !== 'partner' ? (
          <CardCountTextTopMobile strong>
            Today’s Appointments
          </CardCountTextTopMobile>
        ) : (
          <CardCountTextTopMobile strong>
            Partner Dashboard
          </CardCountTextTopMobile>
        )}
        {props.type === 'partner' && (
          <SubmitForm
            type="primary"
            htmlType="submit"
            size="large"
            style={{ marginRight: '8%', width: '12em' }}
            // disabled={loading ? true : false}
            onClick={() => router.push('/patientDetails')}
          >
            Add a Patient
          </SubmitForm>
        )}
      </HideDisplayFlex>
      <Spacer height={12} />
      <DashboardCard>
        {cardData.map((card, i) => (
          <Row key={i}>
            <CardLayout key={card.id}>
              <CardContext>
                <CardCountText strong>{card.label}</CardCountText>

                <Avatar
                  shape="circle"
                  src={card.src}
                  size={42}
                  icon={<UserOutlined />}
                />
              </CardContext>
              <Col>
                <CardCountTitle level={3}>{card.total}</CardCountTitle>
              </Col>
            </CardLayout>
          </Row>
        ))}
      </DashboardCard>

      {/* For Mobile */}
      <HomepageMobile
        active={active}
        setActive={setActive}
        onSearch={onSearch}
        user={user}
        width={width}
        appointment={appointment}
        {...props}
      />

      <CardWrapper>
        {cardData.map((card, i) => (
          <div key={i}>
            <CardLayout key={card.id}>
              <CardContext>
                <CardCountText strong>{card.label}</CardCountText>
                {/* &emsp; &emsp; */}
                <Avatar
                  shape="circle"
                  src={card.src}
                  size={42}
                  icon={<UserOutlined />}
                />
              </CardContext>
              <Col>
                <CardCountTitle level={3}>{card.total}</CardCountTitle>
              </Col>
            </CardLayout>
            <Spacer width={12} />
          </div>
        ))}
      </CardWrapper>
      <Spacer height={32} />
      <div>
        <TabArea
          style={{
            width: '95%',
            marginBottom: '25px',
            justifyContent: 'space-between',
          }}
        >
          {tabStatus.map((tab, i) => (
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
              width: 200,
              background: '#F7F7F7',
              borderRadius: '9px',
              height: '6vh',
            }}
          />
        </TabArea>
      </div>
      {domLoaded && (
        <Table>
          <TableHeader>
            <TableHead>Name</TableHead>
            <TableHead>Consultation Type</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Reports</TableHead>
          </TableHeader>
          <Spacer height={12} />
          {appointment.length ? (
            appointment.map((book, i) => {
              let { DrName, DrImage, DrDesignation } = book.Bookings[0]
              return (
                <tbody style={{ textAlign: 'center' }} key={i}>
                  <TableRow>
                    <TableDataCell style={{ width: '13vh' }}>
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
                    <TableDataCell>
                      {DrDesignation.length > 26
                        ? `${DrDesignation.slice(0, 26)}...`
                        : DrDesignation}
                    </TableDataCell>

                    <TableDataCell>
                      {moment(
                        props.bookingOrder[0]?.Bookings.length > 0 &&
                          props.bookingOrder[0]?.Bookings[0]?.BookingTime
                      ).format('LT')}
                      -
                      {moment(
                        props.bookingOrder[0]?.Bookings.length > 0 &&
                          props.bookingOrder[0]?.Bookings[0]?.BookingTime
                      )
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
            })
          ) : (
            <TableHeaderEmpty>
              <HideDisplayMobile>
                <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  description="No Appointments"
                />
              </HideDisplayMobile>
            </TableHeaderEmpty>
          )}
        </Table>
      )}
    </GridContainer>
  )
}

export default HomePage
