import {
  ButtonSubmit,
  HideDisplayMobile,
  SelectGroupOther,
} from '../../../Register/register.styled'
import { Col, Form, Input, Row, Select, Typography } from 'antd'
import React, { useEffect, useState, useRef } from 'react'
import Spacer from 'react-spacer'
const { Title, Paragraph, Text } = Typography
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { HideDisplay } from '../../dashboardmobile.styled'
import { fetchJSON } from '@/utils/apiCalls'
import appConfig from '@/utils/appConfig'
import {
  fetchDefaultOptions,
  fetchSelectLookup,
} from '@/components/helper/fetchSelectLookup'
import { useDispatch, useSelector } from 'react-redux'
import { loadDefaultOptions } from '@/redux/actions/appAction'
import { useRouter } from 'next/router'
import {
  AutoCompleteArea,
  TextTop,
  TitleTop,
  TopContainerRow,
} from './patientDetail.styled'

function PreferredHospital({ addStepCount, userId, setForm, newProps }) {
  const [title, setTitle] = useState('')
  const [hospital, setHospital] = useState({})
  const [doctor, setDoctor] = useState({})
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const [hospitalResults, setHospitalResults] = useState([])
  const [doctorResults, setDoctorResults] = useState([])
  let {
    hospitalResultsFirst,
    doctorResultsFirst,
    hospitalResultsSecond,
    doctorResultsSecond,
    hospitalResultsThird,
    doctorResultsThird,
    hospitalResultsFourth,
    doctorResultsFourth,
    setHospitalResultsFirst,
    setDoctorResultsFirst,
    setHospitalResultsSecond,
    setDoctorResultsSecond,
    setHospitalResultsThird,
    setDoctorResultsThird,
    setHospitalResultsFourth,
    setDoctorResultsFourth,
  } = newProps
  const dispatch = useDispatch()
  const defaultSearchOptions = useSelector(
    (state) => state.app?.defaultSearchOptions
  )

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
    fetchJSON(`${appConfig.socketURL}/doctors`).then((value) => {
      if (value.length) {
        console.log('fetchJSON', value)
        const results = value.map((doctor) => ({
          label: doctor.Name,
          value: doctor.id,
        }))
        setLoading(false)
        setDoctorResults(results)
      }
    })
    dispatch(loadDefaultOptions())
  }, [])

  const handleChange = (value) => {
    console.log(`selected ${value}`)
    setTitle(value)
  }

  const onFinish = (values) => {
    let payload = {
      ...values,
      hospital: hospital,
      doctor: doctor,
    }
    console.log('Success:', payload)
    setForm((form) => ({ ...form, ...payload }))
    addStepCount((count) => count + 1)
  }

  const handleSearch = (e, value, option) => {
    switch (option) {
      case 'first':
        if (value.type === 'hospital') {
          setHospitalResultsFirst({ key: e?.key, value: e?.value })
        } else if (value.type === 'doctor') {
          setDoctorResultsFirst({ key: e?.key, value: e?.value })
        }
        return
      case 'second':
        if (value.type === 'hospital') {
          setHospitalResultsSecond({ key: e?.key, value: e?.value })
        } else if (value.type === 'doctor') {
          setDoctorResultsSecond({ key: e?.key, value: e?.value })
        }
        return
      case 'third':
        if (value.type === 'hospital') {
          setHospitalResultsThird({ key: e?.key, value: e?.value })
        } else if (value.type === 'doctor') {
          setDoctorResultsThird({ key: e?.key, value: e?.value })
        }
        return
      case 'fourth':
        if (value.type === 'hospital') {
          setHospitalResultsFourth({ key: e?.key, value: e?.value })
        } else if (value.type === 'doctor') {
          setDoctorResultsFourth({ key: e?.key, value: e?.value })
        }
        break
    }
  }
  return (
    <div>
      <HideDisplay>
        <div style={{ justifyContent: 'space-between' }}>
          <TitleTop level={4}>
            Preferred hospital(s), If any (Optional field)
          </TitleTop>
          <TextTop>
            Select Hospitals and Doctors for Four Different Opinions
          </TextTop>
        </div>
      </HideDisplay>
      <HideDisplayMobile>
        <TitleTop level={3}>
          Preferred hospital(s), If any (Optional field)
        </TitleTop>
        <TextTop>
          Select Hospitals and Doctors for Four Different Opinions
        </TextTop>
      </HideDisplayMobile>
      <Spacer height={15} />
      <Col style={{ textAlign: 'start' }}>
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
          }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="on"
        >
          <Row>
            <Row style={{ display: 'grid', fontFamily: 'Inter' }}>
              <Title level={5} style={{ color: '#0872E3' }}>
                First Option (optional)
              </Title>
              <TopContainerRow>
                <Col span={24}>
                  <label htmlFor="hospital" name="hospital">
                    Hospital
                    <Spacer height={5} />
                    <AutoCompleteArea
                      placeholder={'Select hospital'}
                      allowClear
                      // disabled={checkVisible(speciality, resultType)}
                      fetchOptions={(e) =>
                        fetchSelectLookup(e, { type: 'hospital' })
                      }
                      searchDispatch={(e) =>
                        handleSearch(e, { type: 'hospital' }, 'first')
                      }
                      datasourceitem={fetchDefaultOptions(
                        defaultSearchOptions,
                        'hospital'
                      )}
                      style={{
                        width: '100%',
                        border: '1px solid #a3caf4',
                        height: '62%',
                      }}
                      values={hospitalResultsFirst}
                    />
                  </label>
                </Col>

                <Col span={24}>
                  {' '}
                  <label htmlFor="Doctor">
                    Doctor
                    <Spacer height={5} />
                    <AutoCompleteArea
                      placeholder={'Select doctor'}
                      allowClear
                      // disabled={checkVisible(speciality, resultType)}
                      fetchOptions={(e) =>
                        fetchSelectLookup(e, { type: 'doctor' })
                      }
                      searchDispatch={(e) =>
                        handleSearch(e, { type: 'doctor' }, 'first')
                      }
                      datasourceitem={fetchDefaultOptions(
                        defaultSearchOptions,
                        'doctor'
                      )}
                      style={{
                        width: '100%',
                        border: '1px solid #a3caf4',
                        height: '62%',
                      }}
                      values={doctorResultsFirst}
                    />
                  </label>
                </Col>
              </TopContainerRow>{' '}
            </Row>
            <Spacer width={12} height={12} />
            <Row style={{ display: 'grid', fontFamily: 'Inter' }}>
              <Title level={5} style={{ color: '#0872E3' }}>
                Second Option (optional)
              </Title>

              <TopContainerRow>
                <Col span={24}>
                  <label htmlFor="hospital" name="hospital">
                    Hospital
                    <Spacer height={5} />
                    <AutoCompleteArea
                      placeholder={'Select hospital'}
                      allowClear
                      // disabled={checkVisible(speciality, resultType)}
                      fetchOptions={(e) =>
                        fetchSelectLookup(e, { type: 'hospital' })
                      }
                      searchDispatch={(e) =>
                        handleSearch(e, { type: 'hospital' }, 'second')
                      }
                      datasourceitem={fetchDefaultOptions(
                        defaultSearchOptions,
                        'hospital'
                      )}
                      style={{
                        width: '100%',
                        border: '1px solid #a3caf4',
                        height: '62%',
                      }}
                      values={hospitalResultsSecond}
                    />
                  </label>
                </Col>
                <Col span={24}>
                  {' '}
                  <label htmlFor="Doctor">
                    Doctor
                    <Spacer height={5} />
                    <AutoCompleteArea
                      placeholder={'Select doctor'}
                      allowClear
                      // disabled={checkVisible(speciality, resultType)}
                      fetchOptions={(e) =>
                        fetchSelectLookup(e, { type: 'doctor' })
                      }
                      searchDispatch={(e) =>
                        handleSearch(e, { type: 'doctor' }, 'second')
                      }
                      datasourceitem={fetchDefaultOptions(
                        defaultSearchOptions,
                        'doctor'
                      )}
                      style={{
                        width: '100%',
                        border: '1px solid #a3caf4',
                        height: '62%',
                      }}
                      values={doctorResultsSecond}
                    />
                  </label>
                </Col>
              </TopContainerRow>
            </Row>
          </Row>

          <Row>
            <Row style={{ display: 'grid', fontFamily: 'Inter' }}>
              <Title level={5} style={{ color: '#0872E3' }}>
                Third Option (optional)
              </Title>
              <TopContainerRow>
                <Col span={24}>
                  <label htmlFor="hospital" name="hospital">
                    Hospital
                    <Spacer height={5} />
                    <AutoCompleteArea
                      placeholder={'Select hospital'}
                      allowClear
                      // disabled={checkVisible(speciality, resultType)}
                      fetchOptions={(e) =>
                        fetchSelectLookup(e, { type: 'hospital' })
                      }
                      searchDispatch={(e) =>
                        handleSearch(e, { type: 'hospital' }, 'third')
                      }
                      datasourceitem={fetchDefaultOptions(
                        defaultSearchOptions,
                        'hospital'
                      )}
                      style={{
                        width: '100%',
                        border: '1px solid #a3caf4',
                        height: '62%',
                      }}
                      values={hospitalResultsThird}
                    />
                  </label>
                </Col>
                <Col span={24}>
                  {' '}
                  <label htmlFor="Doctor">
                    Doctor
                    <Spacer height={5} />
                    <AutoCompleteArea
                      placeholder={'Select doctor'}
                      allowClear
                      // disabled={checkVisible(speciality, resultType)}
                      fetchOptions={(e) =>
                        fetchSelectLookup(e, { type: 'doctor' })
                      }
                      searchDispatch={(e) =>
                        handleSearch(e, { type: 'doctor' }, 'third')
                      }
                      datasourceitem={fetchDefaultOptions(
                        defaultSearchOptions,
                        'doctor'
                      )}
                      style={{
                        width: '100%',
                        border: '1px solid #a3caf4',
                        height: '62%',
                      }}
                      values={doctorResultsThird}
                    />
                  </label>
                </Col>
              </TopContainerRow>
            </Row>
            <Spacer width={12} />
            <Row style={{ display: 'grid', fontFamily: 'Inter' }}>
              <Title level={5} style={{ color: '#0872E3' }}>
                Fourth Option (optional)
              </Title>
              <TopContainerRow>
                <Col span={24}>
                  <label htmlFor="hospital" name="hospital">
                    Hospital
                    <Spacer height={5} />
                    <AutoCompleteArea
                      placeholder={'Select hospital'}
                      allowClear
                      // disabled={checkVisible(speciality, resultType)}
                      fetchOptions={(e) =>
                        fetchSelectLookup(e, { type: 'hospital' })
                      }
                      searchDispatch={(e) =>
                        handleSearch(e, { type: 'hospital' }, 'fourth')
                      }
                      datasourceitem={fetchDefaultOptions(
                        defaultSearchOptions,
                        'hospital'
                      )}
                      style={{
                        width: '100%',
                        border: '1px solid #a3caf4',
                        height: '62%',
                      }}
                      values={hospitalResultsFourth}
                    />
                  </label>
                </Col>
                <Col span={24}>
                  {' '}
                  <label htmlFor="Doctor">
                    Doctor
                    <Spacer height={5} />
                    <AutoCompleteArea
                      placeholder={'Select doctor'}
                      allowClear
                      // disabled={checkVisible(speciality, resultType)}
                      fetchOptions={(e) =>
                        fetchSelectLookup(e, { type: 'doctor' })
                      }
                      searchDispatch={(e) =>
                        handleSearch(e, { type: 'doctor' }, 'fourth')
                      }
                      datasourceitem={fetchDefaultOptions(
                        defaultSearchOptions,
                        'doctor'
                      )}
                      style={{
                        width: '100%',
                        border: '1px solid #a3caf4',
                        height: '62%',
                      }}
                      values={doctorResultsFourth}
                    />
                  </label>
                </Col>
              </TopContainerRow>{' '}
            </Row>
          </Row>

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

export default PreferredHospital
