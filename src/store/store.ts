import { loginSlice } from './reducers/loginSlice';
import { singUpSlice } from './reducers/singUpSlice';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
   singUp:singUpSlice.reducer,
   login:loginSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch