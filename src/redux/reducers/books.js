const initialState = {
  loading: false,
  books: [
    {
      id: 1,
      title: 'Clean Code',
      author: {
        id: 1,
        name: 'Uncle Bob',
      },
    },
    {
      id: 2,
      title: 'Clean Architecture',
      author: {
        id: 1,
        name: 'Uncle Bob',
      },
    },
  ],
  error: { title: '', message: '' },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_BOOKS':
      return {
        ...state,
        loading: true,
      }

    case 'SUCCESS_BOOKS':
      return {
        ...state,
        loading: false,
        books: action.payload,
        error: { title: '', message: '' },
      }

    case 'FAILURE_BOOKS':
      return {
        loading: false,
        books: [],
        error: { title: '', message: action.payload },
      }

    default:
      return state
  }
}

export default reducer
