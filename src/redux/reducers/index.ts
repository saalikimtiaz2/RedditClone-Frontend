import { combineReducers } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import loginModalSlice from './loginModalSlice'

export default combineReducers({ authSlice, loginModalSlice })
