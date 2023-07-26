import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import {
  AuthStateInterface,
  LoginCredentialsInterface,
  SignupCredentialsInterface,
  userData,
} from 'interfaces/authSliceInterfaces'
import { pendingAuthState, rejectedAuthState } from 'redux/extraReduers'

const BASE_URL = import.meta.env.VITE_APP_API

const initialState = {
  isAuth: false,
  loading: false,
  success: false,
  error: null,
  data: null,
} as AuthStateInterface

// ------------- SIGNING UP USER --------------------

export const signupUsers = createAsyncThunk('user/signup', async (data: SignupCredentialsInterface, thunkAPI: any) => {
  try {
    const res = await axios.post<userData>(`${BASE_URL}/users/signup`, data)
    console.log(res)
    return res.data
  } catch (err: any) {
    console.log(err)
    return thunkAPI.rejectWithValue({ ...err.response })
  }
})

// ------------- LOGGING IN USERS --------------------

export const loginUser = createAsyncThunk('user/login', async (data: LoginCredentialsInterface, thunkAPI: any) => {
  try {
    const res = await axios.post<userData>(`${BASE_URL}/users/login`, data)
    return res.data
  } catch (err: any) {
    return thunkAPI.rejectWithValue({ ...err.response })
  }
})

// ------------- USER SLICES --------------------

const authSlice = createSlice({
  name: 'authUser',
  initialState,

  // 1) Reducers
  reducers: {
    authanticateUser(state) {
      console.log('triggered auth')
      if (localStorage.getItem('accessToken')) {
        state.isAuth = true
      }
    },
    login(state, action) {
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

  // 2) Extra Reducers
  extraReducers: builder => {
    // 2.1) => Signin up User
    builder.addCase(signupUsers.pending, pendingAuthState)
    builder.addCase(signupUsers.rejected, rejectedAuthState)
    builder.addCase(signupUsers.fulfilled, (state, action: any) => {
      state.success = true
      state.isAuth = true
      state.data = action.payload
      state.loading = false
      state.error = null
      localStorage.setItem('access-token', action.payload.token)
    })

    // 2.2) => Logging in User
    builder.addCase(loginUser.pending, pendingAuthState)
    builder.addCase(loginUser.rejected, rejectedAuthState)
    builder.addCase(loginUser.fulfilled, (state, action: any) => {
      state.success = true
      state.isAuth = true
      state.loading = false
      state.error = null
      // state.data = action.payloads
      localStorage.setItem('access-token', action.payload.token)
    })
  },
})
export const { login, logout } = authSlice.actions
export default authSlice.reducer
