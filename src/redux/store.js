import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
    key: 'root',
    storage,
  }


  const persistedReducer = persistReducer(persistConfig, AuthReducer)
  export const Store = configureStore({
      reducer: {
          data: persistedReducer,
      },
      devTools: process.env.NODE_ENV !== 'production',
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({
          immutableCheck: false,
          serializableCheck: false,
      })
  })




export const persistor = persistStore(Store)