import { configureStore } from '@reduxjs/toolkit'
import { languageSlice } from './ApiCalls/languageSlice'
import { levelSlice } from './ApiCalls/levelSlice'
import { unitySlice } from './ApiCalls/unitySlice'
import { lessonSlice } from './ApiCalls/lessonSlice'

export const store = configureStore({
  reducer: {
    [levelSlice.reducerPath]: levelSlice.reducer,
    [languageSlice.reducerPath]: languageSlice.reducer,
    [unitySlice.reducerPath]: unitySlice.reducer,
    [lessonSlice.reducerPath]: lessonSlice.reducer,
    // [categorySlice.reducerPath]: categorySlice.reducer,
    // [pageSlice.reducerPath]: pageSlice.reducer,
    // [contactSlice.reducerPath]: contactSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(levelSlice.middleware)
  .concat(languageSlice.middleware)
  .concat(unitySlice.middleware)
  .concat(lessonSlice.middleware)
})