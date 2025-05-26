import { configureStore } from '@reduxjs/toolkit'
import  ReduxSlice  from './Redux/ReduxSlice'

export const Store = configureStore({
  reducer: {
    counter:ReduxSlice
  },
})