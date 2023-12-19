import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd'
import Spacer from 'react-spacer'
import { useDispatch, useSelector } from 'react-redux'
import { step } from '@/redux/actions/appAction'
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

const { Title, Text } = Typography

import React from 'react'
import { MobileFormGroup } from '../../dashboardmobile.styled'
import PhotoUpload from '../../../FileUpload/PhotoUpload'
import { updateUsersProfile } from '@/redux/actions/dashboardAction'

function MobileMyProfile({ user, profileData, loading, dispatch }) {
  let { _id, name, email, phone, image } = user

  const onFinish = (values) => {
    console.log('Success:', values)
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
      dispatch(updateUsersProfile(_id, payload))
    }
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <MobileFormGroup>
      <PhotoUpload image={image} />
      <Col span={24}>
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
          {/* <FormLabel htmlFor="upi" name="upi">
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
          </FormGroup> */}

          <Row justify="space-between">
            <Col span={24}>
              <FormLabel htmlFor="phone" name="phone">
                Phone
              </FormLabel>
              <FormGroup
                name="phone"
                rules={[
                  {
                    required: true,
                    message: 'Please input phone!',
                  },
                ]}
              >
                <Input placeholder="Enter  phone" />
              </FormGroup>
            </Col>
            {/* <Col span={12}>
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
          <Spacer height={15} />
          <Col span={24}>
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
          </Col>
        </Form>
      </Col>
    </MobileFormGroup>
  )
}

export default MobileMyProfile
