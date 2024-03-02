import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}


export const CurrentLogin = createAsyncThunk(
  'user',
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
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
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