import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../Reducer/Auth.reducer/Auth.reducer";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  const persistedReducer = persistReducer(persistConfig,AuthReducer)
export const store = configureStore({
    reducer: {
        auth: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck:false
    }),
})
export const persistor = persistStore(store)