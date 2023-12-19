import React, { useEffect, useState } from 'react'
import {
  ButtonSubmit,
  ButtonSubmitStep,
  FormGroup,
  HideDisplay,
  HideDisplayMobile,
  LayoutWrapper,
  LayoutWrapperComponent,
  LayoutWrapperComponent2,
  SelectGroupOther,
} from './register.styled'
import { Checkbox, Col, Form, Input, Row, Typography } from 'antd'
import { NavImage } from '../NavLayout/module.styled'
import { Label } from '../Consult/consult.styled'
import { FormLabel } from '../Dashboard/dashboard.styled'
import Spacer from 'react-spacer'
import {
  PlusOutlined,
  DeleteOutlined,
  UploadOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons'
import { FilterText } from '../Search/search.styled'
import PhotoUpload from '../FileUpload/PhotoUpload'
import { ReviewsSection, TotalReviews } from '../home/Services/services.styled'

import { signup } from '@/redux/actions/authAction'
const { Text, Link, Title, Paragraph } = Typography
function AdditionalFormPatient({ dispatch, input, role }) {
  const [hospitalResults, setHospitalResults] = useState([])
  const [specialityResults, setSpecialityResults] = useState([])
  const [type, setType] = useState('user')
  let { fullName, phone, email, password } = input

  const getRole = (role) => {
    switch (role) {
      case 1:
        return 'user'
      case 2:
        return 'doctor'
      case 3:
        return 'hospital'
      default:
        return 'hospital'
    }
  }
  useEffect(() => {
    if (getRole(role)) {
      setType(getRole(role))
    }
  }, [role])

  const onFinish = () => {
    // e.preventDefault()

    let { fullName, phone, email, password } = input

    dispatch(signup(fullName, phone, email, password, type))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <LayoutWrapper>
        <Col>
          <Link href="/">
            <NavImage src="/hosplan_logo.png" alt="hosplan_logo" width={180} />
          </Link>
        </Col>
      </LayoutWrapper>
      <LayoutWrapperComponent>
        <Row style={{ width: '100%' }}>
          <Col>
            <PhotoUpload card={true} />
          </Col>

          <Col style={{ margin: '28px 12px' }}>
            <Text
              strong
              style={{
                fontFamily: 'Ralewayw',
                fontWeight: 600,
                fontSize: '15.6732px',
              }}
            >
              Welcome
            </Text>
            <Title
              style={{
                margin: '0',
                fontFamily: 'Ralewayw',
                fontWeight: 600,
                fontSize: '35.6732px',
              }}
            >
              {fullName || ''}
            </Title>
          </Col>
        </Row>

        <ReviewsSection>
          <Spacer width={18} />
        </ReviewsSection>
      </LayoutWrapperComponent>
      <Form
        name="basic"
        labelCol={{
          span: 12,
        }}
        wrapperCol={{
          span: 24,
        }}
        // style={{
        //   maxWidth: 1000,
        // }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        <LayoutWrapperComponent>
          {/* For Desktop */}
          <HideDisplayMobile>
            <Col span={12}>
              <FormLabel htmlFor="health" name="health">
                <b>Health Problem</b>
              </FormLabel>
              <Spacer height={5} />

              <FormGroup
                name="health"
                rules={[
                  {
                    required: true,
                    message: "Please enter patient's health issue!",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Select patient's health issue"
                />
              </FormGroup>
            </Col>
            <Col span={11}>
              <FormLabel htmlFor="health" name="health">
                <b> How long is the patient suffering from the disease?</b>
              </FormLabel>
              <Spacer height={5} />

              <FormGroup
                name="disease"
                rules={[
                  {
                    required: true,
                    message: "Please enter patient's health issue!",
                  },
                ]}
              >
                <Input size="large" />
              </FormGroup>
            </Col>
          </HideDisplayMobile>
          {/* For Mobile */}
          <HideDisplay>
            <Col span={24}>
              <FormLabel htmlFor="health" name="health">
                <b>Health Problem</b>
              </FormLabel>
              <Spacer height={5} />

              <FormGroup
                name="health"
                rules={[
                  {
                    required: true,
                    message: "Please enter patient's health issue!",
                  },
                ]}
              >
                <Input
                  size="medium"
                  placeholder="Select patient's health issue"
                />
              </FormGroup>
            </Col>
            <Col span={24}>
              <FormLabel htmlFor="health" name="health">
                <b> How long is the patient suffering from the disease?</b>
              </FormLabel>
              <Spacer height={5} />

              <FormGroup
                name="disease"
                rules={[
                  {
                    required: true,
                    message: "Please enter patient's health issue!",
                  },
                ]}
              >
                <Input size="medium" />
              </FormGroup>
            </Col>
          </HideDisplay>
        </LayoutWrapperComponent>
        <LayoutWrapperComponent2>
          <Col span={24} style={{ width: '100%' }}>
            <Spacer height={28} />
            <Label style={{ width: '93%' }}>
              {/* <input type="file" name="file" /> */}
              <UploadOutlined
                size="large"
                style={{ fontSize: '28px', margin: '18px' }}
              />
              <Typography.Paragraph
                strong
                style={{ fontSize: '14px', fontFamily: 'Ralewayw' }}
              >
                UPLOAD YOUR DOCUMENTS HERE
              </Typography.Paragraph>
              <Spacer height={18} />
            </Label>
            <Spacer height={28} />
          </Col>
        </LayoutWrapperComponent2>
        <LayoutWrapperComponent2 justify="space-between">
          <Row>
            <Col>
              <Checkbox value="A" />
            </Col>
            <Col>
              &ensp;
              <FilterText style={{ cursor: 'pointer' }}>
                I agree to the{' '}
                <b style={{ textDecoration: 'underline' }}>Terms & Policy</b>
              </FilterText>
            </Col>
          </Row>
          <Col span={3}>
            <ButtonSubmitStep
              colors="#0872E3"
              size="large"
              type="primary"
              htmlType="submit"
              // onClick={(e) => handleSubmit(e, type)}
            >
              SUBMIT
            </ButtonSubmitStep>
          </Col>
        </LayoutWrapperComponent2>
      </Form>
    </div>
  )
}

export default AdditionalFormPatient
