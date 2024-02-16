import { configureStore } from '@reduxjs/toolkit'

import { test as testReducer } from './redux/reducers/test.js'
import { myblogReducer } from '../src/redux/reducers/myblogReduces.js'
const reducer = {
  test: testReducer,
  blog: myblogReducer

}


const initialState = {}

const store = configureStore({
  reducer: reducer,
  preloadedState: initialState,
})



export default store
