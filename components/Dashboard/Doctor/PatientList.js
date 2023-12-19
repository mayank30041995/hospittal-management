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
  Select,
  Spin,
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
  InputAnt,
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
} from '../dashboard.styled'
import { useState } from 'react'
import moment from 'moment'
import { useEffect } from 'react'
import { UserOutlined, SearchOutlined } from '@ant-design/icons'
import { HideDisplay } from '../dashboardmobile.styled'
import MobileAppointmentList from './MobileAppointmentList'
import {
  loadBookingOrder,
  loadProfilePatientList,
} from '@/redux/actions/dashboardAction'
import MobilePatientList from './MobilePatientList'
const { Title, Text, Paragraph } = Typography

const PatientLists = ({ user, children, isLoggedIn, ...props }) => {
  const [domLoaded, setDomLoaded] = useState(false)
  const [appointment, setAppointment] = useState(props.bookingOrder)

  const [active, setActive] = useState(true)
  const dispatch = useDispatch()
  const { patients, loadingDashboard } = props

  useEffect(() => {
    setDomLoaded(true)
    if (props.bookingOrder.length) {
      setAppointment(props.bookingOrder)
    } else {
      setAppointment(props.bookingOrder)
    }
  }, [props.bookingOrder])

  useEffect(() => {
    props.dispatch(loadProfilePatientList(user._id))
  }, [user._id])

  return (
    <Col>
      <ChannelHead style={{ padding: '5px 10% 5px 4%' }}>
        {children}
      </ChannelHead>
      <GridContainer>
        {MobileLists(
          active,
          setActive,
          patients,
          loadingDashboard,
          user,
          props
        )}
      </GridContainer>
      <Spacer height={15} />
      <Row>
        <Col span={22} style={{ marginLeft: '3%' }}>
          <Table>
            <TableHeader>
              <TableHead>Name</TableHead>
              <TableHead>Consultation Type</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Reports</TableHead>
            </TableHeader>
            <Spacer height={12} />

            {loadingDashboard ? (
              <Row>
                <Spin style={{ padding: '12px 45%', position: 'absolute' }} />
              </Row>
            ) : (
              patients.length > 0 &&
              patients.map((book, i) => {
                let { fname, preferredDateOfAppointment, country, type } = book
                return (
                  <tbody style={{ textAlign: 'center' }} key={i}>
                    <TableRow>
                      <TableDataCell>
                        <CellOne>
                          <Avatar
                            shape="circle"
                            // src={DrImage}
                            size={42}
                            icon={<UserOutlined />}
                          />
                          &nbsp;{' '}
                          <ListText>
                            {fname.length > 17
                              ? `${fname.slice(0, 17)}...`
                              : fname}
                          </ListText>
                        </CellOne>
                      </TableDataCell>
                      <TableDataCell>{type ? type : '-'}</TableDataCell>
                      <TableDataCell>
                        {moment(preferredDateOfAppointment).format(
                          'dddd  Do, MMMM'
                        )}
                      </TableDataCell>
                      <TableDataCell>{country}</TableDataCell>
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
            )}
          </Table>
        </Col>
      </Row>
    </Col>
  )
}

const MobileLists = (
  active,
  setActive,
  patients,
  loadingDashboard,
  user,
  props
) => {
  const [patientList, setPatientList] = useState([])
  const handleChange = (value) => {
    // console.log(`selected ${value}`)
    props.dispatch(loadProfilePatientList(user._id, value))
  }

  const onSearch = (searchVal) => {
    if (searchVal === '') {
      setPatientList([])
      return
    }
    if (searchVal.length) {
      // console.log('bookingOrder', searchVal, patientList)

      const filterBySearch = patients.filter((item) => {
        if (item.fname.toLowerCase().includes(searchVal.trim().toLowerCase())) {
          return item
        }
      })
      setPatientList(filterBySearch)
    }
  }
  return (
    <HideDisplay>
      <CardCountTextTopMobile strong></CardCountTextTopMobile>
      <RightInfoCard span={10} style={{ minWidth: '92%', marginTop: '15px' }}>
        <Row style={{ padding: '5px' }}>
          <InputAnt
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
          />
          &ensp;
          <Select
            size="large"
            defaultValue="Sort By"
            style={{
              width: '30%',
              boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.25)',
              borderRadius: '4.59226px',
              background: '#FFF',
            }}
            onChange={handleChange}
            options={[
              {
                value: 'fname',
                label: 'Name',
              },
              {
                value: 'createdAt',
                label: 'Date',
              },
            ]}
          />
        </Row>

        {loadingDashboard ? (
          <Row>
            <Spin style={{ padding: '12px 45%', position: 'absolute' }} />
          </Row>
        ) : patientList.length > 0 ? (
          patientList.map((book, i) => (
            <MobilePatientList book={book} key={i} />
          ))
        ) : patients.length > 0 ? (
          patients.map((book, i) => <MobilePatientList book={book} key={i} />)
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="No Patient Details"
          />
        )}
      </RightInfoCard>
    </HideDisplay>
  )
}

export default PatientLists
