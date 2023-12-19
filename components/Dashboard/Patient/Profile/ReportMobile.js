import { Avatar, Col, Dropdown, Empty, Row, Typography } from 'antd'
import React, { useState } from 'react'
import Spacer from 'react-spacer'
import {
  CardEdit,
  DropdownButton,
  HideDisplayContents,
  ListText,
  ProfileButton,
} from '../../dashboardmobile.styled'

import { UserOutlined, MoreOutlined, PlusOutlined } from '@ant-design/icons'
import {
  loadMedicalReport,
  postMedicalReport,
} from '@/redux/actions/dashboardAction'
import { useEffect } from 'react'
import appConfig from '@/utils/appConfig'
import axios from 'axios'
import moment from 'moment'

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

function ReportMobile({ user, ...props }) {
  const [loadings, setLoadings] = useState([])
  const enterLoading = (index) => {
    setLoadings((state) => {
      const newLoadings = [...state]
      newLoadings[index] = true
      return newLoadings
    })
  }

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
    <HideDisplayContents>
      {props.medicalReport.length ? (
        props.medicalReport.map((events, i) => (
          <CardEdit key={i}>
            <Col span={22}>
              <Row>
                <Avatar
                  shape="square"
                  src="/pdf.png"
                  size={42}
                  icon={<UserOutlined />}
                />

                <ListText>{events.Report[0]?.name}</ListText>
              </Row>
            </Col>
            <Col span={2}>
              <DropdownButton
                placement="topRight"
                icon={<MoreOutlined />}
                loading={loadings[1]}
                menu={{
                  items,
                }}
                onClick={() => enterLoading(1)}
              ></DropdownButton>
            </Col>
          </CardEdit>
        ))
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="No Medical Reports"
        />
      )}

      <ProfileButton style={{ width: '95%', marginLeft: '10px' }}>
        <label
          class="custom-file-upload"
          style={{ background: 'transparent', color: '#fff' }}
        >
          <input type="file" name="file" onChange={(e) => uploadEvents(e)} />{' '}
          ADD FILES <PlusOutlined />
        </label>
      </ProfileButton>
      <Spacer height={300} />
    </HideDisplayContents>
  )
}

export default ReportMobile
