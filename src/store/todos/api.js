import axios from 'axios'

import privateKeys from 'config'

const api = axios.create({
  baseURL: 'https://944ba3c5-94c3-4369-a9e6-a509d65912e2.mock.pstmn.io',
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use(
  config => {
    config.headers['X-Api-Key'] = privateKeys.apiKey
    return config
  },
  error => Promise.reject(error)
)

export const getTodos = async () => {
  const { data } = await api.get('/get')
  return data
}

export const patchTodo = async (todoId, changeSet) => {
  const { data } = await api.patch(
    `/patch/${todoId}`,
    JSON.stringify(changeSet)
  )
  return data
}
