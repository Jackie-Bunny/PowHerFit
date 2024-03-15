import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const CurrentLogin = createAsyncThunk(
  'Auth user data',
  async (config) => {
    return config
     console.log("reduxxxxxxxxxxx", config) //config
  }
)
 
export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.data = action.payload
    },
    setLoader: (state) => {
      state.value -= 1
    },
    setLogout: (state, action) => {
      state.data = []
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(CurrentLogin.fulfilled,(state, action)=>{
      state.data = action.payload?.data
    }).addCase(CurrentLogin.rejected, (state, action) => {
    })
}
})

// Action creators are generated for each case reducer function
export const { setLogin, setLogout, setLoader } = counterSlice.actions

export default counterSlice.reducer