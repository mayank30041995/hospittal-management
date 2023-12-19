import React from 'react'
import Steps from './Steps'
import { CardWrapper } from '@/pages/login'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import { useState } from 'react'
import StepThree from './StepThree'
import { Block } from './patientDetail.styled'
import { useRouter } from 'next/router'
import PreferredHospital from './PreferredHospital'
function PatientDetails({ authId }) {
  const [stepCount, setStepCount] = useState(0)
  const [formData, setFormData] = useState({})
  const [condition, setCondition] = useState([])

  const [additionalServices, setAdditionalServices] = useState([])
  const [hospitalResultsFirst, setHospitalResultsFirst] = useState([])
  const [doctorResultsFirst, setDoctorResultsFirst] = useState([])

  const [hospitalResultsSecond, setHospitalResultsSecond] = useState([])
  const [doctorResultsSecond, setDoctorResultsSecond] = useState([])

  const [hospitalResultsThird, setHospitalResultsThird] = useState([])
  const [doctorResultsThird, setDoctorResultsThird] = useState([])

  const [hospitalResultsFourth, setHospitalResultsFourth] = useState([])
  const [doctorResultsFourth, setDoctorResultsFourth] = useState([])

  let newProps = {
    hospitalResultsFirst,
    doctorResultsFirst,
    hospitalResultsSecond,
    doctorResultsSecond,
    hospitalResultsThird,
    doctorResultsThird,
    hospitalResultsFourth,
    doctorResultsFourth,
    setHospitalResultsFirst,
    setDoctorResultsFirst,
    setHospitalResultsSecond,
    setDoctorResultsSecond,
    setHospitalResultsThird,
    setDoctorResultsThird,
    setHospitalResultsFourth,
    setDoctorResultsFourth,
  }
  const router = useRouter()

  return (
    <>
      <CardWrapper style={{ width: '80vh' }}>
        <Steps stepCount={stepCount} />
      </CardWrapper>

      <Block>
        {stepCount === 0 && (
          <StepOne
            addStepCount={setStepCount}
            userId={authId}
            form={formData}
            setForm={setFormData}
            condition={condition}
            setCondition={setCondition}
          />
        )}
        {stepCount === 1 && (
          <StepTwo
            addStepCount={setStepCount}
            form={formData}
            setForm={setFormData}
            additionalServices={additionalServices}
            setAdditionalServices={setAdditionalServices}
          />
        )}
        {stepCount === 2 && (
          <PreferredHospital
            addStepCount={setStepCount}
            userId={authId}
            form={formData}
            setForm={setFormData}
            newProps={newProps}
          />
        )}
        {stepCount === 3 && (
          <StepThree
            addStepCount={setStepCount}
            formData={formData}
            userId={authId}
            newProps={newProps}
            condition={condition}
          />
        )}
      </Block>
    </>
  )
}

export default PatientDetails
