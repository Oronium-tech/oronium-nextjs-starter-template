import { createSlice } from "@reduxjs/toolkit"

const initialState = {}

const commonDataSlice = createSlice({
  name: "commonData",
  initialState,
  reducers: {
    setCommonDataValue: (state, action) => {
      const { key, value } = action.payload
      state[key] = value
    },
    setMultipleCommonDataValues: (state, action) => {
      Object.entries(action.payload).forEach(([key, value]) => {
        state[key] = value
      })
    },
    resetCommonData: () => initialState,
  },
})

export const {
  setCommonDataValue,
  setMultipleCommonDataValues,
  resetCommonData,
} = commonDataSlice.actions

export default commonDataSlice.reducer
