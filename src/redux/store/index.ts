import { configureStore } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import rootReducer from '../reducers'

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: rootReducer,
  // middleware: [additionalMiddleware, logger] as const,
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
