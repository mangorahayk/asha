import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import TodoSlice from './slice/TodoSlice/TodoSlice'
import { todoApi } from '../services'

export const store = configureStore({
  reducer: {
    todo: TodoSlice,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
})

setupListeners(store.dispatch)