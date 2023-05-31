import { combineReducers } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import themeSlice from './themeSlice'

export default combineReducers({ authSlice, themeSlice })
