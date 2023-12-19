import { Button, Typography, Col, Modal, Row } from 'antd'
import { useEffect } from 'react'
import { useState } from 'react'
import { CheckCircleOutlined, UserOutlined } from '@ant-design/icons'
import { step } from '@/redux/actions/appAction'
import { useDispatch } from 'react-redux'
import { StatusModel } from '../consult.styled'

const { Title, Text } = Typography

const PaymentSuccess = ({ ...props }) => {
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)
  useEffect(() => {
    if (!isModalOpen) {
      setIsModalOpen(true)
    }

    setTimeout(() => {
      setIsModalOpen(false)
    }, [3000])
  }, [])
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    dispatch(step(1))
    setIsModalOpen(false)
  }
  return (
    <div>
      <Row>
        <Col style={{ display: 'grid' }}>
          {isModalOpen && (
            <StatusModel
              //   title="Select a Date and Time Slot for Appointment booking according to your preference"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              closable={false}
              okText="SAVE"
              footer={null}
              width={750}
            >
              <Col
                style={{
                  margin: '25px',
                  padding: '0 15%',
                  display: 'grid',
                  textAlign: 'center',
                  placeItems: 'center',
                }}
              >
                <CheckCircleOutlined
                  style={{ fontSize: '35px', color: '#1286F1' }}
                />
                <Text
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    color: '#1286F1',
                    padding: '12px',
                    fontSize: '18px',
                  }}
                >
                  Congratulations! Your Appointment Request has been recieved
                </Text>
              </Col>
            </StatusModel>
          )}
        </Col>
      </Row>
    </div>
  )
}
export default PaymentSuccess
