import { createSlice } from '@reduxjs/toolkit'
import { AuthStateInterface } from 'src/interfaces/authSliceInterfaces'

const initialState: AuthStateInterface = {
  isAuth: false,
  loading: false,
  error: null,
  data: null,
}

const authSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    signupUser(state, action) {
      state.data = action.payload
      state.isAuth = true
      state.error = null
    },
    loginUser(state, action) {
      state.data = action.payload
      state.isAuth = true
      state.error = null
    },
    logout(state) {
      state.isAuth = false
      state.loading = false
      state.error = null
      state.data = null
    },
  },
})

export const { signupUser, loginUser, logout } = authSlice.actions
export default authSlice.reducer
