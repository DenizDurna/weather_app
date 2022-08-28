import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from './stores/weatherSlice.js'

export default configureStore({
  reducer: {
    weather: weatherReducer,
  },
})