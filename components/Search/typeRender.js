import DoctorResults from './DoctorResults'
import HospitalResults from './HospitalResults'

export const renderByType = (
  loader,
  search,
  name,
  hospitalResult,
  doctorResult,
  selectedId,
  enable,
  auth,
  defaultValue
) => {
  switch (name) {
    case 'Hospital':
      return (
        <HospitalResults
          loader={loader}
          search={search}
          hospitalResult={hospitalResult}
          type={name}
          selectedId={selectedId}
          auth={auth}
          defaultValue={defaultValue}
        />
      )
    case 'Doctor':
      return (
        <DoctorResults
          loader={loader}
          search={search}
          doctorResult={doctorResult}
          auth={auth}
        />
      )
    case 'TopHospital':
      return (
        <HospitalResults
          loader={loader}
          search={search}
          hospitalResult={hospitalResult}
          type={name}
          auth={auth}
        />
      )
    case 'Treatment':
      return 'Search for Treatments here'
    default:
      return ''
  }
}
