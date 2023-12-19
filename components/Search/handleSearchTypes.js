import { fetchJSON } from '@/utils/apiCalls'
import appConfig from '@/utils/appConfig'

export const handleSearchTypes = (router, e, value, resultType) => {
  let active = value.type

  switch (active) {
    case 'treatment':
      if (e?.key) {
        let path = active && active.concat('s')
        fetchJSON(`${appConfig.socketURL}/${path}/${e?.key}`).then((value) => {
          if (!_.isEmpty(value)) {
            let specialitiesId =
              value?.specialities?.length > 0 ? value.specialities[0].id : ''
            router.push({
              pathname: `/${active}`,
              query: {
                value: `${e.value.replace(/\s/g, '-')}`,
                id: `${e.key}`,
                ...(specialitiesId &&
                  specialitiesId !== '' && {
                    speciality: `${specialitiesId}`,
                  }),
                type: resultType,
              },
            })
          }
        })
        break
      }

    case 'condition':
      if (e?.key) {
        let path = active && active.concat('s')
        fetchJSON(`${appConfig.socketURL}/${path}/${e?.key}`).then((value) => {
          if (!_.isEmpty(value)) {
            console.log('RenderSwitch2', value)
            let specialitiesId = value?.speciality?.id
            router.push({
              pathname: `/${active}`,
              query: {
                value: `${e.value.replace(/\s/g, '-')}`,
                id: `${e.key}`,
                ...(specialitiesId &&
                  specialitiesId !== '' && {
                    speciality: `${specialitiesId}`,
                  }),
                type: resultType,
              },
            })
          }
        })
        break
      }
    default:
      if (e?.key) {
        router.push({
          pathname: `/${active}`,
          query: {
            value: `${e.value.replace(/\s/g, '-')}`,
            id: `${e.key}`,
            type: resultType,
          },
        })
      }
  }
}
