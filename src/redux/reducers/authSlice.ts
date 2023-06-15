import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { AuthStateInterface, SignupCredentialsInterface, userData } from 'interfaces/authSliceInterfaces'

const BASE_URL = import.meta.env.VITE_APP_API

const initialState: AuthStateInterface = {
  isAuth: false,
  loading: false,
  error: null,
  data: null,
}

// -------------Signing up users --------------------

export const signupUsers = createAsyncThunk('user/signup', async (data: SignupCredentialsInterface, thunkAPI: any) => {
  console.log(data)
  try {
    const res = await axios.post<userData>(`${BASE_URL}users/signup`, data)
    return res.data
  } catch (err: any) {
    return thunkAPI.rejectWithValue({ error: err.message })
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
    },
  },
  extraReducers: builder => {
    builder.addCase(signupUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(signupUsers.fulfilled, (state, action: PayloadAction<userData>) => {
      console.log(action.payload)
      state.isAuth = true
      state.data = action.payload
      state.loading = false
    })
    builder.addCase(signupUsers.rejected, (state, action) => {
      state.error = action.payload
      state.loading = false
    })
  },
})

export const { loginUser, logout } = authSlice.actions
export default authSlice.reducer
