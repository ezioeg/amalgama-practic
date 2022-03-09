import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import users from '../reducers/users'
import books from '../reducers/books'

const reducers = combineReducers({
  users,
  books,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
