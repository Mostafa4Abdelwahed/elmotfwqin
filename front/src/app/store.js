import { configureStore } from '@reduxjs/toolkit'
import { languageSlice } from './ApiCalls/languageSlice'
import { unitySlice } from './ApiCalls/unitySlice'
import { lessonSlice } from './ApiCalls/lessonSlice'
import authSlice from './Features/authSlice'
import { userSlice } from './ApiCalls/userSlice'
import { articleSlice } from './ApiCalls/articleSlice'
import { quizSlice } from './ApiCalls/quizSlice'
import { testimonialSlice } from './ApiCalls/testimonialSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [testimonialSlice.reducerPath]: testimonialSlice.reducer,
    [articleSlice.reducerPath]: articleSlice.reducer,
    [userSlice.reducerPath]: userSlice.reducer,
    [languageSlice.reducerPath]: languageSlice.reducer,
    [unitySlice.reducerPath]: unitySlice.reducer,
    [lessonSlice.reducerPath]: lessonSlice.reducer,
    [quizSlice.reducerPatestimonialSliceth]: quizSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(testimonialSlice.middleware)
  .concat(languageSlice.middleware)
  .concat(unitySlice.middleware)
  .concat(lessonSlice.middleware)
  .concat(userSlice.middleware)
  .concat(articleSlice.middleware)
  .concat(quizSlice.middleware)
})