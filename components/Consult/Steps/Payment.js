import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd'
import Spacer from 'react-spacer'
import { useDispatch, useSelector } from 'react-redux'
import { step } from '@/redux/actions/appAction'
import { formOne } from '@/redux/actions/appAction'
import Router from 'next/router'
import { Collapse } from 'antd'
import { useState } from 'react'
import { saveBookingOrder } from '@/redux/actions/dashboardAction'
import PaymentSuccess from '../Modals/ApplicationSuccess'
const { Panel } = Collapse

const { Title, Text } = Typography

const Payment = ({ doctors, ...props }) => {
  const [active, setActive] = useState(['1'])
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const onFinish = (values) => {
    console.log('Success:', doctors, values, props, active.slice(-1).pop())
    let paymentType = active.slice(-1).pop() === '1' ? 'Debit' : 'UPI'
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
      dispatch(saveBookingOrder(bookingPayload))
    }
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const onChange = (key) => {
    if (key.length) {
      setActive([key.slice(-1).pop()])
    }
  }
  return (
    <div>
      <Col>
        <Title level={3} style={{ fontFamily: 'Inter' }}>
          Select a payment method
        </Title>
      </Col>

      <Spacer height={14} />

      <Row>
        <Col
          span={15}
          push={8}
          style={{ marginRight: '-2%', padding: '2%', background: '#F6FAFF' }}
        >
          {paymentMethod(active.slice(-1).pop())}
        </Col>

        <Col
          span={8}
          pull={15}
          style={{ padding: '2%', background: '#F6FAFF' }}
        >
          <Collapse
            style={{ background: '#ffffff' }}
            defaultActiveKey={['1']}
            activeKey={active}
            onChange={onChange}
            bordered={false}
            expandIconPosition="end"
            destroyInactivePanel={true}
          >
            <Panel
              header="Debit/credit Card"
              key="1"
              onChange={(e) => console.log('onChange', e)}
            ></Panel>
            <Panel header="UPI" key="2"></Panel>
            <Panel header="Net banking" key="3"></Panel>
            <Panel header="Mobile Wallets" key="4"></Panel>
          </Collapse>
        </Col>
      </Row>
    </div>
  )

  function paymentMethod(active) {
    switch (active) {
      case '1':
        return (
          <Col>
            <Form
              name="basic"
              labelCol={{
                span: 12,
              }}
              wrapperCol={{
                span: 24,
              }}
              style={{
                maxWidth: 800,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="on"
            >
              <label
                htmlFor="cardNo"
                name="cardNo"
                style={{
                  fontSize: '16px',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  margin: '5px',
                }}
              >
                Card Number
              </label>

              <Form.Item
                name="streetAddress"
                rules={[
                  {
                    required: true,
                    message: 'Please input your card number!',
                  },
                ]}
              >
                <Input size="large" placeholder="Enter your Card Number" />
              </Form.Item>
              <label
                htmlFor="cardName"
                name="cardName"
                style={{
                  fontSize: '16px',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  margin: '5px',
                }}
              >
                Name on the Card
              </label>

              <Form.Item
                name="houseNumber"
                rules={[
                  {
                    required: false,
                    message: 'Please input your card name',
                  },
                ]}
              >
                <Input size="large" placeholder="Full Name" />
              </Form.Item>
              <label
                htmlFor="expiry"
                name="expiry"
                style={{
                  fontSize: '16px',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  margin: '5px',
                }}
              >
                Expiry
              </label>
              <Row justify="space-between">
                <Col span={12} style={{ display: 'flex' }}>
                  <Col span={8}>
                    <Form.Item
                      name="month"
                      rules={[
                        {
                          required: false,
                          message: 'Please input month!',
                        },
                      ]}
                    >
                      <Input size="large" placeholder="MM" />
                    </Form.Item>
                  </Col>
                  <Spacer width={12} />
                  <Col span={8}>
                    <Form.Item
                      name="year"
                      rules={[
                        {
                          required: false,
                          message: 'Please input Year!',
                        },
                      ]}
                    >
                      <Input size="large" placeholder="YY" />
                    </Form.Item>
                  </Col>
                </Col>
                <Col span={8}>
                  <Form.Item
                    name="CVV"
                    rules={[
                      {
                        required: false,
                        message: 'Please input CVV!',
                      },
                    ]}
                  >
                    <Input size="large" placeholder="CVV" />
                  </Form.Item>
                </Col>
              </Row>
              <Col span={24}>
                <Form.Item
                  wrapperCol={{
                    // offset: 16,
                    span: 20,
                  }}
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    style={{ background: '#06509F', width: '120%' }}
                  >
                    Pay Now
                  </Button>
                </Form.Item>
              </Col>
            </Form>
          </Col>
        )
      case '2':
        return (
          <Col>
            <Form
              name="basic"
              labelCol={{
                span: 12,
              }}
              wrapperCol={{
                span: 24,
              }}
              style={{
                maxWidth: 800,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="on"
            >
              <label
                htmlFor="upi"
                name="upi"
                style={{
                  fontSize: '16px',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  margin: '5px',
                }}
              >
                UPI
              </label>
              <Form.Item
                name="streetAddress"
                rules={[
                  {
                    required: true,
                    message: 'Please input your card number!',
                  },
                ]}
              >
                <Input size="large" placeholder="Enter your UPI ID" />
              </Form.Item>
              <Col span={24}>
                <Form.Item
                  wrapperCol={{
                    // offset: 16,
                    span: 20,
                  }}
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    style={{ background: '#06509F', width: '120%' }}
                  >
                    Pay Now
                  </Button>
                </Form.Item>
              </Col>
            </Form>
          </Col>
        )
    }
  }
}

export default Payment
