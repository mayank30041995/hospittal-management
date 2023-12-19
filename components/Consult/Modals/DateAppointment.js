import { Button, Typography, Col, Modal, Row } from 'antd'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Date from './Date'
import { step } from '@/redux/actions/appAction'
import { ModalWrap } from '../consult.styled'
const { Title, Text } = Typography

const DateAppointment = ({ setDrawer = () => {}, ...props }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()
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
    setDrawer(false)
  }
  const handleCancel = () => {
    dispatch(step(1))
    setIsModalOpen(false)
    setDrawer(false)
  }
  return (
    <div>
      <Row>
        <Col>
          {isModalOpen && (
            <ModalWrap
              //   title="Select a Date and Time Slot for Appointment booking according to your preference"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              okText="Confirm"
              width={1100}
            >
              <Date {...props} />
            </ModalWrap>
          )}
        </Col>
      </Row>
    </div>
  )
}
export default DateAppointment
