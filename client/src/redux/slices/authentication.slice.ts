import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser, LoginUserPayload } from "../../models/User.model";
import axios from "axios";



interface IAuthenticationSliceState {
  loggedInUser: IUser | undefined;
  loading: boolean;
  error: boolean;
  registerSuccess: boolean;
}

const initialState: IAuthenticationSliceState = {
  loggedInUser: undefined,
  loading: false,
  error: false,
  registerSuccess: false
}

export const loginUser = createAsyncThunk(
  "auth/login",
  async (user: LoginUserPayload, thunkAPI) => {
    try {
      const req = await axios.post("http://localhost:8000/auth/login", user)
      return req.data.user
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
export const AuthenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    // pending logic
    builder.addCase(loginUser.pending, (state, action) => {
      state = {
        ...state,
        error: false,
        loading: true,
      }

      return state
    })

    // resolve logic
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state = {
        ...state,
        loading: false,
        loggedInUser: action.payload
      }

      return state
    })
  }
})

export const { } = AuthenticationSlice.actions

export default AuthenticationSlice.reducer