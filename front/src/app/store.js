import { configureStore } from '@reduxjs/toolkit'
import { languageSlice } from './ApiCalls/languageSlice'
import { unitySlice } from './ApiCalls/unitySlice'
import { lessonSlice } from './ApiCalls/lessonSlice'
import authSlice from './Features/authSlice'
import { userSlice } from './ApiCalls/userSlice'
import { articleSlice } from './ApiCalls/articleSlice'
import { quizSlice } from './ApiCalls/quizSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [articleSlice.reducerPath]: articleSlice.reducer,
    [userSlice.reducerPath]: userSlice.reducer,
    [languageSlice.reducerPath]: languageSlice.reducer,
    [unitySlice.reducerPath]: unitySlice.reducer,
    [lessonSlice.reducerPath]: lessonSlice.reducer,
    [quizSlice.reducerPath]: quizSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(languageSlice.middleware)
  .concat(unitySlice.middleware)
  .concat(lessonSlice.middleware)
  .concat(userSlice.middleware)
  .concat(articleSlice.middleware)
  .concat(quizSlice.middleware)
})