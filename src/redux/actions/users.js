import { getUsers } from '../../services/users'

const request = () => ({
  type: 'REQUEST_USERS',
})

const success = (users) => ({
  type: 'SUCCESS_USERS',
  payload: users,
})

const failure = (error) => ({
  type: 'FAILURE_USERS',
  payload: error,
})

export const getUsersService = () => {
  return async (dispatch) => {
    try {
      dispatch(request())

      const response = await getUsers()

      response.Success === true
        ? dispatch(success(response))
        : dispatch(failure(response.ErrorMessage))
    } catch (error) {
      dispatch(failure('get users failed'))
    }
  }
}
