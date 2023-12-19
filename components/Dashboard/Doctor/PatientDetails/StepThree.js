import { Col, Radio, Row, Typography, message } from 'antd'
import React, { useState } from 'react'
import Spacer from 'react-spacer'
import { CheckCircleFilled } from '@ant-design/icons'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { fetchJSON } from '@/utils/apiCalls'
import appConfig from '@/utils/appConfig'

import {
  HideDisplay,
  HideDisplayMobile,
} from '../../../Register/register.styled'
import {
  ButtonSubmit,
  TitleTop,
  TopContainer,
  TopContainerNext,
  TopContainerOuter,
} from './patientDetail.styled'
import { Router, useRouter } from 'next/router'
import moment from 'moment'
let { Title, Text, Paragraph } = Typography

function StepThree({ addStepCount, formData, userId, newProps, condition }) {
  const [value, setValue] = useState(1)
  const router = useRouter()
  const onChange = (e) => {
    if (value === 0) {
      setValue(e.target.value)
    } else {
      setValue(0)
    }
  }
  let {
    hospitalResultsFirst,
    hospitalResultsSecond,
    hospitalResultsThird,
    hospitalResultsFourth,
    doctorResultsFirst,
    doctorResultsSecond,
    doctorResultsThird,
    doctorResultsFourth,
  } = newProps
  let {
    age,
    country,
    fname,
    health,
    passport,
    preferredDateOfAppointment,
    servicesRequired,
    title,
    doctor,
    hospital,
    test_reports,
    dob,
  } = formData

  const handleSubmit = () => {
    let payload = {
      age,
      country,
      fname,
      ...(doctor.value && { doctor: doctor.key }),
      ...(hospital.value && { hospital: hospital.key }),
      preferredDateOfAppointment,
      services: servicesRequired,
      partner: userId.id,
      user: userId.id,
      ...(condition?.key && { condition: condition.key }),
      type: 'patient',
      title,
      ...(test_reports?.length > 0 && { test_reports: [...test_reports] }),
    }
    fetchJSON(`${appConfig.socketURL}/profiles`, {
      method: 'POST',
      body: JSON.stringify({
        ...payload,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    }).then((value) => {
      // console.log('value', value)
      if (value.status !== 200) {
        message.success('something wents wrong, please try again letter!')
      } else {
        message.success('Patient`s added successfully!')
      }
    })
    if (userId) {
      router.push(`/dashboard/${userId.type}/${userId.id}`)
    }
  }
  return (
    <div>
      <TopContainerOuter>
        <HideDisplay>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <TitleTop level={3}>Summary</TitleTop>
            <TitleTop level={3}>3/3</TitleTop>
          </div>
        </HideDisplay>
        <HideDisplayMobile>
          <TitleTop level={2}>Summary</TitleTop>
        </HideDisplayMobile>

        <Spacer height={12} />
      </TopContainerOuter>
      <TopContainer>
        <Col span={24}>
          <Text
            style={{ color: '#06509F', fontWeight: 500, fontFamily: 'Inter' }}
          >
            Selected Hospital :{' '}
            <span style={{ color: '#000' }}>
              {hospitalResultsFirst?.value ||
                hospitalResultsSecond?.value ||
                hospitalResultsThird?.value ||
                hospitalResultsFourth?.value ||
                ''}
            </span>
          </Text>
          <Spacer height={12} />
        </Col>

        <Col span={24}>
          <Text
            style={{ color: '#06509F', fontWeight: 500, fontFamily: 'Inter' }}
          >
            Health condition :{' '}
            <span style={{ color: '#000' }}>{condition?.value || '-'}</span>
          </Text>
          <Spacer height={12} />
        </Col>

        <Col span={24}>
          <Text
            style={{ color: '#06509F', fontWeight: 500, fontFamily: 'Inter' }}
          >
            Preferred Doctor (If any) :{' '}
            <span style={{ color: '#000' }}>
              {doctorResultsFirst?.value ||
                doctorResultsSecond?.value ||
                doctorResultsThird?.value ||
                doctorResultsFourth?.value ||
                ''}
            </span>
          </Text>
          <Spacer height={12} />
        </Col>

        <Col span={24}>
          <Text
            style={{ color: '#06509F', fontWeight: 500, fontFamily: 'Inter' }}
          >
            UHID: <span style={{ color: '#000' }}>{passport || ''}</span>
          </Text>
          <Spacer height={12} />
        </Col>
        <Col span={24}>
          <Text
            style={{ color: '#06509F', fontWeight: 500, fontFamily: 'Inter' }}
          >
            Patient’s Name : <span style={{ color: '#000' }}>{fname}</span>
          </Text>
          <Spacer height={12} />
        </Col>

        <Col span={12}>
          <Text
            style={{ color: '#06509F', fontWeight: 500, fontFamily: 'Inter' }}
          >
            Age : <span style={{ color: '#000' }}>{age}</span>
          </Text>
          <Spacer height={12} />
        </Col>
        <Col span={12}>
          <Text
            style={{ color: '#06509F', fontWeight: 500, fontFamily: 'Inter' }}
          >
            Date of Birth : <span style={{ color: '#000' }}>{dob || '-'}</span>
          </Text>
          <Spacer height={12} />
        </Col>
        <Col span={12}>
          <Text
            style={{ color: '#06509F', fontWeight: 500, fontFamily: 'Inter' }}
          >
            Gender : <span style={{ color: '#000' }}></span>
          </Text>
          <Spacer height={12} />
        </Col>
        <Col span={12}>
          <Text
            style={{ color: '#06509F', fontWeight: 500, fontFamily: 'Inter' }}
          >
            Passport Number : <span style={{ color: '#000' }}>{passport}</span>
          </Text>
          <Spacer height={12} />
        </Col>
        <Col span={24}>
          <Text
            style={{ color: '#06509F', fontWeight: 500, fontFamily: 'Inter' }}
          >
            Country : <span style={{ color: '#000' }}>{country}</span>
          </Text>
          <Spacer height={12} />
        </Col>
        <Col span={24}>
          <Text
            style={{ color: '#06509F', fontWeight: 500, fontFamily: 'Inter' }}
          >
            Date of Treatment :{' '}
            <span style={{ color: '#000' }}>
              {moment(preferredDateOfAppointment).format('YYYY-MM-DD')}
            </span>
          </Text>
          <Spacer height={12} />
        </Col>
        <Col span={24}>
          <Text
            style={{ color: '#06509F', fontWeight: 500, fontFamily: 'Inter' }}
          >
            Additional Services:
            <Spacer height={6} />
            <Row>
              {servicesRequired.map((item, i) => (
                <Col span={12} key={i}>
                  <CheckCircleFilled />
                  &emsp;
                  <span style={{ color: '#000' }}>{item}</span>
                </Col>
              ))}
            </Row>
          </Text>
          <Spacer height={12} />
        </Col>
      </TopContainer>

      <TopContainerNext>
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
        </Col>{' '}
        <Spacer height={15} />
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
            onClick={handleSubmit}
            style={{ width: '8em' }}
          >
            SUBMIT
          </ButtonSubmit>
        </Col>
      </TopContainerNext>
      <Spacer height={60} />
    </div>
  )
}

export default StepThree
