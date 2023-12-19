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
  ActionWrapper,
  ButtonEdit,
  ButtonEditDownload,
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
  LayerInfoSectionStatusFail,
  LayerInfoSectionStatusOK,
  LayerInfoSectionTitle,
  ListText,
  SearchText,
  SelectArea,
  SubmitForm,
  TabArea,
  TabBlock,
  Table,
  TableDataCell,
  TableHead,
  TableHeader,
  TableRow,
  VerticalDivider,
} from '../dashboard.styled'
import PrescriptionMobile from './Profile/PrescriptionMobile'
import { useState } from 'react'
import moment from 'moment'
import { useEffect } from 'react'
import {
  UserOutlined,
  EyeInvisibleOutlined,
  DeleteOutlined,
  DownloadOutlined,
} from '@ant-design/icons'
import { loadPrescriptions } from '@/redux/actions/dashboardAction'
const { Title, Text, Paragraph } = Typography

const Prescription = ({ user, children, isLoggedIn, ...props }) => {
  const [domLoaded, setDomLoaded] = useState(false)
  useEffect(() => {
    setDomLoaded(true)
    props.dispatch(loadPrescriptions(user.id))
  }, [user.id])

  return (
    <Col>
      <ChannelHead>{children}</ChannelHead>
      <PrescriptionMobile {...props} />

      <Spacer height={18} />
      <Row style={{ width: '102%' }}>
        <Col span={22} style={{ marginLeft: '3%' }}>
          {props.prescriptions?.length ? (
            <Table>
              <TableHeader>
                <TableHead style={{ width: '22vh' }}>Doctor</TableHead>
                <TableHead style={{ width: '18vh' }}>Date</TableHead>
                <TableHead style={{ width: '18vh' }}>Size</TableHead>

                <TableHead>Action</TableHead>
              </TableHeader>

              <Spacer height={12} />

              {props.prescriptions?.map((prescription, i) => {
                let { Diagnosis, doctor, FollowUp } = prescription
                let { Name, Pictures, Department, Experience } = doctor
                return (
                  <tbody style={{ textAlign: 'center' }} key={i}>
                    <TableRow>
                      <TableDataCell>
                        <CellOne>
                          <Avatar
                            shape="circle"
                            src={Pictures.length > 0 ? Pictures[0]?.url : ''}
                            size={42}
                            icon={<UserOutlined />}
                          />
                          &nbsp; <ListText>{Name}</ListText>
                        </CellOne>
                      </TableDataCell>
                      <TableDataCell>
                        {moment(FollowUp).format('ddd, Do MMM YY')}
                      </TableDataCell>
                      <TableDataCell>
                        {Number(Experience || 1) * 10}
                      </TableDataCell>

                      <TableDataCell>
                        <ActionWrapper style={{ width: '33vh' }}>
                          <ButtonEditDownload
                            style={{
                              background: '#F8F8FA',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <a
                              style={{ color: '#000' }}
                              href="/medical.pdf"
                              // download="medical-PDF-document"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Text strong style={{ fontFamily: 'Inter' }}>
                                View &nbsp;
                              </Text>
                              <Avatar
                                shape="circle"
                                src="/eyeopen.png"
                                size={16}
                                icon={<DownloadOutlined />}
                              />
                            </a>
                          </ButtonEditDownload>
                          &ensp;
                          <div>
                            <ButtonEditDownload>
                              <a
                                style={{ color: '#000' }}
                                href="/medical.pdf"
                                download="medical-PDF-document"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download &nbsp;
                                <Avatar
                                  shape="circle"
                                  src="/download.png"
                                  size={16}
                                  icon={<DownloadOutlined />}
                                />
                              </a>
                            </ButtonEditDownload>
                          </div>
                        </ActionWrapper>
                      </TableDataCell>
                    </TableRow>
                    <Spacer height={12} />
                  </tbody>
                )
              })}
            </Table>
          ) : (
            <Row justify="center">
              <Col>
                <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  description="No Prescriptions"
                />
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Col>
  )
}

export default Prescription
