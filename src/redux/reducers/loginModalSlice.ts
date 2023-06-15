import { createSlice } from '@reduxjs/toolkit'

type loginModalSlicerTypes = {
  isLoginModalOpen: boolean
  isSignupModal: boolean
}

const initialState = {
  isLoginModalOpen: false,
  isSignupModal: false,
} as loginModalSlicerTypes

// -------------login modal slices --------------------

const loginModalSlice = createSlice({
  name: 'loginModalSlice',
  initialState,
  reducers: {
    openSignupModal(state) {
      state.isLoginModalOpen = true
      state.isSignupModal = true
    },
    openLoginModal(state) {
      state.isLoginModalOpen = true
    },
    closeLoginModal(state) {
      state.isLoginModalOpen = false
      state.isSignupModal = false
    },
  },
})

export const { openLoginModal, closeLoginModal, openSignupModal } = loginModalSlice.actions
export default loginModalSlice.reducer
