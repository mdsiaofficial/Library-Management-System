import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser, ILoginUserPayload, IRegisterUserPayload } from "../../models/User.model";
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

// login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (user: ILoginUserPayload, thunkAPI) => {
    try {
      const req = await axios.post("http://localhost:8000/auth/login", user)
      return req.data.user
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
// register
export const registerUser = createAsyncThunk(
  "auth/register",
  async (user: IRegisterUserPayload, thunkAPI) => {
    try {
      const req = await axios.post("http://localhost:8000/auth/register", user)
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
    resetRegisterSuccess(state) {
      state = {
        ...state,
        registerSuccess:false
      }
      return state
    }
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

    builder.addCase(registerUser.pending, (state, action) => {
      state = {
        ...state,
        error: false,
        loading:true,
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
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state = {
        ...state,
        loading: false,
        registerSuccess: true
      }

      return state
    })

    // rejected logic
    builder.addCase(loginUser.rejected, (state, action) => {
      state = {
        ...state,
        error: true,
        loading: false,
      }
      return state
    })
    builder.addCase(registerUser.rejected, (state, action) => {
      state = {
        ...state,
        error: true,
        loading: false,
      }
      return state
    })
  }
})

export const { resetRegisterSuccess } = AuthenticationSlice.actions

export default AuthenticationSlice.reducer