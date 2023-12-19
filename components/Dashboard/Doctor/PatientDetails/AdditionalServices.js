import React from 'react'
import { Checkbox, Col, Row } from 'antd'
import Spacer from 'react-spacer'

const AdditionalServices = ({ additionalServices, form, onChange }) => {
  return (
    <div style={{ width: '30em' }}>
      <Checkbox.Group
        style={{
          display: 'inherit',
          padding: '3px',
          width: '35em',
        }}
        options={[
          { label: 'Translator Required', value: 'Translator Required' },
          { label: 'Hotel Booking', value: 'Hotel Booking' },
          { label: 'Local Transport', value: 'Local Transport' },
          {
            label: 'Local Sightseeing/Tourism',
            value: 'Local Sightseeing/Tourism',
          },
          {
            label: 'Tele Medicine',
            value: 'Tele Medicine',
          },
          {
            label: 'Airport pickup/drop',
            value: 'Airport pickup/drop',
          },
          {
            label: 'Pharmacy',
            value: 'Pharmacy',
          },
          {
            label: 'Diagnostic',
            value: 'Diagnostic',
          },
        ]}
        defaultValue={form.servicesRequired}
        onChange={(value) => onChange(value, additionalServices)}
      >
        <Row
          style={{ padding: '15px', fontFamily: 'Inter', fontWeight: 400 }}
          align="center"
        >
          <Col span={12}>
            <Checkbox value="Translator Required" checked>
              Translator Required
            </Checkbox>
            <Spacer width={12} height={12} />
          </Col>

          <Col span={12}>
            <Checkbox value="Hotel Booking">Hotel Booking</Checkbox>
          </Col>
          <Col span={12}>
            <Checkbox value="Local Transport">Local Transport </Checkbox>
          </Col>
          <Col span={12}>
            <Checkbox value="Local Sightseeing/Tourism">
              Local Sightseeing/Tourism
            </Checkbox>
          </Col>
          <Col span={18}>
            <Checkbox value="Tele Medicine">Tele Medicine</Checkbox>
          </Col>
          <Col span={12}>
            <Checkbox value="Airport pickup/drop">Airport pickup/drop</Checkbox>
          </Col>
          <Col span={12}>
            <Checkbox value="Pharmacy">Pharmacy</Checkbox>
          </Col>
          <Col span={12}>
            <Checkbox value="Diagnostic">Diagnostic</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    </div>
  )
}
export default AdditionalServices
