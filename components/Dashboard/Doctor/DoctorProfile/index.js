import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd'
import Spacer from 'react-spacer'
import { useDispatch, useSelector } from 'react-redux'
import { loadingApp, step } from '@/redux/actions/appAction'
import { formOne } from '@/redux/actions/appAction'
import Router from 'next/router'
import { PlusOutlined } from '@ant-design/icons'
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
import Reports from '../../Patient/Profile/Reports'
import { useEffect } from 'react'
import { updateUsersProfile } from '@/redux/actions/dashboardAction'

const { Title, Text } = Typography

const DoctorProfile = ({ user, children, isLoggedIn, ...props }) => {
  let { _id, name, email, phone, image } = user
  let { profileData, loading } = props
  console.log('MyProfile:', user)
  const dispatch = useDispatch()

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
    console.log('Success:', payload)
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
        dispatch={dispatch}
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
                <FormLabel htmlFor="upi" name="upi">
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
              <Col span={6}>
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
                <FormLabel htmlFor="upi" name="upi">
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
              </Col>
            </Row> */}

            <Row justify="space-between">
              <Col span={24}>
                <FormLabel htmlFor="phone" name="phone">
                  Phone Number (payment related)
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
                  <Input placeholder="phone number" />
                </FormGroup>
              </Col>
              {/* <Col span={12}>
                <FormLabel htmlFor="Phone" name="Phone">
                  Secretary’s Phone Number (Appointment rel..)
                </FormLabel>
                <FormGroup
                  name="phone_no"
                  rules={[
                    {
                      required: false,
                      message: 'Please input phone no.!',
                    },
                  ]}
                >
                  <Input placeholder="secretary’s phone number" />
                </FormGroup>
              </Col> */}
            </Row>
            {/* <Row justify="space-between">
              <Col span={12}>
                <FormLabel htmlFor="hospital" name="hospital">
                  Hospital
                </FormLabel>
                <FormGroup
                  name="hospital"
                  rules={[
                    {
                      required: false,
                      message: 'Please input hospital name.!',
                    },
                  ]}
                >
                  <Input placeholder="hospital name" />
                </FormGroup>
              </Col>
              <Col span={12}>
                <FormLabel htmlFor="speciality" name="speciality">
                  Speciality
                </FormLabel>
                <FormGroup
                  name="speciality"
                  rules={[
                    {
                      required: false,
                      message: 'Please input speciality!',
                    },
                  ]}
                >
                  <Input placeholder="speciality name" />
                </FormGroup>
              </Col>
            </Row> */}
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
                  Apply Changes
                </SubmitForm>
              </FormGroup>
            </Row>
          </Form>
        </Col>
        <Spacer width={24} />
        <Col span={10}>
          <Reports user={user} title="Certificates" {...props} />
        </Col>
      </FormGroupWrap>
    </div>
  )
}

export default DoctorProfile
