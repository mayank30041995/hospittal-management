import { Col, Form, Input, Row, Typography } from 'antd'
import Spacer from 'react-spacer'
import { PlusOutlined } from '@ant-design/icons'
const _ = require('lodash')
import {
  AccptedParagraph,
  ChannelHead,
  FileAddSection,
  FileAddSectionAdd,
  FormGroup,
  FormGroupWrap,
  FormLabel,
  SubmitForm,
} from '../../dashboard.styled'
import MobileMyProfile from './MobileMyProfile'
import PhotoUpload from '../../../FileUpload/PhotoUpload'
import appConfig from '@/utils/appConfig'
import moment from 'moment'
import {
  postMedicalReport,
  updateUsersProfile,
} from '@/redux/actions/dashboardAction'
import axios from 'axios'
import { useEffect } from 'react'
import { loadingApp, uploadProfile } from '@/redux/actions/appAction'
const { Title, Text } = Typography

const MyProfile = ({ user, children, isLoggedIn, ...props }) => {
  let { name, email, phone, _id, image } = user
  let { profileData, loading } = props
  // console.log('MyProfile:', user, _id, profileData)

  useEffect(() => {
    // props.dispatch(uploadProfile({}))
    props.dispatch(loadingApp(false))
  }, [])

  const onFinish = (values) => {
    const data = { ...values }
    const payload = {
      ...(!_.isEmpty(profileData) && { image: profileData.id }),
      name: data.name || '',
      username: data.name || '',
      phone: data.phone || '',
      email: data.email || '',
      age: data.age || '',
      country: data.country || '',
    }

    if (!_.isEmpty(payload)) {
      props.dispatch(updateUsersProfile(_id, payload))
    }
    console.log('Success:', payload)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

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
      <ChannelHead>{children}</ChannelHead>
      <MobileMyProfile
        user={user}
        profileData={profileData}
        loading={loading}
        dispatch={props.dispatch}
      />

      <FormGroupWrap>
        <Col span={13}>
          <PhotoUpload image={image} />
          <Spacer height={14} />
          <Form
            name="basic"
            labelCol={{
              span: 12,
            }}
            wrapperCol={{
              span: 24,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              name: name,
              email: email,
              phone: phone,
              age: '',
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
          >
            <FormLabel htmlFor="name" name="name">
              Name
            </FormLabel>
            <FormGroup
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input member’s name!',
                },
              ]}
            >
              <Input placeholder="Member’s name" />
            </FormGroup>
            <FormLabel htmlFor="email" name="email">
              Email
            </FormLabel>
            <FormGroup
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input email!',
                },
              ]}
            >
              <Input placeholder="email" />
            </FormGroup>
            {/* <Row justify="space-between">
              <Col span={10}>
                <FormLabel htmlFor="password" name="password">
                  Password
                </FormLabel>
                <FormGroup
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input password!',
                    },
                  ]}
                >
                  <Input placeholder="Create a strong password" />
                </FormGroup>
              </Col>

              <Col span={14}>
                <FormLabel htmlFor="upi" name="upi">
                  Confirm your password
                </FormLabel>
                <FormGroup
                  name="changePassword"
                  rules={[
                    {
                      required: false,
                      message: 'Please input password!',
                    },
                  ]}
                >
                  <Input placeholder="Retype your password" />
                </FormGroup>
              </Col>
            </Row> */}

            <Row justify="space-between">
              {/* <Col span={6}>
                <FormLabel htmlFor="age" name="age">
                  Age
                </FormLabel>
                <FormGroup
                  name="age"
                  rules={[
                    {
                      required: true,
                      message: 'Please input age!',
                    },
                  ]}
                >
                  <Input placeholder="Enter patient’s age" />
                </FormGroup>
              </Col>

              <Col span={6}>
                <FormLabel htmlFor="country" name="country">
                  Country
                </FormLabel>
                <FormGroup
                  name="country"
                  rules={[
                    {
                      required: false,
                      message: 'Please input country!',
                    },
                  ]}
                >
                  <Input placeholder="Country" />
                </FormGroup>
              </Col> */}
              <Col span={24}>
                <FormLabel htmlFor="phone" name="phone">
                  Phone Number
                </FormLabel>
                <FormGroup
                  name="phone"
                  rules={[
                    {
                      required: false,
                      message: 'Please input phone no.!',
                    },
                  ]}
                >
                  <Input placeholder="Please input phone no" />
                </FormGroup>
              </Col>
            </Row>

            {/* <Row justify="space-between">
              <Col span={12}>
                <FormLabel htmlFor="street_address" name="street_address">
                  Street Address
                </FormLabel>
                <FormGroup
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: 'Please input address!',
                    },
                  ]}
                >
                  <Input placeholder="Enter Street Address" />
                </FormGroup>
              </Col>

              <Col span={12}>
                <FormLabel htmlFor="zip" name="zip">
                  ZIP Code
                </FormLabel>
                <FormGroup
                  name="zip"
                  rules={[
                    {
                      required: false,
                      message: 'Please input zip!',
                    },
                  ]}
                >
                  <Input placeholder="ZIP Code" />
                </FormGroup>
              </Col>
            </Row>
            <FormLabel htmlFor="address" name="address">
              Address
            </FormLabel>
            <FormGroup
              name="address"
              rules={[
                {
                  required: false,
                  message: 'Please input address!',
                },
              ]}
            >
              <Input placeholder="Address" />
            </FormGroup> */}
            <Spacer height={10} />
            <Row justify="end">
              <FormGroup
                wrapperCol={{
                  // offset: 16,
                  span: 24,
                }}
              >
                <SubmitForm
                  type="primary"
                  htmlType="submit"
                  size="large"
                  disabled={loading ? true : false}
                >
                  Submit
                </SubmitForm>
              </FormGroup>
            </Row>
          </Form>
        </Col>
        <Spacer width={24} />
        <Col span={10}>
          <Text strong>My Reports</Text>
          <FileAddSection>
            <FileAddSectionAdd>
              <label class="custom-file-upload" style={{ background: '#FFF' }}>
                <input
                  type="file"
                  name="file"
                  onChange={(e) => uploadEvents(e)}
                />
                Add Files &ensp;
                <PlusOutlined style={{ color: '#1286F1', cursor: 'pointer' }} />
              </label>
              {/* Add File &nbsp;
              <PlusOutlined /> */}
            </FileAddSectionAdd>
            <AccptedParagraph>
              Accepted file types .doc & .pdf only
            </AccptedParagraph>
          </FileAddSection>
        </Col>
      </FormGroupWrap>
    </div>
  )
}

export default MyProfile
