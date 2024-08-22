import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices/authentication.slice";


export const store = configureStore({
  reducer: {
    authentication: reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch