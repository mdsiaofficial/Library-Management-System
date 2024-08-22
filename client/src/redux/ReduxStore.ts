import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authentication.slice";
import modalReducer from "./slices/modal.slice";


export const store = configureStore({
  reducer: {
    authentication: authReducer,
    modal: modalReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch