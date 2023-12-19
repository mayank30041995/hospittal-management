import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd'
import Spacer from 'react-spacer'
import { formThree, step } from '@/redux/actions/appAction'
import { useDispatch, useSelector } from 'react-redux'
import { FormGroup } from '../consult.styled'
const { Title, Text } = Typography

const BillingForm = ({ ...props }) => {
  const dispatch = useDispatch()
  const onFinish = (values) => {
    const data = { ...values }
    dispatch(step(4))

    if (!_.isNull(data)) {
      console.log('Success Billing address:', data, props)
      dispatch(formThree(data))
    }
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed Billing address:', errorInfo)
  }
  return (
    <Row justify="center">
      <Col>
        <Row justify="center">
          <Col>
            <Title level={4} style={{ fontFamily: 'Inter' }}>
              ADD BILLING ADDRESS
            </Title>
          </Col>
        </Row>
        <Spacer height={14} />
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
          <Row justify="space-between">
            <Col span={11}>
              <FormGroup
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: 'Please input your first name!',
                  },
                ]}
              >
                <Input size="large" placeholder="First Name" />
              </FormGroup>
            </Col>

            <Col span={12}>
              <FormGroup
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: 'Please input your lastName!',
                  },
                ]}
              >
                <Input size="large" placeholder="Last Name" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup
            name="streetAddress"
            rules={[
              {
                required: true,
                message: 'Please input your street address!',
              },
            ]}
          >
            <Input size="large" placeholder="Street Address" />
          </FormGroup>
          <FormGroup
            name="houseNumber"
            rules={[
              {
                required: false,
                message: 'Please input your street house flat number!',
              },
            ]}
          >
            <Input size="large" placeholder="House/Flat Number" />
          </FormGroup>

          <Row justify="space-between">
            <Col span={11}>
              <FormGroup
                name="zip"
                rules={[
                  {
                    required: false,
                    message: 'Please input your zip!',
                  },
                ]}
              >
                <Input size="large" placeholder="Zip Code" />
              </FormGroup>
            </Col>

            <Col span={12}>
              <FormGroup
                name="state"
                rules={[
                  {
                    required: false,
                    message: 'Please input your state!',
                  },
                ]}
              >
                <Input size="large" placeholder="State" />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup
            name="country"
            rules={[
              {
                required: false,
                message: 'Please input your country!',
              },
            ]}
          >
            <Input size="large" placeholder="Country" />
          </FormGroup>
          <Row justify="end">
            <FormGroup
              wrapperCol={{
                // offset: 20,
                span: 10,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                style={{ background: '#06509F' }}
              >
                SAVE
              </Button>
            </FormGroup>
          </Row>
        </Form>
      </Col>
    </Row>
  )
}
export default BillingForm
