import { configureStore } from '@reduxjs/toolkit'
import appReducer from './Reducers/appReducer'
export const store = configureStore({
  reducer: {
    app: appReducer,

  },

})

