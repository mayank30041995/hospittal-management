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
          <PhotoUpload image={image} />
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
          {/* <Spacer height={16} /> */}
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
          {/* <Spacer height={16} /> */}
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
          {/* <Spacer height={16} /> */}
          <Row justify="space-between">
            {/* <Col span={6}>
              <FormLabel htmlFor="upi" name="upi">
                Age
              </FormLabel>
              <FormGroup
                name="password"
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
            </Col> */}
            <Col span={24}>
              <FormLabel htmlFor="upi" name="upi">
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
          {/* <Spacer height={16} />
          <Row justify="space-between">
            <Col span={12}>
              <FormLabel htmlFor="upi" name="upi">
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
              <FormLabel htmlFor="upi" name="upi">
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
          <Spacer height={16} />
          <FormLabel htmlFor="upi" name="upi">
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
