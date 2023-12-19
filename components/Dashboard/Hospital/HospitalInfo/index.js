import { Col, Form, Input, Row, Typography } from 'antd'
import Spacer from 'react-spacer'
import { loadingApp, step } from '@/redux/actions/appAction'
import _ from 'lodash'

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
import { updateUsersProfile } from '@/redux/actions/dashboardAction'
import { useEffect } from 'react'

const { Title, Text } = Typography

const HospitalInfo = ({ user, children, isLoggedIn, ...props }) => {
  let { _id, name, email, phone, hospital, image } = user
  let { profileData, loading } = props
  let { Name, Address, Phone, City } = !_.isEmpty(hospital) && hospital

  useEffect(() => {
    // props.dispatch(uploadProfile({}))
    props.dispatch(loadingApp(false))
  }, [])

  const onFinish = (values) => {
    const data = { ...values }
    const payload = {
      ...(!_.isEmpty(profileData) && { image: profileData.id }),
      name: data.name || '',
      // username: data.name || '',
      phone: data.phone || '',
      email: data.email || '',
      age: data.age || '',
      country: data.country || '',
    }

    if (!_.isEmpty(payload)) {
      props.dispatch(updateUsersProfile(_id, payload))
    }
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
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
              name: name || '',
              address: Address || '',
              email: email || '',
              phone: phone || '',
              city: City || '',
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
                  message: 'Please input name!',
                },
              ]}
            >
              <Input placeholder="Name" />
            </FormGroup>
            {/* <FormLabel htmlFor="address" name="address">
              Address
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
              <Input placeholder="address" />
            </FormGroup> */}
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

            <FormLabel htmlFor="phone" name="phone">
              Phone Number
            </FormLabel>
            <FormGroup
              name="phone"
              rules={[
                {
                  required: true,
                  message: 'Please input phone number!',
                },
              ]}
            >
              <Input placeholder="phone number" />
            </FormGroup>

            {/* <Row justify="space-between">
              <Col span={12}>
                <FormLabel htmlFor="password" name="password">
                  Password
                </FormLabel>
                <FormGroup
                  name="Password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input password!',
                    },
                  ]}
                >
                  <Input placeholder="Enter  Password" />
                </FormGroup>
              </Col>

              <Col span={12}>
                <FormLabel htmlFor="password" name="password">
                  Confirm Password
                </FormLabel>
                <FormGroup
                  name="zip"
                  rules={[
                    {
                      required: false,
                      message: 'Please input password again!',
                    },
                  ]}
                >
                  <Input placeholder="password" />
                </FormGroup>
              </Col>
            </Row> */}

            <Row justify="space-between">
              <Col span={12}>
                <FormLabel htmlFor="city" name="city">
                  City
                </FormLabel>
                <FormGroup
                  name="city"
                  rules={[
                    {
                      required: true,
                      message: 'Please input city!',
                    },
                  ]}
                >
                  <Input placeholder="Enter  city" />
                </FormGroup>
              </Col>

              <Col span={12}>
                <FormLabel htmlFor="submit" name="submit"></FormLabel>
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
                    style={{ width: '100%' }}
                    disabled={loading ? true : false}
                  >
                    Apply Changes
                  </SubmitForm>
                </FormGroup>
              </Col>
            </Row>

            <Spacer height={10} />
            <Row justify="end"></Row>
          </Form>
        </Col>
        {/* <Spacer width={24} />
        <Col span={10}>
          <Text strong>My Reports</Text>
          <FileAddSection>
            <FileAddSectionAdd>
              Add File &nbsp;
              <PlusOutlined />
            </FileAddSectionAdd>
            <AccptedParagraph>
              Accepted file types .doc & .pdf only
            </AccptedParagraph>
          </FileAddSection>
        </Col> */}
      </FormGroupWrap>
    </div>
  )
}

export default HospitalInfo
