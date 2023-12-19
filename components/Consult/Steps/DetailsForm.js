import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd'
import Spacer from 'react-spacer'
import { useDispatch, useSelector } from 'react-redux'
import { step } from '@/redux/actions/appAction'
import { formOne } from '@/redux/actions/appAction'
import Router from 'next/router'
import { UploadOutlined, DeleteOutlined } from '@ant-design/icons'
import {
  ButtonProceed,
  FillTitle,
  FormGroup,
  Label,
  StepsText,
} from '../consult.styled'
import {
  HideDisplay,
  HideDisplayContents,
  HideDisplayMobile,
} from '../../Dashboard/dashboardmobile.styled'
import { AccptedParagraph, FormLabel } from '../../Dashboard/dashboard.styled'
import { useRouter } from 'next/router'
const { Title, Text } = Typography

const DetailsForm = ({ isLoggedIn }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const onFinish = (values) => {
    console.log('Success:', values)
    if (isLoggedIn) {
      dispatch(step(2))
      dispatch(formOne(values))
    } else {
      localStorage.setItem('path', router.asPath)
      Router.push({
        pathname: '/login',
      })
    }
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div>
      <Col>
        <StepsText type="secondary" strong>
          STEP 1 OF 3
        </StepsText>
        <FillTitle level={3}>Fill in the Details</FillTitle>
      </Col>
      <Col>
        <Text type="secondary" strong style={{ fontFamily: 'Inter' }}>
          Fill The Patient’s Details
        </Text>
      </Col>
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
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        <HideDisplay>
          <FormLabel htmlFor="patientName" name="patientName">
            Name
          </FormLabel>
        </HideDisplay>
        <FormGroup
          name="patientName"
          rules={[
            {
              required: true,
              message: 'Please enter patient name!',
            },
          ]}
        >
          <Input size="large" placeholder="Patient Name" />
        </FormGroup>
        <Row justify="space-between">
          <Col span={11}>
            <HideDisplay>
              <FormLabel htmlFor="age" name="age">
                Age
              </FormLabel>
            </HideDisplay>
            <FormGroup
              name="age"
              rules={[
                {
                  required: true,
                  message: 'Please enter patient Age!',
                },
              ]}
            >
              <Input size="large" placeholder="Patient’s Age" />
            </FormGroup>
          </Col>

          <Col span={12}>
            <HideDisplay>
              <FormLabel htmlFor="phone" name="phone">
                Phone
              </FormLabel>
            </HideDisplay>
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
        <HideDisplay>
          <FormLabel htmlFor="location" name="location">
            Location
          </FormLabel>
        </HideDisplay>
        <FormGroup
          name="location"
          rules={[
            {
              required: false,
              message: 'Please input location!',
            },
          ]}
        >
          <Input size="large" placeholder="Location" />
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

        <HideDisplay>
          <Row justify="space-between">
            <Spacer height={12} />
            <Col span={24}>
              <ButtonProceed type="primary" htmlType="submit" size="large">
                CONFIRM & PROCEED
              </ButtonProceed>
            </Col>
            <Spacer height={12} />
          </Row>
        </HideDisplay>
        <HideDisplayMobile>
          <Row justify="end">
            <FormGroup
              wrapperCol={{
                // offset: 16,
                span: 20,
              }}
            >
              <ButtonProceed type="primary" htmlType="submit" size="large">
                CONFIRM & PROCEED
              </ButtonProceed>
            </FormGroup>
          </Row>
        </HideDisplayMobile>
      </Form>
    </div>
  )
}
export default DetailsForm
