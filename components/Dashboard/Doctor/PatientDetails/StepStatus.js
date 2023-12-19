import React from 'react'
import { Steps } from 'antd'
const description = ''
const StepStatus = ({ step }) => (
  <Steps
    direction="vertical"
    current={step}
    items={[
      {
        title: 'Patient’s Details',
        description,
      },
      {
        title: 'Additional Services',
        description,
      },
      {
        title: 'Submit',
        description,
      },
    ]}
  />
)
export default StepStatus
