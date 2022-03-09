import axios from 'axios'

const amalgamaAPI = axios.create({
  baseURL: 'https://www.api.org',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export default amalgamaAPI
