const findPlaceholder = (name) => {
  // console.log('findPlaceholder', name)
  switch (name) {
    case 'aquamarine':
      return 'Enter Condition Here'
    case 'metallic':
      return 'Search Doctors by Speciality'
    case 'venom':
      return 'Search for Hospitals here'
    case 'pink':
      return 'Search for Doctors here'
    case 'macaw':
      return 'Search for Treatments here'
    default:
      return ''
  }
}

const getCategory = (name) => {
  switch (name) {
    case 'aquamarine':
      return 'Condition'
    case 'metallic':
      return 'Speciality'
    case 'venom':
      return 'Hospital'
    case 'pink':
      return 'Doctor'
    case 'macaw':
      return 'Treatment'
    default:
      return ''
  }
}

const getPath = (name) => {
  switch (name) {
    case 'aquamarine':
      return 'condition'
    case 'metallic':
      return 'speciality'
    case 'venom':
      return 'hospital'
    case 'pink':
      return 'doctor'
    case 'macaw':
      return 'treatment'
    default:
      return ''
  }
}

const borderPicker = (name, pixel = 5) => {
  switch (name) {
    case 'treatment':
      return `${pixel}px solid rgba(5, 107, 215, 0.67)`
    case 'hospital':
      return `${pixel}px solid #FD7B07`
    case 'doctor':
      return `${pixel}px solid #D27D7D`
    case 'wellness':
      return `${pixel}px solid #F0C48A`
      return ''
  }
}

const colorText = (name) => {
  switch (name) {
    case 'treatment':
      return '#001047'
    case 'hospital':
      return '#663D00'
    case 'doctor':
      return '#663D00'
    case 'wellness':
      return '#F0C48A'
      return ''
  }
}

const colorPicker = (name) => {
  switch (name) {
    case 'treatment':
      return 'linear-gradient(265.14deg, #1371D6 -33.87%, #CD6CE8 130.14%)'
    case 'hospital':
      return 'linear-gradient(265.14deg, #EEFF2A -33.87%, #FF6100 130.14%)'
    case 'doctor':
      return 'linear-gradient(265.14deg, #E03838 -33.87%, #D29F9F 130.14%)'
    case 'wellness':
      return '#F0C48A'
  }
}

const borderGradientSelector = (name, pixel = 5) => {
  switch (name) {
    case 'treatment':
      return `linear-gradient(45deg, rgba(5, 107, 215, 0.67), rgba(204, 103, 220, 0.59)) border-box`
    case 'hospital':
      return `linear-gradient(45deg, #EEFF2A, #FF6100) border-box`
    case 'doctor':
      return `linear-gradient(45deg, #D27D7D, #D27F7F) border-box`
    case 'wellness':
      return `linear-gradient(45deg, #FFE5C3, #FFE5C3) border-box`
  }
}

const backgroundMobile = (active) => {
  switch (active) {
    case 'treatment':
      return `linear-gradient(146.5deg, rgba(84, 110, 246, 0.1) 3.83%, rgba(246, 87, 182, 0.1) 102.3%)`
    case 'hospital':
      return `linear-gradient(146.5deg, rgba(254, 193, 154, 0.1) 3.83%, rgba(196, 180, 33, 0.021) 102.3%)`
    case 'doctor':
      return `linear-gradient(146.5deg, rgba(255, 109, 109, 0.1) 3.83%, rgba(196, 43, 33, 0.021) 102.3%)`
    case 'wellness':
      return `linear-gradient(146.5deg, rgba(255, 109, 109, 0.1) 3.83%, rgba(196, 43, 33, 0.021) 102.3%)`
  }
}

const treatments = [
  {
    title: 'Search for Treatment’s here',
    placeholder: 'Eg. Rhizotomy Surgery',
    type: 'treatment',
    border: true,
    active: true,
  },
  {
    title: 'Search by condition’s here',
    placeholder: 'Eg. Knee Pain',
    type: 'condition',
    border: true,
    active: false,
  },
  {
    title: 'Search by specialisation',
    placeholder: 'Eg. Cardiologist',
    type: 'speciality',
    border: true,
    active: false,
  },
  {
    title: 'Search Top Hospital’s here',
    placeholder: 'Eg. Apollo',
    type: 'hospital',
    border: true,
    active: false,
  },
  {
    title: 'Search for Doctor’s here',
    placeholder: 'Eg. Naresh Trehan',
    type: 'doctor',
    active: false,
  },
]

const hospitals = [
  {
    title: 'Search by Hospital’s Name',
    placeholder: 'Eg. Apollo',
    type: 'hospital',
    border: true,
    active: true,
  },
  {
    title: 'Search hospital by Specialisation’s',
    placeholder: 'Eg. Cardiologist',
    type: 'speciality',
    border: true,
    active: false,
  },
  {
    title: 'Search hospital by Condition’s',
    placeholder: 'Eg. Knee Pain',
    type: 'condition',
    border: true,
    active: false,
  },
  {
    title: 'Search hospitals for Treatment’s',
    placeholder: 'Eg. Rhizotomy Surgery',
    type: 'treatment',
    border: true,
    active: false,
  },
  {
    title: 'Search for Doctor’s here',
    placeholder: 'Eg. Naresh Trehan',
    type: 'doctor',
    active: false,
  },
]

const doctors = [
  {
    title: 'Search by Doctor’s Name',
    placeholder: 'Eg. Dr Atul',
    type: 'doctor',
    border: true,
    active: true,
  },
  {
    title: 'Search doctor by Specialisations',
    placeholder: 'Eg. Cardiologist',
    type: 'speciality',
    border: true,
    active: false,
  },
  {
    title: 'Search doctor’s by Conditions',
    placeholder: 'Eg. Knee Pain',
    type: 'condition',
    border: true,
    active: false,
  },
  {
    title: 'Search doctor’s by Treatments',
    placeholder: 'Eg. Rhizotomy Surgery',
    type: 'treatment',
    border: true,
    active: false,
  },
  {
    title: 'Search Doctor’s by Hospital',
    placeholder: 'Eg. Naresh Trehan',
    type: 'hospital',
    active: false,
  },
]

const comingSoon = [
  {
    title: 'Coming Soon',
    border: true,
    active: true,
  },
]

export {
  findPlaceholder,
  getCategory,
  getPath,
  treatments,
  hospitals,
  doctors,
  comingSoon,
  borderPicker,
  colorPicker,
  borderGradientSelector,
  backgroundMobile,
  colorText,
}
