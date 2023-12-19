import axios from 'axios'
import appConfig from './appConfig'
import { getLoggedInUser } from './authUtils'
import { message } from 'antd'
import _ from 'lodash-contrib'
const cachios = require('cachios')

const makeHeader = (jwt) => {
  let ujwt = jwt
  if (!jwt) {
    let user = getLoggedInUser()
    ujwt = JSON.parse(user.jwt)
  }
  return {
    headers: {
      Authorization: 'Bearer ' + ujwt,
    },
  }
}

/**
 * Fetch data from given url
 * @param {*} url
 * @param {*} options
 */

const fetchJSON = (url, options = {}) => {
  // console.log("APICALL ", url);
  // console.log("APICALL ", options);
  if (_.isEmpty(options) || options.method === 'GET') {
    return cachios
      .get(url, { ...options, ttl: 60 * 60 * 3 })
      .then((response) => {
        if (!response.status === 200) {
          throw response.data
        }
        return response.data
      })
      .catch((error) => {
        throw error.response?.data
      })
  } else if (options.method === 'POST') {
    return cachios
      .post(url, JSON.parse(options.body), { ...options, ttl: 60 * 60 * 3 })
      .then((response) => {
        if (response.status !== 200) {
          throw response
        }
        return response
      })
      .catch((error) => {
        throw error.response
      })
  } else if (options.method === 'PUT') {
    return fetch(url, options)
      .then((response) => {
        if (!response.status === 200) {
          throw response.json()
        }
        return response.json()
      })
      .then((json) => {
        return json
      })
      .catch((error) => {
        throw error
      })
  } else if (options.method === 'DELETE') {
    return fetch(url, options)
      .then((response) => {
        if (!response.status === 200) {
          throw response.json()
        }
        return response.json()
      })
      .then((json) => {
        return json
      })
      .catch((error) => {
        throw error
      })
  }
}

const updatePassword = async (id, data) => {
  let url = appConfig.users + '/' + id
  let header = makeHeader()
  // console.log(header);

  try {
    const response = await axios.put(url, data, header)
    return response.data
  } catch (err) {
    throw new Error(err)
  }
}
const register = async (data) => {
  try {
    const response = await axios.post(appConfig.register, data)
    return response.data
  } catch (err) {
    throw new Error(err)
  }
}
const forgotPassword = async (data) => {
  try {
    const response = await axios.post(appConfig.forgotPassword, data)
    return response.data
  } catch (err) {
    throw new Error(err)
  }
}
const resetPassword = async (data) => {
  try {
    const response = await axios.post(appConfig.resetPassword, data)
    return response.data
  } catch (err) {
    throw new Error(err)
  }
}

const fetchSearchJSON = (url, options = {}) => {
  if (_.isEmpty(options) || options.method === 'GET') {
    return cachios
      .get(url, { ...options, ttl: 60 * 60 * 3 })
      .then((response) => {
        if (!response.status === 200) {
          throw response.data
        }
        // console.log('APICALL ', options, response)
        return response.data
      })
      .catch((error) => {
        throw error
      })
  } else if (options.method === 'POST') {
    return cachios
      .post(url, JSON.parse(options.body), { ...options, ttl: 60 * 60 * 3 })
      .then((response) => {
        if (!response.status === 200) {
          throw response.data
        }
        // console.log('APICALL ', options, response)
        return response.data
      })
      .catch((error) => {
        throw error.data
      })
  } else if (options.method === 'PUT') {
    return fetch(url, options)
      .then((response) => {
        if (!response.status === 200) {
          throw response.json()
        }
        return response.json()
      })
      .then((json) => {
        return json
      })
      .catch((error) => {
        throw error
      })
  } else if (options.method === 'DELETE') {
    return fetch(url, options)
      .then((response) => {
        if (!response.status === 200) {
          throw response.json()
        }
        return response.json()
      })
      .then((json) => {
        return json
      })
      .catch((error) => {
        throw error
      })
  }
}

const fetchSearchJSON2 = (url, options = {}) => {
  return fetch(url, options)
    .then((response) => {
      if (!response.status === 200) {
        throw response.json()
      }
      return response.json()
    })
    .then((json) => {
      return json
    })
    .catch((error) => {
      throw error
    })
}

export {
  fetchJSON,
  updatePassword,
  register,
  forgotPassword,
  resetPassword,
  fetchSearchJSON,
  fetchSearchJSON2,
}
