import { Button, Typography, Col, Modal, Row } from 'antd'
import { useEffect } from 'react'
import { useState } from 'react'
import Date from './Date'
import BillingForm from '../Steps/BillingForm'
import { step } from '@/redux/actions/appAction'
import { useDispatch, useSelector } from 'react-redux'

const { Title, Text } = Typography

const BillingAddress = ({ ...props }) => {
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)
  useEffect(() => {
    if (!isModalOpen) {
      setIsModalOpen(true)
    }
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
        <Col>
          {isModalOpen && (
            <Modal
              //   title="Select a Date and Time Slot for Appointment booking according to your preference"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              okText="SAVE"
              footer={null}
              width={750}
            >
              <BillingForm {...props} />
            </Modal>
          )}
        </Col>
      </Row>
    </div>
  )
}
export default BillingAddress
