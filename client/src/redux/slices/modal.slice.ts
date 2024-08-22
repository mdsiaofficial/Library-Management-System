import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IModalSliceState {
  displayLogin: boolean,
  displayLibraryCard: boolean,
  displayLoan: boolean,
}

const initialState: IModalSliceState = {
  displayLogin: true,
  displayLibraryCard: false,
  displayLoan:false,
}

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setDisplayLogin(state, action: PayloadAction<boolean>) {
      state = {
        ...state,
        displayLogin: action.payload,
      }
      
      return state
    },

    setDisplayLibraryCard(state, action: PayloadAction<boolean>) {
      state = {
        ...state,
        displayLibraryCard: action.payload,
      }

      return state
    },

    setDisplayLoad(state, action: PayloadAction<boolean>) {
      state = {
        ...state,
        displayLoan: action.payload,
      }

      return state
    }
  }
})