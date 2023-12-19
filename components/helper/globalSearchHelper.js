import _ from 'lodash'

export const treatments = [
  {
    id: 1,
    title: 'Select Treatments',
    placeholder: 'Select Treatments',
    type: 'treatment',
    border: 'true',
    active: true,
    span: 5,
  },
  {
    id: 2,
    title: 'Select a Conditon',
    placeholder: 'Select a Conditon',
    type: 'condition',
    border: 'true',
    active: false,
    span: 5,
  },
  {
    id: 3,
    title: 'Select a  specialisation',
    placeholder: 'Enter Specialisation',
    type: 'speciality',
    border: 'true',
    active: false,
    span: 4,
  },
  {
    id: 4,
    title: 'Search treatments Hospitals',
    placeholder: 'Search treatments Hospitals',
    type: 'hospital',
    flag: 'hospital',
    border: 'true',
    active: false,
    span: 5,
  },
  {
    id: 5,
    title: 'Search treatments Doctors',
    placeholder: 'Search treatments Doctors',
    type: 'doctor',
    flag: 'doctor',
    active: false,
    span: 5,
  },
]

export const specialities = [
  {
    id: 1,
    title: 'Select Treatments ',
    placeholder: 'Select Treatments',
    type: 'treatment',
    border: 'true',
    active: true,
    span: 5,
  },
  {
    id: 2,
    title: 'Select a Conditon',
    placeholder: 'Select a Conditon',
    type: 'condition',
    border: 'true',
    active: false,
    span: 5,
  },
  {
    id: 3,
    title: 'Select a  specialisation',
    placeholder: 'Enter Specialisation',
    type: 'speciality',
    border: 'true',
    active: false,
    span: 4,
  },
  {
    id: 4,
    title: 'Search treatments Hospitals',
    placeholder: 'Search specialisation Hospitals',
    type: 'hospital',
    flag: 'hospital',
    border: 'true',
    active: false,
    span: 5,
  },
  {
    id: 5,
    title: 'Search treatments Doctors',
    placeholder: 'Search specialisation Doctors',
    type: 'doctor',
    flag: 'doctor',
    active: false,
    span: 5,
  },
]

export const conditions = [
  {
    id: 1,
    title: 'Select Treatments ',
    placeholder: 'Select Treatments',
    type: 'treatment',
    border: 'true',
    active: true,
    span: 5,
  },
  {
    id: 2,
    title: 'Select a Conditon',
    placeholder: 'Select a Conditon',
    type: 'condition',
    border: 'true',
    active: false,
    span: 5,
  },
  {
    id: 3,
    title: 'Select a  specialisation',
    placeholder: 'Enter Specialisation',
    type: 'speciality',
    border: 'true',
    active: false,
    span: 4,
  },
  {
    id: 4,
    title: 'Search treatments Hospitals',
    placeholder: 'Search conditions Hospitals',
    type: 'hospital',
    flag: 'hospital',
    border: 'true',
    active: false,
    span: 5,
  },
  {
    id: 5,
    title: 'Search treatments Doctors',
    placeholder: 'Search conditions Doctors',
    type: 'doctor',
    flag: 'doctor',
    active: false,
    span: 5,
  },
]

export const getPath = (name) => {
  switch (name) {
    case 'treatment':
      return 'treatments'
    case 'condition':
      return 'conditions'
    case 'specialities':
      return 'specialities'
    case 'hospital':
      return '_id'
    case 'doctor':
      return '_id'
    default:
      return 'specialities'
  }
}

export const getTypeFetch = (treatment, defaultValue, activeUrl) => {
  if (activeUrl === 'speciality' || activeUrl === 'specialities') {
    return treatment.type === 'specialities' ||
      (treatment.type === 'speciality' &&
        treatment.flag !== 'doctor' &&
        treatment.flag !== 'hospital')
      ? defaultValue
      : ''
  } else if (activeUrl === 'treatment') {
    return treatment.type === 'treatment' &&
      treatment.flag !== 'doctor' &&
      treatment.flag !== 'hospital'
      ? defaultValue
      : ''
  } else if (activeUrl === 'condition') {
    return treatment.type === 'condition' &&
      treatment.flag !== 'doctor' &&
      treatment.flag !== 'hospital'
      ? defaultValue
      : ''
  }
}

export const getPlaceholder = (event, defaultValue, resultType) => {
  if (!_.isEmpty(event)) {
    if (resultType === 'TopHospital') {
      return event.id === 4
        ? (event.placeholder = `${
            defaultValue === '' ? 'All' : defaultValue
          } Hospital`)
        : event.id === 5
        ? (event.placeholder = `Select ${
            defaultValue === '' ? 'With All' : defaultValue
          } Doctor's`)
        : event.placeholder
    } else if (resultType === 'Doctor') {
      return event.id === 4
        ? (event.placeholder = `Select ${
            defaultValue === '' ? 'With All' : defaultValue
          } Hospital's`)
        : event.id === 5
        ? (event.placeholder = ` ${
            defaultValue === '' ? 'All' : defaultValue
          } Doctor`)
        : event.placeholder
    } else {
      return event.id === 4
        ? (event.placeholder = `Select ${
            defaultValue === '' ? 'With All' : defaultValue
          } Hospital's`)
        : event.id === 5
        ? (event.placeholder = `Select ${
            defaultValue === '' ? 'With All' : defaultValue
          } Doctor's`)
        : event.placeholder
    }
  }
}

export const checkVisible = (type, resultType) => {
  if (type.id === 4 && resultType === 'TopHospital') {
    return true
  } else if (type.id === 5 && resultType === 'Doctor') {
    return true
  } else false
}