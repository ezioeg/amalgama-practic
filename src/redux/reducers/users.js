const initialState = {
  loading: false,
  users: [
    {
      id: 1,
      email: 'chano@amalgama.co',
      nickname: 'Chano',
      favourite_books: [
        {
          id: 1,
          title: 'Clean Code',
          author: {
            id: 1,
            name: 'Uncle Bob',
          },
        },
      ],
    },
  ],
  error: { title: '', message: '' },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_USERS':
      return {
        ...state,
        loading: true,
      }

    case 'SUCCESS_USERS':
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: { title: '', message: '' },
      }

    case 'FAILURE_USERS':
      return {
        loading: false,
        users: [],
        error: { title: '', message: action.payload },
      }

    default:
      return state
  }
}

export default reducer
