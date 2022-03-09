import amalgamaAPI from './amalgamaAPI'

export const getBooks = async () => {
  try {
    const response = await amalgamaAPI.get('/books')
    return response.data
  } catch (error) {
    console.error('get books error:', error)
  }
}
