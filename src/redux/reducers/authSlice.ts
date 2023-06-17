import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { AuthStateInterface, SignupCredentialsInterface, userData } from 'interfaces/authSliceInterfaces'

const BASE_URL = import.meta.env.VITE_APP_API

const initialState: AuthStateInterface = {
  isAuth: false,
  loading: false,
  success: false,
  error: null,
  data: null,
}

// -------------Signing up users --------------------

export const signupUsers = createAsyncThunk('user/signup', async (data: SignupCredentialsInterface, thunkAPI: any) => {
  try {
    const res = await axios.post<userData>(`${BASE_URL}users/signup`, data)
    return res.data
  } catch (err: any) {
    return thunkAPI.rejectWithValue({ ...err.response })
  }
})

// -------------user slices --------------------

const authSlice = createSlice({
  name: 'authUser',
  initialState,

  reducers: {
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
      localStorage.removeItem('access-token')
    },
  },
  extraReducers: builder => {
    builder.addCase(signupUsers.pending, state => {
      state.loading = true
      state.error = null
      state.success = false
    })
    builder.addCase(signupUsers.fulfilled, (state, action: any) => {
      state.success = true
      state.isAuth = true
      state.data = action.payload
      state.loading = false
      state.error = null
      localStorage.setItem('access-token', action.payload.token)
    })
    builder.addCase(signupUsers.rejected, (state, action: any) => {
      state.error = action.payload
      state.loading = false
      state.success = false
    })
  },
})

export const { loginUser, logout } = authSlice.actions
export default authSlice.reducer
