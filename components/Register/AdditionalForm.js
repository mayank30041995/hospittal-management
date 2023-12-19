import React, { useEffect, useState } from 'react'
import {
  ButtonSubmit,
  ButtonSubmitStep,
  FormGroup,
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
import { UploadOutlined } from '@ant-design/icons'
import { FilterText } from '../Search/search.styled'
import PhotoUpload from '../FileUpload/PhotoUpload'
import { ReviewsSection, TotalReviews } from '../home/Services/services.styled'
import { fetchJSON } from '@/utils/apiCalls'
import appConfig from '@/utils/appConfig'
import { signup } from '@/redux/actions/authAction'
const { Text, Link, Title, Paragraph } = Typography
function AdditionalForm({ dispatch, input, role }) {
  const [hospitalResults, setHospitalResults] = useState([])
  const [specialityResults, setSpecialityResults] = useState([])
  const [type, setType] = useState('user')
  const [loading, setLoading] = useState(true)
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

  useEffect(() => {
    fetchJSON(`${appConfig.socketURL}/hospitals`).then((value) => {
      if (value.length) {
        const results = value.map((hospital) => ({
          label: hospital.Name,
          value: hospital.id,
        }))
        setLoading(false)
        setHospitalResults(results)
      }
    })
    fetchJSON(`${appConfig.socketURL}/specialities`).then((value) => {
      if (value.length) {
        console.log('fetchJSON', value)
        const results = value.map((doctor) => ({
          label: doctor.name,
          value: doctor.id,
        }))
        setLoading(false)
        setSpecialityResults(results)
      }
    })
  }, [])

  // const handleSubmit = (e, type) => {
  //   e.preventDefault()

  //   let { fullName, phone, email, password } = input

  //   dispatch(signup(fullName, phone, email, password, type))
  // }

  const onFinish = (e) => {
    // e.preventDefault()

    let { fullName, phone, email, password } = input

    dispatch(signup(fullName, phone, email, password, type))
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <>
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
        <LayoutWrapperComponent
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Col span={11}>
            <FormLabel htmlFor="education" name="education">
              Education
            </FormLabel>
            <Spacer height={5} />
            <FormGroup
              name="education"
              rules={[
                {
                  required: true,
                  message: 'Please enter education!',
                },
              ]}
            >
              <Input size="large" />
            </FormGroup>
          </Col>

          <Col span={12}>
            <FormLabel htmlFor="hospital" name="hospital">
              Hospital
            </FormLabel>
            <Spacer height={5} />
            <SelectGroupOther
              allowClear
              onChange={(e) => console.log(e)}
              options={[...hospitalResults]}
              loading={loading}
              size="large"
              style={{ width: '90%' }}
            />
          </Col>
        </LayoutWrapperComponent>
        <LayoutWrapperComponent
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Col span={11}>
            <FormLabel htmlFor="department" name="department">
              Department
            </FormLabel>
            <Spacer height={5} />
            <FormGroup
              name="department"
              rules={[
                {
                  required: true,
                  message: 'Please enter department!',
                },
              ]}
            >
              <Input size="large" />
            </FormGroup>
          </Col>
          <Col span={6}>
            <FormLabel htmlFor="designation" name="designation">
              Designation
            </FormLabel>
            <Spacer height={5} />
            <SelectGroupOther
              allowClear
              onChange={(e) => console.log(e)}
              options={[...specialityResults]}
              loading={loading}
              size="large"
              style={{ width: '100%' }}
            />
          </Col>
          <Col span={5}>
            <FormLabel htmlFor="experience" name="experience">
              Experience (in Years)
            </FormLabel>
            <Spacer height={5} />
            <FormGroup
              name="experience"
              rules={[
                {
                  required: true,
                  message: 'Please enter experience!',
                },
              ]}
            >
              <Input size="large" style={{ width: '75%' }} />
            </FormGroup>
          </Col>

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
        </LayoutWrapperComponent>
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
              type="primary"
              htmlType="submit"
              size="large"
              // onClick={(e) => handleSubmit(e, type)}
            >
              SUBMIT
            </ButtonSubmitStep>
          </Col>
        </LayoutWrapperComponent2>
      </Form>
    </>
  )
}

export default AdditionalForm
