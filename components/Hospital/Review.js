import React, { useState } from 'react'
import { Col, Divider, Row, Button, Rate, Input, Form, message } from 'antd'
import { Space, Typography } from 'antd'
import Spacer from 'react-spacer'
import { TextAreaBlock } from '../Input/input.styled'
import { useDispatch } from 'react-redux'
import { FormArea, FormSubArea, FormGroup } from '../Doctor/doctor.styled'
const { Text, Title, Link, Paragraph } = Typography
const responsive = { xs: 8, sm: 16, md: 24, lg: 32 }
import {
  FormGroupWrap,
  FormLabel,
  SubmitForm,
} from '../Dashboard/dashboard.styled'
import { commentHospital } from '@/redux/actions/searchAction'

function Review({ hospitalDetails, user }) {
  const dispatch = useDispatch()

  const [formField, setFormField] = useState({
    name: '',
    review: '',
    email: '',
    title: '',
    Cleanliness: 0,
    MedicalCare: 0,
    StaffAttitude: 0,
    Infrastructure: 0,
    WaitTime: 0,
  })
  const onFinish = (values) => {
    const data = { ...values }

    const payload = {
      Name: data.name || '',
      Review: data.review || '',
      Email: data.email || '',
      Title: data.title || '',
      user: user.id || '',
      hospital: hospitalDetails.id,
      Cleanliness: formField.Cleanliness,
      Infrastructure: formField.Infrastructure,
      MedicalCare: formField.MedicalCare,
      StaffAttitude: formField.StaffAttitude,
      WaitTime: formField.WaitTime,
    }
    if (user.id) {
      dispatch(commentHospital(payload))
      console.log('onFinishPayload', data, payload)
    } else {
      message.error('Failed to submit review, Please Login!')
    }
    // setFormField({ name: '', review: '', email: '', title: '', user: '' })
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <FormArea
      type="desktop"
      justify="space-between"
      gutter={{
        ...responsive,
      }}
    >
      <FormSubArea>
        <Col span={24}>
          <Title level={2}>ADD YOUR REVIEW</Title>
          <Text
            style={{
              fontSize: '16px',
              fontFamily: 'Inter',
              letterSpacing: '0.858494px',
            }}
          >
            Share your experience and help others make confident decisions about
            their medical travel.
          </Text>
          <Spacer height={30} />
          <Row justify="space-between">
            <Col>
              <Text
                style={{
                  fontSize: '16px',
                  fontFamily: 'Inter',
                  letterSpacing: '0.858494px',
                  fontWeight: 500,
                }}
              >
                Cleanliness{' '}
                <Rate
                  defaultValue={0}
                  onChange={(e) =>
                    setFormField({ ...formField, Cleanliness: e })
                  }
                />
              </Text>
            </Col>
          </Row>
          <Spacer height={20} />
          <Row justify="space-between">
            <Col>
              <Text
                style={{
                  fontSize: '16px',
                  fontFamily: 'Inter',
                  letterSpacing: '0.858494px',
                  fontWeight: 500,
                }}
              >
                Medical Care{' '}
                <Rate
                  defaultValue={0}
                  onChange={(e) =>
                    setFormField({ ...formField, MedicalCare: e })
                  }
                />
              </Text>
            </Col>
            <Col>
              <Text
                style={{
                  fontSize: '16px',
                  fontFamily: 'Inter',
                  letterSpacing: '0.858494px',
                  fontWeight: 500,
                }}
              >
                Staff Attitude{' '}
                <Rate
                  defaultValue={0}
                  onChange={(e) =>
                    setFormField({ ...formField, StaffAttitude: e })
                  }
                />
              </Text>
            </Col>
          </Row>

          <Spacer height={20} />
          <Row justify="space-between">
            <Col>
              <Text
                style={{
                  fontSize: '16px',
                  fontFamily: 'Inter',
                  letterSpacing: '0.858494px',
                  fontWeight: 500,
                }}
              >
                Infrastructure
                <Rate
                  defaultValue={0}
                  onChange={(e) =>
                    setFormField({ ...formField, Infrastructure: e })
                  }
                />
              </Text>
            </Col>
            <Col>
              <Text
                style={{
                  fontSize: '16px',
                  fontFamily: 'Inter',
                  letterSpacing: '0.858494px',
                  fontWeight: 500,
                }}
              >
                Actual cost Vs Initial Estimate{' '}
                <Rate
                  defaultValue={0}
                  onChange={(e) => setFormField({ ...formField, WaitTime: e })}
                />
              </Text>
            </Col>
          </Row>
        </Col>
        <Form
          name="basic"
          labelCol={{
            span: 12,
          }}
          wrapperCol={{
            span: 24,
          }}
          style={{
            width: '100%',
          }}
          initialValues={{
            name: formField.name,
            review: formField.review,
            email: formField.email,
            title: formField.title,

            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
        >
          <Row justify="space-between">
            <Col span={12}>
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
                <Input placeholder="name" />
              </FormGroup>
            </Col>
            <Col span={11}>
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
            </Col>
          </Row>
          <Row justify="space-between">
            <Col span={24}>
              <FormLabel htmlFor="title" name="title">
                Title of Review
              </FormLabel>
              <FormGroup
                name="title"
                rules={[
                  {
                    required: true,
                    message: 'Please input review!',
                  },
                ]}
              >
                <Input placeholder="Title of Review (Required)" />
              </FormGroup>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col span={24}>
              <FormLabel htmlFor="review" name="review">
                Your Review
              </FormLabel>
              <FormGroup
                name="review"
                rules={[{ required: true, message: 'Please input review!' }]}
              >
                <TextAreaBlock
                  rows={4}
                  placeholder="Write your reviews here......"
                />
              </FormGroup>
            </Col>
          </Row>

          <Spacer height={10} />
          <Row justify="end">
            <FormGroup
              wrapperCol={{
                // offset: 16,
                span: 24,
              }}
            >
              <SubmitForm type="primary" htmlType="submit" size="large">
                SUBMIT REVIEW
              </SubmitForm>
            </FormGroup>
          </Row>
        </Form>
      </FormSubArea>
    </FormArea>
  )
}

export default Review
