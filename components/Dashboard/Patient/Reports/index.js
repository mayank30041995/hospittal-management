import React from 'react'
import {
  Avatar,
  Button,
  Checkbox,
  Col,
  Empty,
  Form,
  Input,
  Row,
  Typography,
} from 'antd'
import {
  CellOne,
  ChannelHead,
  FileADD,
  FileAddBTN,
  ListText,
  Table,
  TableDataCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../dashboard.styled'
import { useState } from 'react'
import { useEffect } from 'react'
import Spacer from 'react-spacer'
import {
  UserOutlined,
  DownloadOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import ReportMobile from '../Profile/ReportMobile'
import {
  deleteMedicalReport,
  loadMedicalReport,
  postMedicalReport,
} from '@/redux/actions/dashboardAction'
import moment from 'moment'
import appConfig from '@/utils/appConfig'
import axios from 'axios'
const { Title, Text, Paragraph } = Typography
function Reports({ children, user, ...props }) {
  const [domLoaded, setDomLoaded] = useState(false)
  // let { Report, updatedAt } =
  //   props.medicalReport.length && props.medicalReport[0]

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  useEffect(() => {
    props.dispatch(loadMedicalReport(user._id, {}))
  }, [user._id])

  const uploadEvents = async (event) => {
    event.preventDefault()
    let formData = new FormData()
    let file_size = event.target.files[0]?.size || 0
    let file_name = event.target.files[0]?.name || ''
    let file_type = event.target.files[0]?.type || ''

    formData.append('files', event.target.files[0])
    if (event) {
      if (file_size !== 0) {
        await axios
          .post(`${appConfig.socketURL}/upload`, formData)
          .then((uploads) => {
            if (uploads.data.length) {
              console.log('file_payloads', uploads.data[0]._id)
              const report_id = uploads.data[0]._id
              const file_payloads = {
                ReportName: file_name.split('.').pop(),
                Date: moment().format(),
                Tests: '',
                user: user._id,
                Report: report_id,
              }
              props.dispatch(postMedicalReport(file_payloads))
            }
          })
      }
    }
  }

  return (
    <Col>
      <ChannelHead>{children}</ChannelHead>
      <ReportMobile user={user} {...props} />

      <Row style={{ padding: '2% 3%', alignItems: 'baseline' }}>
        <Col span={24}>
          {domLoaded && props.medicalReport.length > 0 ? (
            <>
              <Table>
                <TableHeader>
                  <TableHead>Icon</TableHead>
                  <TableHead>File Name</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Uploaded date</TableHead>
                  <TableHead>Action</TableHead>
                </TableHeader>
                <Spacer height={12} />
                <tbody style={{ textAlign: 'center' }}>
                  {props.medicalReport.map((events, i) => (
                    <div key={i} style={{ display: 'contents' }}>
                      <TableRow>
                        <TableDataCell>
                          <CellOne>
                            <Avatar
                              shape="square"
                              src="/pdf.png"
                              size={42}
                              icon={<UserOutlined />}
                            />
                            &nbsp;{' '}
                            <b style={{ display: 'flex' }}>
                              {events.Report[0]?.mime
                                ?.split('/')
                                .pop()
                                .toUpperCase()}
                            </b>
                          </CellOne>
                        </TableDataCell>
                        <TableDataCell>{events.Report[0]?.name}</TableDataCell>
                        <TableDataCell>{events.Report[0]?.size}</TableDataCell>
                        <TableDataCell>
                          {moment(events.Report[0]?.createdAt).format(
                            'Do MMM YY'
                          )}
                        </TableDataCell>
                        <TableDataCell>
                          <Col>
                            <a
                              style={{ color: '#000' }}
                              href={events.Report[0].url}
                              download="Example-PDF-document"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <DownloadOutlined

                              // onClick={() => downloadFile(events)}
                              />
                            </a>

                            {/* <DeleteOutlined
                              onClick={() =>
                                props.dispatch(deleteMedicalReport(events.id))
                              }
                            /> */}
                          </Col>
                        </TableDataCell>
                      </TableRow>
                      <Spacer height={12} />
                    </div>
                  ))}
                </tbody>
              </Table>
              <FileADD>
                <FileAddBTN>
                  <label
                    class="custom-file-upload"
                    style={{ background: '#1286F1' }}
                  >
                    <input
                      type="file"
                      name="file"
                      onChange={(e) => uploadEvents(e)}
                    />
                    Add Files
                  </label>
                </FileAddBTN>
              </FileADD>
            </>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableHead>Icon</TableHead>
                  <TableHead>File Name</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Uploaded date</TableHead>
                  <TableHead>Action</TableHead>
                </TableHeader>
                <Spacer height={12} />
              </Table>
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="No Medical Reports"
              />
              <FileADD>
                <FileAddBTN>
                  <label
                    class="custom-file-upload"
                    style={{ background: '#1286F1' }}
                  >
                    <input
                      type="file"
                      name="file"
                      onChange={(e) => uploadEvents(e)}
                    />
                    Add Files
                  </label>
                </FileAddBTN>
              </FileADD>
            </>
          )}
        </Col>
      </Row>
    </Col>
  )
}

export default Reports
