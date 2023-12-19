import React from 'react'
import { Avatar, Button, Col, Empty, Row, Typography } from 'antd'
import {
  PlusOutlined,
  DownloadOutlined,
  DeleteOutlined,
  UserOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import {
  ContentParagraph,
  ContentParagraphRow,
  ContentWrittenArea,
  ListItem,
  ListText,
  ProfileRow,
  ReportAddText,
  ReportRow,
} from '../../dashboard.styled'
import {
  loadMedicalReport,
  postMedicalReport,
} from '@/redux/actions/dashboardAction'
import { useEffect } from 'react'
import moment from 'moment'
import axios from 'axios'
import appConfig from '@/utils/appConfig'
import Spacer from 'react-spacer'

function Reports({ user, title, ...props }) {
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
    <div>
      <Text style={{ fontFamily: 'Inter', fontWeight: 500 }}>
        {title ? title : 'Reports'}
      </Text>
      <Spacer height={5} />
      <ReportRow justify="end">
        <Row
          justify="end"
          style={{
            padding: '18px 24px 18px',
            height: '4vh',
            alignItems: 'baseline',
          }}
        >
          <Col>
            <ReportAddText>
              <label class="custom-file-upload" style={{ background: '#FFF' }}>
                <input
                  type="file"
                  name="file"
                  onChange={(e) => uploadEvents(e)}
                />
                Add Files &ensp;
                <PlusOutlined style={{ color: '#1286F1', cursor: 'pointer' }} />
              </label>
            </ReportAddText>
          </Col>
        </Row>
        <Spacer height={8} />
        {props.medicalReport.length > 0 ? (
          <>
            {props.medicalReport.map((events, i) => (
              <ListItem key={i}>
                <Row
                  justify="space-around"
                  style={{ width: '100%', alignItems: 'baseline' }}
                >
                  <>
                    <Col span={2}>
                      <Avatar
                        shape="square"
                        src="/pdf.png"
                        size={42}
                        icon={<UserOutlined />}
                      />
                    </Col>
                    <Col span={7}>
                      <ListText>{events.Report[0]?.name}</ListText>
                    </Col>
                    <Col span={5}>
                      <ListText>
                        {moment(events.Report[0]?.createdAt).format(
                          'Do MMM YY'
                        )}
                      </ListText>
                    </Col>
                    <Col span={5}>
                      <ListText>{events?.Report[0]?.size}</ListText>
                    </Col>
                    <Col span={2}>
                      <a
                        style={{ color: '#000' }}
                        href={`${events.Report[0].url}`}
                        download="Example-PDF-document"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <DownloadOutlined />
                      </a>
                    </Col>
                    {/* <Col>
                      <DeleteOutlined />
                    </Col> */}
                  </>
                </Row>
              </ListItem>
            ))}
          </>
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="No Medical Reports"
          />
        )}
      </ReportRow>
    </div>
  )
}

export default Reports
