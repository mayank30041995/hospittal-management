import React from 'react'
import { Col, Divider, Row, Button, Rate, Input, Form, message } from 'antd'
import { Space, Typography } from 'antd'
import Spacer from 'react-spacer'
import { FormArea, FormGroup, FormSubArea } from './doctor.styled'
import {
  FormGroupWrap,
  FormLabel,
  SubmitForm,
} from '../Dashboard/dashboard.styled'
import { useDispatch, useSelector } from 'react-redux'
import { TextAreaBlock } from '../Input/input.styled'
import { commentDoctor } from '@/redux/actions/searchAction'
import { useState } from 'react'
const { Text, Title, Link, Paragraph } = Typography
const responsive = { xs: 8, sm: 16, md: 24, lg: 32 }

function Review({ user, doctorId, gap }) {
  const dispatch = useDispatch()
   const [cleanliness, setCleanliness] = useState(0)
   const [formField, setFormField] = useState({
     name: '',
     review: '',
     email: '',
     title: '',
   })
   const onFinish = (values) => {
     const data = { ...values }

     const payload = {
       Name: data.name || '',
       Review: data.review || '',
       Email: data.email || '',
       Title: data.title || '',
       user: user.id || '',
       doctor: doctorId,
       Cleanliness: cleanliness,
       Infrastructure: 0,
       MedicalCare: 0,
       StaffAttitude: 0,
       WaitTime: 0,
     }
     if (user.id) {
       dispatch(commentDoctor(payload))
     } else {
       message.error('Failed to submit review, Please Login!')
     }
     setFormField({ name: '', review: '', email: '', title: '', user: '' })
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
            Share your experience and help others make confident decisions.
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
                Will you recomment this doctor?{' '}
                <Rate defaultValue={0} onChange={(e) => setCleanliness(e)} />
              </Text>
            </Col>
          </Row>
          <Spacer height={20} />
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
                rules={[
                  {
                    required: true,
                    message: 'Please input review!',
                  },
                ]}
              >
                <TextAreaBlock
                  rows={4}
                  placeholder="Write your reviews here..."
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
