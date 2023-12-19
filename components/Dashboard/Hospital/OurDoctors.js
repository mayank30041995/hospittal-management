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
  ActionWrapper,
  ButtonEdit,
  CellOne,
  ChannelHead,
  ListText,
  SearchText,
  SelectArea,
  Table,
  TableDataCell,
  TableHead,
  TableHeader,
  TableRow,
  VerticalDivider,
} from '../dashboard.styled'
import { useState } from 'react'
import moment from 'moment'
import { useEffect } from 'react'
import {
  MoreOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import {
  loadBookingOrder,
  loadBookingOrderByStatus,
} from '@/redux/actions/dashboardAction'
import {
  CardEdit,
  DropdownButton,
  GridBox,
  HideDisplay,
  HideDisplayMobile,
  ListTextCol,
} from '../dashboardmobile.styled'
const { Title, Text, Paragraph } = Typography

const items = [
  {
    label: 'Download',
    key: '1',
  },
  {
    label: 'Delete',
    key: '2',
  },
  {
    label: 'Size : 27kb',
    key: '3',
  },
]

const OurDoctors = ({ user, children, isLoggedIn, ...props }) => {
  const [loadings, setLoadings] = useState([])
  const [domLoaded, setDomLoaded] = useState(false)
  const [appointment, setAppointment] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  useEffect(() => {
    if (user.id) {
      props.dispatch(loadBookingOrder(user.id))
    }
  }, [user.id])

  useEffect(() => {
    if (user.Doctors.length) {
      setAppointment(user.Doctors)
    }
  }, [user.Doctors.length])

  const onSearch = (searchVal, type) => {
    if (user.Doctors.length) {
      const doctors = [...user.Doctors]
      if (searchVal === '') {
        setAppointment(doctors)
        return
      }
      if (type === 'name') {
        const filterBySearch = doctors.filter((item) => {
          if (
            item.Name.toLowerCase().includes(searchVal.trim().toLowerCase())
          ) {
            return item
          }
        })
        setAppointment(filterBySearch)
      } else if (type === 'department') {
        const filterBySearch = doctors.filter((item) => {
          if (
            item.Department.toLowerCase().includes(
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
          <Spacer height={18} />
          <Row
            justify="space-between"
            style={{ alignItems: 'center', width: '89%', marginLeft: '3%' }}
          >
            <Row>
              <Col>
                <SearchText
                  size="large"
                  bordered={false}
                  placeholder="Search By Doctor Name"
                  onChange={(e) => onSearch(e.target.value, 'name')}
                />
              </Col>
              <Spacer width={12} />
              <Col>
                <SearchText
                  size="large"
                  bordered={false}
                  placeholder="Search By Department"
                  onChange={(e) => onSearch(e.target.value, 'department')}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <SelectArea
                  size="large"
                  defaultValue="Sort By"
                  style={{
                    width: 150,
                    // marginLeft: '33%',
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
              </Col>
            </Row>
          </Row>
          <Spacer height={18} />
          <Row style={{ width: '102%' }}>
            {appointment.length > 0 ? (
              <Col span={22} style={{ marginLeft: '3%' }}>
                <Table>
                  <TableHeader>
                    <TableHead style={{ width: '16vh' }}>Name</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Experience</TableHead>
                    <TableHead>Fees</TableHead>
                    <TableHead>Action</TableHead>
                  </TableHeader>
                  <Spacer height={12} />

                  {appointment.length > 0 &&
                    appointment.map((doctor, i) => {
                      let { Name, Pictures, Experience, Department, Price } =
                        doctor
                      return (
                        <tbody style={{ textAlign: 'center' }} key={i}>
                          <TableRow>
                            <TableDataCell>
                              <CellOne>
                                <Avatar
                                  shape="circle"
                                  src={Pictures[0]?.url}
                                  size={42}
                                  icon={<UserOutlined />}
                                />
                                &nbsp;{' '}
                                <ListText>
                                  {Name.length > 17
                                    ? `${Name.slice(0, 17)}...`
                                    : Name}
                                </ListText>
                              </CellOne>
                            </TableDataCell>
                            <TableDataCell style={{ width: '25vh' }}>
                              {Department.length > 25
                                ? `${Department.slice(0, 25)}...`
                                : Department}
                            </TableDataCell>
                            <TableDataCell>{Experience}</TableDataCell>
                            <TableDataCell>{Price}</TableDataCell>
                            <TableDataCell>
                              <ActionWrapper>
                                <div>
                                  <ButtonEdit>
                                    Edit Profile{' '}
                                    <Avatar
                                      shape="circle"
                                      src="/eyeopen.png"
                                      size={16}
                                      icon={<EyeInvisibleOutlined />}
                                    />
                                  </ButtonEdit>
                                </div>
                                <DeleteOutlined />
                              </ActionWrapper>
                            </TableDataCell>
                          </TableRow>
                          <Spacer height={12} />
                        </tbody>
                      )
                    })}
                </Table>
              </Col>
            ) : (
              <Col span={22} style={{ marginLeft: '3%' }}>
                <HideDisplayMobile>
                  <Empty
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                    description="No Appointments"
                  />
                </HideDisplayMobile>
              </Col>
            )}
          </Row>
        </Col>
      </HideDisplayMobile>

      {/* For Mobile */}
      <HideDisplay>
        <GridBox>
          <Spacer height={12} />

          <SearchText
            size="large"
            bordered={false}
            placeholder="Search By Doctor Name"
            onChange={(e) => onSearch(e.target.value, 'name')}
          />
        </GridBox>
        {appointment.length > 0 ? (
          appointment.map((doctor, i) => {
            let { Name, Pictures, Experience, Department, Price } = doctor
            return (
              <CardEdit
                key={i}
                style={{
                  boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.25)',
                  borderRadius: '5px',
                }}
              >
                <Col span={22}>
                  <Row>
                    <Avatar
                      shape="circle"
                      src={Pictures[0]?.url}
                      size={42}
                      icon={<UserOutlined />}
                    />

                    <Col style={{ margin: '0px' }}>
                      <ListTextCol>{Name}</ListTextCol>
                      {Department.length > 25 ? (
                        <ListTextCol strong>
                          {Department?.slice(0, 25)}...
                        </ListTextCol>
                      ) : (
                        <ListTextCol strong>{Department}</ListTextCol>
                      )}
                    </Col>
                  </Row>
                </Col>
                <Col span={2}>
                  <DropdownButton
                    placement="topRight"
                    icon={
                      <MoreOutlined
                        style={{
                          padding: '3px 8px 6px',
                          marginTop: '-4px',
                        }}
                      />
                    }
                    loading={loadings[1]}
                    menu={{
                      items,
                    }}
                    onClick={() => enterLoading(1)}
                  ></DropdownButton>
                </Col>
              </CardEdit>
            )
          })
        ) : (
          <Col span={22} style={{ marginLeft: '3%' }}>
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="No Appointments"
            />
          </Col>
        )}
        <Spacer height={150} />
      </HideDisplay>
    </>
  )
}

export default OurDoctors
