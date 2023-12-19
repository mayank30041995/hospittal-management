import { Button, Form, Col, Input, Row, Typography, message } from 'antd'
import Spacer from 'react-spacer'
import { useDispatch, useSelector } from 'react-redux'
import { FormGroup, LabelForm, OpinionWrap } from './opinion.styled'
import { ButtonSubmit, Label } from '../Consult/consult.styled'
import { saveBookingOrder } from '@/redux/actions/dashboardAction'
import BillingSuccessModel from './BillingSuccessModel'
import { useState } from 'react'
import { HideDisplayContents } from '../Dashboard/dashboardmobile.styled'
import { UploadOutlined, DeleteOutlined } from '@ant-design/icons'
import { AccptedParagraph } from '../Dashboard/dashboard.styled'

const { Title, Text } = Typography

const OpinionFormGroup = ({ user, doctors, ...props }) => {
  const dispatch = useDispatch()
  const [status, setStatus] = useState(false)
  const [bookingOrders, setBookingOrders] = useState({})
  const onFinish = (values) => {
    // console.log('Success:', values, props)
    let paymentType = 'Free Opinion'
    let {
      id,
      Name,
      Pictures,
      Address,
      Experience,
      Department,
      Phone,
      Price,
      specialities,
      hospital,
      googleRating = 5,
    } = doctors.length && doctors[0]

    let { dateSlot, timeSlot } = props.formTwo

    const bookingPayload = {
      PaymentType: paymentType,
      ClientPhone: '54455645465',
      CardLast: 'a2',
      user: user.id,
      ClientEmail: 'abc@gmail.in',
      Status: 'Progress',
      CardBrand: paymentType,
      FeeStatus: 'pending',
      // prescription: '646a1c5f28fee372cf091a5b',
      Bookings: [
        {
          DrPhone: Phone,
          BookingTime: new Date().toISOString(),
          DrID: id,
          DrDesignation: Department,
          BookingStatus: 'Waiting',
          DrImage: Pictures[0].url,
          BookingType: 'Progress',
          DrName: Name,
          DrCity: Address,
        },
      ],
      NoBookings: 1,
      ordertime: new Date().toISOString(),
      TotalAmount: Price?.toString() || '0',
      doctorSlug: Name,
      doctor: Name,
    }

    if (user.id) {
      console.log('bookingPayload', bookingPayload)
      setBookingOrders(values)
      dispatch(saveBookingOrder(bookingPayload))
      setStatus(true)
    } else {
      message.error('Could`t submit, Please Login')
    }
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <OpinionWrap>
      <BillingSuccessModel
        status={status}
        setStatus={setStatus}
        doctors={doctors}
        bookingOrders={bookingOrders}
      />
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
        onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        <LabelForm htmlFor="name" name="name">
          Name
        </LabelForm>
        <FormGroup
          name="patientName"
          rules={[
            {
              required: true,
              message: 'Please enter patientName!',
            },
          ]}
        >
          <Input size="large" placeholder="Enter Patient’s Name here" />
        </FormGroup>
        <Row justify="space-between">
          <Col span={8}>
            <LabelForm htmlFor="age" name="age">
              Age
            </LabelForm>
            <FormGroup
              name="age"
              rules={[
                {
                  required: true,
                  message: 'Please input patient Age!',
                },
              ]}
            >
              <Input size="large" placeholder="Patient’s Age" />
            </FormGroup>
          </Col>

          <Col span={15}>
            <LabelForm htmlFor="phone" name="phone">
              Phone Number
            </LabelForm>
            <FormGroup
              name="phone"
              rules={[
                {
                  required: false,
                  message: 'Please input phone number!',
                },
              ]}
            >
              <Input size="large" placeholder="Phone Number" />
            </FormGroup>
          </Col>
        </Row>
        <LabelForm htmlFor="country" name="country">
          Location
        </LabelForm>
        <FormGroup
          name="country"
          rules={[
            {
              required: false,
              message: 'Please input country!',
            },
          ]}
        >
          <Input size="large" placeholder="Country" />
        </FormGroup>
        <HideDisplayContents>
          <Spacer height={12} />
          <Label>
            {/* <input type="file" name="file" /> */}
            <UploadOutlined
              size="large"
              style={{ fontSize: '23px', margin: '2px' }}
            />
            <Typography.Paragraph strong style={{ fontSize: '12px' }}>
              UPLOAD YOUR REPORTS HERE
            </Typography.Paragraph>
          </Label>
          <AccptedParagraph>
            Accepted file types .doc & .pdf only
          </AccptedParagraph>
          <Spacer height={12} />
        </HideDisplayContents>
        <Spacer height={16} />
        <Col align="center">
          <ButtonSubmit
            type="primary"
            htmlType="submit"
            size="large"
            style={{
              background: '#19458B',
              borderRadius: '5px',
              fontWeight: 500,
            }}
          >
            GET FREE OPINION
          </ButtonSubmit>
        </Col>
      </Form>
      <Spacer height={12} />
    </OpinionWrap>
  )
}
export default OpinionFormGroup
