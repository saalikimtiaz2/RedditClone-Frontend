import { createSlice } from '@reduxjs/toolkit'

interface themeInterface {
  dark: boolean
}

const initialState: themeInterface = {
  dark: true,
}

const themeSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    changeThemeMode(state) {
      state.dark = !state.dark
    },
  },
})

export const { changeThemeMode } = themeSlice.actions
export default themeSlice.reducer
