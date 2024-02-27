import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userReducer'
import channelReducer from './features/channelSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      channel: channelReducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']