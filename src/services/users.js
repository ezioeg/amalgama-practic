import amalgamaAPI from './amalgamaAPI'

export const getUsers = async () => {
  try {
    const response = await amalgamaAPI.get('/users')
    return response.data
  } catch (error) {
    console.error('get users error:', error)
  }
}
