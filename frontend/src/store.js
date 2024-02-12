import { configureStore } from '@reduxjs/toolkit'

import { test as testReducer } from './redux/reducers/test.js'

const reducer = {
  test: testReducer,
}

const initialState = {}

const store = configureStore({
  reducer: reducer,
  preloadedState: initialState,
})

export default store
