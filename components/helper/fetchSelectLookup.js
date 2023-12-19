import { fetchSearchJSON } from '@/utils/apiCalls'
import appConfig from '@/utils/appConfig'
import _ from 'lodash'
export async function fetchSelectLookup(username, event) {
  let value = event.type === 'specialities' ? 'speciality' : event.type
  if (username) {
    const response = await fetchSearchJSON(
      `${
        appConfig.socketURL
      }/home/search?q=${username.toLowerCase()}&cat=${value}&limit=-1`
    ).then((body) =>
      body?.length > 0
        ? body?.map((user) => {
            console.log('fetchinguser*user', user)
            return {
              label: (
                <>
                  <div>{user.label}</div>
                  <div className="desc_search">{user.keywords}</div>
                </>
              ),
              value: user.label,
              key: user.id,
            }
          })
        : [
            {
              label: username,
              value: username,
              key: username,
            },
          ]
    )
    // let data = []
    // if (response.length) {
    //   data = response.filter((res) => {
    //     return res.label.toLowerCase().includes(username.toLowerCase())
    //   })
    // }

    return response
  }
}

const dataSource = [
  {
    key: '',
    label: 'Loading...',
    value: '',
  },
]
const dataSource2 = [
  {
    key: '',
    label: 'LoadingDone...',
    value: '',
  },
]

export const fetchDefaultOptions = (data, type) => {
  if (data && !_.isEmpty(data)) {
    switch (type) {
      case 'treatment':
        return (
          data.treatment &&
          data.treatment.length > 0 &&
          data.treatment.map((value) => ({
            key: value.id,
            label:
              (
                <>
                  <div>{value.label}</div>
                  <div className="desc_search">{value.keywords}</div>
                </>
              ) || '',
            value: value.label || '',
          }))
        )
      case 'condition':
        return (
          data.condition &&
          data.condition.length > 0 &&
          data.condition.map((value) => ({
            key: value.id,
            label:
              (
                <>
                  <div>{value.label}</div>
                  <div className="desc_search">{value.keywords}</div>
                </>
              ) || '',
            value: value.label || '',
          }))
        )
      case 'speciality':
        return (
          data.speciality &&
          data.speciality.length > 0 &&
          data.speciality.map((value) => ({
            key: value.id,
            label:
              (
                <>
                  <div>{value.label}</div>
                  <div className="desc_search">{value.keywords}</div>
                </>
              ) || '',
            value: value.label || '',
          }))
        )
      case 'doctor':
        return (
          data.doctors &&
          data.doctors.length > 0 &&
          data.doctors.map((value) => ({
            key: value.id,
            label:
              (
                <>
                  <div>{value.label}</div>
                  <div className="desc_search">{value.keywords}</div>
                </>
              ) || '',
            value: value.label || '',
          }))
        )
      case 'hospital':
        return (
          data.hospitals &&
          data.hospitals.length > 0 &&
          data.hospitals.map((value) => ({
            key: value.id,
            label:
              (
                <>
                  <div>{value.label}</div>
                  <div className="desc_search">{value.keywords}</div>
                </>
              ) || '',
            value: value.label || '',
          }))
        )
      default:
        dataSource
    }
    return dataSource2
  } else return dataSource
}