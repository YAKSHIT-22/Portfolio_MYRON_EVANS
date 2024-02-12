import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'

import { test as testReducer } from './redux/reducers/test.js'

const reducer = combineReducers({
  test: testReducer,
})

const middleware = [thunk]

const initialState = {}

const store = configureStore({
  reducer: reducer,
  preloadedState: initialState,
  middleware: () => middleware,
})

export default store
