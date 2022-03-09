import { getBooks } from '../../services/books'

const request = () => ({
  type: 'REQUEST_BOOKS',
})

const success = (books) => ({
  type: 'SUCCESS_BOOKS',
  payload: books,
})

const failure = (error) => ({
  type: 'FAILURE_BOOKS',
  payload: error,
})

export const getBooksService = () => {
  return async (dispatch) => {
    try {
      dispatch(request())

      const response = await getBooks()

      response.Success === true
        ? dispatch(success(response))
        : dispatch(failure(response.ErrorMessage))
    } catch (error) {
      dispatch(failure('get books failed'))
    }
  }
}
