import { formatDate } from '@/components/helper/formatDate'
import { formTwo } from '@/redux/actions/appAction'
import { Col, Row, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import { useDispatch, useSelector } from 'react-redux'
import 'react-calendar/dist/Calendar.css'
import {
  CalenderBlockRow,
  ColumnContainer,
  ColumnContainer1,
  SlotGroup,
  TextPopGroup,
  TextPopGroupOne,
  TitleModel,
} from '../consult.styled'
import Spacer from 'react-spacer'
const { Title, Text } = Typography

function DateSlot({ ...props }) {
  const [value, onChange] = useState(new Date())
  const [timeSlot, setTimeSlot] = useState({
    id: 1,
    value: '9:00 am - 9:30 am',
  })
  const dispatch = useDispatch()
  useEffect(() => {
    // console.log('DateSlot', )
    const formData = {
      dateSlot: formatDate(value),
      timeSlot: '9:00AM',
      timeSlot: timeSlot.value,
    }

    dispatch(formTwo(formData))
  }, [value, timeSlot])

  return (
    <Row>
      {/* {JSON.stringify(value)} */}
      <CalenderBlockRow>
        <ColumnContainer1 span={12}>
          <Col span={20}>
            <TitleModel level={4}>
              Select Date & Time for your Tele-Consult appointment
            </TitleModel>
            <TextPopGroupOne type="secondary" strong>
              Select a date for the Tele-Consult
            </TextPopGroupOne>
            <Spacer height={8} />
          </Col>
          <Col>
            <Calendar
              minDate={new Date()}
              onChange={onChange}
              value={value}
              style={{ width: '90vh' }}
            />
          </Col>
        </ColumnContainer1>
        <ColumnContainer span={12}>
          <TextPopGroup type="secondary" strong>
            Select a time slot for the Tele-Consult
          </TextPopGroup>
          <SlotGroup
            timeSlot
            style={{
              background: timeSlot.id === 1 ? '#06509F' : '#fff',
              color: timeSlot.id === 1 && '#fff',
            }}
            onClick={() => setTimeSlot({ value: '9:00 - 9:30', id: 1 })}
          >
            9:00 am - 9:30 am
          </SlotGroup>
          <SlotGroup
            timeSlot
            style={{
              background: timeSlot.id === 2 ? '#06509F' : '#fff',
              color: timeSlot.id === 2 && '#fff',
            }}
            onClick={() => setTimeSlot({ value: '16:00 - 16:30', id: 2 })}
          >
            4:00pm - 4:30 pm
          </SlotGroup>
          <SlotGroup
            timeSlot
            style={{
              background: timeSlot.id === 3 ? '#06509F' : '#fff',
              color: timeSlot.id === 3 && '#fff',
            }}
            onClick={() => setTimeSlot({ value: '19:00 - 19:30', id: 3 })}
          >
            7:00pm - 7:30 pm
          </SlotGroup>
          <SlotGroup
            timeSlot
            style={{
              background: timeSlot.id === 4 ? '#06509F' : '#fff',
              color: timeSlot.id === 4 && '#fff',
            }}
            onClick={() => setTimeSlot({ value: '21:00 - 21:30', id: 4 })}
          >
            9:00pm - 9:30 pm
          </SlotGroup>
        </ColumnContainer>
      </CalenderBlockRow>
    </Row>
  )
}

export default DateSlot
