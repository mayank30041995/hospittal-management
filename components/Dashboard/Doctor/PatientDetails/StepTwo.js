import InputGroup from '../../../Input/InputGroup'
import {
  HideDisplay,
  HideDisplayMobile,
} from '../../../Register/register.styled'
import { Col, DatePicker, Form, Input, Row, Typography } from 'antd'
import React from 'react'
import Spacer from 'react-spacer'
const { Title, Paragraph, Text } = Typography
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import AdditionalServices from './AdditionalServices'
import { Radio } from 'antd'
import { useState } from 'react'
import { FormGroup } from '../../../Opinion/opinion.styled'
import { ButtonSubmit, FormGroupDate, TitleTop } from './patientDetail.styled'
import moment from 'moment'

function StepTwo({
  addStepCount,
  form,
  setForm,
  additionalServices,
  setAdditionalServices,
}) {
  const [value, setValue] = useState(1)

  const onChange = (e) => {
    if (value === 0) {
      setValue(e.target.value)
    } else {
      setValue(0)
    }
  }
  const handleChange = (checkedValues) => {
    if (checkedValues.length) {
      setAdditionalServices(checkedValues)
    }
  }
  const onFinish = (values) => {
    let payload = {
      ...values,
      servicesRequired: additionalServices,
    }

    setForm((form) => ({ ...form, ...payload }))

    if (value === 0) addStepCount((count) => count + 1)
  }

  return (
    <div>
      <HideDisplay>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <TitleTop level={3}>Additional Services</TitleTop>
          <TitleTop level={3}>2/3</TitleTop>
        </div>
      </HideDisplay>
      <HideDisplayMobile>
        <TitleTop level={2}>Additional Services</TitleTop>
      </HideDisplayMobile>

      <Spacer height={15} />
      <Col
        style={{ textAlign: 'start', fontFamily: 'Ralewayw', fontWeight: 500 }}
      >
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
            remember: true,
            preferredDateOfAppointment: form.preferredDateOfAppointment,
          }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="on"
        >
          <label htmlFor="dd-mm-yyyy">
            Preferred Date of Treatment{' '}
            <Col span={24} style={{ width: '100%' }}>
              <FormGroupDate
                name="preferredDateOfAppointment"
                rules={[
                  {
                    required: true,
                    message: 'Please Enter Preffered Date Of Treatment!',
                  },
                ]}
              >
                <DatePicker
                  format="MM/DD/YYYY"
                  type="date"
                  size="large"
                  style={{ width: '100%' }}
                  disabledDate={(current) => {
                    let customDate = moment().format('YYYY-MM-DD')
                    return current && current < moment(customDate, 'YYYY-MM-DD')
                  }}
                />
              </FormGroupDate>
            </Col>
          </label>
          <Spacer height={15} />
          <label htmlFor="services">
            Additional Services
            <Spacer height={15} />
            <AdditionalServices
              additionalServices={additionalServices}
              form={form}
              onChange={handleChange}
            />
          </label>
          <Spacer height={22} />
          <Col
            span={24}
            style={{
              background: '#F5F7F9',
              color: '#575757',
              padding: '10px 18px',
            }}
          >
            <span>Kindly note some services are chargeable</span>
          </Col>
          <Spacer height={15} />
          <Col span={24}>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={0}>
                &ensp;
                <span style={{ fontFamily: 'Inter' }}>
                  I cofirm that the information provided above is accurate and
                  based on my understanding and belief.
                </span>
              </Radio>
            </Radio.Group>
          </Col>

          <Spacer height={30} />

          <Col style={{ display: 'flex', justifyContent: 'space-between' }}>
            <ButtonSubmit
              colors="primary"
              size="large"
              icon={<ArrowLeftOutlined />}
              style={{ background: '#FFF', color: '#1677ff', width: '8em' }}
              onClick={(e) => addStepCount((count) => count - 1)}
            >
              PERVIOUS
            </ButtonSubmit>

            <ButtonSubmit
              colors="primary"
              size="large"
              type="primary"
              htmlType="submit"
              icon={<ArrowRightOutlined />}
              style={{ width: '8em' }}
            >
              CONTINUE
            </ButtonSubmit>
          </Col>
        </Form>
      </Col>
    </div>
  )
}

export default StepTwo
