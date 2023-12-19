import {
  ButtonSubmit,
  HideDisplayMobile,
  SelectGroupOther,
} from '../../../Register/register.styled'
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  Typography,
  Upload,
  message,
} from 'antd'
import React from 'react'
import Spacer from 'react-spacer'
const { Title, Paragraph, Text } = Typography
import {
  ArrowLeftOutlined,
  FileOutlined,
  PlusOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons'
import SelectGroup from '../../../Select/SelectGroup'
import { FormGroup } from '../../../Opinion/opinion.styled'
import {
  ReportAddText,
  SelectAreaGlobal,
  SelectAreaGlobal2,
} from '../../dashboard.styled'
import { useState } from 'react'
import { HideDisplay } from '../../dashboardmobile.styled'
import { useDispatch, useSelector } from 'react-redux'
import { loadDefaultOptions } from '@/redux/actions/appAction'
import { AutoCompleteArea, TitleTop } from './patientDetail.styled'
import { useRouter } from 'next/router'
import { loadApp, postMedicalReport } from '@/redux/actions/dashboardAction'
import axios from 'axios'
import appConfig from '@/utils/appConfig'
import moment from 'moment'
import {
  fetchDefaultOptions,
  fetchSelectLookup,
} from '@/components/helper/fetchSelectLookup'
import { useEffect } from 'react'

function StepOne({
  addStepCount,
  userId,
  form,
  setForm,
  condition,
  setCondition,
}) {
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()
  const defaultSearchOptions = useSelector(
    (state) => state.app?.defaultSearchOptions
  )

  const { medicalReport } = useSelector((state) => state.dashboard)

  const handleChange = (value) => {
    // console.log(`selected ${value}`)
    setTitle(value)
  }

  const onFinish = (values) => {
    // console.log('Success:', { ...values, title: title })
    let payload = {
      ...values,
      title: title,
      condition: condition.key,
    }

    setForm((form) => ({ ...form, ...payload }))
    addStepCount((count) => count + 1)
  }

  const handleSearch = (e, value) => {
    if (value.type === 'condition' && e?.key) {
      setCondition({ key: e?.key, value: e?.value })
    } else if (value.type === 'doctor' && e?.key) {
      setDoctor({ key: e?.key, value: e?.value })
    }
  }

  useEffect(() => {
    dispatch(loadDefaultOptions())
    dispatch(loadApp())
  }, [])

  useEffect(() => {
    if (medicalReport && medicalReport.length > 0) {
      console.log('medicalReport', medicalReport)
      let ids = medicalReport.slice(-1)?.map((report) => report.id)
      setForm((form) => ({ ...form, ...{ test_reports: ids } }))
      // message.success(`file uploaded successfully`)
    }
  }, [medicalReport])

  const props = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        let formData = new FormData()
        let file_size = info.file?.size || 0
        let file_name = info.file?.name || ''
        let file_type = info.file?.type || ''
        formData.append('files', info.file.originFileObj)

        if (file_size !== 0) {
          setLoading(true)
          axios
            .post(`${appConfig.socketURL}/upload`, formData)
            .then((uploads) => {
              setLoading(false)
              if (uploads.data.length) {
                // console.log('file_payloads', uploads.data[0]._id)
                const report_id = uploads.data[0]._id
                const file_payloads = {
                  ReportName: file_name.split('.').pop(),
                  Date: moment().format(),
                  Tests: '',
                  user: userId._id,
                  Report: report_id,
                }
                console.log('file_payloads', file_payloads)
                dispatch(postMedicalReport(file_payloads))
              }
            })
            .catch((error) => {
              setLoading(false)
              message.error(`file upload failed.`)
            })
        }
      }
      // if (info.file.status === 'done') {
      //   message.success(`${info.file.name} file uploaded successfully`)
      // } else if (info.file.status === 'error') {
      //   // message.error(`${info.file.name} file upload failed.`)
      // }
    },
  }
  return (
    <div>
      <HideDisplay>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <TitleTop level={3}>Patient’s Details</TitleTop>
          <TitleTop level={3}>1/3</TitleTop>
        </div>
      </HideDisplay>
      <HideDisplayMobile>
        <TitleTop level={2}>Patient’s Details</TitleTop>
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
            fname: form.fname || '',
            country: form.country || '',
            age: form.age || '',
            passport: form.passport || '',
            health: form.health || '',
            dob: form.dob || '',
          }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="on"
        >
          <Row>
            <Col span={6}>
              <SelectAreaGlobal2
                size="large"
                defaultValue={form.title || 'Title'}
                onChange={handleChange}
                style={{
                  width: '100%',

                  // background: '#FFF',
                }}
                options={[
                  {
                    value: 'Mr',
                    label: 'Mr',
                  },
                  {
                    value: 'Sir',
                    label: 'Sir',
                  },
                  {
                    value: 'Mrs',
                    label: 'Mrs',
                  },
                  {
                    value: 'Miss',
                    label: 'Miss',
                  },
                  {
                    value: 'Dr',
                    label: 'Dr',
                  },
                ]}
              />
            </Col>

            <Col span={18}>
              <FormGroup
                name="fname"
                rules={[
                  {
                    required: true,
                    message: 'Please Enter Patient`s Name!',
                  },
                ]}
              >
                <Input size="large" placeholder="Patient’s Name*" />
              </FormGroup>{' '}
            </Col>
          </Row>
          <Spacer height="8%" />
          {/* <LabelForm htmlFor="name" name="name">
          Name
        </LabelForm> */}
          <label htmlFor="patientCountry">
            Patient’s Country
            <FormGroup
              name="country"
              rules={[
                {
                  required: false,
                  message: 'Please Enter Country!',
                },
              ]}
            >
              <Input size="large" placeholder="Select a Country*" />
            </FormGroup>
          </label>
          <Row>
            <Col span={6}>
              <label htmlFor="age">
                Patient’s Age
                <FormGroup
                  name="age"
                  rules={[
                    {
                      required: false,
                      message: 'Please Enter Age!',
                    },
                  ]}
                >
                  <Input size="large" placeholder="age*" />
                </FormGroup>
              </label>
            </Col>
            <Col span={18}>
              <label htmlFor="age">
                Date of birth
                <FormGroup
                  name="dob"
                  rules={[
                    {
                      required: true,
                      message: 'Please Enter Age!',
                    },
                  ]}
                >
                  <Input type="date" size="large" />
                </FormGroup>
              </label>
            </Col>
          </Row>

          <Spacer height={10} />
          <label htmlFor="Passport">
            Passport Number (Optional)
            <FormGroup
              name="passport"
              rules={[
                {
                  required: false,
                  message: 'Please Enter Passport Number!',
                },
              ]}
            >
              <Input size="large" placeholder="Patient’s Passport Number*" />
            </FormGroup>
          </label>

          <label htmlFor="condition">
            Health condition (Optional)
            <Spacer height={5} />
            <AutoCompleteArea
              placeholder={'Search health conditon!'}
              allowClear
              // disabled={checkVisible(speciality, resultType)}
              fetchOptions={(e) => fetchSelectLookup(e, { type: 'condition' })}
              searchDispatch={(e) => handleSearch(e, { type: 'condition' })}
              datasourceitem={fetchDefaultOptions(
                defaultSearchOptions,
                'condition'
              )}
              values={condition}
              style={{
                width: '100%',
                border: '1px solid #a3caf4',
                height: '62%',
              }}
            />
          </label>

          <Spacer height={10} />
          <Col
            span={24}
            style={{
              background: '#F5F7F9',
              color: '#575757',
              padding: '10px 18px',
            }}
          >
            <ReportAddText>
              <Upload {...props}>
                <FileOutlined /> &nbsp; Attach Reports
              </Upload>
            </ReportAddText>
          </Col>
          <Spacer height={15} />
          <Col style={{ display: 'flex', justifyContent: 'space-between' }}>
            <ButtonSubmit
              colors="primary"
              size="large"
              icon={<ArrowLeftOutlined />}
              style={{ background: '#FFF', color: '#1677ff', width: '8em' }}
              onClick={(e) =>
                router.push(
                  `/dashboard/${userId.type}/${userId.id}`,
                  undefined,
                  {
                    shallow: true,
                  }
                )
              }
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
              loading={loading}
            >
              NEXT
            </ButtonSubmit>
          </Col>
        </Form>
      </Col>
    </div>
  )
}

export default StepOne
