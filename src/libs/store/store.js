import { configureStore } from "@reduxjs/toolkit"
import commonDataReducer from "@/libs/slices/commonDataSlice"
const store = configureStore({
  reducer: {
    commonData: commonDataReducer,
  },
})

export default store
